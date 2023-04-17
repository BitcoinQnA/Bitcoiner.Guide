---
layout: page
title: Samourai Wallet
subtitle: Android wallet with built in coinjoin
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharesamourai.png
---

Entering the Bitcoin realm today presents a user with a wealth of choice of mobile wallets (admittedly some better than others). BRD, Eclair, Electrum, Blockstream Green and Blue Wallet to name just a few. I’m here to tell you why Samourai Wallet is the only one you need.

## Features

Samourai comes with all of the usual features we have come to expect from a Bitcoin wallet…

- Send/Receive (obviously)
- SegWit compatibility
- Adjustable miner fees
- Ability to connect to your own node ([Dojo](https://samouraiwallet.com/dojo) in SW’s case)

However, Samourai comes with much more which sets it apart from the rest so here goes…

## Coin Selection

Samourai gives you full control of every individual UTXO in your wallet. This means that if required you can specify which UTXO’s goes into every transaction you make. This can be useful when looking to protect your on chain privacy by not merging UTXO’s from different sources that you would prefer to keep separate such as KYC/Non-KYC funds.

## Tor

Samourai wallet runs over Tor by default to protect your online activity from prying eyes. This feature can be switched off if you prefer being watched!

## PayNym

Designed to obfuscate surveillance firms ability to track you on chain, a PayNym is a publicly shareable I.D that generates a fresh address for every transaction and only ever reveals an address to the sender and recipient of any transaction. Plus you get a cool little avatar to go with it! 

[Here’s mine](https://paynym.is/+BQA), feel free to connect…

<p align="center">
<img src="/assets/img/BQA.png" class=responsive width="300" height="300" maxheight="300" />
</p>

## Opendime Support

You can plug an [Opendime](https://opendime.com/) directly into your phone and using Samourai, verify it’s balance, receive a payment or sweep the sats it contains into your wallet.

<p align="center">
<img src="/assets/img/Opendime.png" class=responsive width="300" height="300" maxheight="300" />
</p>

## Encrypted Backup

Samourai automatically saves an encrypted backup of your entire wallet on your phone to allow for an [easy restore](https://www.youtube.com/watch?v=Fqpix_h1oEU&amp;feature=youtu.be) just in case you uninstall the app by mistake. You will also need your passphrase so make sure you keep it safe.

You can of course restore from your seed words and passphrase if you wish.

## Batch Spending

You can create one large batch of unrelated transactions that could save you up to 30% on miner fees. Particularly useful if you’re wanting to pay multiple people at once.

## Offline Mode

You can use Samourai in offline mode to create a cold storage solution and ensure your private keys never go near the internet. You can then use their partner watch only wallet ‘Sentinel’ to broadcast transactions on another device whilst maintaining that important air gap. There are even options to broadcast via SMS or mesh networks such as [goTenna](https://txtenna.com/) although these aren’t widely used currently.

## Mobile Mixing (Whirlpool)

My favourite feature by far, mobile mixing allows you to do exactly what it says on the tin. Samourai’s Whirlpool service allows you to participate in their mixing services from your phone to create a barrier against anyone carrying out on chain analysis on the history of your UTXOs. Once your UTXO’s have been through a Whirlpool you be safe in the knowledge that no chain analysis firm can be sure which UTXO’s belong to who. You can learn more about the basic concepts [here](https://medium.com/samourai-wallet/diving-head-first-into-whirlpool-anonymity-sets-4156a54b0bc7).

You can mix your sats into any one of three liquidity pools :-

- 100k sats (0.001 BTC)
- 1m sats (0.01 BTC)
- 5m sats (0.05 BTC)
- 50m sats (0.5 BTC)

Fees are fixed and paid once per pool so the more bitcoin you mix, the less of a fee you pay as a total %. Keep a look out on Twitter for an ‘SCODE’ which grants discounted fees for a couple of days.

<p align="center">
<img src="/assets/img/fees.png" class=responsive width="400" height="300" maxheight="300" />
</p>


Your [first mix](https://twitter.com/BitcoinQ_A/status/1245061561074569219?s=20) will usually happen almost instantly and remixing is completely FREE. Long term remixing on mobile can sometimes be troublesome as Android likes to kill background activity but you can alter this in your phone settings. For those of you looking for a long term unlimited remixing look into their CLI implementation (see complimentary links below) which runs on a dedicated device like a Raspberry Pi.

Another thing worth noting about Samourai is that it segregates your mixed and unmixed funds to prevent you from hurting your own privacy by merging the two together. Whirlpool also gives you the option to mark your mix change as ‘Doxxic’ so as to keep it completely separated from anything else in your wallet, especially those freshly mixed sats!


## Ricochet

Ricochet is a transaction type that creates additional ‘hops’ which can be beneficial if you are sending to a centralised service such as an exchange who may want to pry into the history of your UTXO’s. It is generally accepted that when checking most companies just look ‘one hop’ back, so by adding that additional distance you mitigate any risk of unjust treatment.

<p align="center">
<img src="/assets/img/oxt.png" class=responsive width="450" height="300" maxheight="300" />
</p>


## Post Mix Spending

Without proper post mix spending techniques it is very easy to undo all of the good work created by carrying out your first Whirlpool mix. Luckily Samourai comes well equipped with some awesome tools to help you maintain and even improve your privacy after mixing.

**Stonewall** — Stonewall builds your transaction in a unique way to increase the deniability of links between the sender and recipient. Once the [spending conditions](https://gist.github.com/SamouraiDev/4ced85a29996dd56781e2bf319b93aaf) are met the wallet will create this type of transaction automatically for you and it will display the level of entropy the transaction will have. Stonewall is actually a ‘fake’ mini coin join using only your own UTXO’s.


**Stonewall X2** — This type of transaction creates a mini coin join with another Samourai user that you are in cahoots with. It mixes some of both Samourai users UTXO’s when paying to any third party to create a high entropy transaction. You don’t even need to be in the same room as your fellow Samourai user to [create a Stonewall X2](https://samourai.kayako.com/article/74-how-to-create-a-stonewallx2-transaction) as you can simply share QR codes via encrypted chat.

**Stowaway** — This is Samourai’s implementation of [P2EP](https://en.bitcoin.it/wiki/PayJoin) (Pay to End Point). When paying another trusted Samourai user it creates a transaction that looks just like any other Bitcoin transaction on chain but, it’s actually a form of mini coin join. The most powerful thing about Stowaway is that the amount being sent will never actually be visible to anyone looking at chain data. Stowaway also uses sender AND recipient UTXO’s on the input side of the transaction which completely destroys the [common-input ownership heuristic](https://en.bitcoin.it/wiki/Common-input-ownership_heuristic) for chain analysis firms.

Just like Stonewall X2, Stowaway can be [constructed](https://samourai.kayako.com/article/73-creating-a-stowaway-transaction) in person or remotely.

---

**Complimentary Links**

Below are some links to tools that compliment Samourai Wallet and are well worth checking out…

- [SW Website](https://samouraiwallet.com/) (full list of features)
- [Stephan Livera](https://stephanlivera.com/episode/150/) Podcast with SW
- [RoninDojo](https://github.com/RoninDojo/RoninDojo) (your own SW Dojo/Whirlpool CLI backend)
- [MyNode](http://mynodebtc.com/) (another SW Dojo/Whirlpool CLI backend)
- [Nodl Dojo](https://shop.nodl.it/en/home/38-nodl-dojo.html) (plug + play SW Dojo/Whirlpool CLI backend)
- [Sentinel X](https://github.com/InvertedX/sentinelx) (watch only wallet that connects to your own Dojo)
- [An in depth](https://www.youtube.com/watch?v=faWjUuI5XOQ) look at Whirlpool and post mix spend tools

---

**What are you waiting for?**

So there you have it Bitcoiners, there simply isn’t a Bitcoin wallet that even comes close right now. Samourai Wallet is leaps and bounds ahead of the competition and they’re showing no signs of slowing down.

Don’t settle for second best, [download ](https://samouraiwallet.com/download)Samourai Wallet today. (Sorry iOS users, SW is Android only)

<p align="center">
<img src="/assets/img/ios.png" class=responsive width="300" height="300" maxheight="300" />
</p>


If you have any questions feel free to grab me on [Twitter](https://twitter.com/BitcoinQ_A) and be sure to follow [SamouraiWallet](https://twitter.com/SamouraiWallet) too.

Alternatively drop into the [Telegram group](https://t.me/SamouraiWallet) or visit the [support](https://support.samourai.io/) documentation page.

Huge shout out to the Samourai team who have helped me learn an incredible amount about Bitcoin privacy.


*Disclaimer — All views expressed in this article are my own and not those of the SW developer team.*

