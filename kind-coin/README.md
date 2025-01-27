# KindCoin Project

KindCoin exists to revolutionize the way we perceive and practice kindness in everyday life. It aims to incentivize acts of kindness by leveraging blockchain technology, creating a decentralized system where kindness is recognized, rewarded, and perpetuated. By embedding kindness into the fabric of financial interactions, KindCoin aspires to foster a culture of goodwill and collaboration, seamlessly integrated with the decentralized finance (DeFi) ecosystem.

Welcome to the KindCoin repository! This project encompasses the implementation of the KindCoin token, a custom ERC20 token developed on the Ethereum blockchain, alongside the `Lock.sol` time-lock contract. These smart contracts leverage the Hardhat development framework, enabling robust and efficient blockchain deployment.

---

## **Overview**

### **KindCoin**
KindCoin is a decentralized ERC20 token meticulously engineered with OpenZeppelin’s industry-standard libraries to ensure optimal security, scalability, and compatibility. By offering rewards for actions aligned with ethical and altruistic principles, KindCoin incentivizes kindness through a novel tokenomics model. The token aims to embed moral and collaborative values within the decentralized finance (DeFi) ecosystem, thereby promoting behaviors that enhance social trust and cooperation. This token is meticulously designed for seamless integration into the decentralized finance (DeFi) ecosystem.

### **Lock Contract**
The `Lock.sol` smart contract introduces a secure mechanism for users to lock ETH or tokens until a pre-defined unlock time. This functionality ensures adherence to time-based conditions for fund withdrawals.

---

## **Features**

### **KindCoin**
- **ERC20 Compliance**: Fully adheres to the ERC20 specification, ensuring compatibility with Ethereum-based applications.
- **Optional Minting and Burning**: Includes configurable functions for dynamic token supply management.
- **Security and Flexibility**: Constructed using OpenZeppelin’s rigorously tested libraries to maximize reliability.

### **Lock Contract**
- **Time-Lock Functionality**: Implements a robust mechanism that restricts withdrawals until the defined unlock period has elapsed.
- **Customizable Unlock Time**: Allows deployers to specify unique unlock timestamps during contract initialization.

---

## **Getting Started**

### **Prerequisites**
To begin, ensure the following dependencies are installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Hardhat](https://hardhat.org/)

### **Clone the Repository**

```bash
git clone https://github.com/aminoche/kind-coin.git
cd kind-coin
```

### **Install Dependencies**

```bash
npm install
```

---

## **Configuration**

### **Environment Variables**
Create a `.env` file in the root directory and define the following variables:

```plaintext
ETH_PRIVATE_KEY=your-private-key
ALCHEMY_API_KEY=your-alchemy-api-key
```

- `ETH_PRIVATE_KEY`: The private key associated with your Ethereum wallet (used for deploying contracts).
- `ALCHEMY_API_KEY`: API key to connect to Ethereum nodes via [Alchemy](https://www.alchemy.com/).

**Important:** Include `.env` in your `.gitignore` file to prevent sensitive information from being committed to version control.

---

## **Usage**

### **Compilation**
Compile the smart contracts by executing:

```bash
npx hardhat compile
```

### **Testing**
Run the test suite to validate the contract functionality:

```bash
npx hardhat test
```

### **Deployment**
Deploy the contracts to a test network using the following steps:

1. Update `hardhat.config.js` with your desired network configuration (e.g., Goerli).
2. Execute the deployment script:

```bash
npx hardhat run scripts/deploy.js --network goerli
```

### **Gas Usage Report**
Generate a gas report for contract operations during testing:

```bash
npx hardhat test --gas
```

---

## **Project Structure**

```
kindcoin/
├── contracts/          # Solidity smart contracts
│   ├── KindCoin.sol    # ERC20 token implementation
│   ├── Lock.sol        # Time-lock contract
├── scripts/            # Deployment scripts
│   └── deploy.js       # Deployment logic
├── test/               # Test cases for smart contracts
│   └── Lock.js         # Unit tests for Lock contract
├── .env                # Environment configuration (excluded from version control)
├── .gitignore          # Git ignore file
├── hardhat.config.js   # Hardhat configuration file
├── package.json        # Node.js project dependencies
└── README.md           # Project documentation
```

---

## **Testing and Development**

### **Test Development**
All tests are located within the `test/` directory and utilize [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/). Ensure coverage of the following scenarios:

1. ERC20 compliance (e.g., `transfer`, `approve`, and `allowance` functions).
2. Validation of time-based withdrawal logic in `Lock.sol`.
3. Testing edge cases, such as attempts to withdraw prior to the unlock period.

#### **Test Command**

```bash
npx hardhat test
```

---

## **Deployment Details**

### **Network Configuration**
Define the network details in `hardhat.config.js` as follows:

```javascript
networks: {
  goerli: {
    url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
    accounts: [process.env.ETH_PRIVATE_KEY]
  }
}
```

### **Etherscan Verification**
Verify deployed contracts on Etherscan using the following command:

```bash
npx hardhat verify --network goerli <contract-address> "constructor-arg-1" "constructor-arg-2"
```

---

## **Tooling and Libraries**

### **Hardhat Plugins**
This project integrates the following plugins to enhance development:

- [@nomiclabs/hardhat-ethers](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html): Integration with ethers.js.
- [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts): Modular and secure ERC standards.
- [dotenv](https://github.com/motdotla/dotenv): Environment variable management.

### **Additional Tools**
- [Solidity Coverage](https://github.com/sc-forks/solidity-coverage): Code coverage metrics.
- [Waffle](https://ethereum-waffle.readthedocs.io/): Testing framework for smart contracts.

---

## **Best Practices**

1. **Optimize Gas Usage**: Enable the Solidity optimizer in `hardhat.config.js` to minimize gas costs:

   ```javascript
   settings: {
     optimizer: {
       enabled: true,
       runs: 200
     }
   }
   ```

2. **Conduct Security Audits**: Ensure comprehensive audits are performed before deploying to mainnet.

3. **Environment Segregation**: Maintain distinct `.env` files for development and production.

---

## **Contributions**

We welcome contributions to the project. To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

---

## **License**

This project is distributed under the [MIT License](LICENSE).

---

## **Acknowledgments**

- [OpenZeppelin](https://openzeppelin.com/) for providing secure contract libraries.
- [Hardhat](https://hardhat.org/) for its robust Ethereum development tools.

---

## **Contact**

For inquiries or feedback, please reach out:

- **Adil Minocherhomjee**: [adilminocherhomjee@gmail.com](mailto:adilminocherhomjee@gmail.com)
- **GitHub**: [aminoche](https://github.com/aminoche)

---

Happy coding!

