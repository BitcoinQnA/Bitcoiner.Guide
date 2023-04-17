---
layout: page
title: Multisig.Guide 
subtitle: Receiving into your multisig wallet
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/sharemultisig.png
tags: [books, test]
---


<p align="center">
  <a href="/multisig/intro">Intro</a> |
  <a href="/multisig/shopping">Shopping</a> |
  <a href="/multisig/software">Software</a> |
  <a href="/multisig/signers">Signers</a> |
  <a href="/multisig/wallet">Wallet</a> |
  <a href="/multisig/backup">Backup</a> |
  <a href="/multisig/receive">Receive</a> |
  <a href="/multisig/spend">Spend</a> |
  <a href="/multisig/recover">Recover</a> 
  <br><br>
</p>

## Intro

You will have already noticed that Specter shows you your first receive address, we now want to verify that receive address on our trusted, air gapped signing devices. Not all signing devices facilitate this, which is the reason both Coldcard and Cobo were included into this guide.

1. [Specter](#specter)
2. [Coldcard](#coldcard)
3. [Cobo Vault](#cobo-vault)

## Specter

This one is easy, open your multisig wallet in Specter and press `receive`. 

<p align="center">
<img src="/assets/img/spec14.png" class=responsive width="700" height="650" maxheight="300" />
</p>

***

## Coldcard

Power on your Coldcard and enter your PIN. Press `Address Explorer`. scroll to the bottom and enter the number indicated to start. Scroll to the bottom of the next page and choose your recently imported multisig wallet.


<p align="center">
<img src="/assets/img/receive1.png" class=responsive width="180" height="280" maxheight="300" />
</p>

You will now have the option to save these to the SD card which could be useful if you plan on receiving often and wont have easy access to your devices. Scroll down, you will see the fingerprint of each signer, after that you should see a partially hidden version of your first receive address. Check it matches the one shown by Specter.

<p align="center">
<img src="/assets/img/receive2.png" class=responsive width="180" height="280" maxheight="300" />
</p>

***

## Cobo Vault

Open the menu and press `Multisig Wallet` which will open the receive tab. Press the top address and check it matches the one shown in Specter.


<p align="center">
<img src="/assets/img/receive3.png" class=responsive width="300" height="400" maxheight="300" />
</p>

<br/>

All 3 match? Send a very small amount of sats to your verified address.

> You may want to verify a number of receive addresses at once to prevent the need access your signers every time you want to receive.

As an optional extra step to be able to receive on the go, you may want to export your multisig wallet to [Blue Wallet](/multisig/blue) on your phone.

Received some sats to your verified address? Let's go through the [spend](/multisig/spend) process.


