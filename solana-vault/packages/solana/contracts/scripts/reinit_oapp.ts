import * as anchor from "@coral-xyz/anchor";
import { PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { OftTools } from "@layerzerolabs/lz-solana-sdk-v2";
import { Options } from "@layerzerolabs/lz-v2-utilities";
import * as utils from "./utils";
import * as constants from "./constants";

import OAppIdl from "../target/idl/solana_vault.json";
import { SolanaVault } from "../target/types/solana_vault";
const OAPP_PROGRAM_ID = new PublicKey(OAppIdl.metadata.address);
const OAppProgram = anchor.workspace.SolanaVault as anchor.Program<SolanaVault>;

const [provider, wallet, rpc] = utils.setAnchor();



async function reinit() {

    const tokenSymble = "USDC";
    const tokenHash = utils.getTokenHash(tokenSymble);
    const codedTokenHash = Array.from(Buffer.from(tokenHash.slice(2), 'hex'));
    const mintAccount = await utils.getUSDCAddress(rpc);
    console.log("USDC mintAccount", mintAccount.toBase58());
    const oappConfigPda = utils.getOAppConfigPda(OAPP_PROGRAM_ID);


    const reinitOAppParams = {
        admin: wallet.publicKey,
        endpointProgram: constants.ENDPOINT_PROGRAM_ID,
        usdcHash: codedTokenHash,
        usdcMint: mintAccount,
    };

    const ixReinitOapp = await OAppProgram.methods.reinitOapp(reinitOAppParams).accounts({
        owner: wallet.publicKey,
        oappConfig: oappConfigPda,
    }).instruction();

    const txReinitOapp = new Transaction().add(ixReinitOapp);
    const sigReinitOapp = await sendAndConfirmTransaction(provider.connection, txReinitOapp, [wallet.payer]);
    console.log("sigreinitOapp", sigReinitOapp);


}

reinit();