### Flashloan with DyDx

In this repo, you can interact with the DyDx to perform a flashloan in mainnet or kovan testnet.


Will you work with [Hardhat](https://hardhat.org/) like development enviroment and the library [Ethers.js](https://docs.ethers.io/) that allow you to interact with remote ethereum node in this case the Mainnet/Kovan test network.

The contract is do for mainnet ,but if you want prove in the Kovan tesnet, just change this address in the actual contract.
```solidity
    DyDxPool pool = DyDxPool(0x4EC3570cADaAEE08Ae384779B0f3A45EF85289DE);

    address public WETH = 0xd0A1E359811322d97991E03f863a0C30C2cF029C;
    address public SAI = 0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359;
    address public USDC = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;
    address public DAI = 0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa;

```

> [Get Faucet](https://faucets.chain.link/) Ether for Kovan Testnet

#### How I do use it?
Well, you have different ways, I propose the easiest:
* First opcion is copy and paste the contract on remix.org, you can interact with the contract easily and quickly.
* The second is to clone this repository and install all dependencies and run script/run-flashloan.js.

### Deployment contract in kovan
You can see the implementation contract on the kovan network [0x64E37bc1417c844fBD9913cfe5B3534DBb4498dE](https://kovan.etherscan.io/address/0x64e37bc1417c844fbd9913cfe5b3534dbb4498de) and you can see the successful flashloan with WETH.


#### Help
You can contact to me in discord like pinajmr#4347 glad to help you.

Remember: _Only your work on Mainnet .If you want to change netowork just change address of contract in the flashloan contract_.