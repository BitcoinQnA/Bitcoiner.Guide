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

Mobile wallets provide the ultimate in convenience when interacting with Bitcoin. The main benefit mobile wallets bring is that they're on a device we generally have with us 24/7, which makes transacting anytime, any place, easy. This 24/7 convenience factor comes with the trade-off that it may not be a suitable solution for storing a large proportion of your wealth on. However, many users do store larger amounts in a mobile wallet on a dedicated device kept somewhere secure.    

### Table of Contents

2.  [Blockstream Green](#blockstream-green)
3.  [Blue Wallet](#blue-wallet)
4.  [Electrum](#electrum)
5.  [Fully Noded](#fully-noded)
7.  [Hexa](#hexa)
8.  [Muun](#muun)
10. [Samourai Wallet](#samourai-wallet)

***

## Blockstream Green

[Blockstream Green](https://www.blockstream.com/green/) provides a simple wallet setup and user interface. Green supports multiple devices, enabling you to have the same wallet on your phone and computer simultaneously. Sending a transaction is done through a 2-of-2 [multi-sig setup](https://help.blockstream.com/hc/en-us/articles/900001388366-What-does-Blockstream-Green-s-multisig-protect-from-) and connection to your own node is done via [SPV](https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification).

<p align="center">
<img src="/assets/img/imageedit_2_8794344245.png" class=responsive width="220" height="450" maxheight="500">
</p>

### Notable Features
* Connect to own node
* Support for certain hardware wallets
* Create multiple accounts
* Runs over Tor

### Notable Limitations
* No coin control
* No native segwit

### Available on
* iOS + Android

### Other resources
* [Codebase](https://github.com/Blockstream)
* [Documentation](https://help.blockstream.com/hc/en-us/categories/900000056183-Blockstream-Green)
* [Telegram](https://t.me/blockstream_green)
* [Video](https://youtu.be/uO3Zi9D5b0Y)

***

## Blue Wallet

[Blue Wallet](https://bluewallet.io/) is feature packed but still manages to provide quick and easy access to both Bitcoin and Lightning. Lightning is custodial by default but allows users to connect to their own instance of [LND Hub](https://lndhub.io/about). Blue wallet and serves as a great option to use for daily transactions and simultaneously act as 'watch only' wallet for your cold storage devices. Connection to a users own node is done via an Electrum server. Full list of features [here](https://bluewallet.io/features/).

<p align="center">
<img src="/assets/img/security-app.png" class=responsive width="320" height="500" maxheight="300">
</p>

### Notable Features
* Connect to own node
* PSBT and multi-sig
* Create multiple accounts
* Buy bitcoin within the app via Hodl Hodl
* Coin control + labelling

### Notable Limitations
* No Tor

### Available on
* iOS + Android

### Other resources
* [Codebase](https://github.com/bluewallet/bluewallet)
* [Documentation](http://help.bluewallet.io/en/)
* [Telegram](https://t.me/bluewallet)
* [Video](https://youtu.be/imMX7i4qpmg)

***

## Electrum

[Elecrum Mobile](https://electrum.org/#home) is better known for it's widely used desktop wallet, however an Android offering is also available. It supports both Bitcoin and Lightning and has the ability to create multi-sig and watch only wallets. Connection to own node is done via an Electrum server.

<p align="center">
<img src="/assets/img/Electrum%20mobile.png" class=responsive width="275" height="300" maxheight="300">
</p>

### Notable Features
* Connect to own node
* Multi-sig + watch only
* Multiple wallets
* Coin control

### Notable Limitations
* User interface lacking

### Available on
* Android

### Other resources
* [Codebase](https://github.com/spesmilo/electrum)
* [Documentation](https://electrum.readthedocs.io/)
* [Reddit](https://www.reddit.com/r/Electrum/)

***

## Fully Noded

[Fully Noded](https://fullynoded.app/) is a feature rich iOS Bitcoin and Lightning wallet that connects to your own node by easily by scanning a QR code. Fully Noded also allows you to interact with your node by running RPC commands so that you can do things like [verify](https://verify.supply) the total supply of Bitcoin at the click of a button. Users can import wallet files from Electrum, Specter and Sparrow and Fully Noded also has a desktop implementation for Mac users.

<p align="center">
<img src="/assets/img/IMG_1051.PNG" class=responsive width="275" height="450" maxheight="450">
</p>

### Notable Features
* Connect to own node
* PSBT and multi-sig
* Coin control
* Runs over Tor

### Notable Limitations
* C Lightning implementation not common amongst average node runners

### Available on
* iOS

### Other resources
* [Codebase](https://github.com/Fonta1n3/FullyNoded)
* [Documentation](https://github.com/Fonta1n3/FullyNoded/blob/master/Docs)
* [Telegram](https://t.me/FullyNoded)
* [Setup Video](https://www.youtube.com/channel/UCKvdcFJh7H96NJhwZrsNeqw)

***

## Hexa

[Hexa](https://hexawallet.io/) is a relatively new multi account wallet with a polished UX that offers a unique backup procedure based on the [Shamir Secret Sharing](https://hexawallet.io/wp-content/uploads/2019/07/Hexa-Wallet-Backup-Scheme-SSS-WP_-1.0.pdf) protocol. Hexa makes batch transactions simple and also allows the user to set up a donation page in a few clicks. 

<p align="center">
<img src="/assets/img/component-1.png" class=responsive width="420" height="380" maxheight="300">
</p>

### Notable Features
* Donation web pages
* Transaction batching
* Redeem Fast Bitcoins vouchers
* Unique backup process

### Notable Limitations
* No own node connection
* No Tor
* No coin control

### Available on
* iOS + Android

### Other resources
* [Codebase](https://github.com/bithyve/hexa)
* [Documentation](https://hexawallet.io/faq/)
* [Telegram](https://t.me/HexaWallet)
* [Video](https://www.youtube.com/channel/UCMqDNxbz16w8pxpmsa6s8GQ)

***

## Muun


[Muun Wallet](https://muun.com/) is a simple Bitcoin wallet that also allows for payment of Lightning invoices via [submarine swaps](https://blog.muun.com/a-closer-look-at-submarine-swaps-in-the-lightning-network/). Muun uses a 2-of-2 multi-sig setup for signing transactions and offers Trezor hardware wallet support.

<p align="center">
<img src="/assets/img/phone-mockup.png" class=responsive width="350" height="420" maxheight="300">
</p>

### Notable Features
* Pay Lightning invoices via submarine swaps
* Connects to Trezor hardware wallet

### Notable Limitations
* No coin control
* No Tor
* No own node connection

### Available on
* iOS + Android

### Other resources
* [Codebase](https://github.com/muun/)
* [Contact](https://muun.com/contact/)
* [Video](https://youtu.be/imMX7i4qpmg)

***

## Samourai Wallet

[Samourai Wallet](https://samouraiwallet.com/) is a privacy focused Android wallet that offers inbuilt coinjoin and complex spend algorithms to preserve privacy. Samourai provides simple node connection via a QR scan and also supports [Opendime](https://opendime.com/) and [BIP47](https://support.samourai.io/article/68-what-are-paynyms) 'Paynyms'. Full list of features [here](https://code.samourai.io/wallet/samourai-wallet-android/-/blob/develop/Samourai-Wallet-features.md).

<p align="center">
<img src="/assets/img/hero_shot_nodev.png" class=responsive width="300" height="500" maxheight="300">
</p>

### Notable Features
* Connect to own node
* Runs over Tor
* Coinjoin + Payjoin
* Coin control
* PayNyms (BIP47 stealth addresses)

### Notable Limitations
* Still in alpha phase, expect occasional UX bugs

### Available on
* Android
* Whirlpool desktop and headless (CLI) on MacOS, Windows, Linux (Android Wallet still required)

### Other resources
* [Codebase](https://code.samourai.io/wallet/samourai-wallet-android)
* [Documentation](https://support.samourai.io/)
* [Telegram](https://t.me/SamouraiWallet)
* [Video](https://www.youtube.com/watch?v=icyeO70ICi4)


***



Finished looking for a mobile wallet? Check out the [desktop](/wallet/desktop) options available.
