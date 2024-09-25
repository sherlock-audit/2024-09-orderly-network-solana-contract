# Solana Connector

This project is to set up a connector to the Vault program deployed on Solana. The connector is built on the Layerzero OApp framwork with upgradeable setting.

## Prepare

Create an `.env` file in the root directory and copy the content from `.env.example` to `.env`. Then, paste the private key into the `PRIVATE_KEY` field.

## Deployment

To deploy the connector, run the following command:

```bash
npx hardhat compile

npx hardhat sol:deploy --env [ENV_NAME] --contract [CONTRACT_NAME] --network [NETWORK_NAME]
```

- `ENV_NAME`: The environment name, e.g., `dev`, `qa`, `staging`, `mainnet`.
- `CONTRACT_NAME`: The contract name, e.g., `SolConnector`.
- `NETWORK_NAME`: The network name, e.g., `orderlysepolia`, `orderly`.

## Upgrade

To upgrade the connector, run the following command:

```bash
npx hardhat compile

npx hardhat sol:upgrade --env [ENV_NAME] --contract [CONTRACT_NAME] --network [NETWORK_NAME]
```
