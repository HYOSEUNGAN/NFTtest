// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract testNFT is ERC721{
    constructor() ERC721("testNFT", "TEST") {
        for (uint i=0; i < 10; i++){
            _safeMint(msg.sender, i+1);
        }
    }
}

//test code작성