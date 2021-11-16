// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
* @dev {ERC20} token, including:
*
*  - Preminted initial supply
*  - Ability for holders to burn (destroy) their tokens
*  - No access control mechanism (for minting/pausing)

*/
contract Mufasa is Initializable, OwnableUpgradeable, ERC20BurnableUpgradeable {
    function initialize(address mintAddress) public initializer {
        __ERC20PresetFixedSupply_init("Mufasa", "MUFA", 100_000_000_000_000e9, mintAddress);
    }

    /**
     * @dev Mints `initialSupply` amount of token and transfers them to `owner`.
     *
     * See {ERC20-constructor}.
     */
    function __ERC20PresetFixedSupply_init(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner
    ) internal initializer {
        __Context_init_unchained();
        __Ownable_init_unchained();
        __ERC20_init_unchained(name, symbol);
        __ERC20Burnable_init_unchained();
        __ERC20PresetFixedSupply_init_unchained(name, symbol, initialSupply, owner);
    }

    function __ERC20PresetFixedSupply_init_unchained(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner
    ) internal initializer {
        _mint(owner, initialSupply);
    }

    uint256[50] private __gap;

    function decimals() public view override(ERC20Upgradeable) returns (uint8) {
        return 9;
    }
}