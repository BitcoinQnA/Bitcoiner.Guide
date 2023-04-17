---
layout: page
title: Node.Guide 
subtitle: Other, less common node options
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


There are plenty of options when it comes to running your own node. The previous pages cover the most popular and user friendly routes. The options that follow are geared more towards advanced users who may require a custom configuration to serve a specific purpose. 


#### ABCore

[ABCore](https://github.com/greenaddress/abcore) (Android Bitcoin Core) is an Android app that fetches bitcoin core daemon built for Android using the NDK and is meant to make it easier to run Bitcoin Core daemon node on always on Android set top box devices and home appliances as well as mobile devices.

The full node software (Core 0.18.1 and Knots 0.18.0 and Elements 0.17.0.1) is meant to be used as a personal node when on the go (either by using a mobile wallet that allows to connect to a remote and specific node or even directly on your mobile device.

#### Cyphernode

[Cyphernode](https://github.com/SatoshiPortal/cyphernode) is designed to be deployed on virtual machines with launch scripts, but with efficiency and minimalism in mind so that it can also run on multiple Rasberry Pi with very low computing ressources (and extremely low if installing pre-synchronized blockchain and pruned). Because of the modular architecture, heavier modules like blockchain indexers are optional (and not needed for most commercial use-cases).

#### Nayuta Core

[Nayuta Core](https://nayuta.co/core/) is an always-on Bitcoin and Lightning Network node solution on Android that lets you connect with other wallets and Lapps(Lightning applications) seamlessly. Nayuta Core takes a novel full node and SPV hybrid approach to improve SPV security and make it easy to get started with a Bitcoin full node.

#### Nix Bitcoin

[Nix Bitcoin](https://github.com/fort-nix/nix-bitcoin) packages and nixos modules for easily installing Bitcoin nodes and higher layer protocols with an emphasis on security. This is a work in progress - don't expect it to be bug-free, secure or stable. The default configuration sets up a Bitcoin Core node and c-lightning.

#### RaspiBolt

[RaspiBolt](https://stadicus.github.io/RaspiBolt/) is a Bitcoin/Lightning node implementation that you build from the ground up with the help of the extremely comprehensive setup guide. The guide walks you through downloading and installing each piece of software for your node through the command line. It is designed for the Raspberry Pi 4 running any Debian based Linux distribution. 

#### Samourai Dojo

[Samourai Dojo](https://code.samourai.io/dojo/samourai-dojo) is the backing server for Samourai Wallet. Provides HD account & loose addresses (BIP47) balances & transactions lists. Provides unspent output lists to the wallet. PushTX endpoint broadcasts transactions through the backing bitcoind node. Dojo comes packaged with some of the software covered elsewhere on this website but this [installation guide](https://github.com/Samourai-Wallet/samourai-dojo/blob/master/doc/DOCKER_setup.md) is for the standalone setup on Linux.

#### Ubuntu Node Box (Virtual Machine)

[Ubuntu Node Box](https://www.youtube.com/watch?v=BIrL1lNsnJQ&list=PLCRbH-IWlcW17JxQ4mdv9DwSMJZlvUOle&index=1) is a video guide by Ketan of [Ministry of Nodes](https://www.ministryofnodes.com.au/). In this series, Ketan covers setting up a node in an Ubuntu virtual machine to download and install Bitcoin Core, Electrum Server, Lightning, BTCPay Server, JoinMarket, Whirlpool and much more.

#### Voltage

[Voltage](https://getvoltage.io) provides Cloud hosting for Lightning Network nodes. Every user gets their own dedicated and always on Lightning node. Users have complete control over their node and funds at all times. You can be up and running on the Lightning Network in 2 minutes. All users get access to their node's APIs so they can use any software from any location. [Voltage doesn't have the ability to access user's funds or see transactions](https://getvoltage.io/blog/how-voltage-works.html).

***

