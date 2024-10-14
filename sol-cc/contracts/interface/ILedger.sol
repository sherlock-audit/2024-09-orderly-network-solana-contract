// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

// AccountTypes
struct AccountDepositSol {
    bytes32 accountId;
    bytes32 brokerHash;
    bytes32 userAddress;
    bytes32 tokenHash;
    uint256 srcChainId;
    uint128 tokenAmount;
    uint64 srcChainDepositNonce;
}

// AccountTypes
struct AccountWithdrawSol {
    bytes32 accountId;
    bytes32 sender;
    bytes32 receiver;
    bytes32 brokerHash;
    bytes32 tokenHash;
    uint128 tokenAmount;
    uint128 fee;
    uint256 chainId;
    uint64 withdrawNonce;
}
// EventTypes
struct WithdrawDataSol {
    uint128 tokenAmount;
    uint128 fee;
    uint256 chainId; // target withdraw chain
    bytes32 accountId;
    bytes32 r;
    bytes32 s;
    bytes32 sender;
    bytes32 receiver;
    uint64 withdrawNonce;
    uint64 timestamp;
    string brokerId; // only this field is string, others should be bytes32 hashedBrokerId
    string tokenSymbol; // only this field is string, others should be bytes32 hashedTokenSymbol
}

interface ILedger {
    function accountDepositSol(AccountDepositSol calldata data) external;
}
