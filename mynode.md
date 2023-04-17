---
layout: page
title: myNode
subtitle: A simple to use node package
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharemynode.png
---


So, you’ve spent some time learning about Bitcoin, grasped the basics and you’ve decided you want to run your own full node. There are many great options out there but myNode is the easiest way to get started and comes packed with features. This article will hopefully give you a better understanding of each one.

Before I delve into the features, it's worth noting the three tiers that [myNode](https://mynodebtc.com/) offers…

### Community Edition

The completely free version that comes with everything you need to get started. You just download the software from [mynodebtc.com](http://mynodebtc.com/) and build with your own hardware. Alternatively you can also run the software in a [virtual machine](https://www.youtube.com/watch?v=jW256w0X3Mc&amp;list=PLCRbH-IWlcW0KP8DxyWWrqahGafZyV2HR&amp;index=17&amp;t=0s) but this requires a little more tech knowhow.

### Premium Edition

You get everything included in the community edition plus some cool extra features (detailed below). Premium users also get premium support and one click upgrades for staying up to date. Premium is a one off fee of $99.

### myNode One

The full premium software package plus all of the hardware required to get going. You literally just plug and play! myNode One is a one time fee of $329 *(price can vary slightly depending on the specific hardware you choose)*

<br/>

## **Community Features**

### Bitcoin

‘Bitcoind’ (Bitcoin Daemon) is the heart of your node. It is the software that everything else is built around. It downloads a copy of the entire blockchain and then verifies the validity of your incoming transactions. Think of it as the enforcer of your Bitcoin ruleset. Without this, nothing else runs.

### Lightning

‘LND’ (Lightning Network Daemon) is your gateway into the Lightning Network. It works in conjunction with Bitcoin to ensure it keeps up to date with the latest blocks. LND provides the framework for you to open lightning channels and then send/receive lightning payments. Within the lightning page you will be able to set up a wallet (make sure you write down your seed words) to deposit Bitcoin into. From there you can use any compatible LND app to open a channel with and the send funds across the network to anyone.

### Electrum

‘Electrs’ (Electrum Rust Server) is a backend server that indexes the blockchain on your node. It provides the framework for you to connect any number of different desktop, mobile or hardware wallets to your node. It supplies your wallet with the information required to show your balances and transactional data. *Not to be confused with [Electrum](https://electrum.org/#home) wallet.

[Here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi30PG13vXuAhXIi1wKHbURABYQwqsBMAF6BAgDEAg&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpyylkpR4DDk&usg=AOvVaw1o9qasr0wu82E-VseHywto) is a BTC Sessions video on connecting the most common wallets to your Electrum server.

### Ride The Lightning

‘RTL’ is an easy to use interface that allows you to interact and perform tasks with your LND. From RTL you can deposit Bitcoin, open and manage channels, view your lightning transactions and fees and view other lightning related stats.

<p align="center">
<img src="/assets/img/RTL.png" class=responsive width="500" height="250" maxheight="300" />
</p>


### LND Hub

LND Hub is an interface for connecting your [Blue Wallet](https://bluewallet.io/) to your own lightning instance. If you are not a Blue Wallet user you don’t need this feature.

### LND Connect

LND Connect is an interface for connecting wallets like [Zap](https://zap.jackmallers.com/download) and [Zeus](https://zeusln.app/) to your own lightning instance. It provides QR codes to make lightning wallet pairing quick and easy.

### Bitcoin RPC Explorer

The explorer provides a space to pull the latest stats from your node and the entire blockchain. This can be anything from block times or mempool data to mining difficulty and transaction stats. The list is endless.

<p align="center">
<img src="/assets/img/explorer1.png" class=responsive width="500" height="250" maxheight="300" />
</p>


### Dojo

[Dojo](https://samouraiwallet.com/dojo) is the backend server for your Samourai Wallet. It provides the interface between your Bitcoin and Electrum instances and your Samourai mobile wallet. From here you can find instructions on how to pair your Samourai Wallet to your Dojo and grab your Tor log in credentials to visit your Dojo Maintenance Tool to perform additional tasks (for the more technical user).

[Here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwieo_7Q3vXuAhXFnFwKHa7oBP4QwqsBMAB6BAgDEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DicyeO70ICi4&usg=AOvVaw3sRufL28a_Nh5zs3Rt5_fr) is a BTC Sessions video on setting up and connecting Samourai Wallet to a Dojo using myNode.

### Whirlpool

The Bitcoin ledger is completely public so ensuring you take steps to maintain your privacy is very important. Whirlpool CLI is a tool that allows you to participate in [Samourai’s](https://samouraiwallet.com/whirlpool) Whirlpool CoinJoin service 24/7. After your initial mix, you can have your Bitcoin remixing (for free) constantly without having to have your phone or desktop versions open.

<br/>

## **Premium Features**

### Premium Support and 1 Click Updates

Premium users get one click upgrades (perfect for people not wanting to run any command line inputs). There is also a premium support email and Telegram group for troubleshooting.

### VPN

VPN give you access to your node from anywhere in the world. You install the [OpenVPN](https://openvpn.net/) app on your phone, pair it to your node and it provides a 'tunnel' back to your local network. You can then access all of the features and perform tasks with your node remotely.

### Tor

Tor remote access is similar to VPN in that it gives your remote access to your node instead it runs via the [Tor](https://www.torproject.org/) network which hides your IP address and preserves your online privacy.

### BTC Pay Server

[BTC Pay](https://btcpayserver.org/) is an server that allows you to use your own Bitcoin/Lightning node to create stores, automatically generate invoices and manage accounts all while being safe in the knowledge that the payments you are receiving aren't being routed through any third party.

<p align="center">
<img src="/assets/img/btcpay.png" class=responsive width="300" height="150" maxheight="300" />
</p>


### Mempool

Mempool viewer is your own version of [mempool.space](https://mempool.space/). It provides a visual representation of blocks and transactions waiting to be confirmed in the Bitcoin mempool. It also provides data about the most recent blocks. You can also use this to track your transaction I.D’s to follow the bitcoin you send without leaking any transaction data to third party block explorers.

<p align="center">
<img src="/assets/img/mempool.png" class=responsive width="500" height="250" maxheight="300" />
</p>

## **Other Features**

- Full command line interface for more technical users

- '[Quicksync](https://mynodebtc.com/guide/sync_bitcoin_independently)' which downloads a pre validated portion of the blockchain to speed up the initial download process

- Bitcoin + LND run behind Tor by default

***

## **Recommended Hardware (for self build options)**

[Raspberry Pi4 - 4GB Ram](https://www.amazon.com/LABISTS-Raspberry-Complete-Preloaded-Heatsinks/dp/B07Z1QFLNH/ref=sr_1_1_sspa?crid=2LOVGH7Q1CONN&amp;dchild=1&amp;keywords=raspberry+pi+4+canakit+4gb&amp;qid=1589706343&amp;sprefix=raspberry+pi+4+ca%2Caps%2C228&amp;sr=8-1-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE5VlJVMEpMVjhURTgmZW5jcnlwdGVkSWQ9QTA3NzU5MzcxTUZUWTQ4UkZFTDZaJmVuY3J5cHRlZEFkSWQ9QTA0NjU5OTJPWEZOWERSVUpGSjAmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl)*(check the power supply relevant to your country)*

[Samsung 1TB SSD](https://www.amazon.com/Samsung-T5-Portable-SSD-MU-PA1T0B/dp/B073H552FJ/ref=sr_1_5?crid=J1TKURXF78WI&amp;dchild=1&amp;keywords=samsung+1tb+ssd&amp;qid=1589706540&amp;sprefix=samsung+1tb%2Caps%2C221&amp;sr=8-5)

[Ethernet cable](https://www.amazon.com/AmazonBasics-RJ45-Cat-6-Ethernet-Patch-Cable-5-Feet-1-5-Meters/dp/B00N2VILDM/ref=sr_1_3?crid=2AJ19I70926EI&amp;dchild=1&amp;keywords=ethernet+cable&amp;qid=1589708005&amp;sprefix=ethernet%2Caps%2C222&amp;sr=8-3)

***

## **Getting Started**

If after reading this article you want some easy to follow, step by step tutorials on setting up your myNode and using all of these great features, check out the [Ministry of Nodes Youtube series](https://www.youtube.com/playlist?list=PLCRbH-IWlcW0KP8DxyWWrqahGafZyV2HR).

If you have any more questions consult the [guides](https://mynodebtc.com/guides), drop into the [Telegram group](https://t.me/mynode_btc) or fire me a DM on [Twitter](https://twitter.com/BitcoinQ_A). Make sure you follow the [myNode](https://twitter.com/mynodebtc) team too!


<p align="center">
<img src="/assets/img/mn.png" class=responsive width="300" height="450" maxheight="300" />
</p>

*Disclaimer - These views and interpretations are my own and not those of the myNode team.*

