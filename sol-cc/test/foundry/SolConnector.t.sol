// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import { SolanaMock } from "../../contracts/mocks/SolanaMock.sol";
import { SolConnector } from "../../contracts/SolConnector.sol";
import { LedgerMock } from "../../contracts/mocks/LedgerMock.sol";
import { MsgCodec } from "../../contracts/library/MsgCodec.sol";

import { IOAppOptionsType3, EnforcedOptionParam } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OAppOptionsType3.sol";
import { OptionsBuilder } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder.sol";
import { ERC1967Proxy } from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "forge-std/console.sol";
import { TestHelperOz5 } from "@layerzerolabs/test-devtools-evm-foundry/contracts/TestHelperOz5.sol";
import { WithdrawDataSol } from "../../contracts/interface/ILedger.sol";

contract SolConnectorTest is TestHelperOz5 {
    using OptionsBuilder for bytes;

    uint32 private aEid = 1;
    uint32 private bEid = 2;

    SolanaMock private aOApp;
    SolConnector private bOApp;
    LedgerMock private ledger;

    address private userA = address(0x1);
    address private userB = address(0x2);
    uint256 private initialBalance = 100 ether;

    function setUp() public virtual override {
        vm.deal(userA, 1000 ether);
        vm.deal(userB, 1000 ether);

        super.setUp();
        setUpEndpoints(2, LibraryType.UltraLightNode);

        // deploy proxy
        address aOAppImpl = address(new SolanaMock());
        address bOAppImpl = address(new SolConnector());
        ERC1967Proxy aProxy = new ERC1967Proxy(aOAppImpl, "");
        ERC1967Proxy bProxy = new ERC1967Proxy(bOAppImpl, "");
        aOApp = SolanaMock(address(aProxy));
        bOApp = SolConnector(payable(address(bProxy)));

        vm.deal(address(bOApp), 1 ether);

        aOApp.initialize(address(endpoints[aEid]), address(this), bEid);
        bOApp.initialize(address(endpoints[bEid]), address(this), aEid);

        // deploy ledger
        ledger = new LedgerMock(address(bOApp));

        bOApp.setLedger(address(ledger));
        bOApp.setSolEid(aEid);
        bOApp.setOptions(uint8(MsgCodec.MsgType.Withdraw), 200000, 0);

        address[] memory oapps = new address[](2);
        oapps[0] = address(aOApp);
        oapps[1] = address(bOApp);
        this.wireOApps(oapps);
    }

    function test_constructor() public {
        assertEq(aOApp.owner(), address(this));
        assertEq(bOApp.owner(), address(this));
        assertEq(address(aOApp.endpoint()), address(endpoints[aEid]));
        assertEq(address(bOApp.endpoint()), address(endpoints[bEid]));
    }

    function test_deposit() public {
        bytes32 accountId = bytes32(uint256(1));
        bytes32 brokerHash = bytes32(uint256(2));
        bytes32 userAddress = bytes32(uint256(3));
        bytes32 tokenHash = bytes32(uint256(4));
        uint64 chainId = 1;
        uint64 tokenAmount = 100;

        vm.expectEmit(true, true, true, true);
        emit SolanaMock.DepositReceived(accountId, brokerHash, tokenHash, chainId, tokenAmount);

        aOApp.deposit{value: 1 ether}(accountId, brokerHash, userAddress, tokenHash, chainId, tokenAmount);

        assertEq(aOApp.depositNonce(), 1);
    }

    function test_withdraw() public {
        WithdrawDataSol memory withdrawData = WithdrawDataSol({
            tokenAmount: 100,
            fee: 1,
            chainId: 1,
            accountId: bytes32(uint256(1)),
            r: bytes32(0),
            s: bytes32(0),
            sender: bytes32(uint256(2)),
            receiver: bytes32(uint256(3)),
            withdrawNonce: 1,
            timestamp: uint64(block.timestamp),
            brokerId: "testBroker",
            tokenSymbol: "TEST"
        });

        vm.prank(address(ledger));
        bOApp.withdraw(withdrawData);
    }

    function test_setLedger() public {
        address newLedger = address(0x123);
        bOApp.setLedger(newLedger);
        assertEq(address(bOApp.ledger()), newLedger);
    }

    function test_setLedger_onlyOwner() public {
        address newLedger = address(0x123);
        vm.prank(userA);
        // expect revert with error 
        // revert OwnableUnauthorizedAccount(_msgSender());
        vm.expectRevert(abi.encodeWithSelector(bytes4(keccak256("OwnableUnauthorizedAccount(address)")), userA));
        bOApp.setLedger(newLedger);
    }

    function test_setSolEid() public {
        uint32 newEid = 5;
        bOApp.setSolEid(newEid);
        assertEq(bOApp.solEid(), newEid);
    }

    function test_setSolEid_onlyOwner() public {
        uint32 newEid = 5;
        vm.prank(userA);
        vm.expectRevert(abi.encodeWithSelector(bytes4(keccak256("OwnableUnauthorizedAccount(address)")), userA));
        bOApp.setSolEid(newEid);
    }

    function test_setOptions() public {
        uint8 msgType = 1;
        uint128 gas = 200000;
        uint128 value = 0;
        bOApp.setOptions(msgType, gas, value);
        (uint128 setGas, uint128 setValue) = bOApp.msgOptions(msgType);
        assertEq(setGas, gas);
        assertEq(setValue, value);
    }

    function test_setOptions_onlyOwner() public {
        uint8 msgType = 1;
        uint128 gas = 200000;
        uint128 value = 0;
        vm.prank(userA);
        vm.expectRevert(abi.encodeWithSelector(bytes4(keccak256("OwnableUnauthorizedAccount(address)")), userA));
        bOApp.setOptions(msgType, gas, value);
    }

    function test_setOrderDelivery() public {
        bool newOrderDelivery = false;
        uint64 newInboundNonce = 5;
        vm.expectEmit(true, true, true, true);
        emit SolConnector.SetOrderDelivery(newOrderDelivery, newInboundNonce);
        bOApp.setOrderDelivery(newOrderDelivery, newInboundNonce);
        assertEq(bOApp.orderDelivery(), newOrderDelivery);
        assertEq(bOApp.inboundNonce(), newInboundNonce);
    }

    function test_setOrderDelivery_onlyOwner() public {
        bool newOrderDelivery = false;
        uint64 newInboundNonce = 5;
        vm.prank(userA);
        vm.expectRevert(abi.encodeWithSelector(bytes4(keccak256("OwnableUnauthorizedAccount(address)")), userA));
        bOApp.setOrderDelivery(newOrderDelivery, newInboundNonce);
    }

    function test_withdraw_onlyLedger() public {
        WithdrawDataSol memory withdrawData = WithdrawDataSol({
            tokenAmount: 100,
            fee: 1,
            chainId: 1,
            accountId: bytes32(uint256(1)),
            r: bytes32(0),
            s: bytes32(0),
            sender: bytes32(uint256(2)),
            receiver: bytes32(uint256(3)),
            withdrawNonce: 1,
            timestamp: uint64(block.timestamp),
            brokerId: "testBroker",
            tokenSymbol: "TEST"
        });

        vm.prank(userA);
        vm.expectRevert("Only ledger can call this function");
        bOApp.withdraw(withdrawData);
    }

    function test_mockWithdraw() public {
        WithdrawDataSol memory withdrawData = WithdrawDataSol({
            tokenAmount: 100,
            fee: 1,
            chainId: 1,
            accountId: bytes32(uint256(1)),
            r: bytes32(0),
            s: bytes32(0),
            sender: bytes32(uint256(2)),
            receiver: bytes32(uint256(3)),
            withdrawNonce: 1,
            timestamp: uint64(block.timestamp),
            brokerId: "testBroker",
            tokenSymbol: "TEST"
        });

        ledger.mockWithdraw(withdrawData);
    }

    function test_setSolConnector() public {
        address newSolConnector = address(0x456);
        ledger.setSolConnector(newSolConnector);
        assertEq(address(ledger.solConnector()), newSolConnector);
    }
}