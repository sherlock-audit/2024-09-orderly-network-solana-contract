// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

library Utils {
    function getAccountId(address _userAddr, string memory _brokerId) internal pure returns (bytes32) {
        return keccak256(abi.encode(_userAddr, calculateStringHash(_brokerId)));
    }

    function getSolAccountId(bytes32 _solAddress, string memory _brokerId) internal pure returns (bytes32) {
        return keccak256(abi.encode(_solAddress, calculateStringHash(_brokerId)));
    }

    function calculateAccountId(address _userAddr, bytes32 _brokerHash) internal pure returns (bytes32) {
        return keccak256(abi.encode(_userAddr, _brokerHash));
    }

    function calculateStringHash(string memory _str) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(_str));
    }

    function validateAccountId(
        bytes32 _accountId,
        bytes32 _brokerHash,
        address _userAddress
    ) internal pure returns (bool) {
        return keccak256(abi.encode(_userAddress, _brokerHash)) == _accountId;
    }

    function toBytes32(address addr) internal pure returns (bytes32) {
        return bytes32(abi.encode(addr));
    }
}
