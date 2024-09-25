// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { OptionsBuilder } from "./layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder.sol";
import { OAppUpgradeable, MessagingFee, Origin } from "./layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppUpgradeable.sol";
import { MessagingReceipt } from "./layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppSenderUpgradeable.sol";
import { ILedger, AccountDepositSol, AccountWithdrawSol, WithdrawDataSol } from "./interface/ILedger.sol";
import { Utils } from "./library/Utils.sol";
import { ISolConnector } from "./interface/ISolConnector.sol";
import { MsgCodec } from "./library/MsgCodec.sol";

struct LzOptions {
    uint128 gas;
    uint128 value;
}

contract SolConnector is OAppUpgradeable, ISolConnector {
    ILedger public ledger;
    mapping(uint8 => LzOptions) public msgOptions;
    uint32 public solEid;
    uint64 public inboundNonce;
    bool public orderDelivery;

    modifier onlyLedger() {
        require(msg.sender == address(ledger), "Only ledger can call this function");
        _;
    }

    using OptionsBuilder for bytes;

    event UnkonwnMessageType(uint8 msgType);
    event SetOrderDelivery(bool orderDelivery, uint64 inboundNonce);
    /**
     * @dev Disable the initializer on the implementation contract
     */
    constructor() {
        _disableInitializers();
    }
    /**
     * @dev Initialize the OrderOFT contract and set the ordered nonce flag
     * @param _lzEndpoint The LayerZero endpoint address
     * @param _delegate The delegate address of this OApp on the endpoint
     */
    function initialize(address _lzEndpoint, address _delegate, uint32 _solEid) external virtual initializer {
        __initializeOApp(_lzEndpoint, _delegate);
        require(_solEid != 0, "Zero eid");
        solEid = _solEid;
        orderDelivery = true;
    }

    function _lzReceive(
        Origin calldata _origin,
        bytes32 /*_guid*/,
        bytes calldata _message,
        address /*_executor*/,
        bytes calldata /*_extraData*/
    ) internal virtual override {
        if (orderDelivery) {
            require(_origin.nonce == inboundNonce + 1, "Invalid inbound nonce");
        }
        inboundNonce = _origin.nonce;

        (uint8 msgType, bytes memory payload) = MsgCodec.decodeLzMsg(_message);

        if (msgType == uint8(MsgCodec.MsgType.Deposit)) {
            AccountDepositSol memory accountDepositSol = abi.decode(payload, (AccountDepositSol));
            ledger.accountDepositSol(accountDepositSol);
        } else {
            emit UnkonwnMessageType(msgType);
        }
    }

    // =========================== Only Ledger functions ===========================

    function withdraw(WithdrawDataSol calldata _withdrawData) external onlyLedger {
        AccountWithdrawSol memory withdrawData = AccountWithdrawSol(
            Utils.getSolAccountId(_withdrawData.sender, _withdrawData.brokerId),
            _withdrawData.sender,
            _withdrawData.receiver,
            Utils.calculateStringHash(_withdrawData.brokerId),
            Utils.calculateStringHash(_withdrawData.tokenSymbol),
            _withdrawData.tokenAmount,
            _withdrawData.fee,
            _withdrawData.chainId,
            _withdrawData.withdrawNonce
        );

        bytes memory payload = MsgCodec.encodeWithdrawPayload(withdrawData);
        bytes memory lzWithdrawMsg = MsgCodec.encodeLzMsg(uint8(MsgCodec.MsgType.Withdraw), payload);
        bytes memory withdrawOptions = OptionsBuilder.newOptions().addExecutorLzReceiveOption(
            msgOptions[uint8(MsgCodec.MsgType.Withdraw)].gas,
            msgOptions[uint8(MsgCodec.MsgType.Withdraw)].value
        );
        MessagingFee memory _msgFee = _quote(solEid, lzWithdrawMsg, withdrawOptions, false);
        MessagingReceipt memory msgReceipt = _lzSend(solEid, lzWithdrawMsg, withdrawOptions, _msgFee, address(this));
    }

    function nextNonce(uint32 /*_srcEid*/, bytes32 /*_sender*/) public view override returns (uint64 nonce) {
        nonce = inboundNonce + 1;
    }

    // =========================== Admin functions ===========================

    function setLedger(address _ledger) external onlyOwner {
        require(_ledger != address(0), "Zero address");
        require(_ledger != address(ledger), "Same ledger address");
        ledger = ILedger(_ledger);
    }

    function setSolEid(uint32 _solEid) external onlyOwner {
        require(_solEid != 0, "Zero eid");
        solEid = _solEid;
    }

    function setOptions(uint8 _msgType, uint128 _gas, uint128 _value) external onlyOwner {
        msgOptions[_msgType] = LzOptions(_gas, _value);
    }

    function setOrderDelivery(bool _orderDelivery, uint64 _inboundNonce) external onlyOwner {
        orderDelivery = _orderDelivery;
        inboundNonce = _inboundNonce;
        emit SetOrderDelivery(_orderDelivery, _inboundNonce);
    }

    fallback() external payable {}

    receive() external payable {}
}
