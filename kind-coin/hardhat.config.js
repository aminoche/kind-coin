require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.28', // For contracts like Lock.sol
      },
      {
        version: '0.8.20', // For OpenZeppelin dependencies
      },
      {
        version: '0.8.17', // Your KindCoin contract
      },
    ],
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_URL, // Alchemy or Infura URL stored in .env
      accounts: [process.env.ETH_PRIVATE_KEY], // Your wallet private key stored in .env
    },
  },
};
