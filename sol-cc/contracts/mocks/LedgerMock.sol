// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "../interface/ILedger.sol";
import "../SolConnector.sol";

contract LedgerMock is ILedger {
    SolConnector public solConnector;

    constructor(address _solConnector) {
        solConnector = SolConnector(payable(_solConnector));
    }

    function accountDepositSol(AccountDepositSol calldata data) external override {
        // This function intentionally does nothing
    }

    // New function to mock withdraw
    function mockWithdraw(WithdrawDataSol calldata withdrawData) external {
        solConnector.withdraw(withdrawData);
    }

    // Function to set SolConnector address (in case it needs to be updated)
    function setSolConnector(address _solConnector) external {
        solConnector = SolConnector(payable(_solConnector));
    }
}
