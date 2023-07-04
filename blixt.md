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
  <a href="#other-features">Features</a> |
  <a href="#troubleshooting">Troubleshooting</a> 
  <br><br>
</p>

<p align="center">
  <img src="/assets/img/blixtlogo.png" class="responsive" style="max-width: 60%; height: auto;" />
</p>


## What is Blixt Wallet?

*Blixt is a non-custodial open-source Bitcoin Lightning Wallet for Android and iOS with a focus on usability and user experience.*

Blixt wallet is a mobile app that helps you use the Lightning Network for fast, low fee Bitcoin transactions. The Blixt architecture differs from some other mobile Lightning wallets because it actually runs a light weight Lightning node on your phone using LND and Neutrino. This means **you** have full control over your funds and your private keys. Blixt also allows advanced users to manage their own channels should they choose to do so.

Blixt supports many advanced features, such as Keysend, Lightning Address, LNURL, WebLN, Tor, and much more. Blixt is developed by [Hampus Sjöberg](https://twitter.com/hampus_s), a Swedish Bitcoin enthusiast who named the app after the Swedish word for lightning.


## How to Get Started

To get started with Blixt, you need to download it from [Google Play](https://play.google.com/store/apps/details?id=com.blixtwallet&hl=en_US&gl=US) or [App Store](https://apps.apple.com/us/app/blixt-wallet/id1492822055) (*Test Flight only for now*). You can also visit their [website](https://blixtwallet.github.io/) or [GitHub](https://github.com/hsjoberg/blixt-wallet/releases) for more information.

The following screenshots and examples are taken using Blixt version [0.6.8](https://github.com/hsjoberg/blixt-wallet/releases/tag/v0.6.8) on Android.

### Create a New Wallet

When you first launch Blixt, you'll be greeted with a welcome screen that gives you two options: Create Wallet or Restore Wallet.

After choosing Create Wallet, Blixt will generate a 24-word seed phrase for you. As Blixt runs on the [LND](https://github.com/lightningnetwork/lnd) implementation of Lightning, it inherits their 'AEZEED' seed formatting. Whilst on the surface it may appear to look like any other Bitcoin seed, this seed format is only compatible with other LND instances. Do not try to import traditional BIP39 seeds into Blixt.

To access this seed phrase, tap the cog icon in the top right corner of the screen, then tap Show Mnemonic. Write this seed down and store it somewhere offline and secure.

After creating your wallet and noting down your seed words, you'll be met with the default home screen that should look something like this.

<p align="center">
  <img src="/assets/img/blixt01.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>


### Funding Blixt

There are three main ways to fund your Blixt Wallet and get started with Lightning:


- **Send on-chain funds to Blixt**: You can send Bitcoin from another wallet to the address shown on the Blixt home screen. By default, when you send on-chain funds to Blixt, it will automatically open a channel for you between the node on your phone and the Blixt LSP node. This method of getting started means that you'll have a Lightning spend capacity roughly equal to the amount deposited on-chain to Blixt. The downside of this method is that you are not able to receive via Lightning, since all of the funds are on your side of the channel. To be able to receive you'll either need to spend down some of your balance or carry out a [Submarine Swap](https://darthcoin.substack.com/p/lightning-network-submarine-swaps_) to 'drain off' some of your balance back to an on-chain wallet. 

- **Receive immediately via Lightning**: To achieve this you'll need to head to the settings and enable the experimental '[Dunder LSP](#other-features)'. Dunder is a service that allows you to start accepting Lightning payments immediately. No need to first deposit funds on-chain to open a Lightning channel! Dunder supports 'on demand channel openings', meaning if your Blixt Lightning wallet gets an inbound payment while not having any open channels, Dunder will open a channel to the wallet with push amount equal to the inbound payment minus the on-chain fee. The current limit for this service is 400k sats.

- **Manually open a channel**: Advanced users might choose to open channels to specific peers on the Lightning Network. To achieve this, first you'll need to disable 'Automatically Open Channels' from the settings. Once you've done that, send some on chain funds to the address shown and wait for them to confirm. Next, open the side drawer with the icon in the top left of the screen and tap Lightning Channels. From here you can tap the + icon and the enter the required information to open the channel to the desired peer.

***

For the purposes of this guide, I'll demonstrate option 1 by sending some on-chain funds to the address displayed on the Blixt home screen. After doing so, Blixt will update and show a pending amount roughly equal to what was sent (minus a small fee). You can tap View to see the progress of the automatic channel open. 

<p align="center">
  <img src="/assets/img/blixt02.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

You can tap 'View' to see the progress of the automatic channel open.

<p align="center">
  <img src="/assets/img/blixt03.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

Now that there are some funds in your wallet, Blixt will prompt you to ensure your backups are complete and also recommend some options for you to secure access to the app. Blixt backups are covered in more detail later in this guide.

<p align="center">
  <img src="/assets/img/blixt04.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

After a short wait, your automatic channel should confirm and become active, ready for you to spend. To check this, from the main screen of Blixt, tap the hamburger icon in the top left corner, then tap 'Lightning Channels'. Here you'll see various useful stats about the channel. Such as:

- Channel status
- Channel capacity
- Can send *(Your outbound liquidity)*
- Can receive *(Your inbound liquidity)*

<p align="center">
  <img src="/assets/img/blixt05.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>


***

## Sending via Lightning

Now that you're set up and ready, here are the ways to send sats via Lightning:

- **Via an invoice** - This is a QR code or an alphanumeric string that contains information about the payment, such as amount, description and expiry date.
- **Via a Lightning Address** - A Lightning Address is an easy to remember and share identifier that allows Lightning users to pay to.
- **Via a Keysend payment** - Keysend is a spontaneous payment that does not require an invoice. Keysend pays direct to a node ID.

### Using an Invoice
To send over Lightning with an invoice , go to Send > Lightning Invoice . Blixt will ask you to scan a QR code or paste an alphanumeric string that represents an invoice from another LN wallet or service. Blixt will show you the details of the payment, such as amount, description, expiry date, etc.

If you agree, tap on **Send** and wait for Blixt to find a route and send the payment through your channel(s). You will then see the outgoing payment in your transaction log as soon as it is sent by Blixt.

<p align="center">
  <img src="/assets/img/blixt06.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

### Using a Lightning Address
Lightning addresses look like email, mine is `qna@tips.bitcoiner.guide`. Any wallet able to pay will using this standard will use this ID as a method to communicate directly with your node to generate and pay an invoice. 

To pay to a Lightning Address in Blixt, tap Send, followed by the `@` symbol in the top right corner of the screen.

After typing in your recipients' Lightning address, Blixt will ask you for the amount to be sent. After you populate the amount just tap **Send**. 

<p align="center">
  <img src="/assets/img/blixt07.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>


### Using Keysend
To use a Keysend payment, tap the hamburger icon in the top left of the home screen. Open the advanced drop down menu, then tap Keysend Experiment. 

Blixt will ask for the public key of the node to be paid as well as the amount to be sent. Here you can also add an optional message to be sent with the payment. This can be useful as the recipient will not be able to tell exactly where this payment originated. 

When you're happy, tap on **Send** and wait for Blixt to find a route and send the payment through your channel(s). You'll see the outgoing payment in your transaction log as soon as it is sent by Blixt.

<p align="center">
  <img src="/assets/img/blixt08.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

***


## Receiving via Lightning

Receiving sats over the Lightning Network requires 'inbound liquidity'. This essentially means that you need an open channel with enough 'space' on your side of the channel for sats to be pushed your way. If you aren't sure what your inbound liquidity is, tap the hamburger icon to open the side menu, then tap Lightning Channels. 

Under each channel you will see a line that says 'Can receive'. Generally speaking, your inbound liquidity is the sum of all channel 'Can receive' balances. With every Lightning spend or receive you make, this amount will change. 

<p align="center">
  <img src="/assets/img/blixt09.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

### Using an Invoice

To create an invoice, just tap Receive from the bottom of the screen. Blixt will ask you to enter an amount (in sats) and an optional description for the payment. Then it will generate a QR code and an alphanumeric string that represents your invoice. You can copy this invoice or show the QR code to another LN wallet or service and request a payment.

You will see then incoming payment in your transaction log as soon as it is received by Blixt.

<p align="center">
  <img src="/assets/img/blixt10.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

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

A Static Channel Backup (SCB) file is a way to backup your channels manually. To create this file, go to Settings > Export Channel Backup. Blixt will generate a `.bak` file that contains information about your channels and save it in your in the location you choose. Ensure you have at least 1 copy of this file saved somewhere other than your phone.

To restore your channels from a backup file, tap restore upon opening Blixt, import your seed phrase and then tap 'Choose Channel Backup File on Disk'. Locate the file and then Blixt will restore your channels.

<p align="center">
  <img src="/assets/img/blixt11.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

**Remember -** Using this manual method requires you to update the channel backup file every time you open or close a channel in Blixt.

***

## Other Features

Blixt has lots of additional features and settings. Here is a snapshot of some of the more commonly used items you may find useful.

### Dunder LSP
[Dunder](https://blixtwallet.github.io/guides#guide-lsp) provides a low friction way to get on boarded directly to Lightning without needing to interact directly with an on-chain wallet. Dunder is a Lightning Service Provider that supports "on demand channel openings". Once enabled from the settings, when your Blixt wallet gets an inbound Lightning payment while not having any inbound capacity, Dunder will open a channel to the wallet with a push amount equal to the inbound payment minus the on-chain fee. 

You don't need to use the pre-configured Dunder LSP either. Once enabled, an additional menu item will surface that allows you to choose your own LSP provider. [Here](https://github.com/hsjoberg/blixt-wallet/issues/1033) is a list of community ran services. 

Here's a quick primer on getting stared with a Dunder channel:

1. Enable Dunder LSP from the app settings.
2. Click receive from the main screen and specify an amount no greater than 400k sats. For this example let's assume an invoice of 200k sats.
3. Share the resulting Lightning invoice with whoever wants to pay you via Lightning.
4. Once the invoice is paid, the Dunder LSP will create a channel of maximum 400k sats and push the amount specified in the invoice (200k sats) to your side of the channel.
5. You can now send **and** receive 200k sats over Lightning without needing any additional channels.
6. If you then choose to receive an amount larger than your 'Can receive' balance, the Dunder LSP will repeat the process again and open a new additional channel to you.

<p align="center">
  <img src="/assets/img/blixt17.jpg" class="responsive" style="max-width: 100%; height: auto;" />
</p>

### Tor

Tor is a network that enables anonymous communication by routing your traffic through multiple relays around the world. By using Tor, you can hide your IP address and location from other nodes and services, increasing your privacy and security. However the Tor network occasionally experiences disruptions that can severely degrade network user experience.

To enable or disable Tor, go to Settings > Enable Tor . Blixt will restart and reconnect to the network using Tor or clear-net.

<p align="center">
  <img src="/assets/img/blixt12.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>


### Lightning Browser

Blixt has a built-in web browser that supports WebLN, a protocol that allows websites to interact with your Lightning wallet. To access the Lightning Browser, tap the hamburger icon, then tap Lightning Browser. You'll then be met with a list of websites and services that you can interact with using your Blixt lightning node/wallet.

<p align="center">
  <img src="/assets/img/blixt13.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>


### On-chain Wallet

Although Blixt focuses on Lightning, it does allow users to interact with a traditional on-chain bitcoin too. To access the on-chain wallet in Blixt, tap the hamburger icon, then tap on-chain. 

<p align="center">
  <img src="/assets/img/blixt14.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>


### Contacts & Services

Here you can and manage your contacts using their Lightning Address or node ID. Having a list of contacts that you frequently pay can be useful so that you don't need to re-enter their Lightning Address or request an invoice each time you want to pay them. To access the contact list, tap the hamburger icon, then tap Contacts & Services. 

<p align="center">
  <img src="/assets/img/blixt15.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>



### Settings

Blixt is one of the most advanced mobile Lightning node/wallet software on the market. From within the settings you can fully customize your Blixt experience based upon your preferences. Here are some things to look out for:

- Login with PIN/fingerprint
- Change fiat/bitcoin units
- Configure a custom bitcoin explorer
- Enable receiving to Taproot addresses
- Inbound channel services
- Plus loads of additional settings to tweak and debug the node running on your phone

<p align="center">
  <img src="/assets/img/blixt16.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

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

**Download Blixt:**
- [iOS (TestFlight only)](https://apps.apple.com/us/app/blixt-wallet/id1492822055)
- [Android](https://play.google.com/store/apps/details?id=com.blixtwallet&hl=en_US&gl=US)
- [APK](https://github.com/hsjoberg/blixt-wallet/releases)

**Other Guides:**
- [Blixt Guides Hub](https://blixtwallet.github.io/guides)
- [DarthCoin Guide](https://darthcoin.substack.com/p/getting-started-with-blixt-mobile)
- [Blixt FAQ](https://blixtwallet.github.io/faq)

**Podcast appearances:**
- Bitcoin Takeover: [S13 Ep10](https://www.youtube.com/watch?v=hyMyN6a6FW4) 
- Stephan Livera: [Ep468](https://www.youtube.com/watch?v=AFX8j4q8N3Q)

***

## About the Author
This article was a collaborative effort between QnA and [Expatriotic](https://twitter.com/expatri0tic). If you found the guide useful, please consider sending Expatriotic a tip [here](https://expatriotic.bearblog.dev/donate/).
































