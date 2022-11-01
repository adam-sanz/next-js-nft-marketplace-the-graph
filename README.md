<h2>Full Blockchain, Solidity & Full-Stack Web3 development with JavaScript </h3>

<br />

# Trying out / testing

<p>To get a local copy up and running follow these simple example steps.</p>
<p>You will need to install either <strong>npm</strong> or <strong>yarn</strong> to run the commands, and <strong>git</strong> to clone the repository.</p>

## Installation

1. Clone the whole repo:
   ```sh
   git clone https://github.com/adam-sanz/next-js-nft-marketplace-the-graph
   ```
2. Install NPM packages using `yarn` or `npm install`.

## Usage

1. You can update the contracts addresses in `constants/contractAddresses.json` to match the deployment addresses from your deployed contract `https://github.com/adam-sanz/hardhat-nft-marketplace-contract`:

```json
{
  "5": {
    "NftMarketplace": ["ethereum-goerli-marketplace-address"],
    "BasicNft": ["ethereum-goerli-nft-address"]
  },
  "80001": {
    "NftMarketplace": ["polygon-mumbai-marketplace-address"],
    "BasicNft": ["polygon-mumbai-nft-address"]
  },
  "421613": {
    "NftMarketplace": ["arbitrum-goerli-marketplace-address"],
    "BasicNft": ["arbitrum-goerli-nft-address"]
  }
}
```

To get it to work locally, you will need to navigate to `https://github.com/adam-sanz/hardhat-nft-marketplace-contract` to run a local node with `yarn hardhat node` and deploy the contracts with `yarn hardhat run scripts/deploy.js --network localhost`.

2. Launch the local development server with `yarn dev` or `npm run dev`.

#

### Achievements

- Building multiple self hosted subgraphs (Goerli, mumbai) to index the marketplace contract events (The Graph Studio)
- Using The Graph CLI to deploy the subgraph
- Querying the subgraph with GraphQL & Apollo client
- Hosting the Marketplace:
  - Fleek (IPFS): https://muddy-hall-8727.on.fleek.co/

### Bonus achievements

- Using Rainbowkit & Wagmi to interact with the blockchain (Wallet connection & transactions with the smart contract)
- Displaying 2 different marketplace listing pages for the chains it's deployed on (Polygon & Ethereum testnets)
- Deploying 2 different subgraphs with The Graph Studio & Hosted Services on these 2 networks
- Handling notifications: success, error & displaying pending transactions with React-Toastify
- Building a minting page for the NFT that can be listed
- Customizing the UI & UX
- Using Antd Design for various components (Modal, Button, Input) & Skeleton for loading cards
- Listings filtering (All & Owned by the user)

### Skills

[![Solidity]](https://soliditylang.org/)
[![JavaScript]](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![ReactJS]](https://reactjs.org/)
[![NextJS]](https://nextjs.org/)
[![Rainbow]](https://www.rainbowkit.com/)
[![Wagmi]](https://wagmi.sh/)
[![TheGraph]](https://thegraph.com/en/)
[![ApolloGraphQL]](https://www.apollographql.com/)
[![GraphQL]](https://graphql.org/)
[![Antd]](https://ant.design/)

#

[solidity]: https://custom-icon-badges.demolab.com/badge/Solidity-3C3C3D?style=for-the-badge&logo=solidity&logoColor=white
[javascript]: https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black
[reactjs]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[nextjs]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[rainbow]: https://custom-icon-badges.demolab.com/badge/Rainbowkit-032463?style=for-the-badge&logo=rainbow
[wagmi]: https://custom-icon-badges.demolab.com/badge/Wagmi-1C1B1B?style=for-the-badge&logo=wagmi
[antd]: https://img.shields.io/badge/Ant%20Design-0170FE.svg?style=for-the-badge&logo=Ant-Design&logoColor=white
[thegraph]: https://custom-icon-badges.demolab.com/badge/TheGraph-0C0A1C?style=for-the-badge&logo=thegraph&logoColor=white
[apollographql]: https://img.shields.io/badge/Apollo%20GraphQL-311C87.svg?style=for-the-badge&logo=Apollo-GraphQL&logoColor=white
[graphql]: https://img.shields.io/badge/GraphQL-E10098.svg?style=for-the-badge&logo=GraphQL&logoColor=white