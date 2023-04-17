---
layout: page
title: Bitcoin Privacy Guide 
subtitle: Scrutinising your Bitcoin
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareprivacy.png
tags: [books, test]
---

### Table of Contents

1.  [What are we scrutinising?](#what-are-we-scrutinising)
2.  [Node considerations](#node-considerations)
3.  [Node options](#node-options)
4.  [Trade-offs](#trade-offs)


### What are we scrutinising?

As outlined in the [secure](/privacy/secure) page, if you aren't trusting your own node to verify your transactions then you are trusting someone else's. A node is a computer running the 'bitcoin software' that comes with its own copy of the 'bitcoin rules.' Each time a node sees a transaction it will scrutinise the details against its own ruleset to ensure everything is present and correct and that the creator of the transaction isn't trying to cheat the system. By having your wallet connected to your own node, you can be sure that every transaction you receive is compliant to the rules that you, and everyone else participating in the network agrees upon.

If you are trusting someone else's node, you are abiding by their rules. Their rules could be allowing false transactions to hit your wallet leading you to believe you are receiving bitcoin when in reality you aren't. Try spending those bitcoin with someone who is abiding by the 'real' or widely adopted rules and you will be rejected.

From a privacy perspective, trusting someone else's node means that they can see...

* Every transaction you send
* Every transaction you receive 
* All of your balances
* In some cases every address in your wallet (even the currently empty ones)

In a perfect world everyone would have their own node setup before they even get any bitcoin. That way they never have to leak any transactional privacy by relying on other people's nodes to verify their transactions for them. The problem is, it takes seconds to download a phone wallet and receive bitcoin and it takes 3-5 days to set-up a node and download the blockchain so the natural progression works in the reverse.

If, like most, you already have a wallet with bitcoin in that is backed by someone else's node, fear not. All you need to do is set up a new wallet (they're free remember) that is backed by your own node and send your funds across. For an extra level of security I would recommend [coinjoining](/privacy/separate) them before sending but this is not absolutely essential.

[Here](https://www.bit-buy-bit.com/podcast-1/episode/1c6e67f7/ep38-bitcoin-podcast-with-bitcoin-qa-nodes) is a podcast episode where I talk through the basics of nodes.

### Node considerations

The main things to consider when choosing a node to run...

*  Your technical ability
*  Your budget
*  What [features](/node/compare) you require
*  Running costs
*  Bandwidth
*  The level of support/community available
*  Wallet compatability


### Node options

| Difficulty    | Description                        | Setup Guide                                                              | Works with Samourai, Blue or Sparrow? |
|---------------|------------------------------------|--------------------------------------------------------------------------|-------------------------------|
| Super Easy  | Bitcoin Core on a computer | [Bitcoin Core](https://bitcoin.org/en/full-node#windows-instructions)  | No - Built in wallet or works with Specter desktop |   
| Plug + Play   | myNode One                         | [myNode](http://mynodebtc.com/guide/getting_started)                     | All                      |
| Self build or Plug + Play   | RoninDojo                          | [RoninDojo](https://wiki.ronindojo.io)                                   | All             |


### Trade-offs

Depending on the setup you go for, every node comes with it's own tradeoffs. If you want a plug and play option with sturdy hardware that requires little maintenance, it's going to cost you much more than a DIY option built to a budget spec. Another example would be that Bitcoin Core offers the easiest setup but lacks the ability to allow mobile wallets to connect to it. Not good if you want to spend bitcoin when away from your laptop! 

Consider carefully what is important to you before making your decision and don't be afraid to reach out for support. All of the projects mentioned above have very supportive community chat groups that can offer you advice.

Running a node is a big step for many but is an absolute must for the ultimate transaction level privacy. 
  
  
Now you have obtained, secured, segregated and labelled your bitcoin in a wallet backed by your own node, lets [separate it](/privacy/separate) from its past.
