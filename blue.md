---
layout: page
title: BlueWallet
subtitle: Feature rich + cross platform mobile wallet
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/shareblue.png
---

## What is Blue Wallet?

Blue Wallet is a mobile Bitcoin and Lightning wallet available on Android and iOS. An APK can also be downloaded directly from their [website](https://bluewallet.io/). Blue Wallet comes packed with features and is completely open source. One of Blue Wallet's main strengths is simplicity, it takes precisely 4 clicks to create a wallet. Perfect for Bitcoin newcomers!

## Features

Here's a quick rundown of Blue's features...

- Connect to your own node via Electrum (local IP only so you will need a VPN for remote access outside your nodes network)
- Connect to your own lightning node via [LND Hub](https://github.com/BlueWallet/LndHub)
- Manage multiple wallets
- Add entropy via dice rolls when creating a wallet
- Show balances in BTC, sats or fiat
- Watch only wallets
- Plausible deniability feature *(hides main balance in case of attack)*
- Replace by fee *(bump transaction fee option)*
- PSBT *(works with your *[*Coldcard*](https://www.bitcoinqna.com/post/coldcard-101)*)*
- Lightning app marketplace
- Local trader interface for buying and selling via [HodlHodl](http://hodlhodl.com)

---

## Connecting Blue Wallet to your node

This is not essential to use Blue Wallet but if you have spent any time at all on my website then you would know by now that if you aren't trusting your own node to interact with Bitcoin, you are trusting someone else's. If you aren't interested in this right now feel free to skip this section and continue on with **Creating a wallet** below.

Blue Wallet connects to your own node using Electrum Server, a version of which comes with all of the popular node [implementations](/node).  Here's how to connect, remember always do this **before** creating or importing any wallets to avoid exposing your wallet data to someone else's node.

**1.** From the home screen tap the three horizontal dots in the top right hand corner and you will be taken to the settings page.

<p align="center">
<img src="/assets/img/blue1.png" class=responsive width="227" height="240" maxheight="300" />
</p>

**2.** Click network

<p align="center">
<img src="/assets/img/blue2.png" class=responsive width="250" height="200" maxheight="300" />
</p>


**3.** From the network page, hit Electrum server.

<p align="center">
<img src="/assets/img/blue3.png" class=responsive width="400" height="190" maxheight="300" />
</p>


**4.** Enter your node's local IP address in the first box and the secure port (50002) into the third box. Once connected you will be notified with a green status at the top of the page.

<p align="center">
<img src="/assets/img/blue4.png" class=responsive width="330" height="320" maxheight="300" />
</p>

Now you're safely connected to your own node, let's make a new wallet.

## Creating a wallet

**1.** From the home page press add now.

<p align="center">
<img src="/assets/img/blue5.png" class=responsive width="330" height="310" maxheight="300" />
</p>

**2.** You can now give your wallet a name, select the wallet type (Bitcoin) and adjust advanced settings which aren't required to be changed for 99.9% of users. At this stage you have the option to roll a dice to add additional entropy to your wallet generation. This reduces the trust in the app's inbuilt random number generator. Again this is not a requirement but an optional feature for the more privacy concerned user.

<p align="center">
<img src="/assets/img/blue6.png" class=responsive width="322" height="400" maxheight="300" />
</p>

**3.** Press create and you will then be shown a list of 24 words. Ensure you write these words down, keep them safe and share them with no-one. They are the master backup for your bitcoin and anyone with access to them can steal all of your funds.

<p align="center">
<img src="/assets/img/blue1.png" class=responsive width="300" height="280" maxheight="300" />
</p>

You will then be taken to your home screen where you can view your wallet(s). Clicking on each one will give you the option to send or receive as well as give you the option to view all previous transactions.

In summary, what Blue Wallet lacks in privacy features such as Tor and wallet management features like coin selection it compensates for in simplicity. Blue Wallet is a great option for newcomers.


## Where can I learn more?

If you want to try Blue Wallet for yourself visit [their website](https://bluewallet.io/) and for  the more technical user that wants to look under the hood, visit their [GitHub](https://github.com/BlueWallet/BlueWallet). You can also drop into their [Telegram](https://t.me/bluewallet) group to keep up to date with any developments. Finally, if you are interested in using your ColdCard with Blue Wallet, check out [this](https://youtu.be/7pBhTRiwQL4) video.

*Disclaimer - All views expressed in this article are my own and not those of the BlueWallet team.*







