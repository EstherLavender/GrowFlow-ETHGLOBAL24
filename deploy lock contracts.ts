onst { ethers, network } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox");

async function deployLockContract() {
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const ONE_GWEI = 1_000_000_000;
  const lockedAmount = ONE_GWEI;

  const [owner, otherAccount] = await ethers.getSigners();
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy((await time.latest()) + ONE_YEAR_IN_SECS, { value: lockedAmount });

  return { lock, owner, otherAccount };
}

async function main() {
  console.log("Deploying Lock contract...");
  const { lock, owner, otherAccount } = await deployLockContract();
  console.log("Lock contract deployed to:", lock.address);
  console.log("Owner address:", owner.address);
  console.log("Other account address:", otherAccount.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
In this script, we first define the deployLockContract function, which deploys the Lock contract using ethers.getContractFactory and ethers.deploy. We use time.latest() to get the current timestamp and add one year to it as the unlock time. We also set the lockedAmount to 1 Gwei.

In the main function, we call deployLockContract and log the deployed contract's address, the owner's address, and the other account's address.

Ensure to update the hardhat.config.js file to include the necessary configurations for our project.
