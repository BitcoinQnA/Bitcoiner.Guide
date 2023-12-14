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

Hardware wallets offers an increase in security when compared with mobile or desktop wallets. They are designed so that your private keys are generated and stored on a dedicated device that is not directly connected to any potentially malware infected device. However, some of these require plugging into a computer to interact with, which exposes them to more risk than their airgapped counterparts. For the ultimate setup in terms of privacy and security, you should look to use an air gapped device in conjunction with a [mobile](/mobile) or [desktop](/desktop) wallet that is connected to your own [node](https://node.guide). 

This type of set-up does come with additional hurdles that may be more difficult to overcome for first timers. This is why there are items in the list below that trade-off some security and privacy to make the user experience smoother by offering a companion app and USB plug in option. Some options in the list offer alt coin support as well as a Bitcoin only firmware option, always ensure you opt for the Bitcoin only version to minimise another attack vector risk.

### Table of Contents

1.  [BitBox02](#bitbox02)
2.  [Coldcard](#coldcard)
3.  [Passport](#passport)
4.  [SeedSigner](#seedsigner)
5.  [Specter DIY](#specter-diy)
6.  [Trezor](#trezor)

***

## Bitbox02

[BitBox02](https://shiftcrypto.shop/en/products/bitbox02-bitcoin-only-edition-pre-order-4/#carousel-example-generic) comes with a touch sensitive interface which,  when combined with the companion desktop app, makes the setup and interaction a breeze for beginners. The BitBox02 has to be plugged into a computer to function and works with its own desktop app (which offers coin control), as well as all popular desktop wallets. Users should ensure they manually write down their seed words upon setup, this is not enforced by the app.   

<p align="center">
<img src="/assets/img/bixbox02.png" class=responsive width="300" height="150" maxheight="150">
</p>

### Notable Features
* Companion desktop [app](https://shiftcrypto.ch/download/) that connects to your node
* Very simple setup process
* Automatic SD card backups

### Notable Limitations
* Plug in via USB only
* SD card backup not encrypted

### Other Resources
* [Codebase](https://github.com/digitalbitbox)
* [Documentation](https://guides.shiftcrypto.ch/bitbox02/)
* [Telegram](https://t.me/bitboxwallet)
* [Video](https://youtu.be/6D4FgJo3j64)

***

## Coldcard

[Coldcard](https://coldcardwallet.com/) has been the default hardware wallet option for the more focused bitcoiner for multiple years (for good reason). Coldcard offers a true airgapped operation and achieves all transaction signing and firmware updates via the SD card. The Coldcard has a massive feature set that include encrypted SD card backups, paper wallet generation, user added entropy and [BIP85](https://github.com/bitcoin/bips/blob/master/bip-0085.mediawiki) support for deriving multiple wallets from a single seed. Coldcard is compatible with all major desktop wallet integrations.

<p align="center">
<img src="/assets/img/coldcard-front.png" class=responsive width="210" height="350" maxheight="350">
</p>

### Notable Features
* Completely airgapped operation
* Encrypted backups
* Duress attack solutions
* Beginners have the option to use via USB

### Notable Limitations
* Menu system not as easy to navigate as alternatives

### Other Resources
* [Codebase](https://github.com/coldcard/)
* [Documentation](https://coldcardwallet.com/docs/)
* [Telegram](https://t.me/coldcard)
* [Video](https://www.youtube.com/playlist?list=PLZKkuPrgFw0axLoDDzxAIYzpZeC_T1i7W)

***

## Passport

[Passport](https://foundationdevices.com/passport/details/) offers the perfect balance of security and usability. Passport comes with a simple user interface packaged in a beautifully designed and premium feeling body. Passport is another completely air-gapped device that enables the user to complete PSBTs using QR codes via its on-board camera or by the same SD card method Coldcard uses. Passport offers encrypted SD card backups, guided wallet connection and easy address verification. Passport is compatible with all major desktop wallet integrations.

<p align="center">
<img src="/assets/img/ppfrontback.png" class=responsive width="625" height="370" maxheight="370">
</p>

### Notable Features
* Completely airgapped operation
* Encrypted backups
* Fully open sourced firmware and hardware
* Simple to operate

### Notable Limitations
* Lacks some features very advanced users may want

### Other Resources
* [Codebase](https://github.com/Foundation-Devices/passport2/)
* [Documentation](https://docs.foundationdevices.com/)
* [Telegram](https://t.me/foundationdevices)
* [Video](https://www.youtube.com/watch?v=rUGTWWUlCgU&list=PLacNs-EplMhZ7PCqpzUmX3oNxJwjaL0Kn&index=1)
* [Athena Alpha Passsport Review](https://www.athena-alpha.com/foundation-passport-review/)

***

## SeedSigner

[SeedSigner](https://seedsigner.com/) is an offline, air-gapped Bitcoin transaction signing device that can be built from off-the-shelf [components](https://github.com/SeedSigner/seedsigner/blob/main/README.md#shopping-list) for around $70. After gathering and assembling the hardware, users flash the open source [software](https://github.com/SeedSigner/seedsigner/releases) onto a microSD card, insert to the device and power on. SeedSigner is a 'stateless' device, meaning that once powered off, it does not store any private keys. SeedSigner helps users save with Bitcoin by assisting with trustless private key generation and multi-signature wallet setup, and helps users transact with Bitcoin via a secure, air-gapped QR-exchange signing model ([SeedQR](https://github.com/SeedSigner/seedsigner/blob/dev/docs/seed_qr/README.md)).

<p align="center">
<img src="/assets/img/SeedSigner.png" class=responsive height="200" maxheight="390">
</p>

### Notable Features
* Completely airgapped operation
* Minimises supply chain attack vector
* Can be built for little cost
* Stateless per default

### Notable Limitations
* Less convenient for those transacting more often (*due to stateless nature*)
* SD card should be removed after startup (*GUI notification since v0.7.0*)
* SD card should be stored in a secure location
* Less approachable for beginners (*due to stateless nature*)

### Other Resources
* [Codebase](https://github.com/SeedSigner/seedsigner)
* [Documentation](https://seedsigner.com/quick-installation/)
* [Telegram](https://t.me/joinchat/GHNuc_nhNQjLPWsS)
* [Video](https://www.youtube.com/watch?v=gXPFJygZobE)

***

## Specter DIY

[Specter DIY](https://specter.solutions/) is an open-source hardware wallet with large touchscreen, QR-code scanner and a smartcard-reader. As the name suggests, this device is built by the user with off the shelf [parts](https://github.com/cryptoadvance/specter-diy/blob/master/docs/shopping.md) that can be purchased from a number of different manufacturers which minimises supply chain risk. Once assembled, the user then flashes the firmware onto the device and proceeds with device setup. The device is supported by Specter Desktop but is still an early project and is not well suited to someone with limited technical knowledge, proceed with caution.

<p align="center">
<img src="/assets/img/Specter%20DIY.png" class=responsive width="210" height="390" maxheight="390">
</p>

### Notable Features
* Completely airgapped operation
* Minimises supply chain attack vector
* Built to user specification

### Notable Limitations
* Not for beginners
* Still in prototype status

### Other Resources
* [Codebase](https://github.com/cryptoadvance/specter-diy)
* [Documentation](https://github.com/cryptoadvance/specter-diy/tree/master/docs)
* [Telegram](https://t.me/spectersupport)
* [Video](https://www.youtube.com/watch?v=1H7FqG_FmCw)

***

## Trezor

[Trezor](https://shop.trezor.io/) have two offerings, the [One](https://shop.trezor.io/product/trezor-one-white) and the [Model T](https://shop.trezor.io/product/trezor-model-t). The Model T is their flagship model and offers a colour touchscreen making interaction simple. Both devices require being plugged into a computer to sign transactions and are compatible with all popular desktop wallet options. Users should ensure they install the Bitcoin only [firmware](https://wiki.trezor.io/Bitcoin_firmware#Installing_the_Bitcoin-only_firmware).

<p align="center">
<img src="/assets/img/T2-removebg-preview.png" class=responsive width="250" height="220" maxheight="220">
</p>

### Notable Features
* Colour touchscreen (Model T)
* Shamir backups

### Notable Limitations
* Plug in via USB only
* Default web wallet leaks privacy

### Other Resources
* [Codebase](https://github.com/trezor)
* [Documentation](https://wiki.trezor.io/Wallet_manual)
* [Telegram](https://t.me/spectersupport)
* [Video](https://www.youtube.com/watch?v=1H7FqG_FmCw)

***

For many, many more options, check out Athena Alpha's huge [Crypto Wallet](https://www.athena-alpha.com/crypto-wallets/) database to find and compare other good (and terrible) hardware wallets. Finished looking for a hardware wallet? Check out the available [Lightning native](/wallet/lightning) wallets.

