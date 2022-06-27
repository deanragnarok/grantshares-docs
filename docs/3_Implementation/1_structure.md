---
---

# Code Structure

The [smart contract repository](https://github.com/axlabs/grantshares-contracts) has three source sets: `main`, `test`,
and `deploy`.

**main**  
Contains the contract code. GrantShares consists of two smart contracts, the `GrantSharesGov` and `GrantSharesTreasury`.
The other classes in the same package are structs and utilities used by the contracts. E.g., the `Intent` class is a
NeoVm struct used to represent a proposal's intents.

**test**  
Contains automated contract tests. The tests make use of neow3j's test library. Checkout the [neow3j
docs](https://neow3j.io) for more information. 

**deploy**  
The deploy source set contains code for manually deploying and invoking the contracts on a private net, testnet and mainnet.