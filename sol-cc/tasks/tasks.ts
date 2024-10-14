

import { EnvType, OFTContractType, TEST_NETWORKS, MAIN_NETWORKS, tokenContractName, oftContractName, getLzConfig, checkNetwork, OPTIONS, TGE_CONTRACTS, LZ_CONFIG, getLzLibConfig , MULTI_SIG, ERC1967PROXY_BYTECODE, DETERMIN_CONTRSCT_FACTORY, INIT_TOKEN_HOLDER, TEST_LZ_ENDPOINT, MAIN_LZ_ENDPOINT, SIGNER} from "./const"
import { loadContractAddress, saveContractAddress} from "./utils"
import { addressToBytes32, Options } from '@layerzerolabs/lz-v2-utilities'
import { DeployResult } from "hardhat-deploy/dist/types"
import { task, types } from "hardhat/config"
import { base58, hexlify } from "ethers/lib/utils"



task("sol:deploy", "Deploys the contract to a specific network")
    .addParam("env", "The environment to deploy the OFT contract", undefined, types.string)
    .addParam("contract", "The contract to deploy", undefined, types.string)
    .addFlag("preAddress", "Predict the address of the contract before deployment")
    .setAction(async (taskArgs, hre) => {
        try {
            checkNetwork(hre.network.name)
            const env: EnvType = taskArgs.env as EnvType
            console.log(`Deploying contract to ${env} network`)
            const { deploy } = hre.deployments;
            const [ signer ] = await hre.ethers.getSigners();
            let contractAddress: string = ""
            let proxy: boolean = false
            let methodName: string = ""
            let lzEndpointAddress: string | undefined= ""
            let owner: string = ""
            let initArgs: any[] = []

            const contractName = taskArgs.contract

            if (contractName === "SolCCMock") {
                proxy = true
                lzEndpointAddress = getLzConfig(hre.network.name).endpointAddress
                owner = signer.address
                initArgs = [lzEndpointAddress, owner]
            } else if (contractName === "OFTMock") {
                proxy = true
                lzEndpointAddress = getLzConfig(hre.network.name).endpointAddress
                owner = signer.address
                initArgs = [lzEndpointAddress, owner]
            } else if (contractName === "SolConnector") {
                proxy = true
                lzEndpointAddress = getLzConfig(hre.network.name).endpointAddress
                owner = signer.address
                const solEid = 40168
                initArgs = [lzEndpointAddress, owner, solEid]
            }
            else {
                return console.error("Invalid contract name")
            }

            const salt = hre.ethers.utils.id(process.env.ORDER_DEPLOYMENT_SALT + `${env}` || "deterministicDeployment")
            const baseDeployArgs = {
                from: signer.address,
                log: true,
                deterministicDeployment: salt
            };
            // deterministic deployment
            let deployedContract: DeployResult

            if (proxy) {
                deployedContract = await deploy(contractName, {
                    ...baseDeployArgs,
                    proxy: {
                        owner: owner,
                        proxyContract: "UUPS",
                        execute: {
                            methodName: "initialize",
                            args: initArgs
                        }
                    },
                })
            } else {
                deployedContract = await deploy(contractName, {
                    ...baseDeployArgs,
                    args: initArgs
                })
            }
            console.log(`${contractName} contract deployed to ${deployedContract.address} with tx hash ${deployedContract.transactionHash}`);
            contractAddress = deployedContract.address
            saveContractAddress(env, hre.network.name, contractName, contractAddress)
        }
        catch (error) {
            console.error(error)
        }
    })



