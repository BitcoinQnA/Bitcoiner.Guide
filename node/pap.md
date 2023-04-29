---
layout: page
title: Node.Guide 
subtitle: Plug + play options
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/sharenode.png
tags: [books, test]
---

<p align="center">
  <a href="/node/core">Core</a> |
  <a href="/node/pap">Plug + Play</a> |
  <a href="/node/diy">DIY</a> |
  <a href="/node/other">Other</a> |
  <a href="/node/compare">Compare</a>
  <br><br>
</p>


Plug and Play node boxes offer a convenient way to run your own node. Most run on a variation of a single board computer such as a [Raspberry Pi](https://www.raspberrypi.org/). You simply choose your specification (*if multiples are offered*), wait for it to be delivered, plug it in and you are off. This convenience comes with some tradeoffs that you should be aware of. Because you are buying pre built hardware, you can never be 100% sure that there are no malicious components installed that could be leaking your privacy, or worse your bitcoin. However, were one of the suppliers below were to perform such an attack, they would not be in business for long! Finally, you should consider the privacy and security aspects of getting Bitcoin related hardware delivered to your home address.

### Table of Contents

1.  [RoninDojo Tanto](#ronindojo-tanto)
1.  [myNode One](#mynode-one)
2.  [Nodl One](#nodl-one)
3.  [Nodl Dojo](#nodl-dojo)
4.  [RaspiBlitz](#raspiblitz)
5.  [Start9 Server](#start9)
6.  [Build-A-Node](#build-a-node)
7.  [The Bitcoin Machine](#the-bitcoin-machine)
8.  [BTC Cube](#btc-cube)

***

### Cost Comparison

| Node                                | Cost                               |
|-------------------------------------|------------------------------------|
| [RoninDojo Tanto](#ronindojo-tanto) | $599 (nVME SSD)                    |
| [myNode One](#mynode-one)           | $339 (HDD)                         |
|                                     | $419 (SSD)                         |
| [Nodl One](#nodl-one)               | $499                               |
|                                     | +$50 w/ kill switch                |
|                                     | +$50 w/ Dojo support               |
| [Nodl Dojo](#nodl-dojo)             | $849                               |
| [RaspiBlitz](#raspiblitz)           | 269€ (2GB)                         |
|                                     | 299€ (4GB)                         |
|                                     | 369€ (8GB)                         |
|                                     | 379€ (4GB) w/ terminal style case  |
| [Start9](#start9)                   | $499 (8GB Pi), $1799 Pro (x86)     |
| [Build-A-Node](#build-a-node)       | From $410                          |
| [The Bitcoin Machine](#the-bitcoin-machine)       | From $199            |
| [BTC Cube](#btc-cube)       | From $679.95            |

***

## RoninDojo Tanto

The [RoninDojo Tanto](https://shop.ronindojo.io/shop/ronindojo-tanto/?v=47e5dceea252) is a RockPro64 single board computer housed in a beautiful powder coated custom case, milled from a single block of aluminium. The RoninDojo team keep Samourai Wallet as the main focus of their development, but also provide support for almost all other wallets via the inclusion of an Electrum Server. 

<p align="center">
<img src="/assets/img/tanto.png" class=responsive width="450" height="320" maxheight="250">
</p>


### Features

* Full Dojo backend for Samourai Wallet
* Whirlpool
* Whirlpool Stat Tool (For calculating anonymity sets)
* Boltzmann (For calculating transaction entropy)
* Electrum Server (*Electrs*)
* BTC Explorer
* Mempool Viewer
* Specter Web Interface
* Remote access via Tor


### Ease of setup

Once you receive the device, connect the hardware to power and your router, then visit `http://ronindojo.local/` with your phone, laptop or computer. 


### Limitations

Users requiring Lightning Network support will need to look elsewhere.

### Cost

* $599 

### Recommended Hardware

Comes pre built with a RockPro64 4GB + 1TB nVME sold state drive 

### Other resources

* [Codebase](https://code.samourai.io/ronindojo)
* [Telegram](https://t.me/RoninDojoUI)
* [Wiki Page](https://wiki.ronindojo.io/)
* [Setup Video - Coming Soon](/)

***


## myNode One

The [myNode One](https://mynodebtc.com/products/one) is a Raspberry Pi4 4GB and comes packaged with their premium software which provides extra features and support. The myNode software comes with a beginner friendly web based user interface and is packed with features. At time of writing myNode currently offers 15 different Bitcoin and Lightning related applications.

<p align="center">
<img src="/assets/img/d3-removebg-preview.png" class=responsive width="300" height="250" maxheight="250">
</p>

### Features

* RTL, Thunderhub + LN Bits
* Electrum Server (*Electrs*)
* BTC Pay Server
* BTC Explorer
* Samourai Dojo + Whirlpool
* Mempool Viewer
* Caravan + Specter Wallet Interfaces
* Remote access via Tor or VPN
* One click upgrades


### Ease of setup

Once you receive the device, connect the hardware and power it on. Visit `http://mynode.local/` with your phone, laptop or computer. Enter the product key that was supplied with the device. Your initial block download will then commence.


### Limitations

Some users report reliability issues. Currently only shipping to the U.S and Canada.

### Cost

* $279 with no storage supplied
* $339 with a 1TB hard drive
* $419 with a 1TB sold state drive

### Recommended Hardware

Comes pre built with a Raspberry Pi4 4GB. User specifies type of storage.

### Other resources

* [Codebase](https://github.com/mynodebtc/mynode)
* [Telegram](https://t.me/mynode_btc)
* [Guide Page](https://mynodebtc.com/guides)
* [Setup Video](https://www.youtube.com/playlist?list=PLCRbH-IWlcW0KP8DxyWWrqahGafZyV2HR)

***

## Nodl One

The [Nodl One](https://www.nodl.it/nodl-one.html) is a Rock Pi4 with 4GB ram and comes with a web based user interface and higher spec hardware than most plug and play nodes.

<p align="center">
<img src="/assets/img/nodl-one-early-bird-removebg-preview.png" class=responsive width="300" height="250" maxheight="250">
</p>

### Features

* RTL
* Electrum Server (*Electrs*)
* BTC Pay Server
* BTC Explorer
* Samourai Dojo + Whirlpool
* Remote access via Tor or VPN
* One click upgrades
* Full SSD encryption


### Ease of setup

Once you receive the device, connect the hardware and power it on. Visit `http://nodl.local:8338/` with your phone, laptop or computer. Click on the Nodl logo, set your password and you will then see the Nodl homepage.


### Limitations

Documentation is sparse.

### Cost

* $499 standard
* $50 extra for kill switch
* $50 extra for Samourai/Dojo premium support 

### Recommended Hardware

Comes pre built with a Rock Pi4 4GB, 16GB eMMC and 1TB SSD.

### Other resources

* [Codebase](https://gitlab.lightning-solutions.eu/search?utf8=%E2%9C%93&search=nodl&group_id=&project_id=&repository_ref=)
* [Telegram](https://t.me/nodl_it)
* [Guide Page](https://docs.lightning-solutions.eu/nodl-box/quick-start/getting-started)
* [Setup Video](https://www.keepitsimplebitcoin.com/setup-nodl/)

***

## Nodl Dojo

The [Nodl Dojo](https://www.nodl.it/nodl-dojo.html) is similar to the Nodl One at its core. The main differences are a custom red case, fully encrypted SSDs, RAID 1 mirroring for extra redundancy (if one SSD fails, your node continues to run) and a premium support package. 

<p align="center">
<img src="/assets/img/angled-box.png" class=responsive width="200" height="175" maxheight="300">
</p>

### Features

* RTL
* Electrum Server (*Electrs*)
* BTC Pay Server
* BTC Explorer
* Samourai Dojo + Whirlpool
* Remote access via Tor or VPN
* One click upgrades
* Full SSD encryption
* RAID Mirroring


### Ease of setup

Once you receive the device, connect the hardware and power it on. Visit `http://nodl.local:8338/` with your phone, laptop or computer. Click on the Nodl logo, set your password and you will then see the Nodl homepage.


### Limitations

Stock is limited and sells out fast.

### Cost

* $849

### Recommended Hardware

Comes pre built with a Rock Pi4 4GB, 16GB eMMC and 2x 1TB SSDs.

### Other resources

* [Codebase](https://gitlab.lightning-solutions.eu/search?utf8=%E2%9C%93&search=nodl&group_id=&project_id=&repository_ref=)
* [Telegram](https://t.me/nodl_it)
* [Guide Page](https://docs.lightning-solutions.eu/nodl-box/quick-start/getting-started)
* [Setup Video](https://www.keepitsimplebitcoin.com/setup-nodl/)

***


## RaspiBlitz


The [RaspiBlitz](https://shop.fulmo.org/raspiblitz/) is one of the longest standing node projects and comes feature packed with a significant focus on the Lightning network. The RaspiBlitz boasts rock sold uptime and well tested update procedures. 

<p align="center">
<img src="/assets/img/blitz1.png" class=responsive width="300" height="250" maxheight="250">
</p>

### Features

* RTL
* Thunderhub
* Electrum Server (*Electrs*)
* BTC Pay Server
* BTC Explorer
* LN Bits
* Specter Desktop
* Mempool Viewer
* Joinmarket
* Loop
* IP 2 Tor
* Remote access via Tor
* Touchscreen display


### Ease of setup

Once you receive the device, connect the hardware and power it on. You should then see the local IP and password address of your RaspiBlitz on the LCD panel. Using an [SSH tool](https://en.wikipedia.org/wiki/Comparison_of_SSH_clients), connect through to your RaspiBlitz and finish the setup process.


### Limitations

Lack of web user interface may put some users off.

### Cost

* 269 EUR (*2GB*)
* 299 EUR (*4GB*)
* 369 EUR (*8GB*)
* 379 EUR (*4GB with metal case*)

### Recommended Hardware

Comes pre built with a Raspberry PI with a selection of 2,4 or 8GB ram, 1TB SSD and a touchscreen and optional 'terminal style' metal case.

### Other resources

* [Codebase](https://github.com/rootzoll/raspiblitz)
* [Telegram](https://t.me/raspiblitz)
* [Guide Page](https://github.com/rootzoll/raspiblitz)
* [Deep Dive Video](https://www.youtube.com/watch?v=_cjGxjze8PM)

***


## Start9 Server


The [Start9 Personal Servers](https://store.start9labs.com/collections/embassy) is a Raspberry Pi or Purism Intel node with a focus on making setup and interaction a frictionless as possible. By running one of these as your own personal server, you can do more than just be a Bitcoin node. 

<p align="center">
<img src="/assets/img/Embassy-Evolution_360x.png" class=responsive width="300" height="250" maxheight="250">
</p>


### Features

* Bitcoin
* Lighting: CLN, LND, RTL and much more
* Bitwarden password manager
* NextCloud
* NOSTR
* Remote Tor access
* Web based UI
* Matrix chat


### Ease of setup

Once you receive the device, connect the hardware and power it on. Visit the web-UI in a browser and create your password. You can now log in and start installing and using the available services.

### Limitations

Backups are currently manually performed via the web-UI.  

### Cost

* $499 for Raspi 8GB w/ 1TB SSD
* $1799 for Purism Intel i7 with IME-stripped firmware
* [DIY](https://docs.start9.com/latest/diy/index) is free

### Recommended Hardware

Comes pre built with a Raspberry Pi 4GB.

### Other resources

* [Codebase](https://github.com/Start9Labs)
* [Telegram](https://t.me/start9_labs)
* [Guide Page](https://docs.start9labs.com/)
* [Setup Video](https://www.youtube.com/watch?v=HI9WDq0tWm4)

***

## Build-A-Node

The [CryptoCloaks](https://www.cryptocloaks.com) team offer a [build a node](https://www.cryptocloaks.com/product/build-a-node/) service that lets you customise your own plug + play node. The node will arrive ready to go with a choice of the myNode community, myNode premium or RaspiBlitz software. You can also create a custom case for your node to add a more personal touch.

<p align="center">
<img src="/assets/img/PXL_20201007_111600379-removebg-preview.png?raw=true" class=responsive width="300" height="250" maxheight="250">
</p>

### Cost

* From $410

### Recommended Hardware

Comes packaged with this base hardware but upgrades are available.

* Raspberry Pi Model 4B 4GB
* Pimoroni Fan Shim
* 32GB SD Card
* 1TB SSD
* 3.5″ LCD (*RaspiBlitz only*)
* Custom case

***
## The Bitcoin Machine

[The Bitcoin Machine](https://thebitcoinmachines.com/) team offer four different pre built node options based on the Raspberry Pi 4B. The package is designed with a customised case and unique 'machine face' which acts as a Bitcoin ticker that can display the price, block height, total supply and network hash power. The case can also be personalised the case with a choice of colours. The Bitcoin Machine does not come pre-installed with any node software, and is designed to allow the user to pick from any Raspberry Pi compatibile implementation by falshing their own software onto the provided SD card.

<p align="center">
<img src="/assets/img/tbm-removebg-preview.png" class=responsive width="400" height="250" maxheight="250">
</p>

### Cost

* From $199

### Recommended Hardware

Comes packaged with this base hardware but upgrades are available.

* Raspberry Pi Model 4B (Various RAM options)
* SATA expansion board
* 1.8" Display
* 1TB HDD or SSD
* Custom heat controller
* Custom case

***

## BTC Cube

[The BTC Cube](https://stegoboard.com/collections/stego-board-products/products/btc-cube-the-vault) team offer four different pre built node options based on the Raspberry Pi 4B. BTC cude comes in two options, 'The Stealth' and 'The Vault', the latter coming with some uprated hardware options. Both come with myNode Premium software package installed. Both options come with a unique case design which looks like nothing else on the market.

<p align="center">
<img src="/assets/img/cube.png" class=responsive width="450" height="320" maxheight="250">
</p>

### Cost

* From $679.95

### Recommended Hardware

Comes packaged with this base hardware but upgrades are available.

* Raspberry Pi Model 4B 4GB RAM
* 32GB Endurance Micro SD
* Remote control LED lighting
* 1TB SSD
* Pimoroni fan shim cooler
* Unique case design

***


Want to build your own node? Check out the [DIY](/node/diy) page.
