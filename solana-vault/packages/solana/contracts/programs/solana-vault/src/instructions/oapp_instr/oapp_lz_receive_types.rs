use std::str::FromStr;

use anchor_lang::prelude::*;
use anchor_lang::solana_program;
use anchor_spl::associated_token::{get_associated_token_address, ID as ASSOCIATED_TOKEN_ID};
use oapp::endpoint_cpi::LzAccount;

use crate::instructions::AccountWithdrawSol;
use crate::instructions::{
    LzMessage, MsgType, ACCOUNT_LIST_SEED, OAPP_SEED, PEER_SEED, TOKEN_SEED, VAULT_AUTHORITY_SEED,
};
use crate::state::{AccountList, OAppConfig};
use crate::BROKER_SEED;

// Return accounts list for lz_receive instruction based on the message type
// Msg.Type: Withdraw  (currently at most 13 accounts, otherwise tx oversize; fix approach: shrink message payload(remove sender, accountId fields))
// 0: signer = lz executor
// 1: peer
// 2: oapp_config
// 3: broker_pda
// 4: token_pda
// 5: token_mint
// 6: receiver
// 7: receiver_token_account
// 8: vault_authority
// 9: vault_token_account
// 10: token_program_id
// 11: associated_token_id  (should be added after payload shrink)
// 12: system_program_id    (should be added after payload shrink)
// 13: event_authority_account
// 14: program_id
// 14..n: accounts for clear
#[derive(Accounts)]
#[instruction(params: OAppLzReceiveParams)]
pub struct OAppLzReceiveTypes<'info> {
    #[account(
        seeds = [OAPP_SEED],
        bump = oapp_config.bump
    )]
    pub oapp_config: Account<'info, OAppConfig>,
    #[account(
        seeds = [ACCOUNT_LIST_SEED, &oapp_config.key().as_ref()],
        bump = account_list.bump
    )]
    pub account_list: Account<'info, AccountList>,
}

impl OAppLzReceiveTypes<'_> {
    pub fn apply(
        ctx: &Context<OAppLzReceiveTypes>,
        params: &OAppLzReceiveParams,
    ) -> Result<Vec<LzAccount>> {
        // account 1
        let oapp_config = &ctx.accounts.oapp_config;

        // account 2
        let (peer, _) = Pubkey::find_program_address(
            &[
                PEER_SEED,
                &oapp_config.key().to_bytes(),
                &params.src_eid.to_be_bytes(),
            ],
            ctx.program_id,
        );

        // account 0..2
        let mut accounts = vec![
            LzAccount {
                pubkey: Pubkey::default(),
                is_signer: true,
                is_writable: true,
            }, // 0: signer
            LzAccount {
                pubkey: peer,
                is_signer: false,
                is_writable: false,
            }, // 1: peer
            LzAccount {
                pubkey: oapp_config.key(),
                is_signer: false,
                is_writable: false,
            }, // 2: oapp_config
        ];

        let lz_message = LzMessage::decode(&params.message).unwrap();

        if lz_message.msg_type == MsgType::Withdraw as u8 {
            let withdraw_params = AccountWithdrawSol::decode_packed(&lz_message.payload).unwrap();

            // account 3
            let (broker_pda, _) = Pubkey::find_program_address(
                &[BROKER_SEED, withdraw_params.broker_hash.as_ref()],
                ctx.program_id,
            );

            // account 4
            let (token_pda, _) = Pubkey::find_program_address(
                &[TOKEN_SEED, withdraw_params.token_hash.as_ref()],
                ctx.program_id,
            );

            // account 5
            let token_mint;
            if token_pda == ctx.accounts.account_list.usdc_pda {
                token_mint = ctx.accounts.account_list.usdc_mint;
            } else {
                token_mint = Pubkey::from_str("0x0000").unwrap();
            }

            // account 6
            let receiver = Pubkey::new_from_array(withdraw_params.receiver);

            // account 7
            let receiver_token_account: Pubkey =
                get_associated_token_address(&receiver, &token_mint);

            // account 8
            let (vault_authority, _) =
                Pubkey::find_program_address(&[VAULT_AUTHORITY_SEED], ctx.program_id);

            // account 9
            let vault_token_account = get_associated_token_address(&vault_authority, &token_mint);

            // account 10
            let token_program_id =
                Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap();

            // account 11
            let system_program_id = solana_program::system_program::ID;
            // account 12
            let (event_authority_account, _) =
                Pubkey::find_program_address(&[oapp::endpoint_cpi::EVENT_SEED], &ctx.program_id);
            // account 13
            let program_id = ctx.program_id.key();

            // add accounts 3..13
            accounts.extend_from_slice(&[
                LzAccount {
                    pubkey: broker_pda,
                    is_signer: false,
                    is_writable: false,
                }, // 3
                LzAccount {
                    pubkey: token_pda,
                    is_signer: false,
                    is_writable: false,
                }, // 4
                LzAccount {
                    pubkey: token_mint,
                    is_signer: false,
                    is_writable: false,
                }, // 5
                LzAccount {
                    pubkey: receiver,
                    is_signer: false,
                    is_writable: false,
                }, // 6
                LzAccount {
                    pubkey: receiver_token_account,
                    is_signer: false,
                    is_writable: true,
                }, // 7
                LzAccount {
                    pubkey: vault_authority,
                    is_signer: false,
                    is_writable: true,
                }, // 8
                LzAccount {
                    pubkey: vault_token_account,
                    is_signer: false,
                    is_writable: true,
                }, // 9
                LzAccount {
                    pubkey: token_program_id,
                    is_signer: false,
                    is_writable: false,
                }, // 10
                // LzAccount {
                //     pubkey: ASSOCIATED_TOKEN_ID,
                //     is_signer: false,
                //     is_writable: false,
                // },
                // LzAccount {
                //     pubkey: system_program_id,
                //     is_signer: false,
                //     is_writable: false,
                // }, // 11
                LzAccount {
                    pubkey: event_authority_account,
                    is_signer: false,
                    is_writable: false,
                }, // 11
                LzAccount {
                    pubkey: program_id,
                    is_signer: false,
                    is_writable: false,
                }, // 12
            ]);

            let endpoint_program = ctx.accounts.oapp_config.endpoint_program;
            // accounts for clear
            let accounts_for_clear = oapp::endpoint_cpi::get_accounts_for_clear(
                endpoint_program,
                &oapp_config.key(),
                params.src_eid,
                &params.sender,
                params.nonce,
            );
            accounts.extend(accounts_for_clear);
        }

        Ok(accounts)
    }
}

