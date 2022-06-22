---
---

# Overview

GrantShares consists of four parts:

- Smart contracts
- GitHub issues
- Web Frontend
- Backend

The smart contracts are at the core. They execute the proposals, control the voting mechanism, determine who can vote,
and maintain the treasury. The other three parts are exchangable, but are nontheless important to make GrantShares
usable. The frontend and backend make sure that the proposal process and information is accessible and appealing to
everyone. GitHub is used to discuss proposals created on GrantShares.


Here are some proprties of the GrantShares application:
- GrantShares is permissioned. Becoming a member requires a proposal and, therefore, approval of the existing members.
Voting rights cannot be bought. There is no token involved in membership. The initial members are chosen by Neo
Foundation.
- Anyone can create proposals but it is up to the members to decide which ones get executed.
- Each member has equal voting power, i.e., one vote per member per proposal.
- The GrantShares treasury smart contract owns the assets used for grants. The assets will initially be provided by Neo
Foundation.
- The treasury can only receive funding from addresses that were previously whitelisted via a proposal. Transfers from
other addresses will fail.
- The treasury can only receive tokens that were previously whitelisted via a proposal. Transfers of other tokens will
fail. 
- The smart contracts can handle generic proposals, meaning, they can include any intents that can be executed on-chain.