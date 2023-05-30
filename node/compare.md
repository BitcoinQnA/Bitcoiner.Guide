---
layout: page
title: Node.Guide
subtitle: Compare node options
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/sharenode.png
tags: [books, test]
---

<p align="center">
  <a href="/node/core">Core</a> |
  <a href="/node/pap">Plug + Play</a> |
  <a href="/node/diy">DIY</a> |
  <a href="/node/other">Other</a> |
  <a href="/node/compare">Compare</a>
  <br><br>
</p>

| Node                                          | Supported Hardware               | Electrum Server        | Lightning | CoinJoin       | Block Explorer | Mempool Viewer | Dojo |
| --------------------------------------------- | -------------------------------- | ---------------------- | --------- | -------------- | -------------- | -------------- | ---- |
| [Bitcoin Core](/node/core/)                   | Any computer or laptop           | No                     | No        | None           | No             | No             | No   |
| [eznode](/node/other/#eznode)                 | Any computer, laptop or SBC      | Bitcoin Wallet Tracker | None      | None           | Yes            | Yes            | No   |
| [myNode One](/node/pap/#mynode-one)           | RPi 4                            | Electrs                | LND       | Whirlpool + JM | Yes            | Yes            | Yes  |
| [myNode DIY Community](/node/diy/#mynode)     | Rock64, RockPro 64, RPi 4 and VM | Electrs                | LND       | Whirlpool + JM | Yes            | No             | Yes  |
| [myNode DIY Premium](/node/diy/#mynode)       | Rock64, RockPro 64, RPi 4 and VM | Electrs                | LND       | Whirlpool + JM | Yes            | Yes            | Yes  |
| [Nodl One](/node/pap/#nodl-one)               | RockPi 4                         | Electrs                | LND       | Whirlpool      | Yes            | No             | Yes  |
| [Nodl Dojo](/node/pap/#nodl-dojo)             | RockPi 4                         | Electrs                | LND       | Whirlpool      | Yes            | No             | Yes  |
| [RoninDojo Tanto](/node/pap/#ronindojo-tanto) | RockPro 64                       | Electrs                | None      | Whirlpool      | Yes            | Yes            | Yes  |
| [RoninDojo](h/node/diy/#ronindojo)            | Odroid N2, RockPro 64 and RPi    | Electrs                | None      | Whirlpool      | Yes            | Yes            | Yes  |
| [RaspiBlitz](/node/pap/#raspiblitz)           | RPi 4                            | Electrs                | LND       | JoinMarket     | Yes            | Yes            | No   |
| [RaspiBlitz DIY](/node/diy/#raspiblitz)       | RPi 3 and RPi 4                  | Electrs                | LND       | JoinMarket     | Yes            | Yes            | No   |
| [Start9](/node/pap/#start9-server)            | RPi 4, x86_64, VM                | Electrs                | LND+CLN   | JoinMarket     | Yes            | Yes            | No   |
| [Umbrel](/node/diy/#umbrel)                   | RPi 4 and VM                     | Electrs                | LND       | Whirlpool      | Yes            | Yes            | Yes  |

***

### Glossary

[Electrum Server](https://github.com/romanz/electrs) indexes the entire Bitcoin blockchain, and the resulting index enables fast queries for any given user wallet, allowing the user to keep real-time track of balances and transaction histories. Since it runs on the user's own machine, there is no need for the wallet to communicate with external Electrum servers, thus preserving the privacy of the user's addresses and balances.

[Lightning](/lightning) is scaling solution built on top of the Bitcoin protocol. It facilitates smaller, near instant payments between users at very low cost. It prevents the need for every transaction made to take place on the Bitcoin ‘base layer’ whilst still ensuring that the value being transacted abides by the core rules and values of the Bitcoin network.

[CoinJoin](https://bitcoiner.guide/qna/coinjoin) is an on chain privacy solution for Bitcoin. It is designed to break the [common input ownership heuristic](https://en.bitcoin.it/wiki/Common-input-ownership_heuristic) which assumes that all inputs to a transaction belong to the same entity. Bitcoin addresses aren't directly tied to real identities but anyone with enough time and resources (like chain analysis firms) can start to make these links by watching Bitcoin's public ledger. Coinjoin helps prevent this.

A [Block Explorer](https://explorer.btc21.org/) is a website or application that allows you to find the details of any block on the blockchain. You can find data such as number of transactions in a block, sender address, recipient address, fees paid, amount sent, block height and block time. By using an explorer hosted on your own node you can query this data privately.

A [Mempool Viewer](https://mempool.space) is a website or application that allows you to see the current state of the Bitcoin mempool. Most will also allow you to enter transaction ID's to track its position. By using a mempool viewer hosted on your own node you can query this data privately.

[Dojo](https://samouraiwallet.com/dojo) is the backend server required to use the Samourai Wallet in the most private way. It provides simple wallet connection via a QR scan.

***
