//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KittyContract is Ownable, ERC721 {
    constructor() ERC721("Rein Kitties", "RK") {}

    event Birth(address indexed owner, uint256 indexed kittyId);

    uint32 CREATION_LIMIT_GEN0 = 69;
    uint256 gen0Counter = 0;

    struct Kitty {
        uint256 genes;
        uint256 birthTime;
        uint256 momId;
        uint256 dadId;
        uint32 generation;
    }

    Kitty[] kitties;

    function getKitty(uint256 kittyId)
        external
        view
        returns (
            uint256 genes,
            uint256 birthTime,
            uint256 momId,
            uint256 dadId,
            uint32 generation
        )
    {
        Kitty storage kitty = kitties[kittyId];
        return (kitty.genes, kitty.birthTime, kitty.momId, kitty.dadId, kitty.generation);
    }

    function totalSupply() public view returns (uint256) {
        return kitties.length;
    }

    function createKittyGen0(uint256 genes) public {
        require(gen0Counter < CREATION_LIMIT_GEN0, "Gen0 creation over limit");

        gen0Counter++;

        _createKitty(genes, 0, 0, msg.sender, 0);
    }

    function breed(uint256 momId, uint256 dadId) public returns (uint256) {
        require(ownerOf(momId) == msg.sender, "Not the owner of mom");
        require(ownerOf(dadId) == msg.sender, "Not the owner of dad");

        uint256 newDna = _mixDna(momId, dadId);
        uint32 generation = _getGeneration(momId, dadId);

        return _createKitty(newDna, momId, dadId, msg.sender, generation);
    }

    function _getGeneration(uint256 momId, uint256 dadId) private view returns (uint32) {
        uint32 momGen = kitties[momId].generation;
        uint32 dadGen = kitties[dadId].generation;
        uint32 newGen = momGen >= dadGen ? momGen : dadGen;
        return newGen;
    }

    function _mixDna(uint256 momId, uint256 dadId) private view returns (uint256) {
        uint256 momDna = kitties[momId].genes;
        uint256 dadDna = kitties[dadId].genes;
        // 11 22 33 44 55 66 77 88 99
        uint256 zeroOrOne = random();
        uint256 firstHalf;
        uint256 secondHalf;
        uint256 newDna;

        if (zeroOrOne == 0) {
            firstHalf = dadDna / 100000000;
            secondHalf = momDna % 100000000;
            newDna = firstHalf * 100000000;
            newDna = newDna + secondHalf;
            return newDna;
        }

        firstHalf = momDna / 100000000;
        secondHalf = dadDna % 100000000;
        newDna = firstHalf * 100000000;
        newDna = newDna + secondHalf;
        return newDna;
    }

    function random() private view returns (uint256) {
        uint256 randomHash = uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
        return randomHash % 2;
    }

    function _createKitty(
        uint256 genes,
        uint256 momId,
        uint256 dadId,
        address owner,
        uint32 generation
    ) private returns (uint256 tokenId) {
        // uint32 generation = momId == 0 ? 0 : kitties[momId].generation + 1;
        Kitty memory _kitty = Kitty(genes, block.timestamp, momId, dadId, generation);
        kitties.push(_kitty);
        uint256 kittyId = kitties.length - 1;

        _safeMint(owner, kittyId);

        emit Birth(owner, kittyId);

        return kittyId;
    }

    function getKittyByOwner(uint256 genes) public {
        require(gen0Counter < CREATION_LIMIT_GEN0, "Gen0 creation over limit");

        gen0Counter++;

        _createKitty(genes, 0, 0, msg.sender, 0);
    }
}
