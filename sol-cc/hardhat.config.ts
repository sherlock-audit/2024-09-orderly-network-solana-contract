// Get the environment configuration from .env file
//
// To make use of automatic environment setup:
// - Duplicate .env.example file and name it .env
// - Fill in the environment variables
import 'dotenv/config'

import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import '@layerzerolabs/toolbox-hardhat'
import { HardhatUserConfig, HttpNetworkAccountsUserConfig } from 'hardhat/types'
import { EndpointId } from '@layerzerolabs/lz-definitions'
import "./tasks/tasks"

// Set your preferred authentication method
//
// If you prefer using a mnemonic, set a MNEMONIC environment variable
// to a valid mnemonic
const MNEMONIC = process.env.MNEMONIC

// If you prefer to be authenticated using a private key, set a PRIVATE_KEY environment variable
const PRIVATE_KEY = process.env.PRIVATE_KEY

const accounts: HttpNetworkAccountsUserConfig | undefined = MNEMONIC
    ? { mnemonic: MNEMONIC }
    : PRIVATE_KEY
      ? [PRIVATE_KEY]
      : undefined

if (accounts == null) {
    console.warn(
        'Could not find MNEMONIC or PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.'
    )
}

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: '0.8.22',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        
        sepolia: {
            eid: EndpointId.SEPOLIA_V2_TESTNET,
            url: process.env.SEPOLIA_RPC_URL,
            accounts,
        },
        arbitrumsepolia: {
            eid: EndpointId.ARBSEP_V2_TESTNET,
            url: process.env.ARBITRUMSEPOLIA_RPC_URL,
            accounts,
        },
        orderlysepolia: {
            eid: EndpointId.ORDERLY_V2_TESTNET,
            url: process.env.ORDERLYSEPOLIA_RPC_URL, //   "https://testnet-rpc.orderly.org/8jbWg77mA6PCwHe13tEiv6rFqT1UJLPEB"
            accounts,
        },
        // mainnets
        ethereum: {
            eid: EndpointId.ETHEREUM_MAINNET,
            url: process.env.ETHEREUM_RPC_URL,
            accounts,
        },
        arbitrum: {
            eid: EndpointId.ARBITRUM_MAINNET,
            url: process.env.ARBITRUM_RPC_URL,
            accounts,
        },
        orderly: {
            eid: EndpointId.ORDERLY_MAINNET,
            url: process.env.ORDERLY_RPC_URL,
            accounts,
        }
    },
}

export default config
