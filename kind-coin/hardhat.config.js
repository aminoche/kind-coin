require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: '0.8.17', // Matches the version you used to write the KindCoin contract
  networks: {
    goerli: {
      // Configures the Goerli testnet
      url: 'https://eth-sepolia.g.alchemy.com/v2/UpgohQ0jaKQHlZUrJ9dg_Yit8rp3OATG', // Alchemy's node URL
      accounts: ['YOUR_PRIVATE_KEY'], // Your wallet private key
    },
  },
};