task("sol:upgrade", "Upgrades the contract to a specific network")
    .addParam("env", "The environment to upgrade the contract", undefined, types.string)
    .addParam("contract", "The contract to upgrade", undefined, types.string)
    .setAction(async (taskArgs, hre) => {
        const network = hre.network.name
        checkNetwork(network)
        try {
            const contractName = taskArgs.contract 
            const env: EnvType = taskArgs.env as EnvType
            console.log(`Running on ${hre.network.name}`)
            const { deploy } = hre.deployments;
            const [ signer ] = await hre.ethers.getSigners();
            let implAddress = ""
            const salt = hre.ethers.utils.id(process.env.ORDER_DEPLOYMENT_SALT + `${env}` || "deterministicDeployment")
            if (contractName === 'SolCCMock' || contractName === 'OFTMock' || contractName === 'SolConnector') {
                const baseDeployArgs = {
                    from: signer.address,
                    log:true,
                    deterministicDeployment: salt
                }
                const contract = await deploy(contractName, {
                    ...baseDeployArgs
                })
                implAddress = contract.address
                console.log(`${contractName} implementation deployed to ${implAddress} with tx hash ${contract.transactionHash}`);
            }
            else {
                throw new Error(`Contract ${contractName} not found`)
            }
            const contractAddress = await loadContractAddress(env, network, contractName) as string
            const contract = await hre.ethers.getContractAt(contractName, contractAddress, signer)
            
            // encoded data for function call during upgrade
            const data = "0x"
            const upgradeTx = await contract.upgradeToAndCall(implAddress, data)
            console.log(`Upgrading contract ${contractName} to ${implAddress} with tx hash ${upgradeTx.hash}`)
        }
        catch (e) {
            console.log(`Error: ${e}`)
        }
    })

task("sol:send", "Sends a transaction to a contract")
    .addParam("env", "The environment to send the transaction", undefined, types.string)
    .addParam("contract", "The contract to send the transaction", undefined, types.string)
    .setAction(async (taskArgs, hre) => {
            const contractName = taskArgs.contract 
            const env: EnvType = taskArgs.env as EnvType
            console.log(`Running on ${hre.network.name}`)
            const { deploy } = hre.deployments;
            const [ signer ] = await hre.ethers.getSigners();

            const contractAddress = await loadContractAddress(env, hre.network.name, contractName) as string
            const contract = await hre.ethers.getContractAt(contractName, contractAddress, signer)

            const GAS_LIMIT = 1000000; // Gas limit for the executor
            const MSG_VALUE = 10000000; // msg.value for the lzReceive() function on destination in wei

            const options = Options.newOptions().addExecutorLzReceiveOption(GAS_LIMIT, MSG_VALUE).toHex();

            const receiver = "0x18b9507fce83984a6b1959594a4df8149758cbaf2005d54e242dc27a1d35d976"

            const dstEid = 40168

            const param = {
                dstEid: dstEid,
                to: receiver,
                amountLD: 1000000,
                minAmountLD: 1000000,
                extraOptions: options,
                composeMsg: "0x",
                oftCmd: "0x"
            }
            const payLzToken = false
            let fee = await contract.quoteSend(param, payLzToken);
            console.log(`Fee in native: ${fee.nativeFee}`)

            const sendTx = await contract.send(param, fee, signer.address, {
                value: fee.nativeFee
            })
            await sendTx.wait()
            console.log(`Sending tokens with tx hash ${sendTx.hash}`)
            // const sendTx = await localContract.send(param, fee, signer.address, 
            // {   value: fee.nativeFee,
            //     nonce: nonce++
            // })
            // await sendTx.wait()
            // console.log(`Sending tokens from ${fromNetwork} to ${toNetwork} with tx hash ${sendTx.hash}`)


    })

    task("sol:peer", "Sets the peer contract for the contract")
    .addParam("env", "The environment to send the transaction", undefined, types.string)
    .addParam("contract", "The contract to send the transaction", undefined, types.string)
    .addParam("peer", "The peer contract to set", undefined, types.string)
    .setAction(async (taskArgs, hre) => {
            const contractName = taskArgs.contract 
            const env: EnvType = taskArgs.env as EnvType
            console.log(`Running on ${hre.network.name}`)
            const { deploy } = hre.deployments;
            const [ signer ] = await hre.ethers.getSigners();

            const contractAddress = await loadContractAddress(env, hre.network.name, contractName) as string
            const contract = await hre.ethers.getContractAt(contractName, contractAddress, signer)

            const solAddress = hexlify(base58.decode(taskArgs.peer))
            const solEid = 40168
            const setPeerTx = await contract.setPeer(solEid, solAddress)
            await setPeerTx.wait()
            console.log(`Setting peer contract with tx hash ${setPeerTx.hash}`)
        })