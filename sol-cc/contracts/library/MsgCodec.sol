// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { AccountDepositSol, AccountWithdrawSol, WithdrawDataSol } from "../interface/ILedger.sol";

library MsgCodec {
    uint8 constant MSG_TYPE_OFFSET = 1;

    enum MsgType {
        Deposit,
        Withdraw,
        RebalanceBurn,
        RebalanceMint
    }

    function encodeWithdrawPayload(
        AccountWithdrawSol memory _withdrawSolData
    ) internal pure returns (bytes memory withdrawSolPayload) {
        withdrawSolPayload = abi.encodePacked(
            bytes32(_withdrawSolData.accountId),
            bytes32(_withdrawSolData.sender),
            bytes32(_withdrawSolData.receiver),
            bytes32(_withdrawSolData.brokerHash),
            bytes32(_withdrawSolData.tokenHash),
            uint64(_withdrawSolData.tokenAmount),
            uint64(_withdrawSolData.fee),
            uint64(_withdrawSolData.chainId),
            uint64(_withdrawSolData.withdrawNonce)
        );
    }

    function encodeLzMsg(uint8 _msgType, bytes memory _payload) internal pure returns (bytes memory) {
        return abi.encodePacked(uint8(_msgType), _payload);
    }

    function decodeLzMsg(bytes calldata _msg) internal pure returns (uint8 msgType, bytes memory payload) {
        msgType = uint8(bytes1(_msg[:MSG_TYPE_OFFSET]));
        payload = _msg[MSG_TYPE_OFFSET:];
    }
}
