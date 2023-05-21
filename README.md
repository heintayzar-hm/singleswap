
<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [Kanban Board](#kanban-board)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 SingleSwap <a name="about-project"></a>

SingleSwap involves building a decentralized exchange (DEX) focused on the ETH/Crypto Dev asset pair, implementing a 1% fee on swaps and rewarding liquidity providers with Crypto Dev LP tokens based on their Ether contributions. It utilizes Next.js and Hardhat frameworks for development.

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>Nextjs</summary>
  <ul>
    <li><a href="https://next.com/">React</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://hardhat.com/">hardhat</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- Built an exchange with only one asset pair (Eth / Crypto Dev)
- Decentralized Exchange take a fee of 1% on swaps
- When user adds liquidity, they should be given Crypto Dev LP tokens (Liquidity Provider tokens)
- CD LP tokens should be given proportional to the Ether user is willing to add to the liquidity

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Kanban Board -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Deployed Link](https://exchange-ykcl-2c8arisqh-heintayzar-hm.vercel.app/)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- basic knowledge of web3 and blockchain.
- basic knowledge or next or react.

### Setup

Clone this repository to your desired folder(`web3`):

```sh
 git clone https://github.com/heintayzar-hm/singleswap.git
```


### Install

Install Exchange Project with:

```sh
  cd singleswap
  npm install
```
For the env file,

- Go to the respective folder where you clone.
- At the root folder of your app, Make new file called `.env` and add the following.

```sh
   QUICKNODE_HTTP_URL = https://floral-thrumming-sailboat.ethereum-sepolia.discover.quiknode.pro/cb8537a2a780891ac7ea2b8154945d3cf3b1feff/
    PRIVATE_KEY = <The-meta-mask-private-key>
```

- Run the following.

```
   npm install
   npm run dev
```

### Setup hardhat (Optional)

- There are functions in `scripts/deploy.js`, you can call new functions that you want to call in `main` function
- Currently there are 4 main contracts you can make.
- The network run on sepolia (you can open new `metamask` account) and get some free coins from alchemy or similar website for test.

- Run the following for deploying contracts after you replace the function

```sh
    npx hardhat complie
    npx hardhat run scripts/deploy.js --network sepolia
```

### Run tests

To run tests, run the following command:

```
npx hardhat test
```

## 👥 Authors <a name="authors"></a>

👤 **Hein Tay Zar**

- GitHub: [@Hein Tay](https://github.com/heintayzar-hm)
- Twitter: [@Hein Tay](https://twitter.com/heintayzarhm)
- LinkedIn: [Hein Tay](https://www.linkedin.com/in/hein-tay-zar)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

 ## 🔭 Future Features <a name="future-features"></a>

- Fully Functional Auth Pages including email verifications and forgot password pages
- Make multiple admins

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

 ## ⭐️ Show your support <a name="support"></a>

If you like this project, Please give it a ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

 ## 🙏 Acknowledgments <a name="acknowledgements"></a>

Thanks [@Learweb3.](https://learnweb3.io/) for providing this amazing curriculum.

Thanks microvers for giving this oppournity.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
