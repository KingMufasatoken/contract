import { expect } from "chai";

import { upgrades, ethers as he } from "hardhat";
import { ethers } from "ethers";

const safeAddress = "0xbb9A6Fac5Fe3C1BDfb1795eaE828C8cA3E5fCcd0";

async function deploy() {
  const Mufasa = await he.getContractFactory("Mufasa");
  return await upgrades.deployProxy(Mufasa, [safeAddress]);
}

describe("Mufasa", function () {
  let mufasa: ethers.Contract;
  let provider: ethers.providers.JsonRpcProvider;
  before(async function () {
    mufasa = await deploy();
    provider = new ethers.providers.JsonRpcProvider();
  });

  describe("Contract Methods", async () => {
    this.timeout(0);
    it("deploys", async () => {
      const address = mufasa.address;
      expect(address).to.not.be.undefined;
    });

    it("expect decimals to be 9", async () => {
      const decimals = await mufasa.decimals();
      expect(decimals).to.be.equal(9);
    });

    it("expect token name to be Mufasa", async () => {
      const name = await mufasa.name();
      expect(name).to.be.equal("Mufasa");
    });

    it("expect token symbol to be MUFA", async () => {
      const symbol = await mufasa.symbol();
      expect(symbol).to.be.equal("MUFA");
    });

    it("expect total supply to be 100_000_000_000_000", async () => {
      const supply = await mufasa.totalSupply();
      expect(supply.toString()).to.equal(
        ethers.utils.parseUnits("100000000000000", "gwei").toString()
      );
    });

    it("transfers 100_000_000_000_000 to safe address on init", async () => {
      const balance = await mufasa.balanceOf(safeAddress);
      expect(balance.toString()).to.equal(
        ethers.utils.parseUnits("100000000000000", "gwei").toString()
      );
    });
  });
});
