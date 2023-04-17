---
layout: page
title: Zap
subtitle: Mobile Lightning node controller
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharezap.png
---

## What is Zap?

Zap is a mobile app available for [download](https://zaphq.io/download) on Android and iOS which allows you to send and receive Bitcoin and Lightning payments from anywhere in the world using your own node. There is also a desktop version available. Zap mobile is completely open source and is compatible with any node running LND. It is arguably the simplest remote control Bitcoin/Lightning mobile wallet out there but lacks some of the additional features that other remote control lightning wallets such as Zeus come with.

For clarity, your wallet (and private keys) are on your Lightning node, Zap merely acts as a remote control for it. At present you cannot create a wallet within Zap mobile, although I believe that the team is working on adding this functionality.

---

## Features

Here's a quick rundown of Zap's features...

- Connects to your own lightning node from anywhere in the world
- Manage multiple wallets
- On or off chain payments
- Show balances in BTC, sats or fiat
- Open or close channels on the go
- Passcode security
- Buildable from [source](https://github.com/LN-Zap/zap-android/blob/master/docs/INSTALL.md)

---

## Connecting Zap to your myNode

In this article I'm going to focus on how to connect Zap on your Android phone, to your [myNode](http://mynodebtc.com/) (which runs LND) but the instructions will be almost identical iOS and for any other node implementation running LND. I'm going to assume that you have already set up Lightning on your myNode and created a wallet, if you haven't, d[o that first](https://mynodebtc.com/guide/create_lightning_wallet) before continuing with this short guide.

*Note - Remote Tor connection via Orbot is advertised for Android, but did not function for me despite much tinkering! Native Tor connectivity is advertised for iOS but again, I was unsuccessful in getting a connection.*

**1.** Download and install Zap from your chosen source

**2.** When you open Zap you will be greeted with this screen, press 'Connect to Remote Node' and your phone camera should open.

<p align="center">
<img src="/assets/img/zap1.png" class=responsive width="332" height="402" maxheight="300" />
</p>

**3.**  Log into the LND Connect page of your myNode and click on the GRPC Local IP tab and scan this with the Zap.

<p align="center">
<img src="/assets/img/zap2.png" class=responsive width="510" height="360" maxheight="300" />
</p>

**4.** You will then get a warning box pop up to double check the credentials are correct, if they are press ok.

<p align="center">
<img src="/assets/img/zap3.png" class=responsive width="302" height="214" maxheight="300" />
</p>


**5.** You should now see the total balance of your lightning wallet. From here you can send or receive on-chain or lightning funds, view your transaction history and manage your channels.

<p align="center">
<img src="/assets/img/zap4.png" class=responsive width="248" height="490" maxheight="300" />
</p>


<p align="center">
<img src="/assets/img/zap5.png" class=responsive width="248" height="490" maxheight="300" />
</p>

<p align="center">
<img src="/assets/img/zap6.png" class=responsive width="248" height="490" maxheight="300" />
</p>


Now, if we were to stop at this point you would only be able to use Zap when connected to the same network as your node, which isn't much fun! Fortunately for myNode premium users we can utilise the Open VPN feature to leverage the power of Zap from anywhere in the world.

Once you have configured OpenVPN using [this](https://mynodebtc.com/guide/vpn) guide, all you need to do when outside of your local network is switch on OpenVPN. All of your web traffic will then be routed through your home network and you can utilise all of Zap's features remotely.

## Other node configurations

**RaspiBlitz** users please check out [this guide](https://github.com/openoms/bitcoin-tutorials/tree/master/ZAPtoRaspiBolt) by [@Openoms](https://twitter.com/openoms) on how to connect to your node.

**Nodl** users - Go to the **LND tile** > **LND configuration** > **gRPC (Zap)** QR-Code (hidden for your safety, don't show if anyone's watching) > click the **show / hide** button

---

If you are new to Zap and Lightning and want to have a play around, feel free to open a channel with my [node](https://1ml.com/node/03bef00428475299f7bc509d2eb86143cef43af5f1d1f43f3e6ea4d319d1e53714). To do so, fund your myNode on chain wallet with the desired amount of sats and then open Zap. Go to **settings** > **manage lightning channels** > **hit the orange '+'** then scan the QR code. Decide how much you want to open the channel for and then press **'Open Channel'**. Once the transaction has confirmed on chain you are now free to transact via the lightning network.

*Disclaimer - All views expressed in this article are my own and not those of the Zap team.*








