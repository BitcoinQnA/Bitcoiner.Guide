---
layout: page
title: Blixt Wallet
subtitle: Cross platform Non-custodial Lightning Wallet
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/shareblixt.png
---

<p align="center">
  <a href="#what-is-blixt-wallet">Intro</a> |
  <a href="#how-to-get-started">Get Started</a> |
  <a href="#backups">Backups</a> |
  <a href="#features">Features</a> |
  <a href="#troubleshooting">Troubleshooting</a> 
  <br><br>
</p>

<p align="center">
  <img src="/assets/img/blixtlogo.png" class="responsive" style="max-width: 60%; height: auto;" />
</p>


## What is Blixt Wallet?

*Blixt is a non-custodial open-source Bitcoin Lightning Wallet for Android and iOS with a focus on usability and user experience.*

Blixt wallet is a mobile app that helps you use the Lightning Network for fast, low fee Bitcoin transactions. Blixt is quite unique in the fact that it actually runs a light weight Lightning node on your phone using LND and Neutrino. This means **you** have full control over your funds and your private keys. Blixt also allows you to manage your own channels and liquidity on the Lightning Network.

Blixt supports many advanced features, such as Keysend, Lightning Address, LNURL, WebLN, Tor, and much more. Blixt is developed by [Hampus Sjöberg](https://twitter.com/hampus_s), a Swedish Bitcoin enthusiast who named the app after the Swedish word for lightning.


## How to Get Started

### Download
To get started with Blixt, you need to download it from [Google Play](https://play.google.com/store/apps/details?id=com.blixtwallet&hl=en_US&gl=US) or [App Store](https://apps.apple.com/us/app/blixt-wallet/id1492822055) (*Test Flight only for now*) . You can also visit their [website](https://blixtwallet.github.io/) or [GitHub](https://github.com/blixttech/blixt-wallet) for more information.

### Create a New Wallet

When you first launch Blixt, you'll be greeted with a welcome screen that gives you two options: create a new wallet or import an existing one.

After choosing Create Wallet, Blixt will generate a 24-word seed phrase for you. To access this seed phrase, tap the cog icon in the top right corner of the screen, then tap Show Mnemonic.

This seed phrase is very important, as it is the only way to restore your wallet in case you lose your phone or uninstall the app. You should write down this seed phrase on a piece of paper and store it in a safe place. Do not share it with anyone or store it online, as anyone who has access to it can steal your funds.


### Funding Blixt

There are three main ways to fund your Blixt Wallet and get started with Lightning:


- **Send on-chain funds to Blixt**: You can send Bitcoin from another wallet to the address shown on the Blixt home screen. By default, when you send on-chain funds to Blixt, it will automatically open a channel for you between the node on your phone and the Blixt LSP node. This method of getting started means that you'll have a Lightning spend capacity roughly equal to the amount deposited on-chain to Blixt. The downside of this method is that you are not able to receive via Lightning, since all of the funds are on your side of the channel. To be able to receive you'll either need to spend down some of your balance or carry out a submarine swap to 'drain off' some of your balance back to an on-chain wallet. 

- **Receive immediately via Lightning**: To achieve this you'll need to head to the settings and enable 'Dunder LSP'. Dunder is a service that allows you to start accepting Lightning payments immediately. No need to first deposit funds on-chain to open a Lightning channel! Dunder supports 'on demand channel openings', meaning if your Blixt Lightning wallet gets an inbound payment while not having any open channels, Dunder will open a channel to the wallet with push amount equal to the inbound payment minus the on-chain fee. The current cap for this service is 400k sats.

- **Manually open a channel**: Advanced users might choose to open channels to specific peers on the Lightning Network. To achieve this, first you'll need to disable 'Automatically Open Channels' from the settings. Once you've done that, send some on chain funds to the address shown and wait for them to confirm. Next, open the side drawer with the icon in the top left of the screen and tap Lightning Channels. From here you can tap the + icon and the enter the required information to open the channel to the desired peer.

***

## Sending via Lightning

Now that you're set up and ready, here are the ways to send sats via Lightning:

- **Via an invoice** - This is a QR code or an alphanumeric string that contains information about the payment, such as amount, description and expiry date.
- **Via a Lightning Address** - A Lightning Address is an easy to remember and share identifier that allows Lightning users to pay to.
- **Via a Keysend payment** - Keysend is a spontaneous payment that does not require an invoice. Keysend pays direct to a node ID.

### Using an invoice
To send over Lightning with an invoice , go to Send > Lightning Invoice . Blixt will ask you to scan a QR code or paste an alphanumeric string that represents an invoice from another LN wallet or service. Blixt will show you the details of the payment, such as amount, description, expiry date, etc.

If you agree, tap on **Send** and wait for Blixt to find a route and send the payment through your channel(s). You will then see the outgoing payment in your transaction log as soon as it is sent by Blixt.

### Using a Lightning Address
Lightning addresses look like email, mine is `qna@tips.bitcoiner.guide`. Any wallet able to pay will using this standard will use this ID as a method to communicate directly with your node to generate and pay an invoice. 

To pay to a Lightning Address in Blixt, tap Send, followed by the `@` symbol in the top right corner of the screen.

After typing in your recipients' Lightning address, Blixt will ask you for the amount to be sent. After you populate the amount just tap **Send**. 


### Using Keysend
To use a Keysend payment, tap the hamburger icon in the top left of the home screen. Open the advanced drop down menu, then tap Keysend Experiement. 

Blixt will ask for the public key of the node to be paid as well as the amount to be sent. Here you can also add an optional message to be sent with the payment. This can be useful as the recipient will not be able to tell exactly where this payment originated. 

When you're happy, tap on **Send** and wait for Blixt to find a route and send the payment through your channel(s). You'll see the outgoing payment in your transaction log as soon as it is sent by Blixt.

***


## Receiving via Lightning

Receiving sats over the Lightning Network requires 'inbound liquidity'. This essentially means that you need an open channel with enough 'space' on your side of the channel for sats to be pushed your way. If you aren't sure what your inbound liquidity is, tap the hamburger icon to open the side menu, then tap Lightning Channels. 

Under each channel you will see a line that says 'Can receive'. Generally speaking, your inbound liquidity is the sum of all channel 'Can receive' balances. With every Lightning spend or receive you make, this amount will change. 

### Using an invoice

To create a LN invoice, go to Receive > Lightning Invoice. Blixt will ask you to enter an amount (in satoshis) and an optional description for the payment. Then it will generate a QR code and an alphanumeric string that represents your invoice. You can copy this invoice or show the QR code to another LN wallet or service and request a payment.

You will see the incoming payment in your transaction log as soon as it is received by Blixt.

### Using Keysend

To receive a keysend payment, you don't need to do anything, as Blixt will accept any keysend payment that is sent to your node's public key or alias.
You will see the incoming payment in your transaction log as soon as it is received by Blixt.

<br/>

Draft #1 text based edits are complete up to here. 

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>




## How to open and close LN channels
To manage your channels, you can tap on the menu button at the top left corner of the screen and select Lightning Channels. Here you can see all your channels and their details, such as capacity, balance, fees, status, etc. You can also open new channels with any node you want by tapping on the plus button at the bottom right corner of the screen.

LN channels are like pipes that connect two nodes (such as Blixt) and allow them to exchange off-chain payments without touching the blockchain. Each channel has a capacity (the maximum amount of money that can flow through it) and a balance (the amount of money that each node has in the channel).

To use LN payments, you need to have some LN channels with other nodes that have enough capacity and balance on their side. There are two ways to open LN channels:

- You can open a channel with another node using some of your on-chain funds.
- You can receive a channel from another node using Dunder LSP .

### Opening a channel with another node using some of your on-chain funds

To open a channel with another node using some of your on-chain funds , go to Settings > Lightning Channels > Open Channel . Blixt will ask you to choose a node that you want to open a channel with . You can use one of these methods:

- Use the **Blixt Community** list of peers , which shows some recommended nodes that have good connectivity , capacity , fees , uptime , etc.
- Scan a **QR code** that contains an onion URL of another node .
- Paste an **onion URL** of another node .
- Enter an **alias** or **public key** of another node .

Then, enter the amount of satoshis that you want to allocate to the channel. You can also adjust the **fee rate** if you want. Then, tap on **Open** and wait for the channel to be confirmed on the blockchain.

You will see the outgoing transaction in your transaction log as soon as it is broadcasted to the network, but it will take some time (usually around 10 minutes) for it to be confirmed on the blockchain. You can check the confirmation status by tapping on the transaction.

Once confirmed, you will see the channel in your channel list with a green dot indicating that it is active. You can tap on the channel to see more details, such as its capacity, balance, fee rate, uptime, etc.

You can use this channel to send and receive LN payments with the other node or any other node that is connected to it through the LN network.

### Receiving a channel from another node using Dunder LSP

To receive a channel from another node using Dunder LSP , go to Receive > Lightning Invoice . Blixt will ask you to enter an amount (in satoshis) and an optional description for the payment. Then it will generate a QR code and an alphanumeric string that represents your invoice. You can copy this invoice or scan the QR code with another LN wallet and pay it.

If you have enabled Dunder LSP in Settings > Enable Dunder LSP , Blixt will automatically open a channel with Dunder LSP node for the same amount that you receive (up to 400k sats per channel). This way, you can receive off-chain funds without having any on-chain funds first.

You will see the incoming payment and the channel opening in your transaction log as soon as they are received by Blixt.

You will see the channel in your channel list with a green dot indicating that it is active. You can tap on the channel to see more details, such as its capacity, balance, fee rate, uptime, etc.

You can use this channel to send and receive LN payments with Dunder LSP node or any other node that is connected to it through the LN network.

To close a LN channel , go to Settings > Lightning Channels and tap on the channel that you want to close . Blixt will ask you to confirm that you want to close the channel and show you an estimate of how much on-chain funds you will receive after closing it.

If you agree, tap on **Close** and wait for the channel to be closed on the blockchain.

You will see the closing transaction in your transaction log as soon as it is broadcasted to the network, but it will take some time (usually around 10 minutes) for it to be confirmed on the blockchain. You can check the confirmation status by tapping on the transaction.

Once confirmed, you will see the channel disappear from your channel list and the on-chain funds appear in your on-chain wallet.

## Backups

As mentioned before, your 24-word seed phrase is the most important thing to backup your wallet. However, it is not enough to backup your LN channels, as they are not stored on the blockchain but on your device. If you lose your device or uninstall the app without backing up your channels, you may lose some or all of your LN funds.

To prevent this from happening, Blixt offers two ways to backup your channels: Google Drive backup and Static Channel Backup (SCB) file.

### Google Drive backup

Google Drive backup is an easy and convenient way to backup your channels automatically and securely. To enable this feature, go to Settings > Google Drive Backup and follow the instructions. You will need a Google account and grant Blixt permission to access your Google Drive.

Once enabled, Blixt will upload an encrypted backup file of your channels every time they change (such as opening, closing or updating a channel). The backup file is encrypted with a key derived from your seed phrase, so only you can decrypt it.

To restore your channels from Google Drive backup, you need to import your seed phrase and then go to Settings > Google Drive Backup > Restore Backup. Blixt will download the latest backup file from your Google Drive and restore your channels.

### Static Channel Backup (SCB) file

Static Channel Backup (SCB) file is another way to backup your channels manually and locally. To create this file, go to Settings > Static Channel Backup > Export Backup File. Blixt will generate a .bak file that contains information about your channels and save it in your device's storage.

You should copy this file to another device or storage medium (such as a USB drive) and keep it safe. Do not share it with anyone or store it online, as anyone who has access to it can try to steal your funds.

To restore your channels from SCB file, you need to import your seed phrase and then go to Settings > Static Channel Backup > Import Backup File. Blixt will ask you to select the .bak file from your device's storage and restore your channels.


## Features


## How to use advanced features such as Tor, Loop, Submarine Swaps, Keysend and more

### Tor

Tor is a network that enables anonymous communication by routing your traffic through multiple relays around the world. By using Tor, you can hide your IP address and location from other nodes and services, increasing your privacy and security.

Blixt supports Tor by default, meaning that it will connect to other nodes and services through Tor automatically. You can also use Tor to connect to your own Bitcoin node or Lightning node if they support Tor.

To enable or disable Tor, go to Settings > Enable Tor . Blixt will restart and reconnect to the network using Tor or clearnet.

### Loop

Loop is a service that allows you to rebalance your LN channels without closing them, by swapping off-chain funds for on-chain funds or vice versa. By using Loop, you can optimize your channel capacity and balance, increasing your liquidity and routing efficiency.

Blixt supports Loop by integrating with Boltz , a third-party service that provides Loop functionality. You can use Loop to refill an existing channel from your on-chain wallet or to withdraw funds from an existing channel to your on-chain wallet.

To use Loop, go to Settings > Lightning Channels and tap on the channel that you want to loop . Blixt will show you two options: **Refill** and **Withdraw** .

- To refill an existing channel from your on-chain wallet , tap on **Refill** and enter the amount of satoshis that you want to add to the channel. Blixt will generate a LN invoice for you to pay from your on-chain wallet. Once paid, Blixt will send the funds to the channel using Loop.
- To withdraw funds from an existing channel to your on-chain wallet , tap on **Withdraw** and enter the amount of satoshis that you want to take from the channel. Blixt will generate an on-chain address for you to receive the funds. Once confirmed, Blixt will send the funds from the channel using Loop.

You will see the Loop transactions in your transaction log as soon as they are completed by Blixt.

### Submarine Swaps

Submarine Swaps are similar to Loop, but they allow you to swap off-chain funds for on-chain funds or vice versa without having any channels open. By using Submarine Swaps, you can receive off-chain funds directly into your on-chain wallet or send on-chain funds directly into your LN channels.

Blixt supports Submarine Swaps by integrating with Boltz , a third-party service that provides Submarine Swap functionality. You can use Submarine Swaps to send funds from your on-chain wallet to your LN channels or to receive funds from your LN channels to your on-chain wallet.

To use Submarine Swaps, go to the **+** button on the main screen and choose **Submarine Swap** . Blixt will show you two options: **Send** and **Receive** .

- To send funds from your on-chain wallet to your LN channels , tap on **Send** and enter the amount of satoshis that you want to swap. Blixt will generate a LN invoice for you to pay from your on-chain wallet. Once paid, Blixt will send the funds to your LN channels using Submarine Swap.
- To receive funds from your LN channels to your on-chain wallet , tap on **Receive** and enter the amount of satoshis that you want to swap. Blixt will generate an on-chain address for you to receive the funds. Once confirmed, Blixt will send the funds from your LN channels using Submarine Swap.

You will see the Submarine Swap transactions in your transaction log as soon as they are completed by Blixt.

### Keysend

Keysend is a feature that allows you to send and receive spontaneous payments without requiring an invoice, but only a public key or an alias of another node. By using Keysend, you can make payments more convenient and flexible, as well as use it for other purposes such as messaging, tipping, streaming, etc.
Blixt supports Keysend by default, meaning that it will accept any Keysend payment that is sent to your node's public key or alias. You can also use Keysend to send payments to other nodes that support Keysend.
To use Keysend, go to Send > Keysend . Blixt will ask you to enter a public key or an alias of another node that you want to send a payment to. You can also scan a QR code that contains a public key or an alias of another node. Blixt will show you the details of the node, such as its name, public key, etc.
Then, enter an amount (in satoshis) and an optional description for the payment.
If you agree, tap on **Pay** and wait for Blixt to find a route and send the payment through your channels.
You will see the outgoing payment in your transaction log as soon as it is sent by Blixt.
To receive a Keysend payment , you don't need to do anything, as Blixt will accept any Keysend payment that is sent to your node's public key or alias. You will see the incoming payment in your transaction log as soon as it is received by Blixt.


To access more features and settings, you can tap on the menu button at the top left corner of the screen and explore the options available. Some of them are:

- **Web Browser**: This is a built-in web browser that supports WebLN, which is a protocol that allows websites to interact with your Lightning wallet. For example, you can use WebLN to pay invoices, withdraw funds, authenticate with websites, etc.
- **Contacts**: This is where you can add and manage your contacts using their Lightning Address or node ID.
- **Settings**: This is where you can customize your preferences and options for Blixt wallet, such as currency, language, theme, notifications, backup, etc.
- **About**: This is where you can find more information about Blixt wallet and its developer.



## How to troubleshoot common issues and get support

Blixt is still a work in progress and may encounter some issues or bugs from time to time. Here are some common issues and how to troubleshoot them:

- Blixt doesn't sync . This may happen if your device is not connected to a stable internet connection, if you use Tor and the connection is unstable, or if Blixt has not been updated for a long time. To fix this, make sure you have a good internet connection, restart Blixt or update it to the latest version.
- No route found . This may happen if you try to send or receive a payment that exceeds your channel capacity or balance, if there are no nodes that can route your payment, or if there are network issues or errors. To fix this, make sure you have enough capacity and balance in your channels, try different nodes or amounts, or wait for some time and try again.
- Payment failed . This may happen if the invoice has expired, if the node that issued the invoice is offline or unresponsive, if there are network issues or errors, or if there are malicious nodes that try to steal your funds. To fix this, make sure the invoice is valid and not expired, try contacting the node that issued the invoice, try different routes or nodes, or report any suspicious activity.
- Channel closed unexpectedly . This may happen if the node that you have a channel with decides to close it for any reason, if there are network issues or errors, or if there are malicious nodes that try to steal your funds. To fix this, wait for the channel closing transaction to be confirmed on the blockchain and receive your on-chain funds back, try contacting the node that closed the channel, or report any suspicious activity.

If you encounter any other issue or bug that is not listed here, or if you have any question, suggestion or feedback about Blixt , you can contact the project leader and main developer behind Blixt , Hampus Sjöberg , who can be reached via email at hampus@blixtwallet.com  or on Twitter @hampus_s .

You can also join the Blixt Telegram group  where you can chat with other Blixt users and developers , ask for help , share your experience , etc.

## Relevant Links


## Disclaimer

This blog post is not sponsored by Blixt wallet or any other entity.
It is based on my personal opinion and experience using the wallet.
I am not responsible for any loss or damage caused by using Blixt wallet or any other software mentioned in this post.














