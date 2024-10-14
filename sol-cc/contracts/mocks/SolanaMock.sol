pragma solidity ^0.8.22;

import { OAppUpgradeable, MessagingFee, Origin } from "../layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppUpgradeable.sol";
import { OptionsBuilder } from "../layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder.sol";
import { MessagingReceipt } from "../layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppSenderUpgradeable.sol";
import { MsgCodec } from "../library/MsgCodec.sol";
import { AccountDepositSol } from "../interface/ILedger.sol";

contract SolanaMock is OAppUpgradeable {
    using OptionsBuilder for bytes;

    uint32 public evmEid;
    uint64 public depositNonce;

    event DepositReceived(bytes32 accountId, bytes32 brokerHash, bytes32 tokenHash, uint64 chainId, uint64 tokenAmount);

    constructor() {
        _disableInitializers();
    }

    function initialize(address _lzEndpoint, address _delegate, uint32 _evmEid) external virtual initializer {
        __initializeOApp(_lzEndpoint, _delegate);
        require(_evmEid != 0, "Zero eid");
        evmEid = _evmEid;
    }

    function deposit(
        bytes32 _accountId,
        bytes32 _brokerHash,
        bytes32 _userAddress,
        bytes32 _tokenHash,
        uint64 _chainId,
        uint64 _tokenAmount
    ) external payable {
        depositNonce++;
        
        AccountDepositSol memory depositData = AccountDepositSol(
            _accountId,
            _brokerHash,
            _userAddress,
            _tokenHash,
            _chainId,
            _tokenAmount,
            depositNonce
        );

        bytes memory payload = abi.encode(depositData);
        bytes memory lzDepositMsg = MsgCodec.encodeLzMsg(uint8(MsgCodec.MsgType.Deposit), payload);
        
        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(200000, 0);
        MessagingFee memory msgFee = _quote(evmEid, lzDepositMsg, options, false);
        
        _lzSend(evmEid, lzDepositMsg, options, msgFee, address(this));

        emit DepositReceived(_accountId, _brokerHash, _tokenHash, _chainId, _tokenAmount);
    }

    function _lzReceive(
        Origin calldata /*_origin*/,
        bytes32 /*_guid*/,
        bytes calldata /*_message*/,
        address /*_executor*/,
        bytes calldata /*_extraData*/
    ) internal virtual override {
        // Empty receive function as requested
    }
}
