---
layout: page
title: Multisig.Guide 
subtitle: Shopping list
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

There are many ways to achieve a sovereign multisig setup, this guide aims to show you just one of them. The hardware and software tools detailed have been selected for good reason, all of which are explained below. You are welcome to use alternative hardware or software but please ensure you do your own research.

## Hardware


| Item                 | Purpose                                |  
| ---------------------|-----------------------------------------------|
| [Laptop with webcam]() | Installing Specter Desktop                   |
| [Coldcard](https://coldcardwallet.com/)           | Air gapped signer #1                     |
| [Micro SD Card <32GB x2](https://www.amazon.com/SanDisk-Ultra-SDSQUNS-016G-GN3MN-UHS-I-microSDHC/dp/B074B4P7KD/ref=sr_1_6?dchild=1&keywords=sandisk+micro+sd+card+16gb&qid=1619637630&sr=8-6)      | For passing transactions to/from the Coldcard + installing Seed Signer software |
| [Cobo Vault](https://shop.cobo.com/products/cobo-vault-essential?_ga=2.129427660.1128237201.1619636864-1086240539.1616094588)| Air gapped signer #2  |
| [Seed Signer](https://github.com/SeedSigner/seedsigner)        | Redundant air gapped signer #3 - Parts list below         |


**Hardware Rationale**

* Best if computer is a dedicated device but this is not absolutely neccessary
* Laptops work best as you can take Specter to each of your signing device locations
* All 3 signing devices interact via an airgap for increased security
* Coldcard + Cobo both offer on device address verification
* Multi vendor quorum requires collusion between at least 2 of them to pull off an attack
* [Seed Signer](/multisig/ssparts) mitigates supply chain attacks by using generic hardware (*this device can be swapped out for a [Specter DIY](https://github.com/cryptoadvance/specter-diy/blob/master/docs/shopping.md) or [Paper Wallet](https://btcguide.github.io/setup-wallets/paper) as outlined in Michael Flaxman's guide*)

***

## Software


| Item                 | Reason                                        |
| ---------------------|-----------------------------------------------|
| [Bitcoin Node](/node)         | Verifying your own transactions                |
| [Specter Desktop](https://github.com/cryptoadvance/specter-desktop)   | Co-ordinating the wallet + all trasactions  |
| [Sparrow Wallet](https://www.sparrowwallet.com/)  | For testing backups + redundancy         |

**Software Rationale**

* Your own node is used to broadcast and verify your own transactions for both security and privacy
* Specter Desktop offers a built in Bitcoin node for ease of setup
* Specter offers arguably the easiest user interface
* Sparrow offers tiered approach to node connection which provides more options for those unable to run their own
* Sparrow serves as another coordinator to ensure Specter is acting as expected


***

## Other

| Item                 | Reason                                        |
| ---------------------|-----------------------------------------------|
| [3x Metal Seed backups](https://seedplate.com/) | Robust seed word backups                           |
| [USB Drive](https://www.amazon.com/MOSDART-USB2-0-Swivel-Drives-Indicator/dp/B01DI1XO4G/ref=sr_1_3?dchild=1&keywords=usb+drive+8gb&qid=1619637788&sr=8-3)            | Storing Specter Desktop backup file           |
| [Dice](https://store.coinkite.com/store/dice-100)      | Add adding entropy to seed generation of all 3 signers |

**Other Tools Rationale**

* 1 metal backup for each signing device to protect against device failure, loss or damage
* USB drive provides an easy way to store the wallet backup file. This can be encrypted for extra privacy if required
* Dice rolls allow for user added entropy to remove trust in signing device manufacturers



Got everything you need? Lets get started with the [software setup](/multisig/software).

