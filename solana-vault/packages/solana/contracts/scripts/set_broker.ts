import * as anchor from "@coral-xyz/anchor";
import { PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { OftTools } from "@layerzerolabs/lz-solana-sdk-v2";
import { Options } from "@layerzerolabs/lz-v2-utilities";
import * as utils from "./utils";
import * as constants from "./constants";
import OAppIdl from "../target/idl/solana_vault.json";
import { SolanaVault } from "../target/types/solana_vault";
const OAPP_PROGRAM_ID = new PublicKey(OAppIdl.metadata.address);
const OAppProgram = anchor.workspace.SolanaVault as anchor.Program<SolanaVault>;

const [provider, wallet, rpc] = utils.setAnchor();

async function setBroker() {
    const allowedBrokerList = [
        "woofi_pro",
        // "woofi_dex",
        // "busywhale",
        // "0xfin",
        // "emdx_dex",
        // "logx",
        // "rkqa_dex",
        // "prime_protocol",
        // "bitoro_network",
        // "coolwallet",
        // "quick_perps",
        // "empyreal",
        // "galar_fin",
        // "what_exchange",
        // "ibx",
        // "unibot",
        // "ascendex",
        // "sharpe_ai",
        // "panda_terminal",
        // "vooi",
        // "fusionx_pro",
        // "elixir",
        // "xade_finance",
        // "kai",
        // "sable",
        // "dfyn",
        // "ask_jimmy",
        // "alphanaut",
        // "rage_trade",
        // "ox_markets",
        // "zk_automate",
        // "flash_x",
        // "pinde",
        // "ape_terminal",
        // "funl_ai",
        // "crust_finance",
        // "btse_dex",
        // "orderoo",
        // "boodex_com",
        // "tcmp",
        // "tealstreet",
        // "vls",
        // "veeno_dex",
        // "dvx",
        // "book_x",
        // "zotto",
        // "atlas",
        // "primex",
        // "demo",
        // "eisen",
        // "blazpay",
        // "if_exchange",
        // "one_bow",
        // "filament",
        // "orderly",
        // "demo",
    ]
    console.log("Setting up Brokers...");

    for (const brokerId of allowedBrokerList) {
        console.log("Broker Id:", brokerId);
        const brokerHash = utils.getBrokerHash(brokerId);
        console.log("Broker Hash:", brokerHash);
        const codedBrokerHash = Array.from(Buffer.from(brokerHash.slice(2), 'hex'));
        const brokerPda = utils.getBrokerPda(OAPP_PROGRAM_ID, brokerHash);
        console.log("BrokerPda", brokerPda.toBase58());

        const oappConfigPda = utils.getOAppConfigPda(OAPP_PROGRAM_ID);

        const allowed = true;
        const setBrokerParams = {
            brokerHash: codedBrokerHash,
            allowed: allowed,
        };
        const ixSetBroker = await OAppProgram.methods.setBroker(setBrokerParams).accounts({
            admin: wallet.publicKey,
            allowedBroker: brokerPda,
            oappConfig: oappConfigPda,
        }).instruction();

        const txSetBroker = new Transaction().add(ixSetBroker);
        const sigSetBroker = await sendAndConfirmTransaction(
            provider.connection,
            txSetBroker,
            [wallet.payer],
            {
                commitment: "confirmed",
                preflightCommitment: "confirmed"
            }
        )
        console.log("sigSetBroker", sigSetBroker);
    }



    
}
setBroker();