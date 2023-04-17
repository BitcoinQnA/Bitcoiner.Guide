---
layout: page
title: Bitcoin Privacy Guide 
subtitle: Safeguarding your Bitcoin
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareprivacy.png
tags: [books, test]
---

### Table of Contents

1.  [What is cold storage?](#why-safeguard)
2.  [Desktop node](#desktop-node-version)
3.  [Plug + Play node](#plug-play-node-version)
3.  [DIY node](#diy-node-version)
4.  [Other options](#other-options)
5.  [Trade-offs](#trade-offs)


### Why safeguard?

So far all we have discussed are mobile wallets that favour convenience because they are internet connected devices that allow you quick and easy access to your bitcoin. The drawback with convenience is that internet connected devices bring their own exposure which may not be desireable if you are storing larger amounts of bitcoin. So how can we safeguard that bitcoin in a more secure way?

Cold storage refers to a method of bitcoin storage that has never touched the internet. For most users this takes the form of a hardware wallet which is a dedicated device designed with one aim, to generate and secure your private keys. When looking for a cold storage method, look for 'air gapped' devices like the [Passport](https://foundationdevices.com/passport/details/). These devices never need to be plugged into your *potentially* malware infected computer to sign transactions and allow you to spend your bitcoin, adding a huge layer of protection from attack.    

### Desktop Node Version

**Specter Desktop + Coldcard**

Full detailed guide [here](/specter)

1.  Set up your [Passport](/passport)
2.  Download [Specter Desktop](https://github.com/cryptoadvance/specter-desktop/releases)
3.  Choose 'Set up Tor' and 'Setup a New Node'
4.  Turn off quicksync if you have the storage capacity for the blockchain on your computer (400GB)
5. Wait for initial block download to complete
8.  In Specter press 'add new device' then give it a name and select Passport
9.  On Passport follow the Specter connection flow
10. In Specter scan the QR codes being displayed by Passport
11. Press continue and the device will be added
12. Press 'add new wallet', then 'single key'
13. Name the wallet, choose Segwit and select your Passport
14. Press continue then 'create wallet'
16. Select your newly created wallet in Specter and press receive to see your first address


### Plug + Play Node Version

**myNode One + Sparrow + Passport**

Full video guide [here](https://youtu.be/PlK2jOKgWZ8)

1.  Set up your [Passport](https://support.foundationdevices.com/setup-guide)
2.  Set up your [myNode One](http://mynodebtc.com/guide/getting_started)
3.  Wait for initital block download (IBD) to complete
4.  [Connect](https://www.sparrowwallet.com/docs/quick-start.html#sparrow-server-setup) Sparrow to the Electrum server on your myNode 
5. Open Sparrow and click File > New Wallet then give your new wallet a name
6. Choose 'Air Gapped Hardware Wallet' then choose 'Scan' next to the Passport icon to open your computer’s camera
7. On Passport go to Pair Wallet > Sparrow > Single Sig > QR Code. The device will then display a QR code containing the wallet data to be received by Sparrow. 
8. Hold Passport up to your computers camera to be read
9. Double check the information provided by Sparrow then click 'Apply'
10. Open the receive tab from the left pane and scan the receive address shown with Passport to complete the pairing process



### DIY Node Version

**RoninDojo + Sparrow Wallet + Passport**

1.  Set up your [Passport](https://support.foundationdevices.com/setup-guide)
2.  Assemble your RoninDojo node [hardware](https://wiki.ronindojo.io/en/hardware)
3.  Flash SD card then insert into device
4.  Complete Manjaro setup
5.  SSH into the device and install RoninDojo, ensuring you say 'yes' to installing Electrum Rust Server (electrs)
6.  Wait for IBD and Electrs compaction to complete
7.  Download [Sparrow Wallet](https://sparrowwallet.com/download)
8.  [Connect](https://wiki.ronindojo.io/en/gui-setup/step12) Sparrow to your Electrum Rust Server
5. Open Sparrow and click File > New Wallet then give your new wallet a name
6. Choose 'Air Gapped Hardware Wallet' then choose 'Scan' next to the Passport icon to open your computer’s camera
7. On Passport go to Pair Wallet > Sparrow > Single Sig > QR Code. The device will then display a QR code containing the wallet data to be received by Sparrow. Hold Passport up to your computers camera to be read
8. Double check the information provided then click 'Apply'
9. Open the receive tab from the left pane and scan the receive address shown with Passport to complete the pairing process


### Other options 

There are plenty of other [hardware wallet](/wallet/hardware) and [node](/node) combinations, most will require some form of Electrum Server to act as a bridge between the underlying bitcoin software on your node and desktop wallet which the most commonly used hardware wallet interface.


### Trade-offs

* As touched on in the [secure](/privacy/secure) page, your backup **is** your bitcoin. This is no different for mobile or hardware wallets. Guard it with your life.
* If you have just coinjoined some of your bitcoin and are keen to get it sent off to cold storage, be mindful of how you construct your transaction. Merging UTXO's shows common ownership to anyone watching on chain.
* When getting any form of bitcoin related hardware delivered you are susceptible to supply chain attack. This means that an attacker could intercept the package and swap it out with a malicious device designed to steal your bitcoin. Whilst this is unlikely, it is something worth taking into account when setting up your devices. Ensure you follow the check procedures outlined by the product manufacturer when you receive. 
* Another thing worth considering is your payment method and delivery address. You can buy no-KYC bitcoin in cash from a meetup for maximum privacy, but if you buy a [Passport](https://foundationdevices.com/passport) from Foundation (a public bitcoin company) using your credit card and have it delivered to your home address you're certainly giving away some clues!

  

Now you have obtained, secured, segregated, labelled and coinjoined your bitcoin into both mobile and hardware wallets that are backed by your own node, let's look at how to [spend](/privacy/spend) your bitcoin in a private way.
