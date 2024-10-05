use crate::instructions::{LZ_RECEIVE_TYPES_SEED, OAPP_SEED};
use crate::state::{OAppConfig, OAppLzReceiveTypesAccounts};
use anchor_lang::prelude::*;

// Initialize the oapp_config and vault_owner pda
#[derive(Accounts)]
#[instruction(params: InitOAppParams)]
pub struct InitOApp<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,
    #[account(
        init,
        payer = payer,
        space = 8 + OAppConfig::INIT_SPACE,
        seeds = [OAPP_SEED],
        bump
    )]
    pub oapp_config: Account<'info, OAppConfig>,
    #[account(
        init,
        payer = payer,
        space = 8 + OAppLzReceiveTypesAccounts::INIT_SPACE,
        seeds = [LZ_RECEIVE_TYPES_SEED, &oapp_config.key().as_ref()],
        bump
    )]
    pub lz_receive_types: Account<'info, OAppLzReceiveTypesAccounts>,
    pub system_program: Program<'info, System>,
}

impl InitOApp<'_> {
    pub fn apply(ctx: &mut Context<InitOApp>, params: &InitOAppParams) -> Result<()> {
        ctx.accounts.lz_receive_types.oapp_config = ctx.accounts.oapp_config.key();

        ctx.accounts.oapp_config.bump = ctx.bumps.oapp_config;
        ctx.accounts.oapp_config.usdc_hash = params.usdc_hash;
        ctx.accounts.oapp_config.usdc_mint = params.usdc_mint;

        let oapp_signer = ctx.accounts.oapp_config.key();
        ctx.accounts.oapp_config.init(
            params.endpoint_program,
            params.admin,
            ctx.remaining_accounts,
            oapp_signer,
        )
    }
}

#[derive(Clone, AnchorSerialize, AnchorDeserialize)]
pub struct InitOAppParams {
    pub admin: Pubkey,
    pub endpoint_program: Option<Pubkey>,
    pub usdc_hash: [u8; 32],
    pub usdc_mint: Pubkey,
}
