require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.5.16",
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.PROVIDER_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.PROVIDER_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  }
};
