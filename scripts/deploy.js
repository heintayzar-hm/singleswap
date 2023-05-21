const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS, WHITELIST_CONTRACT_ADDRESS, METADATA_URL, CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");

async function whiteListDeploy() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
}


async function nftDeploy(){
    // Address of the whitelist contract that you deployed in the previous module
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    // URL from where we can extract the metadata for a Crypto Dev NFT
    const metadataURL = METADATA_URL;
    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
    */
    const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

    // deploy the contract
    const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
      metadataURL,
      whitelistContract
    );

    // Wait for it to finish deploying
    await deployedCryptoDevsContract.deployed();

    // print the address of the deployed contract
    console.log(
      "Crypto Devs NFT Contract Address:",
      deployedCryptoDevsContract.address
    );
}

async function cryptoDevsContractDeploy() {
    // Address of the Crypto Devs NFT contract that you deployed in the previous module
    const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

    /*
      A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
      so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
      */
    const cryptoDevsTokenContract = await ethers.getContractFactory(
      "CryptoDevToken"
    );

    // deploy the contract
    const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
      cryptoDevsNFTContract
    );

    await deployedCryptoDevsTokenContract.deployed();
    // print the address of the deployed contract
    console.log(
      "Crypto Devs Token Contract Address:",
      deployedCryptoDevsTokenContract.address
    );
}

async function exchangeContractDeploy() {
  const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so exchangeContract here is a factory for instances of our Exchange contract.
  */
  const exchangeContract = await ethers.getContractFactory("Exchange");

  // here we deploy the contract
  const deployedExchangeContract = await exchangeContract.deploy(
    cryptoDevTokenAddress
  );
  await deployedExchangeContract.deployed();

  // print the address of the deployed contract
  console.log("Exchange Contract Address:", deployedExchangeContract.address);

}

async function main() {
  await exchangeContractDeploy();
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
