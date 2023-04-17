---
layout: page
title: Sentinel
subtitle: Watch only wallet by the Samourai team
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharesentinel.png
---


## What is Sentinel?

[Sentinel](https://samouraiwallet.com/sentinel) is a mobile 'watch only' wallet that allows you to track the balances and transactions of your offline, cold storage or just about any of your bitcoin wallets. Sentinel tracks all types of addresses or extended public keys and can also generate new addresses to enable you to receive bitcoin into your offline wallets on the move. Sentinel never has access to your private keys, so never has the power to spend your funds. You can however pass Sentinel a pre-signed hex formatted transaction from a device that holds your private keys and then use Sentinel to broadcast to the Bitcoin network.

The app is Android only for now but iOS support is currently under development (*no timescales available just yet*)


## Features

Here is a quick rundown of Sentinel's features...

- Connect to your own Dojo via a QR scan
- Runs over Tor
- Track multiple wallets
- Show individual or combined balances in BTC or fiat
- Broadcast pre signed hex transactions from offline wallets
- Supports all address and extended public key types
- Display QR code for tracked XPUBs
- Sweep Segwit (bech32 & P2SH-P2WPKH) into the XPUB account or address of your choice


## Getting started

**1.** Open the app and select your network type, in most cases this will be mainnet.

<p align="center">
<img src="/assets/img/sen1.png" class=responsive width="320" height="125" maxheight="300" />
</p>


**2.** You will then be greeted by the welcome message which explains exactly what Sentinel is for.

<p align="center">
<img src="/assets/img/sen2.png" class=responsive width="320" height="250" maxheight="300" />
</p>


**3.** You will then be taken to the home screen and are ready to start importing addresses or public keys. However, there are two more important steps to take before we do that. These steps are highly recommended but not mandatory and the app still works without doing them.

**4.** Click on the network icon in the top right hand corner and enable Tor routing.Tor will then start automatically.

<p align="center">
<img src="/assets/img/sen3.png" class=responsive width="320" height="200" maxheight="300" />
</p>

**5.** Now click `enable Dojo full node` and then `connect to existing Dojo`. You can now scan your Dojo pairing QR code to connect Sentinel to your Dojo. 

[RoninDojo](http://ronindojo.io) users can do this via the new RoninUI. [myNode](http://mynodebtc.com), [Nodl](http://nodl.it) and '[Vanilla](https://samouraiwallet.com/download/dojo)' Dojo users can do this by logging into their Dojo Maintenance Tool.

<p align="center">
<img src="/assets/img/sen4.png" class=responsive width="320" height="250" maxheight="300" />
</p>

**6.** You should now see green lights next to Tor and Dojo.

<p align="center">
<img src="/assets/img/sen5.png" class=responsive width="320" height="150" maxheight="300" />
</p>

**7.** You can now start to import your addresses or extended public keys. To do this, press `start` and select the address or extended public key type you want to import. Once you select this, you can choose to do so via scanning a QR code (say from an Electrum wallet) or by manually pasting in the X/Y/Z PUB or address.

<p align="center">
<img src="/assets/img/sen6.png" class=responsive width="320" height="230" maxheight="300" />
</p>

**8.** After you press OK, Sentinel will scan the address or XPUB for transactions and show your balance once it is completed. Depending on your wallet's composition, this can take a few minutes.

<p align="center">
<img src="/assets/img/sen7.png" class=responsive width="320" height="200" maxheight="300" />
</p>


**9.** You can now repeat the above step for any number of addresses or XPUBs. To cycle between these accounts using the drop down menu at the top of the app. You can view individual accounts or your combined balance.

**10.** To receive a transaction into one of your watched wallets, hit the blue `+` button in the bottom right and then press `deposit`. You should now see a receive address and QR code to send your funds to.


<p align="center">
<img src="/assets/img/sen8.png" class=responsive width="240" height="250" maxheight="300" />
</p>


---

## Use Sentinel to broadcast a signed transaction

Do you have an offline wallet that can sign an produce hex formatted (*raw version*) transaction? Sentinel can broadcast these to the Bitcoin network using your own full node whilst maintaining that all important 'air gap' for your secure cold storage.

Hit the `three dots` in the top right corner, then `settings`, then `Broadcast transaction hex`. You can then either paste in the raw transaction hex or, if your wallet provides a QR version, you can scan using the camera on your Sentinel device.


## Summary

Sentinel provides a super simple interface that connects to your own full node and tracks all of your bitcoin wallets without the fear of loss of funds. It could be your Whirlpool Postmix, Hardware Wallet(s) or even your BTCPay donations, you can view and receive to them all in one place.

**A final side note** - Sentinel can only track the 'account 0' (default) for a given wallet. If for example you have added multiple accounts to a single hardware wallet to segregate funds, Sentinel will only see the default account 0.

You can download Sentinel for your Android phone [here](https://samouraiwallet.com/download/sentinel).
If you have any questions feel free to drop into the [Telegram chat](https://t.me/SamouraiWallet) or drop me a DM.

*Disclaimer - All views expressed in this article are my own and not those of the Samourai team.*



