---
layout: page
title: Bitcoin Privacy Guide 
subtitle: Separating your Bitcoin (from its past)
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareprivacy.png
tags: [books, test]
---

### Table of Contents

1.  [What are we separating?](#what-are-we-separating)
2.  [Coinjoin considerations](#coinjoin-considerations)
3.  [Android](#android)
4.  [Desktop](#desktop)
4.  [Other options](#other-options)
5.  [Trade-offs](#trade-offs)


### What are we separating?

The Bitcoin blockchain is completely public, anyone can hop onto a block explorer and look up any transaction from the last hour or the last 10 years. Depending on the tools available and their level of expertise they could analyse and follow any one of these transactions to build up a picture of an entity's spending habits. Chain surveillance firms do exactly this, and using heuristics (*assumptions*) they can cluster transactions together to follow a given entity accross the chain. Aside from this being an invasion of your privacy it also poses the risks we covered in [sourcing](/privacy/get) your bitcoin.

Coinjoin is a privacy tool that prevents this and there are different types of implementations, each with their own take on the same basic idea. Two or more users pool their UTXOs together into a collaborative transaction that is formed in a unique way. The way the transaction is constructed makes it very difficult for surveillance firms to know exactly which transaction output belongs to which of the input owners. 

This is where the separation part comes in... A proper coinjoin implementation will completely break all deterministic links with the coins 'pre coinjoin' past. At best anyone looking at the transaction can come up with a number of possible scenarios as to who owns which piece of bitcoin but they can never be 100% sure. Now imagine you carry out multiple rounds of coinjoin one after the other, the transaction graph quickly becomes very confusing and impossible to track.

[Here](https://www.bit-buy-bit.com/podcast-1/episode/2a64f9e1/ep43-bitcoin-podcast-with-bitcoin-qa-coinjoin) is a podcast episode where I talk through the basics of coinjoin.

### Coinjoin considerations

*  There are fees involved with coinjoins, ensure you understand them fully before starting out
*  Your spending habits after you coinjoin are very important. We will cover those [later](/privacy/spend)
*  Avoid centralised 'mixers' as they actually take control of your bitcoin for a short period of time
*  You should run your own Dojo before using Whirlpool via Samourai for maximum privacy. *All of the node implementations (apart from core) mentioned on the previous page come packaged with Dojo.*
* You should run your own Electrum Server or instance of Core before using Whirlpool via Sparrow for maximum privacy. *All of the node implementations mentioned on the previous page have at least one of these options*


### Android 

Samourai Wallet offers the easiest and most effective coinjoin implementation, Whirlpool. Below is a simple walkthrough but to read a more in-depth look at it's features see [here](/whirlpool) and to see a video demonstrating the process below, [click here](https://youtu.be/hsxnNFmGJ4g).

1.  Calculate your Whirlpool [fees](https://www.whirlpoolfees.com/) based on your chosen amounts and pool sizes
1.  Send some bitcoin into your wallet as outlined [earlier](/privacy/secure/#android)
2.  Click the blue + and press Whirlpool
3.  Once Whirlpool loads, press the icon in the bottom right corner
4.  Press mix UTXOs
5.  Select which UTXOs you want to mix
6.  Pick how quickly you would like the mix to be initiated
7.  Review the transaction details
8.  Begin cycle
9.  Press yes to the box asking if you want to mark your change as 'Do not Spend'
10. Your mix is now underway and you will see your mixed sats in the postmix section of your wallet after a short wait
11. If you leave your funds in postmix you will be eligible for free and unlimited remixes (*chosen at random*)

**Bonus**

* For easier mix management and 24/7 remixing you can pair your Samourai Wallet with Whirlpool GUI (a desktop app) and Whirlpool CLI that come packaged with myNode, Nodl and RoninDojo. The graphic below is an example of how it all fits together.

<p align="center">
<img src="/assets/img/RD1.png" class=responsive width="550" height="300" maxheight="300" />
</p>

### Desktop

Sparrow Wallet has recently implemented the Samourai Wallet Whirlpool coinjoin implementation. Users opting to mix using Sparrow will connect to the same Whirlpool coordinator and as such, will be part of the same postmix liquidity pool. Read the full documentation on this [here](https://www.sparrowwallet.com/docs/mixing-whirlpool.html).

1.  Calculate your Whirlpool [fees](/wpfees) based on your chosen amounts and pool sizes
2.  Send some bitcoin into your wallet as outlined [earlier](/privacy/secure/#desktop)
3.  Open the UTXO tab from the left pane and choose the UTXO(s) you wish to mix
4.  Click 'Mix Selected'
5.  Select the pool you wish to mix in then click 'Preview Premix'
6.  Once happy with the details click 'Broadcast Premix Transaction'
7. Your mix is now underway and you will see your mixed sats in the postmix section of your wallet after a short wait
8. If you leave your funds in postmix you will be eligible for free and unlimited remixes (*chosen at random*)




### Other options 

#### iOS

There is currently no coinjoin option for iOS. Recommended course of action...

* Buy a cheap Android phone and follow the Android steps above
* Install Sparrow Wallet onto your computer and follow the Desktop steps above

#### Joinmarket

[Joinmarket](https://github.com/openoms/bitcoin-tutorials/blob/master/joinmarket/README.md) is by no means a beginner option, something worth exploring as you become more experienced.

[Here](https://www.keepitsimplebitcoin.com/joinmarket/) is a very detailed guide by KIS Bitcoin

### Trade-offs

Coinjoin is a complex topic to wrap your head around and fraught with pitfalls in which you can leak your privacy. Fortunately, tools like Whirlpool are making things almost foolproof. Coinjoin does not erase the past, it simply affords you forward looking privacy. Remember that you can easily undo much of the privacy gained by practicing poor postmix spending habits e.g. merging multiple UTXOs.

Now you have obtained, secured, segregated, labelled and coinjoined your bitcoin in a wallet backed by your own node let's look at how to [safeguard](/privacy/safeguard) it for any long term savings.
