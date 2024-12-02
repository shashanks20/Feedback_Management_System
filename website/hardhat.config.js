require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const UNICHAIN_URL = process.env.UNICHAIN_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    unichain: {
      url: UNICHAIN_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};