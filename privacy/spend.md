---
layout: page
title: Bitcoin Privacy Guide 
subtitle: Spending your Bitcoin
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareprivacy.png
tags: [books, test]
---

### Table of Contents

1.  [Spending considerations](#spending-considerations)
2.  [Android](#android)
3.  [iOS](#ios)
4.  [Desktop](#desktop)

### Spending considerations

Spending your bitcoin can be a tricky task to get right from a privacy perspective. Fortunately if you have followed the previous steps you are in a perfect position to nail it. We have already covered off many of the pitfalls such as merging UTXOs, particularly those from 'conflicting' sources such as KYC and no-KYC but here is a brief rundown of things to consider when spending bitcoin (even to yourself).

* Check your labels before spending
* Avoid merging UTXOs where possible
* Label your change outputs
* Make every spend a coinjoin (*see below*)


### Android 

**Samourai Wallet Postmix Tools**

Deep dive video on the tools below can be found [here](https://youtu.be/bMyA-Q9oUF4).

#### **Stonewall**

Stonewall builds your transaction in a unique way to increase the deniability of links between the sender and recipient. Once the spending conditions are met the wallet will create this type of transaction automatically and will display the level of entropy the proposed transaction will have. Stonewall is actually a 'fake' mini coin join using only your own UTXOs. STONEWALL can be created from your deposit or postmix accounts, but the algorithm will never mix UTXOs from those accounts together.

Useful for - Any type of spend

#### **Stonewall X2**

Stonewall X2 creates a mini coin join with another Samourai user. It mixes some of both Samourai users UTXOs when paying to any third party to create a high entropy transaction. You don't even need to be in the same room as your fellow Samourai user to create a Stonewall X2 as you can simply share QR codes via encrypted chat.

Useful for - Any type of spend

[Video Guide](https://www.youtube.com/watch?v=8nxQDTN1IlA)

#### **Stowaway**

Stowaway is Samourai's implementation of Payjoin. When paying another trusted Samourai user it creates a transaction that looks just like any other Bitcoin transaction on chain but it's actually a form of mini coin join. The most powerful thing about Stowaway is that the amount being sent will never actually be visible to anyone looking at the blockchain. Stowaway also uses sender AND recipient UTXOs on the input side of the transaction which completely destroys the common-input ownership heuristic for chain analysis firms. Just like Stonewall X2, Stowaway can be constructed in person or remotely.

Useful for - Spending to another Samourai user

[Video Guide](https://www.youtube.com/watch?v=M1rf2jIVKiQ)

#### **Ricochet**

Ricochet creates additional 'hops' or 'distance' between your Samourai wallet activity and the recipient address. This can be beneficial if you are sending to a service such as an exchange who may want to pry into the history of your UTXO’s.

Useful for - Spending to centralised entities that may be using chain analysis


### iOS

The only available privacy preserving spend tool avaiable on iOS to date is PayJoin on BlueWallet. BlueWallet will automatically detect when paying to a third party who is also PayJoin compatible and prompt you if you want to make that type of spend. Unfortunatley, the adoption of this is not yet widespread. You can see a video demo [here](https://twitter.com/bluewalletio/status/1313822205286010883?s=20).

Otherwise, the recommended course of action is to follow the basic steps outlined [here](#spending-considerations) or...

* Buy a cheap Android phone, install Samourai Wallet and follow steps above
* Install Sparrow Wallet onto your computer and follow the steps below

### Desktop

As well as Whirlpool, Sparrow Wallet has also implemented the STONEWALL spend algorithm. Here's how you can use it...

1. Navigate to the send tab using the left pane
2. Enter recipient address, transaction label and amount
3. Set miner fee
4. Choose 'Optimize for Privacy' using the selection in the bottom left corner
5. Click 'Create Transaction' then 'Finalize transaction for Signing'
6. Press 'Sign' to broadcast the transaction
  
***
  
Now you have obtained, secured, segregated, labelled and coinjoined your bitcoin into both mobile and hardware wallets that are backed by your own node and learned how to spend in a privacy focused way. Let's look at some of the [supplementary](/privacy/supplementary) tools available to further lock down your Bitcoin related privacy.
