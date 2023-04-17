---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareqna.png
tags: [books, test]
---

#### Simple answers to the common Lightning Network questions

For a more in depth look at the Lightning Network, see [here](/lightning)

***

| Question                                                   | Answer                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [What is a node?]() | A node is a computer that runs the Bitcoin software. Your node is your own version of the Bitcoin blockchain and ruleset. Think of it as your own gateway to the Bitcoin ecosystem. It broadcasts transactions, verifies the bitcoin you receive are legitimate and maintains your privacy by allowing you to participate without reliance on anyone. |
| [What is the Lightning Network?]() | The Lightning Network is scaling solution built on top of the Bitcoin protocol. It facilitates smaller, near instant payments between users at very low cost. It prevents the need for every transaction made to take place on the Bitcoin ‘base layer’ whilst still ensuring that the value being transacted abides by the core rules and values of the Bitcoin network. You cannot transact on Lightning without owning bitcoin. |
| [Why do we need Lightning?]() | Right now we don’t really NEED the Lightning network because normal bitcoin transactions (commonly referred to as ‘on chain transactions’) are relatively cheap, even if you want a fast confirmation time. Lightning really starts to shine when ‘on chain’ fees increase as the Bitcoin user base increases and the block subsidy decreases. Lightning also shows great promise in smaller, more frequent payment uses cases for things like unlocking online content. |
| [How does the Lightning Network work?]() | Alice opens a payment channel with Bob by making an on chain ‘funding transaction’. The size of this funding transaction dictates how much value Alice can transfer using Lightning. Once the funding transaction is confirmed on the base layer, Alice is free to transact with Bob over lightning as many times as she likes until one or both of them decide they want to close the channel. Each lightning transaction updates the current state of the channel so that neither party can cheat each other out of any funds. When the channel is closed, the most recent ‘channel state’ is broadcast to the Bitcoin network and both parties will receive the relevant balance back to their wallet. |
| [But what if Alice wants to pay someone else?]() | This is where Lightning really shines.  Payment channels can be linked together to find a path to the recipient. Alice does not need to have a channel open with David to send him some sats, the network will find the optimal path to route the payment through other channels. It could look something like this Alice > Bob > Charlie > David. Throughout the route the payment is cryptographically secured so that any intermediaries cannot steal any of the funds that don't belong to them. |
| [Who owns and controls the Lightning Network?]() | Like Bitcoin, the Lightning Network is completely open source and not owned by any single entity. Anyone can run a node and participate in the network completely permission free. There are multiple popular implementations of Lightning which include LND, C Lightning and Eclair. All of these implementations are almost 100% interoperable. |
| [Are there miners on the Lightning Network?]() | No, the Lightning Network is built on top of the Bitcoin base layer and keeps all of the same security features. The minimal fees you pay on Lightning go to network participants who form part of the route your payment takes so it could be literally anyone running a Lightning node. |
| [Does Lightning have its own blockchain?]() | No, Lightning is a network of payment channels all interlinked together. All Lightning channel open and close transactions take place on the underlying Bitcoin protocol. Lightning inherits the Bitcoin blockchain's security. |
| [What are the downsides of Lightning?]() | For someone using the Lightning Network frequently with multiple channels, liquidity management can become tiresome. The network is relatively young and some payments can sometimes fail, but as development continues these instances are becoming far less common. Due to the structure of the network it is not as well suited to larger payments due to the liquidity restraints of each channel. This could change as the network grows and people gain confidence its reliability. |
| [Do I need a node to use Lightning?]() | Much like Bitcoin, you don't need a node to interact with the Lightning network but it is advisable. Remember, if you aren’t running your own node, you are relying on someone else’s. The good news is that most Bitcoin nodes these days come with a built in Lightning node too so you shouldn't have much extra work to do to get set up on Lightning. |
| [What is inbound liquidity?]() |  Inbound liquidity is the measure how much bitcoin you can receive over the Lightning Network. If you simply open a channel to someone else, initially you can only send bitcoin. This is because all of the funds are on your side of the channel. If you opened a channel for 100k sats and then spent 25k, your inbound liquidity would be 25k sats. The better way to gain inbound liquidity is to have someone open a channel to you, that way all of the balance would be on their side of the channel. |
| [What is outbound liquidity?]() |  Outbound liquidity is the measure of how much bitcoin you can send over the Lightning Network. If you open a channel for 100k sats and spend 75k then your outbound liquidity is now 25k sats. Gaining outbound liquidity is as simple as receiving sats in your existing channels or opening a new channel with more sats. Remember, you can never spend more than the total size of your largest channel. Although this is set to change when Multi Path Payments get rolled out. |
| [Where do I start?]() | See our recommended page for which nodes to run, and then decide whether or not you would like a mobile or desktop Lightning wallet. Our personal favourite is Zap which offers both mobile and desktop combined with a very slick user interface. Check out ln.guide for a more in depth look at Lightning. |


    

