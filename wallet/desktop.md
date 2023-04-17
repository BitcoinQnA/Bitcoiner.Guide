---
layout: page
title: Bitcoin Wallet Guide
subtitle: Compare wallet features
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/sharewallet.png
tags: [books, test]
---

<p align="center">
  <a href="/wallet/about">About</a> |
  <a href="/wallet/mobile">Mobile</a> |
  <a href="/wallet/desktop">Desktop</a> |
  <a href="/wallet/hardware">Hardware</a> |
  <a href="/wallet/lightning">Lightning</a> |
  <a href="/wallet/compare">Compare</a>
  <br><br>
</p>

Desktop wallets can sometimes offer more usability and often, a greater feature set when compared with their mobile counterparts. Most desktop wallets offer hardware wallet support, and more recently have shifted more towards easy multi-sig setup and usage. Desktop wallets make interacting with bitcoin held in cold storage on a hardware wallet much more simple, but they are not as well suited to more frequent daily use. Computers are inherently more at risk of being exposed to malicious software compared to phones, so always double check the download source before installing any desktop software and if you have the knowledge, verify the software signature.

### Table of Contents

1.  [Bitcoin Core](#bitcoin-core)
2.  [Blockstream Green](#blockstream-green)
2.  [Blue Wallet](#blue-wallet)
3.  [Electrum](#electrum)
4.  [Fully Noded](#fully-noded)
5.  [Lily Wallet](#lily-wallet)
6.  [Specter Desktop](#specter-desktop)
7.  [Sparrow Wallet](#sparrow-wallet)


***

## Bitcoin Core

[Bitcoin Core](https://bitcoin.org/en/bitcoin-core/features/) is both a desktop wallet and a node. It is arguably the easiest way to get up and running in a fast yet private manner. Because of it's simplicity and longevity, Core is the most widely used desktop wallet out there. Core provides an easy way to onboard and enables users to interact with Bitcoin in a matter of clicks.   

<p align="center">
<img src="/assets/img/photo_2020-10-25_16-27-15.jpg" class=responsive width="500" height="400" maxheight="500">
</p>

### Notable Features
* Built in node
* Coin control + labelling
* Can be run over Tor

### Notable Limitations
* No hardware wallet support within GUI

### Available on
* Mac OS
* Windows
* Linux

### Other resources
* [Codebase](https://github.com/bitcoin-core)
* [Documentation](https://bitcoin.org/en/full-node#what-is-a-full-node)
* [Support](https://bitcoin.org/en/bitcoin-core/contribute/support)
* [Video](https://youtu.be/xc_TxlByxeY)

***

## Blockstream Green

[Blockstream Green](https://www.blockstream.com/green/) is one of the more basic desktop wallets. Green is cross platform, enabling you to have the same wallet on your phone and computer simultaneously. Sending a transaction is done through a 2-of-2 [multi-sig setup](https://help.blockstream.com/hc/en-us/articles/900001388366-What-does-Blockstream-Green-s-multisig-protect-from-) but own node connection is not available.

<p align="center">
<img src="/assets/img/Green%20Desktop.png" class=responsive width="600" height="400" maxheight="500">
</p>

### Notable Features
* Cross platform
* Multiple accounts

### Notable Limitations
* No node connection
* No coin control or labelling
* No hardware wallet support

### Available on
* Mac OS
* Windows
* Linux

### Other resources
* [Codebase](https://github.com/Blockstream/green_qt)
* [Documentation](https://help.blockstream.com/hc/en-us/categories/900000056183-Blockstream-Green)
* [Telegram](https://t.me/blockstream_green)
* [Video](https://youtu.be/uO3Zi9D5b0Y)

***

## Blue Wallet

[Blue Wallet](https://bluewallet.io/) desktop is essentially a carbon copy of its mobile version. Lightning is custodial by default but allows users to connect to their own instance of [LND Hub](https://lndhub.io/about). Blue wallet and serves as a good option to use for daily transactions and simultaneously act as ‘watch only’ wallet for your cold storage devices.  Connection to a users own node is done via an Electrum server. Full list of features [here](https://bluewallet.io/features/).

<p align="center">
<img src="/assets/img/blue%20desktop.png" class=responsive width="600" height="400" maxheight="400">
</p>

### Notable Features
* Connect to own node
* PSBT and multi-sig (beta testing)
* Create multiple accounts
* Buy bitcoin within the app via [Hodl Hodl](https://hodlhodl.com/)

### Notable Limitations
* No coin control (*in testing*)
* No Tor
* Only supports hardware wallets via PSBT

### Available on
* Mac OS

### Other resources
* [Codebase](https://github.com/bluewallet/bluewallet)
* [Documentation](http://help.bluewallet.io/en/)
* [Telegram](https://t.me/bluewallet)
* [Video](https://youtu.be/imMX7i4qpmg)

***

## Electrum

[Electrum](https://electrum.org/#home) is widely adopted desktop wallet that comes with a vast feature set and extensive hardware wallet support. Electrum supports multi-sig, coin control, labelling, Lightning and own node connection via an [Electrum Server](https://github.com/romanz/electrs). It is worth noting that by default Electrum connects to multiple third party servers which could leak your privacy.   

<p align="center">
<img src="/assets/img/Electrum%20Desktop.png" class=responsive width="600" height="400" maxheight="500">
</p>

### Notable Features
* Own node connection (not by default)
* Coin control + labelling
* Lightning
* Extensive hardware wallet support

### Notable Limitations
* UX lagging behind other implementations

### Available on
* Mac OS
* Windows
* Linux

### Other resources
* [Codebase](https://github.com/spesmilo/electrum)
* [Documentation](https://electrum.readthedocs.io/en/latest/)
* [Reddit](https://www.reddit.com/r/Electrum/)
* [Video](https://www.keepitsimplebitcoin.com/electrum-bitcoin-wallet/)

***

## Fully Noded

[Fully Noded](https://fullynoded.app/) is an extremely feature rich Mac OS Bitcoin and Lightning wallet that connects to your own node by easily by scanning a QR code. Fully Noded also allows you to interact with your node by running RPC commands so that you can do things like verify the total supply of Bitcoin. Users can import wallet files from various other applications such as Electrum, Specter and Sparrow. 

<p align="center">
<img src="/assets/img/FN%20desktop.png" class=responsive width="575" height="450" maxheight="450">
</p>

### Notable Features
* Connect to own node (default)
* PSBT and multi-sig
* Coin control
* Runs over Tor

### Notable Limitations
* C Lightning implementation not common amongst average node runners
* No Windows or Linux option
* Only supports Coldcard hardware wallet 

### Available on
* Mac OS

### Other resources
* [Codebase](https://github.com/Fonta1n3/FullyNoded)
* [Documentation](https://github.com/Fonta1n3/FullyNoded/blob/master/Docs)
* [Telegram](https://t.me/FullyNoded)
* [Setup Video](https://www.youtube.com/channel/UCKvdcFJh7H96NJhwZrsNeqw)

***

## Lily Wallet

[Lily Wallet](https://lily.kevinmulcrone.com/) offers one of the simplest desktop user interfaces and makes single of multi-sig wallet creation simple. It may not be for the more privacy focused individual with the lack of own node connection and coin control however this is a relatively young wallet and these features are on the product roadmap.

<p align="center">
<img src="/assets/img/lily.png" class=responsive width="600" height="400" maxheight="450">
</p>

### Notable Features
* PSBT and multi-sig
* Export wallets to other software


### Notable Limitations
* No own node connection
* No coin control

### Available on
* Mac OS
* Windows
* Linux

### Other resources
* [Codebase](https://github.com/kaybesee/lily-wallet)
* [Documentation](http://lily.kevinmulcrone.com/docs)
* [Support](mailto:kaybesee@gmail.com)
* [Setup Video](https://youtu.be/9xUgyTYqvcQ)

***

## Specter Desktop

[Specter Desktop](https://specter.solutions/) is fairly new to the scene but has already made a huge impact. It strikes a good balance of feature set, node connection and intuitive UX which has made it a very popular option in a very short space of time. Specter is compatible with every popular hardware wallet option and also offers automatic pairing with Bitcoin Core, resulting in the process of connecting your cold storage device to your own node very simple.  

<p align="center">
<img src="/assets/img/Spceter_Desktop_Multisig_Devices-1024x588.jpg" class=responsive width="630" height="400" maxheight="450">
</p>

### Notable Features
* Connect to own node (mandatory)
* PSBT and multi-sig
* Coin control
* Can run over Tor

### Notable Limitations
* Tor connection not easy for beginners

### Available on
* Mac OS
* Windows
* Linux

### Other resources
* [Codebase](https://github.com/cryptoadvance/specter-desktop)
* [Documentation](https://github.com/cryptoadvance/specter-desktop/blob/master/docs/faq.md)
* [Telegram](https://t.me/spectersupport)
* [Setup Video](https://youtu.be/4koKF2MDXtk)

***

## Sparrow Wallet

[Sparrow Wallet](https://www.sparrowwallet.com/) is another densely packed desktop wallet. Sparrow is focused on privacy and also ensures the user can focus on the fine details. Sparrow offers extremely detailed transaction previews which can also double up as a personal blockchain explorer. Connection to your own node is mandatory and is done via an Electrum Server.  

<p align="center">
<img src="/assets/img/control-your-sends.png" class=responsive width="630" height="400" maxheight="450">
</p>

### Notable Features
* Connect to own node (mandatory)
* PSBT and multi-sig
* Coin control
* Can run over Tor

### Notable Limitations
* Node/Electrum Server setup may be a big hurdle for newcomers

### Available on
* Mac OS
* Windows
* Linux

### Other resources
* [Codebase](https://github.com/sparrowwallet/sparrow)
* [Documentation](https://www.sparrowwallet.com/docs/)
* [Telegram](https://t.me/sparrowwallet)
* [Contact](https://twitter.com/SparrowWallet)


***

Finished looking for a desktop wallet? Check out the available [hardware wallet](/wallet/hardware) options.
