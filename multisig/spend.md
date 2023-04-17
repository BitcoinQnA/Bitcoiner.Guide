---
layout: page
title: Multisig.Guide 
subtitle: Spending from your multisig wallet
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

To spend from your 2-of-3 multisig wallet, you need at least two signatures. The easiest two devices to achieve this are the Coldcard and the Cobo Vault. The Seed Signer is perfectly capable but does not store your seed (by design) so adds just a little extra friction to the spending flow. [Here](/multisig/seedsigner) is what the sign flow of the Seed Signer looks like.


1. [Transaction Build](#transaction-build)
2. [Coldcard Sign](#coldcard)
3. [Cobo Vault Sign](#cobo-vault)


## Transaction Build

In Specter, open your multisig wallet and press `Send`. Complete the transaction details, including your recipient address, fee rate and optional label. Then press `Create unsigned transaction`. 

<p align="center">
<img src="/assets/img/send1.png" class=responsive width="700" height="650" maxheight="300" />
</p>

We now have our transaction built, waiting to be signed.

<p align="center">
<img src="/assets/img/send2.png" class=responsive width="650" height="520" maxheight="300" />
</p>



***

## Coldcard

In Specter, press `Coldcard Multisig` > `Sign with SD Card file` > `Save transaction to file`.

<p align="center">
<img src="/assets/img/send3.png" class=responsive width="350" height="220" maxheight="300" />
</p>

Put the Coldcard's micro SD card into your computer and copy the `.psbt` file on to it. Then eject the micro SD card and insert back into your Coldcard. 

<p align="center">
<img src="/assets/img/send4.png" class=responsive width="520" height="140" maxheight="300" />
</p>

On the Coldcard press `Ready to sign`. Review the transaction details and check that the receive address matches the one you specified when building the transaction in Specter. Once you are happy confirm and sign the transaction.

<p align="center">
<img src="/assets/img/send5.png" class=responsive width="200" height="300" maxheight="300" />
</p>

The transaction now has its first signature. Eject the micro SD card and insert back into your computer.

<p align="center">
<img src="/assets/img/send6.png" class=responsive width="200" height="300" maxheight="300" />
</p>

In Specter, press `Load signed transaction from file`.

<p align="center">
<img src="/assets/img/send7.png" class=responsive width="350" height="270" maxheight="300" />
</p>

Choose the `.psbt` file that contains the word `part` near the end of the file name.

<p align="center">
<img src="/assets/img/send8.png" class=responsive width="720" height="200" maxheight="300" />
</p>

Specter now shows 1 out of a required 2 signatures.

<p align="center">
<img src="/assets/img/send9.png" class=responsive width="720" height="450" maxheight="300" />
</p>

***

## Cobo Vault

In Specter, click `Cobo Multisig` > `Sign with QR codes`. 

<p align="center">
<img src="/assets/img/send10.png" class=responsive width="300" height="400" maxheight="300" />
</p>

On your Cobo Vault, open your multisig wallet and press the QR scanner button. Scan the QR code displayed by Specter with the device.

<p align="center">
<img src="/assets/img/send11.jpg" class=responsive width="270" height="180" maxheight="300" />
</p>

Review the transaction details, confirm and enter your password.

<p align="center">
<img src="/assets/img/send12.png" class=responsive width="280" height="400" maxheight="300" />
</p>

Back in Specter, click `Scan signed transaction`, this will open your computer's camera. Hold the Cobo device up to the camera for Specter to read the signed transaction.

<p align="center">
<img src="/assets/img/send14.png" class=responsive width="280" height="400" maxheight="300" />
</p>

Your transaction now has the required number of signatures and is ready to be broadcasted. Press `Send Transaction`.

<p align="center">
<img src="/assets/img/send13.png" class=responsive width="400" height="300" maxheight="300" />
</p>


Congratulations, you have now built your own 100% air gapped 2-of-3 multisig wallet, verified your receive addresses, completed the air gapped signing process and securely backed up all relevant private and public keys. And you did it all through your own node too! 


Why not practice your [recovery](/multisig/recover) process into Sparrow Wallet? It pays to be comfortable with other co-ordinators in case Specter disappears.


