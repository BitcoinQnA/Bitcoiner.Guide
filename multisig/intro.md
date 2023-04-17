---
layout: page
title: Multisig.Guide 
subtitle: Introduction
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

## Page Contents

1.  [Intro](#intro)
2.  [Why multisig?](#why-multisig)
3.  [benefits](#multisig-benefits)
4.  [Risks](#multisig-risks)
5.  [Other options](#other-options)


## Intro

Everyday people are used to relying on someone else to safeguard their finances for them, it's just what happens in day to day life. Bitcoin (**if done correctly**) flips this model on it's head and puts personal responsibility front and center. To truly own bitcoin, you must be in control of your own private keys, or, as it goes in the space, "Not your keys, not your coins". Managing your own Bitcoin private keys is a huge responsibility, lose them, and you lose your bitcoin. 

This guide draws heavy inspiration from the excellent [10x Bitcoin Security Guide](https://btcguide.github.io/) by [Michael Flaxman](https://twitter.com/mflaxman). As well as being a full walkthrough, Michael's guide also offers an incredibly detailed look at the advanced considerations of each step. This guide aims to give a more condensed look at the key concepts and is designed to:- 

* Help all Bitcoin users understand the pros and cons of a multisig security setup
* Help beginner/intermediate Bitcoin users understand the specific risks involved in changing to a more advanced security setup 
* Give advanced Bitcoin users a step by step guide in creating a 100% airgapped 2-of-3 multisig wallet setup

> If you're a beginner wanting to try this out, all three signing devices + Specter support testnet. Practice with this first!  

<br/>

## Why Multisig?

The simplest way to hold your own bitcoin is via the use of a 'single signature' wallet. As the name indicates, to spend from such a wallet requires just a single signature. Single sig wallets can come in the shape of a simple [mobile wallet](https://bitcoiner.guide/wallet/mobile), a 'software' or [desktop wallet](https://bitcoiner.guide/wallet/desktop) and can also be generated on a dedicated [hardware device](https://bitcoiner.guide/wallet/hardware). If managed correctly, single sig wallets strike a good balance between security and simplicity, which is what makes them the default use case for 95% of people. Single sig users need only secure one secret (their 12 or 24 word seed phrase) or two secrets if they are wise enough to use a strong [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) passphrase.

However, this simplicity does leave the user open to fund loss via certain **potential** attack vectors. These include but are not limited to:-

* The $5 wrench attack - *Someone breaks into your house and forces you to handover your seed*
* Lost/stolen seed backup
* Lost/stolen passphrase backup (if used)
* A compromised hardware device
* Malicious software - *You should always [verify](https://bitcoiner.guide/verifysoftware) the software you install*
* Supply chain attacks - *You can [build](https://github.com/cryptoadvance/specter-diy) your own hardware device or use generic hardware to mitigate this*

**Enter multisig...**

## Multisig Benefits

Multisig wallets are created using 2 or more compatible signing methods. Upon setup, multisig wallets define a 'spending quorum' which outlines the threshold of signatures required to spend from the total amount of signers used to create the wallet. This could be something as simple as 2 out of a possible 3 (2-of-3) signatures, to something as complex as an 11-of-15, the likes of which might be used in a business environment. The most common approach (and the one we will use in this guide) is a 2-of-3 quorum, but the exact same principles outlined can be used for a setup of your choice. A multisig wallet setup offers redundancy and improved protection from the following:-

* The $5 wrench attack - *An attacker has to compromise you at 2 separate locations to steal your bitcoin*
* A lost/stolen seed backup - *Lose 1 of 3 seeds/devices and you can still spend from the wallet*  
* A lost/stolen hardware device - *A single device cannot spend on its own*
* A compromised hardware device - *A single malicious device cannot spend on its own*
* Supply chain attacks - *A single malicious device cannot spend on its own*

<br/>

## Multisig Risks

With the increased security and redundancy that multisig provides, comes a new set of problems that a user will need to deal with (and are the reason this guide is not for beginners):-

* More seeds to backup - *Where will they all be stored securely*?
* More devices to secure - *Where will they all be stored securely?*
* A backup of all public keys - *Loss of 1 seed + 1 public key = no chance of recovery in a 2-of-3 setup* 
* Script type and derivation paths used - *Generally standardised but useful in emergency recovery situations*
* Inheritance - *If you disappear tomorrow, does your spouse know how to co-ordinate a 2-of-3 spend*?

<br/>

## Other Options

This guide is geared towards the most sovereign type of setup that is created and managed solely by the end user. It is the most private option and relies on zero trusted third parties. There are other multisig options that offer things like guided setup and redundant, off site key storage. These options almost always require the user to give up personal information as well as allowing the provider full sight of the amount of bitcoin you own. 

> **Please do your own research before using any of these companies!**

* [Unchained Capital](https://unchained-capital.com/)
* [Casa](https://keys.casa/)


Considered the tradeoffs? Ready to get started? Let's get our [shopping list](/multisig/shopping) together. 


