const hre = require("hardhat");

async function main() {

  const FlashLoan = await hre.ethers.getContractFactory("Flashloan");
  const flashLoan = await FlashLoan.deploy().value();

  await flashLoan.deployed();

  console.log("Flashloan deployed to:", flashLoan.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