#[derive(Clone, AnchorSerialize, AnchorDeserialize)]
pub struct OAppLzReceiveParams {
    pub src_eid: u32,
    pub sender: [u8; 32],
    pub nonce: u64,
    pub guid: [u8; 32],
    pub message: Vec<u8>,
    pub extra_data: Vec<u8>,
}

// fn get_accounts_for_send_oapp(user: Pubkey) -> Vec<LzAccount> {
//     let vault_program_id =
//         Pubkey::from_str("EK2EN13jdKj286QmVnipwYANjwWZJZM74mwDvyfuFaW6").unwrap();

//     let token_mint = Pubkey::from_str("GCbuQSPFGmHpoTaZ9o7zQChYMuprw8qY3FsYQjKjpJMJ").unwrap();

//     let token_program_id = Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap();

//     let (user_info, _) = Pubkey::find_program_address(&[&user.to_bytes()], &vault_program_id);
//     let user_token_account = get_associated_token_address(&user, &token_mint);

//     let (vault_deposit_auth, _) = Pubkey::find_program_address(
//         &[VAULT_AUTHORITY_SEED, &token_mint.to_bytes()],
//         &vault_program_id,
//     );

//     let vault_token_account = get_associated_token_address(&vault_deposit_auth, &token_mint);

//     vec![
//         LzAccount {
//             pubkey: vault_program_id,
//             is_signer: false,
//             is_writable: false,
//         },
//         LzAccount {
//             pubkey: user,
//             is_signer: false,
//             is_writable: false,
//         },
//         LzAccount {
//             pubkey: user_info,
//             is_signer: false,
//             is_writable: true,
//         },
//         LzAccount {
//             pubkey: user_token_account,
//             is_signer: false,
//             is_writable: true,
//         },
//         LzAccount {
//             pubkey: vault_deposit_auth,
//             is_signer: false,
//             is_writable: false,
//         },
//         LzAccount {
//             pubkey: vault_token_account,
//             is_signer: false,
//             is_writable: true,
//         },
//         LzAccount {
//             pubkey: token_mint,
//             is_signer: false,
//             is_writable: false,
//         },
//         LzAccount {
//             pubkey: token_program_id,
//             is_signer: false,
//             is_writable: false,
//         },
//     ]
// }

