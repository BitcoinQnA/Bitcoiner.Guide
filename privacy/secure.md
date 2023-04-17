---
layout: page
title: Bitcoin Privacy Guide 
subtitle: Securing your Bitcoin
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareprivacy.png
tags: [books, test]
---

### Table of Contents

1.  [Why secure your own bitcoin?](#why-secure-your-own-bitcoin)
2.  [Android](#android)
3.  [iOS](#ios)
4.  [Desktop](#desktop)
4.  [Backup](#backup)
5.  [Trade-offs](#trade-offs)


### Why secure your own bitcoin?

There goes a saying in Bitcoin, "not your keys, not your coins." What this essentially means is that, if you are not in control of your private keys (your recovery/seed words) then you are not in control of your bitcoin. Fortunately, if you are buying from a no-KYC source then you will almost certainly require your own wallet to conduct trades. From a privacy perspective if you do not control your own keys, for example if you have your bitcoin held with a custodian, then you essentially have zero privacy. Whoever controls those keys has the ability to not only see all of your funds, but spend them as they see fit.

[Here](https://www.bit-buy-bit.com/podcast-1/episode/26df4d37/ep35-bitcoin-podcast-with-itcoin-qa) is a podcast episode where I walk through in details the basics of bitcoin wallets.

> All of the wallets mentioned in this guide have Tor network functionality built in. Ensure this is enabled for maximum network level privacy!

### Android

1.  Download [Samourai Wallet](https://samouraiwallet.com/download)
2.  Select mainnet and enable tor
3.  Start new wallet
4.  Create a passphrase (*it is crucial that you secure this. Without this and your recovery words you cannot access your bitcoin*)
5.  Set a pin code
6.  Write down your recovery words (*it is crucial that you secure this backup. Without this and your passphrase you cannot access your bitcoin*)
7.  Tap the blue + and then press receive
8.  You will now see your first bitcoin address that you can receive to


### iOS


1.  Download [BlueWallet](https://bluewallet.io/)
2.  Tap 'Add a Wallet'
3.  Give the wallet a name, choose 'Bitcoin' and 'HD SegWit'
4.  Tap 'Create'
5.  Write down your recovery words (*it is crucial that you secure this backup. Without this and your passphrase you cannot access your bitcoin*)
6.  Tap the wallet card at the top of the screen then choose 'Receive'
7.  You will now see your first bitcoin address to which you can receive funds


### Desktop

1. Download [Sparrow Wallet](https://www.sparrowwallet.com/download/)
2. Choose the type of server you want to connect to (*your own where possible*)
3. Click 'New Wallet' and give it a name
4. Choose 'New or Imported Software Wallet'
5. On the 'BIP39' dropdown, choose 12 words
6. Choose 'Generate New'
7. Add a passphrase (*it is crucial that you secure this. Without this and your recovery words you cannot access your bitcoin*)
8. Click 'Confirm Backup', then re-enter the words then click 'Apply'
9. Click receive on the laft pane to see your first bitcoin address to which you can receive funds
  

### Backup 

Your bitcoin backup is your bitcoin. Anyone with access to it has access to your bitcoin. 

*  Samourai Wallet creates an encrypted backup of your wallet automatically on your phone

For extra redundancy most people keep their seed words and passphrase on some form of [metal](https://jlopp.github.io/metal-bitcoin-storage-reviews/) storage.

You should ensure that your chosen method of backup is resistant to...

*  Theft/Loss
*  Fire/Water/Elements damage
*  Degradation
  
### Trade-offs

Unless your chosen wallet is backed by your own node, you are trusting someone elses. This means that your transactional data and wallet balances are being served by someone else and they can theoretically eavesdrop on your on-chain activity. However, most users aren't likely to run a node **before** they even hold their own keys, the natural learning progression doesn't work that way. If you feel confident in setting up your own node first then skip ahead to the [scrutinise](/privacy/scrutinise) section and then come back here to continue with the guide. 

But if that sounds a bit too much for you right now don't panic, we will fix that later in the guide.

Holding your own keys is a big responsibility, there are no refunds in Bitcoin.
    
Now you know how to obtain secure privately, let's [segregate it](/privacy/segregate).
