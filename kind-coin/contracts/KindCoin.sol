// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KindCoin is ERC20 {
    constructor() ERC20("KindCoin", "KIND") {
        _mint(msg.sender, 100_000_000 * 10 ** decimals()); // Mint 100M tokens to the deployer's wallet
    }
}