// #[cfg(test)]
// mod tests {
//     use super::*;

//     #[test]
//     fn test_pubkey_from_str() {
//         let _vault_program_id =
//             Pubkey::from_str("EBMevav8Lhq5A9Pri9jtKqmKUxGqbwiXhfZdi9C2JPFN").unwrap();

//         let _token_mint = Pubkey::from_str("7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH").unwrap();

//         let _token_program_id =
//             Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap();
//         let _send_lib_program_id =
//             Pubkey::from_str("7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH").unwrap();
//         let _treasury_pda =
//             Pubkey::from_str("7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH").unwrap();
//         let _executor = Pubkey::from_str("6doghB248px58JSSwG4qejQ46kFMW4AMj7vzJnWZHNZn").unwrap();
//         let _executor_config =
//             Pubkey::from_str("AwrbHeCyniXaQhiJZkLhgWdUCteeWSGaSN1sTfLiY7xK").unwrap();
//         let _price_feed = Pubkey::from_str("8ahPGPjEbpgGaZx2NV1iG5Shj7TDwvsjkEDcGWjt94TP").unwrap();
//         let _price_feed_config =
//             Pubkey::from_str("CSFsUupvJEQQd1F4SsXGACJaxQX4eropQMkGV2696eeQ").unwrap();
//         let _dvn = Pubkey::from_str("HtEYV4xB4wvsj5fgTkcfuChYpvGYzgzwvNhgDZQNh7wW").unwrap();
//         let _dvn_config = Pubkey::from_str("4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb").unwrap();

//         // messsage bytes from hex string
//         let message = hex::decode("010101010101010101010101010101010101010101010101010101010101010102020202020202020202020202020202020202020202020202020202020202020303030303030303030303030303030303030303030303030303030303030303040404040404040404040404040404040404040404040404040404040404040400000000000003e8000000000000000a00000000000000010000000000000001").unwrap();

//         // print message length
//         println!("message length: {:?}", message.len());

//         let withdraw_params = AccountWithdrawSol::decode_packed(&message).unwrap();
//         let user = Pubkey::new_from_array(withdraw_params.receiver);
//     }

//     #[test]
//     fn test_return_withdraw_accounts() {
//         let user = Pubkey::from_str("BRBBajwZqE37cPu54djnjxh9W1CymNS7rZMM2rnXHiCx").unwrap();
//         let accounts = get_accounts_for_send_oapp(user);

//         assert!(accounts.len() == 8);
//         assert!(
//             accounts[0].pubkey
//                 == Pubkey::from_str("EK2EN13jdKj286QmVnipwYANjwWZJZM74mwDvyfuFaW6").unwrap()
//         );
//         assert!(
//             accounts[1].pubkey
//                 == Pubkey::from_str("BRBBajwZqE37cPu54djnjxh9W1CymNS7rZMM2rnXHiCx").unwrap()
//         );
//         assert!(
//             accounts[2].pubkey
//                 == Pubkey::from_str("G7523MsNpzugbi2M8rnmjqFzewxPcs5azsKbBFtbDxuX").unwrap()
//         );
//         assert!(
//             accounts[3].pubkey
//                 == Pubkey::from_str("6K8vQqsDTA1yBxLWuqwQWmE87cgekEWzeXKGCj1V8TpY").unwrap()
//         );
//         assert!(
//             accounts[4].pubkey
//                 == Pubkey::from_str("DXomdBfrwktrXLnPWsnpo1YRN77vCEnRtsj14Lpo83LG").unwrap()
//         );
//         assert!(
//             accounts[5].pubkey
//                 == Pubkey::from_str("7PPoQTCC1cge61ramJgfnwZDjFzSru74gq3iLazW9u88").unwrap()
//         );
//         assert!(
//             accounts[6].pubkey
//                 == Pubkey::from_str("GCbuQSPFGmHpoTaZ9o7zQChYMuprw8qY3FsYQjKjpJMJ").unwrap()
//         );
//         assert!(
//             accounts[7].pubkey
//                 == Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap()
//         );

