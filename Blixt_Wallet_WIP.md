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

Blixt wallet is a mobile app that helps you use the Lightning Network for fast, low fee Bitcoin transactions. The Blixt artchitecture differs from some other mobile Lightning wallets because it actually runs a light weight Lightning node on your phone using LND and Neutrino. This means **you** have full control over your funds and your private keys. Blixt also allows advanced users to manage their own channels should they choose to do so.

Blixt supports many advanced features, such as Keysend, Lightning Address, LNURL, WebLN, Tor, and much more. Blixt is developed by [Hampus Sjöberg](https://twitter.com/hampus_s), a Swedish Bitcoin enthusiast who named the app after the Swedish word for lightning.


## How to Get Started

To get started with Blixt, you need to download it from [Google Play](https://play.google.com/store/apps/details?id=com.blixtwallet&hl=en_US&gl=US) or [App Store](https://apps.apple.com/us/app/blixt-wallet/id1492822055) (*Test Flight only for now*) . You can also visit their [website](https://blixtwallet.github.io/) or [GitHub](https://github.com/hsjoberg/blixt-wallet/releases) for more information.

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

### Using an Invoice
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

### Using an Invoice

To create a LN invoice, go to Receive > Lightning Invoice. Blixt will ask you to enter an amount (in satoshis) and an optional description for the payment. Then it will generate a QR code and an alphanumeric string that represents your invoice. You can copy this invoice or show the QR code to another LN wallet or service and request a payment.

You will see the incoming payment in your transaction log as soon as it is received by Blixt.

### Using Keysend

To receive a Keysend payment, you don't need to do anything, as Blixt will accept any Keysend payment that is sent to your node's public key or alias.
You will see the incoming payment in your transaction log as soon as it is received by Blixt.

***

## Backups

Your 24-word seed phrase is the most important thing to backup your wallet. However, the seed alone isn't enough to backup your Lightning channels. Lightning channel states aren't stored on the blockchain, they are kept on your device. If you lose your device or uninstall the app without backing up your channels, you put yourself more at risk of loss of funds.

To prevent this from happening, Blixt offers two ways to backup your channels: Google Drive or iCloud backup and Static Channel Backup (SCB) file.

### Google Drive / iCloud Backups

Cloud backups are an easy and convenient way to backup your channels automatically and securely. To enable this feature, go to Settings > Google Drive / iCloud channel backup and follow the instructions.

Once enabled, Blixt will upload an encrypted backup file of your channels every time they change (such as opening, closing or updating a channel). The backup file is encrypted with a key derived from your seed phrase, so only you can decrypt it.

To restore your channels from a cloud backup, tap restore upon opening Blixt, import your seed phrase and then tap Restore via Google/iCloud under the Channel Backup section. Blixt will download the latest backup file from your cloud and restore your channels.

### Static Channel Backup (SCB) file

Static Channel Backup (SCB) file is another way to backup your channels manually and locally. To create this file, go to Settings > Export Channel Backup. Blixt will generate a `.bak` file that contains information about your channels and save it in your in the location you choose. Ensure you have at least 1 copy of this file saved somewhere other than your phone.

To restore your channels from a backup file, tap restore upon opening Blixt, import your seed phrase and then tap 'Choose Channel Backup File on Disk'. Locate the file and then Blixt will restore your channels.

***

## Features

Blixt has many advanced features and settings. Here is a snapshot of some of the more commonly used items that you might find useful.

### Tor

Tor is a network that enables anonymous communication by routing your traffic through multiple relays around the world. By using Tor, you can hide your IP address and location from other nodes and services, increasing your privacy and security. However the Tor network occasionally experiences denial of service attacks that can severely degrade network participant experience.

To enable or disable Tor, go to Settings > Enable Tor . Blixt will restart and reconnect to the network using Tor or clearnet.

### Submarine Swaps CHECK THIS AGAIN

Submarine Swaps are similar to Loop, but they allow you to swap off-chain funds for on-chain funds or vice versa without having any channels open. By using Submarine Swaps, you can receive off-chain funds directly into your on-chain wallet or send on-chain funds directly into your LN channels.

Blixt supports Submarine Swaps by integrating with Boltz, a third-party service that provides Submarine Swap functionality. You can use Submarine Swaps to send funds from your on-chain wallet to your LN channels or to receive funds from your LN channels to your on-chain wallet.

To use Submarine Swaps, go to the **+** button on the main screen and choose **Submarine Swap**. Blixt will show you two options: **Send** and **Receive** .

- To send funds from your on-chain wallet to your LN channels, tap on **Send** and enter the amount of satoshis that you want to swap. Blixt will generate a LN invoice for you to pay from your on-chain wallet. Once paid, Blixt will send the funds to your LN channels using Submarine Swap.
- To receive funds from your LN channels to your on-chain wallet, tap on **Receive** and enter the amount of satoshis that you want to swap. Blixt will generate an on-chain address for you to receive the funds. Once confirmed, Blixt will send the funds from your LN channels using Submarine Swap.

### Other


To access more features and settings, you can tap on the hamburger button at the top left corner of the screen and explore the options available. Some of them are:

- **Web Browser**: This is a built-in web browser that supports WebLN, which is a protocol that allows websites to interact with your Lightning wallet. For example, you can use WebLN to pay invoices, withdraw funds, authenticate with websites, etc.
- **Contacts**: This is where you can add and manage your contacts using their Lightning Address or node ID.
- **Settings**: This is where you can customize your preferences and options for Blixt wallet, such as currency, language, theme, notifications and backups.

***

## Troubleshooting

Blixt is still a work in progress and may encounter some issues or bugs from time to time. Here are some common issues and how to troubleshoot them:

- **Blixt doesn't sync** - This may happen if your device is not connected to a stable internet connection, if you use Tor and the connection is unstable, or if Blixt has not been updated for a long time. To fix this, make sure you have a good internet connection, restart Blixt or update it to the latest version.
- **No route found** - This may happen if you try to send or receive a payment that exceeds your channel capacity or balance, if there are no nodes that can route your payment, or if there are network issues or errors. To fix this, make sure you have enough capacity and balance in your channels, try different nodes or amounts, or wait for some time and try again.
- **Payment failed** - This may happen if the invoice has expired, if the node that issued the invoice is offline or unresponsive, if there are network issues or errors, or if there are malicious nodes that try to steal your funds. To fix this, make sure the invoice is valid and not expired, try contacting the node that issued the invoice, try different routes or nodes, or report any suspicious activity.
- **Channel closed unexpectedly** - This may happen if the node that you have a channel with decides to close it for any reason, if there are network issues or errors, or if there are malicious nodes that try to steal your funds. To fix this, wait for the channel closing transaction to be confirmed on the blockchain and receive your on-chain funds back, try contacting the node that closed the channel, or report any suspicious activity.

If you encounter any other issue or bug that is not listed here, or if you have any questions, suggestions or feedback about Blixt, the best way to get involved is via the very active Blixt Community [Telegram](https://t.me/blixtwallet) group. 

Otherwise the project leader and main developer behind Blixt, Hampus, can be reached via email at [hampus@blixtwallet.com](mailto:hampus@blixtwallet.com) or on Twitter [@hampus_s](https://twitter.com/@hampus_s).


## Relevant Links

**Podcast appearances:**
- Bitcoin Takeover: [S13 Ep10](https://www.youtube.com/watch?v=hyMyN6a6FW4) 
- Stephan Livera: [Ep468](https://www.youtube.com/watch?v=AFX8j4q8N3Q)

**Download Blixt:**
- [iOS (TestFlight only)](https://apps.apple.com/us/app/blixt-wallet/id1492822055)
- [Android](https://play.google.com/store/apps/details?id=com.blixtwallet&hl=en_US&gl=US)
- [APK](https://github.com/hsjoberg/blixt-wallet/releases)

***

## About the writer
This article was a collaborative effort between QnA and [Expatriotic](https://twitter.com/expatri0tic). If you found the guide useful, please consider sending Expatriotic a tip [here](https://expatriotic.bearblog.dev/donate/) or via Lightning using the button below.

***

<div class="centered">
       <button
      id="nostr-zap-target"
      data-npub="npub1mthuwux9lg5u654vhdzyukhnlj2tt0mhtm5kqupl6rca53qgtwcqq4jrx5"
      data-relays=""
    >
      Donate to Contributor ⚡️
    </button>
  </div>
































