---
layout: page
title: Node.Guide
subtitle: DIY node options
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

DIY node implementations require you to purchase and build your own hardware, this gives you greater freedom to build to your own budgetary requirements. All implementations below are still designed to run on single board computers (SBC) like the Raspberry Pi, but some offer other options such as the more powerful [RockPro 64](https://www.pine64.org/rockpro64/). DIY nodes remove the hardware risk we discussed in the [Plug + Play](/plug-and-play) page because you are free to buy your hardware from anywhere you like. 

Once you have your chosen hardware you will typically download your chosen project's free and open source software, [flash](https://www.youtube.com/watch?v=Ew9-J70yxAo) it onto an SD card which then goes into your SBC. To mitigate the risk of installing malicious software onto your device, always download from the project's recommended location and [verify](https://www.youtube.com/watch?v=lCG3c8a7HZI) its signature.  

### Table of Contents

1.  [ezNode](#eznode)
2.  [myNode](#mynode)
3.  [RaspiBlitz](#raspiblitz)
4.  [RoninDojo](#ronindojo)
5.  [Start9](#start9)
6.  [Umbrel](#umbrel)

***

## eznode

[eznode](https://ezno.de) is another new node project with a simple setup process.

It is lightweight, minimalistic, supports pruning and can run on your main PC.

<p align="center">
<img src="/assets/img/eznode.png" class=responsive width="420" height="398" maxheight="398">
</p>

### Features

* Simple one-command setup
* Pruning friendly
* Optional trusted [fast-sync](https://ezno.de/packages/#fast-sync) mode
* Personal Electrum Server ([BWT](https://bwt.dev))
* Block Explorer
* Specter Desktop
* Remote access through Tor, SSH tunnels or SSL
* Supports Linux, macOS, Windows and ARMv7/v8

### Ease of setup

eznode can run on a dedicated box (SBCs like Raspberry are supported) or on your main computer/laptop.
It requires <5GB of storage.

You can use any OS you like. The only requirement is to have [Docker installed](https://docs.docker.com/get-docker/).

To start eznode with a pruned node, a personal Electrum server tracking your `<xpub>` and a block explorer,
run ```docker run -it --rm --name ez -v ~/eznode:/data eznode/eznode XPUB=<xpub>```.
See more instructions [here](https://ezno.de/getting-started).

### Limitations

The most minimalistic of the projects, only supporting a few programs at this time.
No Lightning support (yet).
Doesn't have a web dashboard frontend.
Configuration is done through a config file or CLI arguments (but is rather minimal).

### Cost

Can run on a Raspberry Pi 3 ($40) using an internal SD card ($7 for 16GB) and no additional external storage.

### Other resources

* [Codebase](https://github.com/ez-org/eznode)
* [Telegram](https://t.me/ez_node)
* [Twitter](https://twitter.com/eznode_)
* [Setup Guide](https://ezno.de/getting-started)

***

## myNode

The [myNode](https://mynodebtc.com/download) software has downloadable images for the Rock64, RockPro64, Raspberry Pi 4 and also has a [virtual machine](https://www.youtube.com/watch?v=yIVXjl4SwVo) offering. The free 'Community' software comes with an attractive web based UI and everything you need to get started running a Bitcoin and Lightning node. They do offer a 'Premium' for a one time fee of $99 which enables extra features, a support package and most importantly, one click upgrades from the web UI. Community package users must [upgrade](https://www.reddit.com/r/mynodebtc/collection/5a655fc2-d661-43cb-8097-77d5bb21739d/) from the command line.


<p align="center">
<img src="/assets/img/Screenshot%20from%202020-10-25%2009-48-47.png" class=responsive width="300" height="500" maxheight="500">
</p>

### Features

**Community Features**

* RTL
* Electrum Server (_Electrs_)
* BTC Explorer
* Samourai Dojo + Whirlpool
* Runs over Tor

**Premium Features**

* Caravan + Specter Wallet Interfaces
* Thunderhub + LN Bits
* BTC Pay Server
* Mempool Viewer
* Remote access via Tor or VPN
* One click upgrades

### Ease of setup

Order and assemble your desired hardware. Connect to power and your router, then power on the device. Visit `http://mynode.local/` with your phone, laptop or computer. If you bought the premium package, enter the product key that was supplied with the device otherwise choose the community option. Your initial block download will then commence.


### Limitations

Some users report reliability issues when upgrading. Support is limited due to a very small team and large userbase.

### Cost

* $286 (_Pi4 + Optional passive cooling case_)
* $325 (_RockPro 64 Pine Build Kit_)

### Recommended Hardware

- **Raspberry Pi 4**
  - [Labists Pi4 Starter Kit](https://www.amazon.com/LABISTS-Raspberry-Complete-Preloaded-Heatsinks/dp/B07YRSYR3M/ref=sr_1_2_sspa?dchild=1&keywords=raspberry+pi+4+kit&qid=1603620426&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVVg4S0JCSlRaU0NHJmVuY3J5cHRlZElkPUEwMDg0NDczMUxMOEdIWUdZRURGNSZlbmNyeXB0ZWRBZElkPUEwODU0MTYzM0xUSDJLT1ZTMU1WWCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=) - $100
  - [Samsung 1TB SSD](https://www.amazon.com/SAMSUNG-Portable-SSD-1TB-MU-PC1T0H/dp/B0874YJP92/ref=sr_1_3?dchild=1&keywords=samsung+1tb+ssd+t5&qid=1603620536&sr=8-3) - $170
  - [Passive Cooling Case](https://www.amazon.com/Flirc-Raspberry-Pi-Case-Silver/dp/B07WG4DW52/ref=sr_1_3?dchild=1&keywords=raspberry+pi+4+cooling+case&qid=1603620719&sr=8-3) - $16 (*Optional - No fan noise*)

- **RockPro 64**
  - [Pine64 Build Kit](https://minefarmbuy.com/product/pine-build/?v=a284e24d5f46) (*Everything included*) - From $325

### Other resources

* [Codebase](https://github.com/mynodebtc/mynode)
* [Telegram](https://t.me/mynode_btc)
* [Guide Page](https://mynodebtc.com/guides)
* [Setup Video](https://www.youtube.com/playlist?list=PLCRbH-IWlcW0KP8DxyWWrqahGafZyV2HR)

***

## RaspiBlitz

The [RaspiBlitz](https://github.com/rootzoll/raspiblitz) is one of the longest standing node projects and comes feature packed with a significant focus on the Lightning network. The RaspiBlitz is focused more towards those who like to tinker and dont require the shinier user interfaces that some implementations offer. The Blitz also boasts rock sold uptime and well tested update procedures. The entire Blitz software package is free and open source and is the only implementation that is compatible with an on device display.

<p align="center">
<img src="/assets/img/mainmenu.png" class=responsive width="300" height="400" maxheight="400">
</p>

### Features

* RTL
* Thunderhub
* Electrum Server (_Electrs_)
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

Order and assemble your desired hardware. Download the [latest software](https://github.com/rootzoll/raspiblitz#downloading-the-software) and flash it to your SD card. Connect to power and your router, then power on the device. You should then see the local IP and password address of your RaspiBlitz on the LCD panel. Using an SSH tool, connect through to your RaspiBlitz and finish the setup process.

### Limitations

Lack of web based user interface may put some users off.

### Cost

* $279 (_Pi 4 configuration below_)

### Recommended Hardware

The RaspiBlitz team have provided their own recommended [shopping list](https://github.com/rootzoll/raspiblitz#amazon-shopping-list-buy-parts--build-it-yourself) based on your budget. Be wary using cheaper components or lower powered SBC's as you may run into issues.

- **Raspberry Pi 4**
  - [Raspberry Pi 4 4GB](https://www.amazon.com/Raspberry-Model-2019-Quad-Bluetooth/dp/B07TC2BK1X/ref=sr_1_3?dchild=1&keywords=raspberry+pi+4&qid=1603628063&sr=8-3) - $56
  - [Power Supply](https://www.amazon.com/Raspberry-Model-Official-SC0218-Accessory/dp/B07W8XHMJZ/ref=sr_1_3?dchild=1&keywords=raspberry+pi+4+power+supply&qid=1603628117&sr=8-3) - $8
  - [Samsung 1TB SSD](https://www.amazon.com/SAMSUNG-Portable-SSD-1TB-MU-PC1T0H/dp/B0874YJP92/ref=sr_1_3?dchild=1&keywords=samsung+1tb+ssd+t5&qid=1603620536&sr=8-3) - $170
  - [Micro SD Card](https://www.amazon.com/SanDisk-Ultra-microSDXC-Memory-Adapter/dp/B073JWXGNT/ref=sr_1_3?dchild=1&keywords=micro+sd+card+32gb&qid=1603628217&sr=8-3) - $9
  - [LCD Screen](https://geni.us/raspiblitz-touchscreen) - $20
  - [Heatsink Case](https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A03601641W6U1LL4RFF20&url=%2FGeekworm-Raspberry-Computer-Aluminum-Compatible%2Fdp%2FB07VD568FB%2Fref%3Dsr_1_9_sspa%3Fcrid%3D18FNN8U7JQ660%26dchild%3D1%26keywords%3Dgeekworm%2Bheatsink%26qid%3D1603628339%26sprefix%3Dgeekworm%2Bhea%252Caps%252C244%26sr%3D8-9-spons%26psc%3D1&qualifier=1603628338&id=8022908327277922&widgetName=sp_mtf) - $16

### Other resources

* [Codebase](https://github.com/rootzoll/raspiblitz)
* [Telegram](https://t.me/raspiblitz)
* [Guide Page](https://github.com/rootzoll/raspiblitz)
* [Deep Dive Video](https://www.youtube.com/watch?v=_cjGxjze8PM)

---

## RoninDojo

[RoninDojo](https://ronindojo.io/) is the node for privacy focused Samourai Wallet enthusiasts. They provide support for the Raspberry Pi 4, Rock64, RockPro 64, RockPi 4 and Odroid N2. The RoninDojo team keep Samourai Wallet as the main focus of their development, but also provide support for almost all other wallets via an Electrum Server. After setup users can choose to interact with a command line interface or the graphical UI shown below. It's worth noting that the [setup](https://wiki.ronindojo.io/en/gui-setup/start) procedure requires a small amount of command line.  

<p align="center">
<img src="/assets/img/RoninDojoGUI-product.png" class=responsive width="600" height="350" maxheight="350">
</p>

### Features

* Samourai Dojo
* Samourai Whirlpool
* BTC Explorer
* Electrum Server (_Electrs_)
* Runs over Tor
* Whirlpool Stat Tool (_For calculating anonymity sets_)
* Boltzmann (_For calculating transaction entropy_)
* Mempool Viewer

### Ease of setup

Order and assemble your desired hardware. Download the [latest software](https://ronindojo.io/downloads/) and flash it to your SD card. Connect to power and your router, then power on the device. Search your network for the devices IP address using a [network scanner](https://angryip.org/). Connect to your device using an SSH tool and complete the [setup](https://wiki.ronindojo.io/gui-setup/step1) process.  

### Limitations

Lack of Lightning network integration may put some users off.

### Cost

* $293 (_Pi 4 configuration below_)
* $325 (_RockPro 64 configuration below_)

### Recommended Hardware

The RoninDojo team have provided their own recommended [shopping list](https://wiki.ronindojo.io/en/hardware) based on your budget. Be wary using cheaper components or lower powered SBC's as you may run into issues.

- **RockPro 64**
  - [Pine64 Build Kit](https://minefarmbuy.com/product/pine-build/?v=a284e24d5f46) (*Everything included. Use code #ronindojo for a discount*) - From $325

- **Raspberry Pi 4 - Geekworm Kit**  
  - [Raspberry Pi 4 4GB](https://amzn.to/39rYRch) - $56 
  - [X825 Metal Case](https://amzn.to/2Rppc5g) - $29
  - [X735 Power Management Expansion Board](https://amzn.to/2UHD5Mr) - $29 
  - [2.5 inch SATA HDD/SSD Expansion Board X825](https://amzn.to/2vUETco) - $33 
  - [Power Adapter](https://amzn.to/2XTtLrp) - $19
  - [Industrial SD Card 16GB](https://www.amazon.com/dp/B07CV344WJ/) - $13
  - [Samsung EVO 1TB SSD](https://amzn.to/30lDpoo) - $114
  

### Other resources

* [Codebase](https://code.samourai.io/ronindojo)
* [Telegram](https://t.me/RoninDojoUI)
* [Wiki Page](https://wiki.ronindojo.io)
* [Setup Video](https://youtu.be/5CxjRXixg4s)

***

## Start9

A [Start9](https://start9.com) server can be a Raspberry Pi or any x86_64 cpu (Intel or AMD). Free and open source, you can begin you sovereign computing journey for free and setup a DIY server.

<p align="center">
<img src="/assets/img/start9-cryptocloak.png" class=responsive width="300" height="218" maxheight="250">
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

Once your hardware is setup follow the [DIY guide](https://docs.start9.com/latest/diy/). Visit the web-UI in a browser and create your password. You can now log in and start installing and using the available services.

### Limitations

Backups are not currently automated and must be manually performed via the web-UI.

### Cost

* $199 for Raspi (Server Lite)
* $499 for Intel NUC (Server One)
* $1546 for Purism Intel i7 with IME-stripped firmware (Server Pro)
* [DIY](https://docs.start9.com/latest/diy) is free

### Recommended Hardware

StartOS runs on a Raspberry Pi or any x86_64.

### Other resources

* [Codebase](https://github.com/Start9Labs)
* [Telegram](https://t.me/start9_labs)
* [Docs](https://docs.start9labs.com/)
* [Setup Guide](https://docs.start9.com/latest/user-manual/initial-setup)

---

## Umbrel

[Umbrel](https://getumbrel.com/) is a relatively new node project that boasts arguably the easiest setup process of any of the DIY node implementations. Umbrel supports the Raspberry Pi 4 and can also be ran in a virtual machine. Umbrel is completely free and uses an easy to navigate web based UI that makes running a node very straight forward for beginners.  

<p align="center">
<img src="/assets/img/hero-p-1080.png" class=responsive width="600" height="350" maxheight="350">
</p>

### Features

* Simple setup
* Ability to use the node before IBD is completed
* Automatic backups
* Electrum Server (_Electrs_)
* Remote Tor access
* Wallet connection screen

### Ease of setup

Order and assemble your desired hardware. Download the [latest software](https://github.com/getumbrel/umbrel-os/releases/latest) and flash it to your SD card. Connect to power and your router, then power on the device. Visit `http://umbrel.local/` with your phone, laptop or computer to finish the simple setup process.

### Limitations

Still an early project with minimal 'extra' features when compared with some of the more mature projects.

### Cost

* $286 (_Pi4 + Optional passive cooling case_)

### Recommended Hardware

- **Raspberry Pi 4**
  - [Labists Pi4 Starter Kit](https://www.amazon.com/LABISTS-Raspberry-Complete-Preloaded-Heatsinks/dp/B07YRSYR3M/ref=sr_1_2_sspa?dchild=1&keywords=raspberry+pi+4+kit&qid=1603620426&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVVg4S0JCSlRaU0NHJmVuY3J5cHRlZElkPUEwMDg0NDczMUxMOEdIWUdZRURGNSZlbmNyeXB0ZWRBZElkPUEwODU0MTYzM0xUSDJLT1ZTMU1WWCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=) - $100
  - [Samsung 1TB SSD](https://www.amazon.com/SAMSUNG-Portable-SSD-1TB-MU-PC1T0H/dp/B0874YJP92/ref=sr_1_3?dchild=1&keywords=samsung+1tb+ssd+t5&qid=1603620536&sr=8-3) - $170
  - [Passive Cooling Case](https://www.amazon.com/Flirc-Raspberry-Pi-Case-Silver/dp/B07WG4DW52/ref=sr_1_3?dchild=1&keywords=raspberry+pi+4+cooling+case&qid=1603620719&sr=8-3) - $16 (*Optional - No fan noise*)

### Other resources

* [Codebase](https://github.com/getumbrel/umbrel)
* [Telegram](https://t.me/getumbrel)
* [Setup Guide](https://github.com/getumbrel/umbrel-os#-getting-started)
* [Setup Video](https://www.youtube.com/watch?v=fppmhqjqh2E)

***

Check out the [other](/node/other) options available for more advanced users.