//         // print accounts in hex string
//         for account in accounts {
//             println!("account: {:?}", hex::encode(account.pubkey.to_bytes()));
//         }
//     }
//     #[test]
//     fn test_decode_cc() {
//         let cc_hex = "9ed4989aea6739e0d575ac789b00f01c7a76bdbdf1e0812460b5d6003d8ce4909ac6526f0da12340eb1512b1ed85e4bc13b5c7536c456f19b4cec733241ff5b99ac6526f0da12340eb1512b1ed85e4bc13b5c7536c456f19b4cec733241ff5b9083098c593f395bea1de45dda552d9f14e8fcb0be3faaa7a1903c5477d7ba7fd00000000004c4b4000000000000f42400000000035d134760000000000000002";

//         let cc_payload = hex::decode(cc_hex).unwrap();
//         let withdraw_params = AccountWithdrawSol::decode_packed(&cc_payload).unwrap();

//         // print all params
//         println!("account_id: {:?}", withdraw_params.account_id);
//         println!("broker_hash: {:?}", withdraw_params.broker_hash);
//         println!("sender: {:?}", withdraw_params.sender);
//         println!("receiver: {:?}", withdraw_params.receiver);
//         println!("amount: {:?}", withdraw_params.token_amount);
//         println!("chain_id: {:?}", withdraw_params.chain_id);
//         println!("amount: {:?}", withdraw_params.fee);
//         println!("nonce: {:?}", withdraw_params.withdraw_nonce);

//         let user = Pubkey::new_from_array(withdraw_params.receiver);

//         // print user in base58
//         println!("user: {:?}", user.to_string());
//         // get accounts for send oapp
//         let accounts = get_accounts_for_send_oapp(user);

//         // print accounts in hex string
//         for account in accounts {
//             println!("account: {:?}", hex::encode(account.pubkey.to_string()));
//         }
//     }

//     #[test]
//     fn test_return_withdraw_accouts_from_cc_msg() {
//         let cc_hex_payload = "e22dbb6e4c19977f3319d6362208b566a6223bcc36d6fc16a33448ebe61bb820c5c5c69af38f23baab82d6ed5b43cd05a028243beecd73da9623f23fccba7deb9ac6526f0da12340eb1512b1ed85e4bc13b5c7536c456f19b4cec733241ff5b9083098c593f395bea1de45dda552d9f14e8fcb0be3faaa7a1903c5477d7ba7fd0000000000000040000000000000000a0000000035c1ee4d0000000000000001";
//         let cc_payload = hex::decode(cc_hex_payload).unwrap();

//         let withdraw_params = AccountWithdrawSol::decode_packed(&cc_payload).unwrap();

//         let user: Pubkey = Pubkey::new_from_array(withdraw_params.receiver);
//         // print user in base58
//         println!("user: {:?}", user.to_string());

//         let accounts = get_accounts_for_send_oapp(user);
//         assert!(accounts.len() == 8);
//         assert!(
//             accounts[0].pubkey
//                 == Pubkey::from_str("EK2EN13jdKj286QmVnipwYANjwWZJZM74mwDvyfuFaW6").unwrap()
//         );
//         assert!(
//             accounts[1].pubkey
//                 == Pubkey::from_str("BRBBajwZqE37cPu54djnjxh9W1CymNS7rZMM2rnXHiCx").unwrap()
//         );
//         assert!(
//             accounts[2].pubkey
//                 == Pubkey::from_str("G7523MsNpzugbi2M8rnmjqFzewxPcs5azsKbBFtbDxuX").unwrap()
//         );
//         assert!(
//             accounts[3].pubkey
//                 == Pubkey::from_str("6K8vQqsDTA1yBxLWuqwQWmE87cgekEWzeXKGCj1V8TpY").unwrap()
//         );
//         assert!(
//             accounts[4].pubkey
//                 == Pubkey::from_str("DXomdBfrwktrXLnPWsnpo1YRN77vCEnRtsj14Lpo83LG").unwrap()
//         );
//         assert!(
//             accounts[5].pubkey
//                 == Pubkey::from_str("7PPoQTCC1cge61ramJgfnwZDjFzSru74gq3iLazW9u88").unwrap()
//         );
//         assert!(
//             accounts[6].pubkey
//                 == Pubkey::from_str("GCbuQSPFGmHpoTaZ9o7zQChYMuprw8qY3FsYQjKjpJMJ").unwrap()
//         );
//         assert!(
//             accounts[7].pubkey
//                 == Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap()
//         );
//     }
// }
