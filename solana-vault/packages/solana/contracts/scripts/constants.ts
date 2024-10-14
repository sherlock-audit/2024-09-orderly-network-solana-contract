import { PublicKey } from "@solana/web3.js";
import { addressToBytes32 } from "@layerzerolabs/lz-v2-utilities";
export const ENDPOINT_PROGRAM_ID = new PublicKey("76y77prsiCMvXMjuoZ5VRrhG5qYBrUMYTE5WgHqgjEn6");
export const SEND_LIB_PROGRAM_ID = new PublicKey("7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH");
export const RECEIVE_LIB_PROGRAM_ID = SEND_LIB_PROGRAM_ID;
export const TREASURY_PROGRAM_ID = SEND_LIB_PROGRAM_ID;
export const EXECUTOR_PROGRAM_ID = new PublicKey("6doghB248px58JSSwG4qejQ46kFMW4AMj7vzJnWZHNZn");
export const EXECUTOR_PDA = new PublicKey("AwrbHeCyniXaQhiJZkLhgWdUCteeWSGaSN1sTfLiY7xK");
export const DVN_PROGRAM_ID = new PublicKey("HtEYV4xB4wvsj5fgTkcfuChYpvGYzgzwvNhgDZQNh7wW");
export const PRICE_FEED_PROGRAM_ID = new PublicKey("8ahPGPjEbpgGaZx2NV1iG5Shj7TDwvsjkEDcGWjt94TP");

export const MOCK_USDC_ACCOUNT = new PublicKey("usdc4pNcoYJ2GNXcJN4iwNXfxbKXPQzqBdALdqaRyUn");
export const DEV_USDC_ACCOUNT = new PublicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU");
export const MAIN_USDC_ACCOUNT = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");

export const PEER_ADDRESS = addressToBytes32('0x9Dc724b24146BeDD2dA28b8C4B74126169B8f312');
export const DST_EID = 40200;
export const SOL_CHAIN_ID = 901901901;
export const LZ_RECEIVE_GAS = 500000;
export const LZ_RECEIVE_VALUE = 0;
export const LZ_COMPOSE_GAS = 10;
export const LZ_COMPOSE_VALUE = 0;

export const LOCAL_RPC = "http://localhost:8899";
export const DEV_RPC = "https://api.devnet.solana.com";
export const MAIN_RPC = "https://api.mainnet-beta.solana.com";

export const VAULT_AUTHORITY_SEED = "VaultAuthority";
export const BROKER_SEED = "Broker";
export const TOKEN_SEED = "Token";
export const OWNER_SEED = "Owner";

export const ENV = "dev";
export const MOCK_OAPP_PROGRAM_ID = new PublicKey("EFLrsQmcfYTSvVrUiP4qruDhbYBtjbQNAhC6tkLJbBtQ");
export const DEV_OAPP_PROGRAM_ID = new PublicKey("EYJq9eU4GMRUriUJBgGoZ8YLQBXcWaciXuSsEXE7ieQS");
export const QA_OAPP_PROGRAM_ID = new PublicKey("5zBjLor7vEraAt4zp2H82sy9MSqFoDnNa1Lx6EYKTYRZ");
export const STAGING_OAPP_PROGRAM_ID = new PublicKey("9shwxWDUNhtwkHocsUAmrNAQfBH2DHh4njdAEdHZZkF2");

export const DEV_LOOKUP_TABLE_ADDRESS = new PublicKey("BWp8HaYYhiNHekt3zgQhqoCrRftneGxxfgKmCZ6svHN");
export const QA_LOOKUP_TABLE_ADDRESS = new PublicKey("BswrQQoPKAFojTuJutZcBMtigAgTghEH4M8ofn3EG2X2");
export const STAGING_LOOKUP_TABLE_ADDRESS = new PublicKey("BbGKfxuPwDmu58BjPpd7PMG69TqnZjSpKaLDMgf9E9Dr");
export const MAIN_LOOKUP_TABLE_ADDRESS = DEV_LOOKUP_TABLE_ADDRESS;

export const MOCK_LOOKUP_TABLE_ADDRESS = new PublicKey("6hx7mCC94wxC8QYDZ9dGeURibHXRbsxLPaUYYip6tWM6");


