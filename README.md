# Mufasa Token Contract

Mufasa token contract with a fixed supply of a `100_000_000_000_000`.

Run the following tasks to compile and test the contract:

```shell
npm install
npx hardhat node
npx hardhat run scripts/deploy.ts
npx hardhat test
```

To see the minted token on the Rinkeby network, run the following command:

```shell
npx hardhat run scripts/deploy.ts --network rinkeby
npx hardhat test --network rinkeby
```

#### Rinkeby Gnosis Safe

view the gnosis-safe on rinkeby network [here](https://rinkeby.gnosis-safe.io/app/#/safes/0xbb9A6Fac5Fe3C1BDfb1795eaE828C8cA3E5fCcd0/balances)

