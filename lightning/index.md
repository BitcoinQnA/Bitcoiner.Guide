---
layout: page
title: Lightning Guide
subtitle: A beginners guide to the Lightning Network
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareln.png
tags: [lightning, lightning network]
---

<p align="center">
  <a href="/lightning/de">Deutsch</a> |
  <a href="/lightning/fr">Français</a> 
  <br><br>
</p>

## About

This page aims to help people understand a little more on the mechanics of Lightning and how it interacts with the underlying Bitcoin network. We aim to achieve this by using simple terminology and without getting too deep into the technicals, although there will be some further reading linked for those that want to take things a step further. Thanks to the developers of the various applications that interact with Lightning, many of the concepts outlined here are obfuscated away behind simple user interfaces. However, it always pays to have a good base level of understanding to help a user be more aware of what is happening when they send or recieve a payment via Lightning. 

***

## Table of Contents 

1.  [Get started](#get-started)
1.  [The Lightning/Bitcoin stack](#the-bitcoin-and-lightning-stack)
2.  [Channels](#channels)
3.  [Transactions](#transactions)
4.  [Drawbacks](#drawbacks)
5.  [FAQ](#faq)
6.  [Tools](#lightning-tools)
7.  [Other resources](#other-resources)

***

## Get started

Theory is great but there's nothing quite like getting your hands dirty! Once you're set up, feel free to [send](/contact) me an invoice for a few sats to test your setup.

Download [Breez](Https://Breez.technology), backup your seed phrase and you are ready to receive via Lightning. Your channels are managed for you (for a small fee) and you can even send/receive Bitcoin on chain. The app will deal with this on your behalf using submarine swaps and will send or deposit the equivalent amount of sats via Lightning. [Here](https://youtu.be/5zhW7ilOjWg) is what that process looks like. 

If you want to do things through your own [node](/node), then using an implementation such as myNode or RaspiBlitz makes set up easy. They come pre packaged with node management tools like RTL and Thunderhub and make connecting [mobile wallets](/wallet/lightning) like Zap or Zeus very simple. Here is a simplified workflow for using these processes...

1.  Setup your node
2.  Enable Lightning and create a wallet
4.  Decide how much you want to open the channel with based on your expected spending habits
4.  Fund your new on chain wallet with the desired amount of sats 
3.  Identify a suitable channel partner using the advice [below](#who-to-open-a-channel-with) and obtain their node's public key
5.  Open the channel using RTL or Thunderhub and wait for it to be confirmed on the blockchain
6.  Select a mobile wallet and connect it to your node using the guides relevant to your chosen node/wallet combo (*this is completely optional as RTL or Thunderhub can be used to transact, but are not mobile native*).
7.  You can now send some sats over Lightning using your own node
8.  See the steps outlined [here](#drawbacks) for gaining some inbound liquidity to allow you to receive sats

***

## The Bitcoin and Lightning stack

The Bitcoin 'base layer' (the blockchain) cannot facilitate enough transactions to allow billions of people to use it every day. For example, if a couple of million people suddenly wanted to start using the network daily for everyday purchases, the transaction queue and fee rate would quickly spike as people compete to get their transactions processed. To aleviate this and enable the network to scale to cope with the expected exponential increase in transaction numbers, a layered system is being worked on and rolled out, much like the [Internet Protocol stack](https://en.wikipedia.org/wiki/Internet_protocol_suite).

Of course these transaction levels could be drastically increased by using a centralised database, similar to the current financial system we have today. But that wouldn't be very 'Bitcoin', would it? Transactions could be censored, privacy would be non-existant and we would be no better off. Enter the original 'layer 2'  Bitcoin solution, [The Lightning Network](https://lightning.network/lightning-network-paper.pdf).

The Lightning Network is scaling solution built on top of the Bitcoin protocol. It facilitates smaller, near instant payments between users at very low cost. It prevents the need for every transaction made to take place on the Bitcoin ‘base layer’ whilst still ensuring that the value being transacted abides by the rules of the Bitcoin network. It is trustless, with no centralised databases and every part of the Lightning Network starts from and finishes up, on the Bitcoin blockchain. Users can exit 'layer 2' and return to the base layer at any time they like. 

<p align="center">
<img src="/assets/img/lngraph.png" class=responsive width="750" height="350" maxheight="300" />
</p>

***

## Channels

The Lightning Network consists of thousands of two party payment channels. These payment channels enable those two users to pay one another back and forth as many times as they like, almost instantly and with no blockchain fees. 

A channel is opened by one or two users locking up an amount of sats into an on chain 'funding transaction' that creates a 2 of 2 multi-signature wallet on the Bitcoin network, with each user receiving one of the keys. The opening channel 'state' will reflect the amount a user contributes and each party will sign off to say that they accept this is correct. This 'sign off' is actually an unbroadcasted Bitcoin transaction containing the signature of both parties which are passed to one another via the Lightning network. These signed but unbroadcasted transactions allow either party to close the channel at any point and ensures the sats contained within are returned 'on chain' to their rightful owner.

<p align="center">
<img src="/assets/img/channelopen.png" class=responsive width="650" height="400" maxheight="300" />
</p>

<p align="center">
Simple illustration of a channel open transaction
</p>

Each time a payment is made from person A to person B, sats are pushed from one side of the channel to the other (think beads sliding along an abacus). The two parties then sign a Bitcoin transaction to reflect the updated channel balance of each and pass across to the other participant. This process can be repeated an unlimited amount of times and these signed transactions are only ever broadcast to the Bitcoin network in the event of a channel closure. 

<p align="center">
<img src="/assets/img/directpayment.png" class=responsive width="650" height="400" maxheight="300" />
</p>

<p align="center">
Simple illustration of a direct channel payment
</p>


## Who to open a channel with?

You can open a channel with pretty much any network participant you like, however there are a number of things to consider before doing so...

* **Is it someone you are likely to be transacting with often?** If they are, it makes sense to have a direct channel open to minimise routing fees.
* **Are they a reliable peer?** If they are offline regularly this will cause you issues when sending or receiving transactions.
* **Are they well connected?** If you only have 1 or 2 peers, it pays for them to be fairly well connected so that you can route transactions through them across the network. This will become clearer in the next section on transactions.
* **Are they trustworthy?** This is covered in detail below, but your peer has the option (although unlikely to succeed) to attempt to cheat you when closing a channel. It can save you some hassle to choose a peer you know or a public node entity that is commonly accepted as being an honest node operator

You can compare these stats and many more when choosing a peer at [1ml](https://1ml.com/) or use a simplified version [here](https://nodes.lightning.computer/availability/v1/btc.json) that gives nodes an aggregated score based upon a combination of things like uptime, liquidity and how well connected they are. It then displays the best 5%.

***

## Channel Closures

Much like a channel open, a channel closure is an on-chain Bitcoin transaction. Channel closures occur when one or both parties want to settle their balance back to the Bitcoin network. There are three types of channel closures that can occur with Lightning and in all instances the fees are paid by the person that opened the channel.

**Collaborative close**

Where one party initiates a channel closure, communicates this with their channel partner. Both parties agree to close the channel and the most recent state is broadcast to the network and each participant receives their sats back to their on chain wallet. This scenario covers the vast majority of all Lightning channel closures. 

**Force Close**

Where one party closes the channel without the consent of their counterpart. These types of closures generally occur when one of the channel parties is unreachable. For a force close to take place, one user simply broadcasts the most recent channel state known to them. Once a force close is confirmed onto the blockchain, the user that initiated the force close will have their balance locked for a set amount of time. This enables their counterparty to see the channel close and come back online to confirm the channel state. If this does not happen, the party that closed the channel's on chain funds will become spendable after the lock time (usually 2016 blocks or two weeks) has ended.

**Disputed close**

A disputed close arises from a force close being initiated. If the initiating party publishes an old channel state that favours them and pays them more sats back on chain, the party having the channel closed on them can dispute the closure if they disagree with the outcome. To trigger this dispute they simply bring their node back online within the lockout period (typically 2016 blocks or 2 weeks). Alternatively if that isn't an option because their node is in a different geographical location, they may have chosen to set up a [Watchtower](https://bitcoinmagazine.com/articles/watchtowers-are-coming-lightning) service that will monitor their channels and act on their behalf for a small fee. 

If the party creating the dispute can successfully publish a more recent channel state than the one broadcast by their channel partner, their node will be able to publish a [Justice transaction](https://bitcoinmagazine.com/articles/bitmex-research-confirms-lightning-justice-works) and claim the entire balance of the channel. The threat of such a scenario is enough to ward off most dishonest Lightning operators for fear of losing all of their funds.

***

##  Transactions

Lightning transactions are settled within a few seconds and cannot be recalled, undone or subsequently altered. The clever thing is, Lightning achieves this without the need to wait for a block confirmation on the blockchain whilst still maintaining Bitcoin's security principles because any Lightning participant can settle on chain whenever they like.

Being able to do fast and cheap payments to a single user might be beneficial if you are conducting many transactions but don't forget that each channel has a blockchain footprint of two on chain transactions, so opening a channel to do just a couple of payments is counter productive. Lightning is not always the answer. So what happen's when a user wants to make a Lightning payment to someone they don't have a channel open with, surely they don't need to have to open channels with every person they want to transact with? 

Thankfully not, this is where the Lightning Network starts to shine! Provided you have 1 or 2 channels to fairly well connected nodes, you can route transactions to people you aren't directly connected with, via people you have a direct connection (a channel) with.

<p align="center">
<img src="/assets/img/txroute.png" class=responsive width="650" height="380" maxheight="300" />
</p>

<p align="center">
Alice routing a payment to Dan, despite not having a direct channel with him.
</p>

This type of multi-hop transaction is carried out in a trust free way using a process called [onion routing](https://wiki.ion.radar.tech/tech/lightning/onion-routing). This method allows for secure transfer of 'messages' known as Hashed Time Locked Contracts or [HTLC's](https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts). HTLC's are structured in such a way that each 'hop' only sees the information they need to take their fee and continue the payment to the next participant in the route until it reaches the final destination, the recipient.

Here is a simplified run down of what happens for the transaction above to be successful. It sounds complicated, but it all happens under the hood in a matter of seconds.

1.  Dan sends Alice an invoice (a payment instruction) for 10,000 sats. This is generated by Dan's Lightning wallet and can be sent to Alice via any communication method
2.  Alice receives the invoice and opens it with her Lightning wallet. She checks the details and confirms the invoice payment
3.  Alices Lightning node uses it's knowledge of the Lightning network to look for a suitable path to route the payment to Dan
4.  Once a route is found, the initial hop goes to Bob, whom Alice has a direct channel with
5.  Alice's message to Bob says that if he sends 10,001 sats to Carol, he can keep 1 sat for himself
6.  They update their channel state
7.  Bob sends a message to Carol to say that if she sends 10,000 sats to Dan, she can keep 1 sat for herself
8.  They update their channel state
9.  Carol sends a message to Dan, which Dan has a secret to unlock, allowing him to claim the 10,000 sats from Alice
10. They update their channel state
11. Alice's wallet tells her the transaction was successful

*There are no 'real world' identities in Lightning, the names above are purely for illustration purposes. Each participant has a Node Public Key which acts as their 'Lightning ID'.*

***

##  Drawbacks

Whilst the Lightning Network provides a fantastic scaling solution for Bitcoin, it of course has some limitations. These are outlined breifly below...

* **Channel management** - If a user makes a lot of payments in a single direction, channels can become unbalanced, meaning that all of the funds are stuck on one side of the channel. This then requires the user to take action by balancing their channels. This can be done by circular rebalancing (paying yourself out of one channel and into another) or via a [submarine swap](https://lightning.engineering/loop/) service that allows you to drain off or fill up an existing channel for a small fee. Most of the common Lightning node [management tools](#lightning-tools) have some form of swap service built in.

* **Inbound liquidity** - If a user opens a channel to someone else, all of the funds intially sit on their side of the channel. This means they can only send payments and cannot receive. Lightning wallets like [Breez](https://breez.technology/) and [Pheonix](https://phoenix.acinq.co/) have recently released upgrades that mitigate this by opening channels [on the go](https://medium.com/breez-technology/the-breez-release-candidate-getting-lightning-ready-for-the-global-takeover-b5d1f9756229) as required. However for those running their own Lightning Node and managing their own channels, these are the main ways around this...
  * Get someone else to open a channel to you. Certain companies like [LN Big](https://lnbig.com/) will reciprocate any channels opened with to them   
  * Spend some sats 'away' to the other side of the channel
  * Purchase some inbound liquidity from a service like [Lightning Pool](https://lightning.engineering/posts/2020-11-02-lightning-pool/)
  * Use a [submarine swap](https://wiki.ion.radar.tech/tech/research/submarine-swap) service

* **Channel Size** - If a user opens a channel for 1 million sats and then needs to make a payment of 1.5 millions sats, they cannot do so without the use of [Multi Path Payments](https://lightning.engineering/posts/2020-05-07-mpp/) which allows the use of more than one payment channel controlled by a single user to route a transaction. Fortunately, this is fast becoming standard practice and hugely increases the user experience and improves payment success rates

* **Route liquidity** - If Alice wants to send a large payment to Dan over Lightning, she needs all of the people on her chosen route to have at least that amount of channel balance otherwise the payment will fail. This only really becomes an issue for larger payments.

* **Hot Wallets** - Due to the nature of the Lightning network, a user's Lightning node needs to be online 24/7 to acknowledge and sign transactions back and forth. This means that it is advisable that users do not lock up large amounts of bitcoin without taking proper security and backup precautions.

* **Backups** - Bitcoin users will be used to backing up their seed phrase and Lightning wallets are no different. However, the most common Lightning implementation [LND](https://github.com/lightningnetwork/lnd) also has [static channel backups](https://wiki.ion.radar.tech/tutorials/troubleshooting/static-channel-backups#solution-2-static-channel-backups-scb) to allow users to recover their off chain Lightning funds in the event of hardware failure or similar. It is good practice to download a copy of your SCB file when opening or closing any channels. How you achieve this will depend on the way you interact with your Lightning node but most of the common approaches will have a download button somewhere within the user interface.

***

## FAQ

**Do I need to use Lightning?**

There is no right or wrong answer here. At present Bitcoin fees are still fairly cheap which makes on chain transactions acceptable for 95% of users. But for those who regularly transact using smallers amounts, Lightning presents the opportunity to save on fees and also benefit from near instant transaction settlement.

**Do I need a node?**

Much like Bitcoin, you don't need a node to interact with Lightning, but running your own is the most private and secure way to do so. If you aren't trusting your own, you are trusting someone else's. Fortunately, most of the common Bitcoin nodes come packaged with a Lightning implementation too. Check them out in the Lightning tools section below.

**Who maintains the Lightning Network?**

The Lightning network is an open protocol that many people work on and contribute towards, all implementations work to the [B.O.L.T](https://github.com/lightningnetwork/lightning-rfc/blob/master/00-introduction.md) open standard and the common implementations are completely interoperable. They are...

1.  [LND](https://github.com/lightningnetwork/lnd)
2.  [C Lightning](https://github.com/ElementsProject/lightning)
3.  [Eclair](https://github.com/ACINQ/eclair)

**Is there a 'Lightning coin'?**

No, Lightning transactions essentially transfer ownership of bitcoin from on person to another.

**Why do payments fail?**

Payment failures occur for many different reasons, however the most common is that the node you are transacting through cannot find a suitable payment route to the destination.

**What does balanced channels mean?**

Having a balance channel simply means that you have a fairly equal amount of sats on both sides of your channel. Think of it like an abacus where there are an equal amount of beads on each side. This ensures the user is in the best position to send **or** receive via Lightning, it is also beneficial for those wanting to earn sats by being a [routing node](https://blog.lightning.engineering/posts/2019/11/07/routing-guide-2.html), though that concept is for the more advanced user.

Using the example below, the blue balance on the left is the 'local balance'. This represents the size of the balance on my side of each channel and is how much I can **spend** within each. The green balance on the right is the 'remote balance'. This represents the size of the balance on my peer's side of the channel and is how much I can **receive** within each. 

<p align="center">
<img src="/assets/img/channels.png" class=responsive width="650" height="300" maxheight="300" />
</p>

<p align="center">
Channel balance graphs from Thunderhub
</p>

**How do I balance my channels?**

The two most common Lightning node management tools [Ride the Lightning](https://twitter.com/Suheb__/status/1228470045715681280?s=20) and [Thunderhub](https://apotdevin.com/blog/thunderhub-balancing) make this very simple within the user interfaces. Click the links for video demo's of both.

**What happens if my node breaks while I have open channels?**

The optimal solution is to revive your node and avoid the need to close your channels in the first place, however this won't always be possible and this is where backups are crucial. You can import your Lightning Wallet seed and static channel backup file into another Lightning Node which will trigger a closure notification to all peers and return your sats back to your on chain wallet This process is possible through the command line but is the easiest way to do so is through interfaces like RTL or Thunderhub. Another outcome could be that a Lightning peer may notice that you are offline and choose to force close the channel (hopefully in an [honest manner](#channel-closures)), this will return any sats in that channel back to your on chain wallet.

**Why do my channel balances change over time?**

This is likely because someone has routed a transaction through your node. This has the effect of moving some of the balance from one side of the channel to the other. If you do not want this to happen, you can specify that your channel is private at the time of opening. This effectively shields it from view for the rest of the network.

**How do I get my sats off Lightning?**

You can close a channel, which will refund your balance back to your on chain wallet. Alternatively, if you have received a lot of Lightning payments and your channel balance is getting full, you can complete a [loop out](https://lightning.engineering/loop/) which will drain a percentage of your channel balance back to an on chain wallet, freeing up some channel capacity for you to receive again. The reverse operation (loop in) can be used to 'top up' your channel balance if you have made lots of payments and no longer have sufficient outbound liquidity.

[CoinOS](https://coinos.io/) offers another good solution for swapping between on chain and off chain with ease. Be sure to use the non-custodial option to negate any third party risk.

**Can I make my channel larger after I have opened it?**

No, channel sizes are fixed at the time of opening. However, you can leverage multiple channels at the same time using Multi Path Payments.

**Can I make money on the Lightning Network?**

Yes, technically you can earn sats via routing. However, the gains to be had vs the node and channel management required put this practice out of reach for the average Lightning user.

**How much does it cost to open or close a channel?**

That depends on the current state of the Bitcoin [mempool](https://mempool.space) at the time and the fee rate negotiated with your channel partner.

**What is Keysend?**

Keysend is a development that allows for spontaneous payments to be routed without an invoice. 

**What are MPP?**

[Multi Path Payments](https://lightning.engineering/posts/2020-05-07-mpp/) allows a user to send payments that are larger than the capacity of their single largest channel by utilising the liquidity of more than 1 channel at the same time. This needs to be active at the node level

<br/>

> If after reading this guide you want to try Lightning for yourself but think you'd benefit from a more personalised tuition approach, I offer private [support calls](/support).

***


##  Lightning Tools

* [Wallets](/wallet/lightning)
* [Nodes](/node)
* [Lightning Network Stores](https://lightningnetworkstores.com/)
* [Network Explorer](https://1ml.com/)
* [Lightning tips](https://tippin.me/)


##  Other Resources

* [White paper](https://lightning.network/lightning-network-paper.pdf)
* [In depth Lightning Network explainer](https://dev.lightning.community/overview/)
* [Mastering the Lightning Network Book](https://github.com/lnbook/lnbook) (*Still being written*)
* [Lightning Wiki](https://lightningwiki.net/index.php/Main_Page)
* [Lightning Node Management by Openoms](https://openoms.gitbook.io/lightning-node-management/)
* [Extensive list of Lightning resources](https://github.com/bcongdon/awesome-lightning-network)
* [Another Lightning resource hub](https://www.lopp.net/lightning-information.html) 

## Videos

* [Ministry of Nodes LN overview](https://youtu.be/39HRCfMQ_ZU)
* [Ministry of Nodes practical application](https://youtu.be/DfRYJcBsfkA)
* [TFTC Breez Wallet walkthrough](https://youtu.be/5zhW7ilOjWg)
* [BTC Sessions full Lightning intro and setup guide](https://youtu.be/KItleddMYFU)
* [BTC Sessions Phoenix Wallet walkthrough](https://youtu.be/Cx5PK1H5OR0)
* [KIS Bitcoin RTL walkthrough](https://www.keepitsimplebitcoin.com/nodl-lightning-node/)

## Podcasts

* [Stephan Livera - Managing your Lightning node](https://stephanlivera.com/episode/135/)
* [What Bitcoin Did - Intro to Lightning #1](https://www.whatbitcoindid.com/podcast/the-beginners-guide-to-bitcoin-part-13-the-lightning-network-with-jack-mallers)
* [What Bitcoin Did - Intro to Lightning #2](https://www.whatbitcoindid.com/podcast/christian-decker-an-introduction-to-the-lightning-network)


