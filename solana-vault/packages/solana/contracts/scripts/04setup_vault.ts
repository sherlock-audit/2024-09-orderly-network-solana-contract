import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

import * as utils from "./utils";
import * as constants from "./constants";

import OAppIdl from "../target/idl/solana_vault.json";
import { SolanaVault } from "../target/types/solana_vault";
const OAPP_PROGRAM_ID = new PublicKey(OAppIdl.metadata.address);
const OAppProgram = anchor.workspace.SolanaVault as anchor.Program<SolanaVault>;

const [provider, wallet, rpc] = utils.setAnchor();
const ENV = utils.getEnv(OAPP_PROGRAM_ID);
const DST_EID = utils.getDstEid(ENV);
const SOL_CHAIN_ID = utils.getSolChainId(ENV);

async function setup() {
    console.log("Setting up Vault...");
    const usdc = await utils.getUSDCAddress(rpc);
    const userUSDCAccount = await utils.getUSDCAccount(usdc, wallet.publicKey);
    console.log("User USDCAccount", userUSDCAccount.toBase58());
    const vaultAuthorityPda = utils.getVaultAuthorityPda(OAPP_PROGRAM_ID);
    console.log("Vault Deposit Authority PDA:", vaultAuthorityPda.toBase58());

    const vaultUSDCAccount = await utils.getUSDCAccount(usdc, vaultAuthorityPda);
    console.log("Vault USDCAccount", vaultUSDCAccount.toBase58());

    const setVaultParams = {
        owner: wallet.publicKey,
        depositNonce: new anchor.BN(0),
        orderDelivery: true,
        inboundNonce: new anchor.BN(0),
        dstEid: DST_EID,
        solChainId: new anchor.BN(SOL_CHAIN_ID)
    }

    const ixSetVault = await OAppProgram.methods.setVault(setVaultParams).accounts({
        admin: wallet.publicKey,
        vaultAuthority: vaultAuthorityPda,
        oappConfig: utils.getOAppConfigPda(OAPP_PROGRAM_ID),

    }).instruction();

    console.log("Set Vault:");
    try {
        await utils.createAndSendV0Tx([ixSetVault], provider, wallet);
    } catch (e) {
        console.log("Vault already initialized");
    }
}

setup();