const hre = require('hardhat');

async function main() {
  console.log('Starting deployment script...');

  // Step 1: Get the deployer's wallet
  const [deployer] = await hre.ethers.getSigners();
  if (!deployer) {
    throw new Error('Failed to get deployer signer. Check your Hardhat setup.');
  }
  console.log(`Deployer address: ${deployer.address}`);

  // Step 2: Fetch the balance
  console.log(`Fetching balance for deployer address: ${deployer.address}`);
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log(`Deployer balance raw (in Wei): ${balance.toString()}`);

  // Format balance using ethers@6
  try {
    const formattedBalance = hre.ethers.formatEther(balance);
    console.log(`Formatted balance: ${formattedBalance} ETH`);
  } catch (error) {
    console.error('Error formatting balance:', error);
    throw new Error(
      'Failed to format deployer balance. Ensure ethers@6 is set up correctly.'
    );
  }

  // Step 3: Deploy the KindCoin contract
  console.log('Fetching KindCoin contract factory...');
  const KindCoin = await hre.ethers.getContractFactory('KindCoin');
  if (!KindCoin) {
    throw new Error(
      'Failed to get KindCoin contract factory. Ensure the contract is compiled.'
    );
  }
  console.log('KindCoin contract factory is ready.');

  console.log('Deploying KindCoin contract...');
  const kindCoin = await KindCoin.deploy();

  console.log('Waiting for deployment transaction to be mined...');
  await kindCoin.waitForDeployment(); // ethers@6 equivalent of `.deployed()`
  const address = await kindCoin.getAddress(); // Get the deployed contract address
  console.log(`KindCoin deployed successfully to: ${address}`);
}

// Execute the script and handle errors gracefully
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error deploying contract:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  });
