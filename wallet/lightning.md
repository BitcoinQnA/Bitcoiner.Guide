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

Lightning native wallets aren't that different from a 'normal' bitcoin wallet, in fact some of the options below offer both, but come with a particular focus on Lightning functionality of small/fast payments. Some achieve on-chain interaction via the use of [submarine swaps](https://bitcoinmagazine.com/articles/pay-bitcoin-mainnet-lightning-and-back-submarine-swaps-are-now-live) and others require users to connect to their own Bitcoin and/or Lightning node. 

### Table of Contents

1.  [Alby](#alby)
1.  [Breez](#breez)
2.  [Phoenix](#phoenix)
3.  [Zap](#zap)
4.  [Zeus](#zeus)

***

## Alby

[Alby](https://getalby.com/) is a browser extension that adds Lightning to your internet experience. Alby users can interact natively with Lightning on the web without the need to pick the smartphone or directly access their node. Alby can be used custodially or connect to any node based Lightning application such as RaspiBlitz or LNbits.

<p align="center">
<img src="/assets/img/alby.png" class=responsive width="680" height="450" maxheight="500">
</p>

### Notable Features
* Connect to own node
* Simple node connection
* Budget controls
* Lightning logins

### Notable Limitations
* Desktop only

### Available on
* All modern desktop browsers

### Other resources
* [Codebase](https://github.com/getAlby)
* [Documentation](https://github.com/getAlby/lightning-browser-extension#lightning-web-extension)
* [Telegram](https://t.me/getAlby)
* [Video](https://www.youtube.com/channel/UCIICdm6mox3VkCAv-yHMeMw)

***

## Breez

[Breez](https://breez.technology/) is a great option for those wanting to get started with Lightning. It seamlessly supports on-chain send/receive via [submarine swaps](https://medium.com/breez-technology/reverse-submarine-swaps-another-step-towards-a-p2p-lightning-economy-bacb040fdca7). Breez solves the inbound liquidity problem by opening channels [on demand](https://medium.com/breez-technology/the-breez-release-candidate-getting-lightning-ready-for-the-global-takeover-b5d1f9756229) for a small fee. Breez also supports LN URL withdrawal and comes with a built in marketplace with Bitrefill.

<p align="center">
<img src="/assets/img/breez.png" class=responsive width="220" height="450" maxheight="500">
</p>

### Notable Features
* Connect to own node
* Send/Receive on chain via swaps 
* POS app built in
* Fast onboarding

### Notable Limitations
* Requires Google Play services for 100% functionality

### Available on
* iOS + Android

### Other resources
* [Codebase](https://github.com/breez/breezmobile)
* [Documentation](https://github.com/breez/breezmobile)
* [Telegram](https://t.me/breez_lightning)
* [Video](https://youtu.be/lcBsn8e-oQ4)

***

## Phoenix

[Phoenix](https://phoenix.acinq.co/) is another great starter wallet for users wanting to onboard with Lightning. Much like Breez, Phoenix seamlessly supports on-chain send/receive transactions via submarine swaps and also opens channels on demand for a small fee. These swaps result in a certain level of [trust](https://phoenix.acinq.co/faq#is-phoenix-trustless) in the entity running the swap service (Acinq) and users should also consider the privacy [tradeoffs](https://phoenix.acinq.co/faq#how-private-are-my-payments-on-phoenix) that come with this setup too.

<p align="center">
<img src="/assets/img/Phoenix.png" class=responsive width="220" height="450" maxheight="500">
</p>

### Notable Features
* Connect to own node
* Send/Receive on chain via swaps 
* Tor option

### Notable Limitations
* No iOS option

### Available on
* Android

### Other resources
* [Codebase](https://github.com/ACINQ/phoenix)
* [Documentation](https://phoenix.acinq.co/faq)
* [Telegram](https://t.me/phoenix_wallet)
* [Video](https://youtu.be/Cx5PK1H5OR0)

***

## Zap

[Zap](https://zaphq.io/) has multiple [implementations](https://zaphq.io/download), all offering slightly different functionality. Both main release mobile offerings currently do not allow wallet creation and only offer remote Lightning node connection. However, the [testflight](https://testflight.apple.com/join/elC3EXAK) version on iOS does offer wallet creation functionality. There is a desktop application available on Windows, Mac OS and Linux that allow for remote node connectivity and wallet creation. All Zap offerings come with a simple user interface and support on and off chain transactions.

<p align="center">
<img src="/assets/img/Zap.jpg" class=responsive width="220" height="450" maxheight="500">
</p>

### Notable Features
* Connect to own node
* Android supports Tor via Orbot
* Remotely manage channels from your phone

### Notable Limitations
* No mobile wallet creation on main releases
* Node requirement a hurdle for newcomers

### Available on
* iOS + Android + Desktop

### Other resources
* [Codebase](https://github.com/LN-Zap)
* [Documentation](https://docs.zaphq.io/)
* [Slack](https://join.slack.com/t/zaphq/shared_invite/enQtMzgyNDA2NDI2Nzg0LWQ1OGMyMWI3YTdmYTQ0YTVmODg4ZmNkYjQ1MzUxNGExMGRmZWEyNTUyOGQzMzZkYTdhODE3NmQxZWZiOGFkYWI)

***

## Zeus

[Zeus](https://zeusln.app/) is a remote control app that works by connecting to your own node via local IP address or over the Tor network. Zeus allows the user to send/receive on and off chain transactions, manage channels, view invoices and routing fees from anywhere in the world (VPN or Tor option required). Zeus works with all 3 of the popular Lightning implementations.

<p align="center">
<img src="/assets/img/zeus.png" class=responsive width="260" height="450" maxheight="500">
</p>

### Notable Features
* Connect to own node
* Works with all 3 Lightning implementations 
* Tor option

### Notable Limitations
* Node requirement a hurdle for newcomers

### Available on
* iOS + Android

### Other resources
* [Codebase](https://github.com/ZeusLN/zeus/releases)
* [Documentation](https://github.com/ZeusLN/zeus)
* [Telegram](https://t.me/zeusLN)
* [Setup Guide](/zeus)

***

Back to [home](/wallet)

