---
layout: page
title: Zeus
subtitle: Feature rich mobile Lightning node controller
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharezeus.png
---

## What is Zeus?

Zeus is a mobile app available on [Android](https://play.google.com/store/apps/details?id=com.zeusln.zeus) and [iOS](https://testflight.apple.com/join/gpVFzEHN) (*testflight*) which allows you to send and receive Bitcoin and Lightning payments from anywhere in the world using your own node. Zeus is compatible with both LND and c-lightning and allows you to create and manage your Lightning channels on the go. Zeus is completely open source and is even available on [F-Droid](https://f-droid.org/packages/com.zeusln.zeus/) or via a direct [APK](https://zeusln.app/) download from their website for all you Graphene or Copperhead users.

## Features

Here's a quick rundown of Zeus' features...

- Connects to your own lightning node anywhere in the world
- Invoice free Keysend payments (if your node configuration allows it)
- On or off chain payments
- LND + c-lightning compatible
- Show balances in BTC, sats or fiat
- Can build app from [source](https://github.com/ZeusLN/zeus)
- Open or close channels on the go
- Adjust channel fee rates and generate fee reports
- QR display for easy pairing with peers
- Passcode security
- Demo mode to show friends without sharing sensitive info
- Dark mode


## Connecting Zeus to your myNode

In this article I'm going to focus on how to connect Zeus on your Android phone, to your [myNode](http://mynodebtc.com/) (which runs LND) over the Tor network. I'm going to assume that you have already set up Lightning on your myNode and created a wallet. [Do that first](https://mynodebtc.com/guide/create_lightning_wallet) before continuing with this short guide.

*Note - Remote Tor connection is only available to Premium myNode users. Tor connectivity via Zeus is not currently supported on iOS.*

**1.** Download and install Zeus from your chosen source

**2.** Download [Orbot](https://play.google.com/store/apps/details?id=org.torproject.android&amp;hl=en_US) from your chosen app store. Orbot is a proxy app that empowers other apps on the same device to leverage the privacy benefits of the Tor network.

<p align="center">
<img src="/assets/img/zeus1.jpg" class=responsive width="332" height="443" maxheight="300" />
</p> 


**3.** Turn on VPN mode and then press the settings wheel next to where is says '*Full Device VPN*'. Enable the checkbox next to Zeus and then use the back arrow to return to the Orbot home screen. Press start and Orbot will connect to the Tor network.

<p align="center">
<img src="/assets/img/zeus2.jpg" class=responsive width="332" height="443" maxheight="300" />
</p> 

**4.** Log into the LND Connect page of your myNode and click on the **REST Tor** tab

<p align="center">
<img src="/assets/img/zeus3.png" class=responsive width="470" height="393" maxheight="300" />
</p> 

**5.** Open Zeus on your phone, go to settings and then press '**add a new node**'. Select '**scan lndconnect config**' which should open your phone camera. Scan the QR displayed on your myNode LND Connect screen. A quick tip here is to slowly move the camera in and out from the screen to trigger it to scan properly.

<p align="center">
<img src="/assets/img/zeus4.jpg" class=responsive width="238" height="323" maxheight="300" />
</p> 

**6.** Press '**save node config**'  and when you get the warning pop up. Select '**I understand, save node config**'. We do not need to install a certificate as we are accessing via the Tor network.

<p align="center">
<img src="/assets/img/zeus5.jpg" class=responsive width="300" height="300" maxheight="300" />
</p> 

<p align="center">
<img src="/assets/img/zeus6.png" class=responsive width="300" height="283" maxheight="300" />
</p> 

Note - If at this point you cannot connect, ensure you have selected the 'REST Tor' tab of your LND Connect page. Also check that private DNS is set to disabled from your phones network settings.

**7.** That's it, you can now access your own Lightning node from anywhere in the world over the Tor network! Remember to ensure you have Orbot running when you want to interact with Zeus in the future.

<p align="center">
<img src="/assets/img/zeus7.png" class=responsive width="332" height="489" maxheight="300" />
</p> 


iPhone users can still use Zeus but you will need disregard Orbot and scan the REST Local IP QR code displayed by your node. This means that you can only connect when your phone is on the same network as your node. Fear not, myNode uses [OpenVPN](https://mynodebtc.com/guide/vpn) to route your phones web traffic back through your router at home, allowing you to access all of your usual myNode features.

If you are a RaspiBlitz user please check out [this guide](https://github.com/openoms/bitcoin-tutorials/blob/master/Zeus_to_RaspiBlitz_through_Tor.md) by [@Openoms](https://twitter.com/openoms) on how to connect to your node.

If you are new to Zeus and Lightning and want to have a play around, feel free to open a channel with my [node](https://1ml.com/node/03bef00428475299f7bc509d2eb86143cef43af5f1d1f43f3e6ea4d319d1e53714). To do so, fund your on chain wallet with the desired amount of sats and then open Zeus. Go to channels, open channel, set the amount of sats you want to commit and scan the QR code below or paste in my pubkey.

I'm relatively new to Zeus but I have been really impressed with the level of functionality it allows. It's a very powerful tool that will sit firmly in my Bitcoin app folder for quite some time! If you like what the [Zeus team](https://twitter.com/ZeusLN) are doing please consider showing them some love and donating to them via [PayNym](https://my.paynym.is/+holymorning7d1) or [Tippin.me](https://tippin.me/@ZeusLN)

<p align="center">
<img src="/assets/img/zeus8.png" class=responsive width="663" height="333" maxheight="300" />
</p> 

*Disclaimer - All views expressed in this article are my own and not those of the Zeus team.*




