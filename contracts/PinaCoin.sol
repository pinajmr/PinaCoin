//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PinaCoin is ERC20 {
    constructor(
        uint256 initialSupply,
        string memory name,
        string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }
}