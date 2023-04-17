---
layout: page
title: Multisig.Guide 
subtitle: Backing up your multisig wallet
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

Your bitcoin backup **is** your bitcoin. In the setup described in this guide (2-of-3) you can afford the loss/theft of one signing device and still be able to spend your bitcoin. In a worst case scenario that resulted in a complete loss of all 3 signing devices and your Specter backup file, the **minimum** you'd need to recover your wallet is **both** of the following:-

* All 3 signer's public keys
* 2 signer's seed backups

Let's look at how to secure these.

1. [Backup Seeds](#seed-backup)
2. [Backup Public Keys](#public-key-backup)
3. [Backup Risks](#risks)


## Seed Backup


There are many ways in which you can backup your seed words. The most common among which are metal plates. Seed plates are resistant to fire, water and corrosion, ensuring your bitcoin can survive through a disaster situation. You can see an in-depth review of the different types [here](https://jlopp.github.io/metal-bitcoin-storage-reviews/). Pictured below is the [Seedplate](https://seedplate.com/) from Coinkite which uses a punch method to store the first 4 letters of each of your seed words. 

Whichever option you choose, ensure **all** 3 seeds are secured on metal and kept in a secure location.

> Never store all of your seed backups at the same location

<p align="center">
<img src="/assets/img/backup1.png" class=responsive width="400" height="340" maxheight="300" />
</p>

<br/>

## Public Key Backup

As we have already ran through, the combination of all 3 signing devices public keys are used to create your multisig wallet. Lose 1 signing device and its seed backup but still have its corresponding puclic key backup, you can still recreate and spend from your multisig. Lose the device, its seed and its puclic key and you lose your bitcoin.

> Keep a copy of all 3 public keys with **every** seed backup.

If someone were to gain access to all three of your public keys, they could build your wallet but could not spend from it. This is a privacy issue, not a security one.

Remember that backup we downloaded from Specter earlier? That `.pdf` contains everything you need to reconstruct your multisig wallet. It does not have the required private keys to allow you to spend from the wallet however, for that you will need the signing device or its seed backup.


<p align="center">
<img src="/assets/img/backup2.png" class=responsive width="400" height="500" maxheight="300" />
</p>

<p align="center">
<img src="/assets/img/backup3.png" class=responsive width="400" height="500" maxheight="300" />
</p>


Print this PDF and store a copy with every metal seed backup. Be mindful of using shared printers with a memory that may store print jobs, this is could be a privacy leak.

You should also store a copy onto multiple USB drives. You can also encypt the file and store online if required. 

> Anyone with access to this document can see your bitcoin balances and transactions


## Risks

There are some difficult to overcome problems when it comes to multisig backups. You will need to consider these when choosing your backup methods and storage locations.

* Where do you store 3 signing devices securely?
* Where do you store the backup file securely?
* Where do you store 3 seed backups securely?
* If you store them in a place that's too dificult to access, what happens if you need to spend in a hurry?
* If you store your signing devices in difficult to access places, how will you upgrade the firmware?
* If you store your backup file online and this gets hacked, does this make you a target?
* Multisig addresses stand out to chain surveillance firms looking at the blockchain. *This will be not be the case when Taproot is implemented and widely adopted*


Finished backing up your seeds, public keys and wallet metadata? Lets [receive](/multisig/receive) some sats, but not before verifying our receive address on our trusted devices.


