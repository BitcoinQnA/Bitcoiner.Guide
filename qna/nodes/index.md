---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareqna.png
tags: [books, test]
---

#### Simple answers to your common Bitcoin node questions

Learn more about the different types of nodes [here](/node)

***

| Question                                                   | Answer                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [What is a node?]() | A node is a computer that runs the Bitcoin software. Your node is your own version of the Bitcoin blockchain and ruleset. Think of it as your own gateway to the Bitcoin ecosystem. It broadcasts transactions, verifies the bitcoin you receive are legitimate and maintains your privacy by allowing you to participate without reliance on anyone. |
| [Why run a node?]() | Your node = your rules. When you connect your wallet to your node, you are not trusting in anyone else to verify your transactions. A node protects you from bad actors and it also keeps the network decentralised. If you do not have your own, you are trusting in someone else's node to tell you how much bitcoin you have and to broadcast/receive your transactions. |
| [What to consider before running a node?]() | Nodes are designed to be ran 24/7 so depending on hardware used there will be some power costs associated. Most nodes run on low power single board computers such like the Raspberry Pi so running costs are negligible. You should also have an unmetered internet connection as a node will use around 20gb a month. Ensure you buy or build a node that completes the initial block down from scratch otherwise you are trusting someone else's blockchain data. |
| [What types of node are there?]() | It's possible to run a node on your existing computer by simply downloading Bitcoin core. The most common 'plug + play' nodes are MyNode or Nodl. These come with everything required to get started. A lot of users choose to buy their own hardware and install Bitcoin software themselves. Common software choices include MyNode, Ronin Dojo or Raspiblitz (all of which are free and open source). Click here to see our recomended nodes. |
| [What else can a node do?]() | This is very much dependant on the configuration you run. Some common 'extra features' include a lightning node, electrum server, block explorer, mempool viewer, whirlpool implementation and payments infrastructure such as BTC Pay Server. |
| [What is the initial block download?]() | The initial block download (IBD) takes place when you first start your node. Your software is downloading the entire Bitcoin blockchain and verifying the entire transaction history. When synced this allows your node to verify the bitcoin you are receiving are legitimate and reject anyone trying to cheat the system. Sync times will vary with hardware and internet speeds but on average the process takes around 4-7 days. |
| [What is a pruned node?]() |  Node pruning is an option for your node to discard any old data it doesn't require after it has fully validated the entire blockchain. The can be useful if you have storage constraints but it does mean that when enabled your node is not supporting the network by allowing new nodes coming online to download information from your blockchain data. |
| [What is a lightning node?]() |  A lightning node is your gateway to the lightning network which is an experimental scaling solution built on top of Bitcoin. It is generally run on the same device as your Bitcoin node and much like your Bitcoin node it is used to interact with other people on that network via sending and receiving payments. |
| [Can I use someone else's node?]() | Yes you can connect to someone else's node. This is the default for a lot of wallets but you should use with caution for the reasons listed in above. If you have a trusted friend that runs a node this would be a better alternative than trusting a third party company. The ultimate way to participate in the Bitcoin network is to run your own node. |
    


