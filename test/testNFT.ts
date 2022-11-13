import { expect } from 'chai';
import { Signer } from 'ethers';
import { ethers } from "hardhat";
import { boolean } from 'hardhat/internal/core/params/argumentTypes';


describe('testNFT', () => {
  let owner : Signer;

  before(async()=>{
    [owner] = await ethers.getSigners();
  }); // 모카 테스트 코드 작성전에 실행하는 before

  it("should have 10 nfts", async()=>{
    const testNFT = await ethers.getContractFactory("testNFT");
    const contract = await testNFT.deploy(); // 원래는 생성자 파라미터가 들어가야함

    await contract.deployed();
    

    expect(await contract.balanceOf(await owner.getAddress()).to.be.equal(10));
  });
});

