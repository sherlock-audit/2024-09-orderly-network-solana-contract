
# Orderly Network Solana Contract contest details

- Join [Sherlock Discord](https://discord.gg/MABEWyASkp)
- Submit findings using the issue page in your private contest repo (label issues as med or high)
- [Read for more details](https://docs.sherlock.xyz/audits/watsons)

# Q&A

# Audit scope


[sol-cc @ dc99b068cda9a6067b35edf629acd1730e5982a3](https://github.com/OrderlyNetwork/sol-cc/tree/dc99b068cda9a6067b35edf629acd1730e5982a3)
- [sol-cc/contracts/SolConnector.sol](sol-cc/contracts/SolConnector.sol)
- [sol-cc/contracts/interface/ILedger.sol](sol-cc/contracts/interface/ILedger.sol)
- [sol-cc/contracts/interface/ISolConnector.sol](sol-cc/contracts/interface/ISolConnector.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppCoreUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppCoreUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppReceiverUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppReceiverUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppSenderUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppSenderUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppComposer.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppComposer.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppCore.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppCore.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppMsgInspector.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppMsgInspector.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppOptionsType3.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppOptionsType3.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppReceiver.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppReceiver.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OAppOptionsType3Upgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OAppOptionsType3Upgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/utils/RateLimiter.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/utils/RateLimiter.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/OAppPreCrimeSimulatorUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/OAppPreCrimeSimulatorUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/PreCrime.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/PreCrime.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/extensions/PreCrimeE1.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/extensions/PreCrimeE1.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IPreCrime.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IPreCrime.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/libs/Packet.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/libs/Packet.sol)
- [sol-cc/contracts/library/MsgCodec.sol](sol-cc/contracts/library/MsgCodec.sol)
- [sol-cc/contracts/library/Utils.sol](sol-cc/contracts/library/Utils.sol)
- [sol-cc/contracts/mocks/LedgerMock.sol](sol-cc/contracts/mocks/LedgerMock.sol)
- [sol-cc/contracts/mocks/SolanaMock.sol](sol-cc/contracts/mocks/SolanaMock.sol)

[solana-vault @ bd8b6dbeb3300319fd9dad262298ec0cd1152344](https://github.com/OrderlyNetwork/solana-vault/tree/bd8b6dbeb3300319fd9dad262298ec0cd1152344)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/errors.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/errors.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/events.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/events.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/mod.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/mod.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/msg_codec.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/msg_codec.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/init_oapp.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/init_oapp.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/mod.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/mod.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/oapp_lz_receive.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/oapp_lz_receive.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/oapp_lz_receive_types.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/oapp_lz_receive_types.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/oapp_quote.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/oapp_quote.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/reinit_oapp.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/reinit_oapp.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/reset_oapp.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/reset_oapp.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/set_delegate.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/set_delegate.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/set_enforced_options.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/set_enforced_options.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/set_peer.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/set_peer.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/set_rate_limit.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/set_rate_limit.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/transfer_admin.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/oapp_instr/transfer_admin.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/seeds.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/seeds.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/type_utils.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/type_utils.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/deposit.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/deposit.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/init_vault.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/init_vault.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/mod.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/mod.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/reinit_vault.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/reinit_vault.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/reset_vault.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/reset_vault.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/set_broker.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/set_broker.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/set_order_delivery.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/set_order_delivery.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/set_token.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/instructions/vault_instr/set_token.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/lib.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/lib.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/state/mod.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/state/mod.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/state/oapp_state/enforced_options.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/state/oapp_state/enforced_options.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/state/oapp_state/mod.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/state/oapp_state/mod.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/state/oapp_state/oapp_config.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/state/oapp_state/oapp_config.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/state/oapp_state/peer.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/state/oapp_state/peer.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/state/vault_state/allowed_broker.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/state/vault_state/allowed_broker.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/state/vault_state/allowed_token.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/state/vault_state/allowed_token.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/state/vault_state/mod.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/state/vault_state/mod.rs)
- [solana-vault/packages/solana/contracts/programs/solana-vault/src/state/vault_state/vault_authority.rs](solana-vault/packages/solana/contracts/programs/solana-vault/src/state/vault_state/vault_authority.rs)




[sol-cc @ dc99b068cda9a6067b35edf629acd1730e5982a3](https://github.com/OrderlyNetwork/sol-cc/tree/dc99b068cda9a6067b35edf629acd1730e5982a3)
- [sol-cc/contracts/SolConnector.sol](sol-cc/contracts/SolConnector.sol)
- [sol-cc/contracts/interface/ILedger.sol](sol-cc/contracts/interface/ILedger.sol)
- [sol-cc/contracts/interface/ISolConnector.sol](sol-cc/contracts/interface/ISolConnector.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppCoreUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppCoreUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppReceiverUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppReceiverUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppSenderUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppSenderUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppComposer.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppComposer.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppCore.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppCore.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppMsgInspector.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppMsgInspector.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppOptionsType3.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppOptionsType3.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppReceiver.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppReceiver.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OAppOptionsType3Upgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OAppOptionsType3Upgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/utils/RateLimiter.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/oapp/utils/RateLimiter.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/OAppPreCrimeSimulatorUpgradeable.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/OAppPreCrimeSimulatorUpgradeable.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/PreCrime.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/PreCrime.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/extensions/PreCrimeE1.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/extensions/PreCrimeE1.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IPreCrime.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IPreCrime.sol)
- [sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/libs/Packet.sol](sol-cc/contracts/layerzerolabs/lz-evm-oapp-v2/contracts/precrime/libs/Packet.sol)
- [sol-cc/contracts/library/MsgCodec.sol](sol-cc/contracts/library/MsgCodec.sol)
- [sol-cc/contracts/library/Utils.sol](sol-cc/contracts/library/Utils.sol)
- [sol-cc/contracts/mocks/LedgerMock.sol](sol-cc/contracts/mocks/LedgerMock.sol)
- [sol-cc/contracts/mocks/SolanaMock.sol](sol-cc/contracts/mocks/SolanaMock.sol)

