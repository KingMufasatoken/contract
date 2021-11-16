import { ethers, upgrades } from "hardhat";

async function main() {
  // rinkeby gnosis safe address https://rinkeby.gnosis-safe.io/app/#/safes/0xbb9A6Fac5Fe3C1BDfb1795eaE828C8cA3E5fCcd0/balances
  const safeAddress = "0xbb9A6Fac5Fe3C1BDfb1795eaE828C8cA3E5fCcd0";
  const Mufasa = await ethers.getContractFactory("Mufasa");
  console.log("Deploying Mufasa contract..");
  const mufasa = await upgrades.deployProxy(Mufasa, [safeAddress]);


  console.log("Mufasa deployed to:", mufasa.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
