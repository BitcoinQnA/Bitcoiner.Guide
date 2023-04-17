---
layout: page
title: Multisig.Guide 
subtitle: Recover your multisig wallet
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

Being comfortable recreating your multisig wallet into another co-ordinator software might come in very useful in the future if your current one disappears. It is also a good way to prove that Specter is working as intended! Sparrow Wallet is easily one of the best and most detailed desktop wallets available. You can read an in-depth article to learn more [here](/sparrow).  

## Sparrow Wallet

[Download](https://sparrowwallet.com/download/), verify and install Sparrow wallet onto your computer.

Follow the [quickstart](https://sparrowwallet.com/docs/quick-start.html#welcome-to-sparrow) guide to connect Sparrow to your own node. This can be done directly to Bitcoin Core or to an Electrum Server if you have one running.

Press `File` > `New Wallet` then give your multisig wallet a name.

<p align="center">
<img src="/assets/img/recover1.png" class=responsive width="320" height="200" maxheight="300" />
</p>

Select `Multi Signature` and leave the cosigners to the default 2-of-3.

<p align="center">
<img src="/assets/img/recover2.png" class=responsive width="600" height="400" maxheight="300" />
</p>

Let's import signer number 1 (Coldcard). Press `Airgapped Hardware Wallet` then `Import File` for the Coldcard Multisig option.

<p align="center">
<img src="/assets/img/recover3.png" class=responsive width="450" height="200" maxheight="300" />
</p>

Insert your Coldcard micro SD card and select the `.json` file you exported when completing the initial setup in Specter.

<p align="center">
<img src="/assets/img/recover4.png" class=responsive width="600" height="400" maxheight="300" />
</p>

Select `Keystore 2` > `Air Gapped Hardware Wallet` then `Scan` for the Cobo Vault Multisig option. This will open your computers camera.


<p align="center">
<img src="/assets/img/recover5.png" class=responsive width="500" height="250" maxheight="300" />
</p>

On your Cobo vault, open your multisig wallet, tap the three dots in the top right corner then Show/Export XPUB. This will bring up a QR on screen, hold the Cobo Vault up to your computers camera so that Sparrow can read the displayed QR code.

<p align="center">
<img src="/assets/img/recover6.png" class=responsive width="600" height="400" maxheight="300" />
</p>

>The following steps are a temporary measure until Sparrow supports QR code imports for Seed Signer in the same way that Specter does


Select `Keystore 3` > `Watch only wallet`. Give the signer a name and then copy the following information from your Specter backup PDF.

* Master fingerprint
* Derivation path
* Master public key


<p align="center">
<img src="/assets/img/recover9.png" class=responsive width="400" height="150" maxheight="300" />
</p>

Enter into Sparrow and press `Apply`. You will then be ased if you want to add a password to for accessing this wallet within Sparrow.

<p align="center">
<img src="/assets/img/recover7.png" class=responsive width="600" height="400" maxheight="300" />
</p>

You have now rebuilt your multisig wallet in Sparrow. Click `transactions` and you should see the receive and send we did earlier. 

<p align="center">
<img src="/assets/img/recover10.png" class=responsive width="600" height="250" maxheight="300" />
</p>

Finally, check that your next receive address in Sparrow, matches the one displayed in Specter. If it does you can be certain that Specter is acting as expected and that you have successfully recovered your wallet into Sparrow.

If you have got this far, well done and thank you for reading!

