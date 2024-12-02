const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("Feedback");
  const contract = await chai.deploy();
  console.log(`Deployed: ${contract.target}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
