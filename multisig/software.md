---
layout: page
title: Multisig.Guide 
subtitle: Software setup
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

Specter will act as the multisig co-ordinator for this guide. It will use the public keys from all three of the signing devices selected to create a wallet that requires a signature from 2 of those 3 signers to spend. Specter can be downloaded as a [desktop](https://github.com/cryptoadvance/specter-desktop/releases) application which now comes packaged with the ability to run your own full node within the application. If you go down the route of installing the desktop application, please ensure you [verify](/verifysoftware) it.

Specter also comes packaged as a web application in all of the popular [node](#connecting-specter-to-an-existing-own-node) packages. Which option you choose will depend on your budget, requirements and expertise. For those without a node that want to leverage the one packaged within Specter, here is how you configure it :-


Upon opening Specter Desktop for the first time, you will be met with the quick start option.

<p align="center">
<img src="/assets/img/specter10.png" class=responsive width="370" height="310" maxheight="300" />
</p>

Press Setup Tor. This will automatically install Tor daemon onto your computer to preserve your privacy when interacting with Specter.

<p align="center">
<img src="/assets/img/specter21.png" class=responsive width="370" height="310" maxheight="300" />
</p>

You will then be asked if you want to connect to an existing node *(covered further down this page)* or setup a new one, select the new node option. 

<p align="center">
<img src="/assets/img/specter11.png" class=responsive width="370" height="310" maxheight="300" />
</p>

Then start the Bitcoin Core setup

<p align="center">
<img src="/assets/img/specter12.png" class=responsive width="370" height="310" maxheight="300" />
</p>

You then need to decide if you want to use QuickSync or not. Moving forward with this option toggled on will set up your new node from a trusted state of the blockchain. This means all block validation will be skipped until the most recent block in the snapshot. 

**This option puts trust in the snapshot provider. If you have the time to wait, it is advisable to turn this option off and go through the blockchain download and validation yourself.**  

<p align="center">
<img src="/assets/img/specter13.png" class=responsive width="370" height="310" maxheight="300" />
</p>

When you turn off QuickSync, the next step is to decide if you want to run a full archival node or use the pruned option. A full archival node stores a copy of the entire blockchain  *(around 400GB)* onto your computer. Fully archival nodes are beneficial for importing existing wallets and querying historical transactions using your own node but a pruned option can help if you have storage constraints.     

<p align="center">
<img src="/assets/img/specter14.png" class=responsive width="310" height="400" maxheight="300" />
</p>

After you have made your decision, select 'Start Syncing'. Congratulations, you have just setup your own Bitcoin Node!

<p align="center">
<img src="/assets/img/specter19.png" class=responsive width="310" height="250" maxheight="300" />
</p>

<br/>

## Connecting Specter to an existing own node

Connecting Specter to your own node requires four pieces of information.

1. Your Bitcoin RPC username
2. Your Bitcoin RPC password
3. Your nodes IP address
4. Your nodes RPC port (*usually 8332*)

Here is how Specter connects to the most popular node implementations. For anything other than Bitcoin Core running on the same laptop as Specter Dekstop, ensure that you turn off auto detect before entering your credentials.

**Bitcoin Core**  - If using the default Bitcoin Core settings, you simply need to amend one setting flag and then Specter will automatically connect. Below is a walk-through of this process by Ketan of [Ministry of Nodes](https://www.ministryofnodes.com.au/).

**myNode** - Integrated directly into the GUI for premium users. Community users should download the the desktop app and connect using the parameters below. Your host is your device's local IP and your RPC password can be found in the Bitcoin page of your dashboard.

<p align="center">
<img src="/assets/img/specter2.png" class=responsive width="322" height="364" maxheight="300" />
</p>

- **RaspiBlitz** -Specter is a one click install from the services menu. The next update will provide a one click update to always run the latest version
- **Nodl** - Specter is a one click install from the Nodl UI and accessible locally or remotely via Tor browser
- **RoninDojo** - Installed via RoninCLI and accessible locally or remotely via Tor browser
- **Umbrel** - Installed via the app store and accessible locally or remotely via Tor browser

***

Got Specter running and your node fully synced? Lets get started with the [signer setup](/multisig/signers).


