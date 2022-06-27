---
---

# Transparency & Security

## Public State & Code 

In GrantShares, all the actions that change state on the blockchain, e.g., token transfers, parameter changes, etc., are
visible directly on-chain in the GrantShrares contracts. Anyone can verify the history of actions even without using the
web app. Expect the discussion, all proposal information is stored on-chain and verifiable witouth the web app. However,
the web app and the GitHub issues are necessary to make GrantShares usable and to provide a platform for the discussion.

The smart contract code is public and located [here](https://github.com/axlabs/grantshares-contracts). The contracts
were audited by [Red4Sec](https://red4sec.com/en). The latest tag on the repository is the version that is currently
deployed on Neo N3 mainnet.

## Decicion Process

While voting is restricted to GrantShares members, the proposal discussion is open to everyone. Anyone can read the
discussions and anyone with a GitHub account can comment. Sure, the members could ignore the community sentiment when
voting but this would only damage their reputation and credibility (that's why we require members with “skin in the
game”).

:::note
Updating the GrantShares contracts without anyone noticing is not possible. Contract code updates
require a proposal like any other change or action taken by the GrantShares contracts.
:::

## Threat Mitigation

Even with an audit, attack vectors can be present in smart contracts. The funds in the treasury have highest priority
when it comes to protecting the smart contracts from attacks. Second priority are actions that change the general state
of the contracts such that they become useless and have to be abandoned, e.g., remove all members.

Because updating the GrantShares contracts requires going through the whole life cycle of a proposal there is no fast
way of updating the contracts, thereby, fixing vulnerabilities fast. That's why there is a *pause* functionality that
allows the GrantShares members to coordinate and pause all methods of the contracts. Pausing and unpausing requires the
multi-sig account consisting of all members. The multi-sig account doesn't have any other privileges besides pausing and
unpausing the contracts. Once the contract is paused - and only then - the multi-sig account made up of all funders has
the opportunity to withdraw all funds form the treasury. These actions are meant as a last resort. 

The *time lock* phase was introduced to allow for time buffer after voting on a proposal has taken place. If it turns
out only after voting that the proposal has malicious intents, the contracts could still be paused, giving everyone more
time to react to the situation.