import { ethers } from "hardhat";

async function main() {
  const KittyContract = await ethers.getContractFactory("KittyContract");
  const kittyContract = await KittyContract.deploy();

  await kittyContract.deployed();

  console.log("KittyContract deployed to:", kittyContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
