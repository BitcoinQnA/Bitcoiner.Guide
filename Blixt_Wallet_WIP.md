  # Blixt Wallet


# What is Blixt wallet?

*Blixt is a non-custodial open-source Bitcoin Lightning Wallet for Android and iOS with a focus on usability and user experience.*

In this world of Bitcoin there are three types of people: NGU maximalists, security maximalists, & privacy maximalists.
  
NGU maxis make custiodial solutions to pave the way for mass adoption. But there are a select few who develop non-custodial solutions for interacting with Bitcoin. 

Blixt wallet is a mobile app that lets you use the Lightning Network for fast and cheap Bitcoin transactions. You run your own Lightning node on your phone, using lnd and Neutrino, so you don’t have to trust any custodial solutions or third-party servers. You have full control over your funds and your private keys. You can also manage your own channels and liquidity on the Lightning Network.

Blixt wallet supports many advanced features, such as keysend, Lightning Address, LNURL, WebLN, Tor, and more. You can send and receive payments in Bitcoin using Lightning Network with ease and convenience. You can also interact with other Blixt wallet users on the telegram group, where you can find memes, support, and updates.

Blixt wallet is developed by Hampus Sjöberg, a Swedish Bitcoin enthusiast who named the app after the Swedish word for lightning. He is constantly working on improving the app and adding new features.

## Pros

Blixt wallet has many advantages over other Lightning wallets, such as:

- It's open-source and non-custodial, which means that you have full control over your funds and your private keys.
- It's built with lnd and Neutrino, which are well-known and reputable Lightning and Bitcoin implementations.
- It does not use any centralized servers for doing transactions, which means that you don't have to trust any third-party intermediaries.
- It supports many cutting-edge features and developments in the Lightning community, such as keysend, Lightning Address, LNURL, WebLN, Tor, and more.
- It has a responsive and helpful developer who is active on Twitter and Telegram.

# How to Get Started

## Download
To get started with Blixt wallet, you need to download it from [Google Play](https://play.google.com/store/apps/details?id=com.blixtwallet&hl=en_US&gl=US) or [App Store](https://apps.apple.com/us/app/blixt-wallet/id1492822055). You can also visit their [website](https://blixtwallet.github.io/) or [GitHub](https://github.com/blixttech/blixt-wallet) for more information.

## Create a New Wallet or Import an Existing One

When you first launch Blixt, you will be greeted with a welcome screen that gives you two options: create a new wallet or import an existing one.

If you choose to create a new wallet, Blixt will generate a 24-word seed phrase for you. This seed phrase is very important, as it is the only way to restore your wallet in case you lose your phone or uninstall the app. You should write down this seed phrase on a piece of paper and store it in a safe place. Do not share it with anyone or store it online, as anyone who has access to it can steal your funds.

After you confirm that you have written down your seed phrase, Blixt will ask you to set a PIN code for your wallet. This PIN code will be used to unlock your wallet every time you open the app. You can also enable biometric authentication (such as fingerprint or face ID) if your device supports it.

If you choose to import an existing wallet, Blixt will ask you to enter your 24-word seed phrase that you have previously generated with Blixt or another compatible wallet. Blixt will then scan the blockchain and restore your on-chain and off-chain funds.

## Syncing
After creating or restoring your wallet, you need to sync the Bitcoin blockchain headers and filters with Neutrino. This may take a few minutes depending on your network connection. You can see the progress on the top right corner of the screen.

## How to fund your wallet with on-chain or off-chain transactions

Once the sync is complete, you can see your on-chain and off-chain balances on the main screen. The on-chain balance is the amount of Bitcoin that you have in your regular Bitcoin addresses. The off-chain balance is the amount of Bitcoin that you have in your Lightning channels. Generally speaking your Lightning balance is what is immediately visible when you open the app.

To use Blixt, you need to have some funds in your wallet. There are two types of funds: on-chain funds and off-chain funds.

On-chain funds are regular Bitcoin transactions that are recorded on the blockchain. They are slow, expensive and public, but they are also more secure and widely accepted.

Off-chain funds are Lightning Network transactions that are not recorded on the blockchain but on LN channels between nodes. They are fast, cheap and private, but they are also less secure and less compatible.

To use LN payments, you need to have some off-chain funds in your LN channels. To get some off-chain funds, you need to have some on-chain funds first. So how do you get some on-chain funds?

There are two ways:

- You can send funds from another Bitcoin wallet (such as Coinbase or Cash App) or buy them with fiat using a service like Moonpay or Ramp.
- You can receive funds from another LN wallet using Dunder LSP or submarine swaps.

- **Send on-chain funds to Blixt wallet**: You can send Bitcoin from another wallet or exchange to your Blixt wallet address. You can find your address by tapping on the receive button at the bottom of the screen. By default, when you send on-chain funds to Blixt wallet, it will automatically open a channel for you with those funds using autopilot. Autopilot is a feature that selects the best nodes to connect with based on various criteria. You can disable autopilot in settings if you want to manually open channels.

- **Receive Lightning payments from another node**: You can receive Bitcoin over Lightning Network from another node that has a channel with you. You can find your Lightning invoice by tapping on the receive button at the bottom of the screen and switching to the Lightning tab. You can also use your Lightning Address, which is a human-readable identifier that maps to your node. For example, you can receive sats from me@blixtwallet.com. If you don't have any channels yet, you can use Dunder LSP, which is a Lightning Service Provider that offers inbound liquidity for free. This means that you can receive payments over Lightning without needing to open channels yourself. You just need to receive a payment from Dunder LSP and they will open a channel with you automatically.


### Sending funds from another Bitcoin wallet or buying them with fiat

To send funds from another Bitcoin wallet or buy them with fiat, you need an on-chain address from Blixt. To get an on-chain address, go to Settings > On-Chain Wallet > Receive Bitcoin. Blixt will generate a QR code and an alphanumeric string that represents your address. You can copy this address or scan the QR code with another wallet or service and send some funds to it.

You will see the incoming transaction in your transaction log as soon as it is broadcasted to the network, but it will take some time (usually around 10 minutes) for it to be confirmed on the blockchain. You can check the confirmation status by tapping on the transaction.

Once confirmed, you can use these funds to open LN channels or send them back on-chain.

### Receiving funds from another LN wallet using Dunder LSP or submarine swaps

To receive funds from another LN wallet using Dunder LSP or submarine swaps, you need a LN invoice from Blixt. To create a LN invoice, go to Receive > Lightning Invoice. Blixt will ask you to enter an amount (in satoshis) and an optional description for the payment. Then it will generate a QR code and an alphanumeric string that represents your invoice. You can copy this invoice or scan the QR code with another LN wallet and pay it.

There are two ways that Blixt can receive these payments:

- If you have enabled Dunder LSP in Settings > Enable Dunder LSP , Blixt will automatically open a channel with Dunder LSP node for the same amount that you receive (up to 400k sats per channel). This way, you can receive off-chain funds without having any on-chain funds first.
- If you have disabled Dunder LSP or if the amount is larger than 500k sats per channel , Blixt will use submarine swaps  , which means that it will swap the off-chain payment for an on-chain payment using a third-party service called Boltz . This way, you can receive off-chain funds directly into your on-chain wallet without opening any channels.

You will see the incoming payment in your transaction log as soon as it is received by Blixt.

## How to send and receive LN payments

To use Lightning Network, you need to have some funds in your off-chain balance. There are two ways to do this:

LN payments are fast, cheap and private transactions that are not recorded on the blockchain but on LN channels between nodes. To use LN payments, you need to have some off-chain funds in your LN channels.

There are two ways to send and receive LN payments:

- You can use a LN invoice , which is a QR code or an alphanumeric string that contains information about the payment, such as amount, description, expiry date, etc.
- You can use a keysend payment , which is a spontaneous payment that does not require an invoice, but only a public key or an alias of another node.

### Using a LN invoice

To use a LN invoice , go to Send > Lightning Invoice . Blixt will ask you to scan a QR code or paste an alphanumeric string that represents an invoice from another LN wallet or service. Blixt will show you the details of the payment, such as amount, description, expiry date, etc.

If you agree, tap on **Pay** and wait for Blixt to find a route and send the payment through your channels.

You will see the outgoing payment in your transaction log as soon as it is sent by Blixt.

To create a LN invoice , go to Receive > Lightning Invoice . Blixt will ask you to enter an amount (in satoshis) and an optional description for the payment. Then it will generate a QR code and an alphanumeric string that represents your invoice. You can copy this invoice or show the QR code to another LN wallet or service and request a payment.

You will see the incoming payment in your transaction log as soon as it is received by Blixt.

### Using a keysend payment

To use a keysend payment , go to Send > Keysend . Blixt will ask you to enter a public key or an alias of another node that you want to send a payment to. You can also scan a QR code that contains a public key or an alias of another node. Blixt will show you the details of the node, such as its name, public key, etc.
Then, enter an amount (in satoshis) and an optional description for the payment.
If you agree, tap on **Pay** and wait for Blixt to find a route and send the payment through your channels.
You will see the outgoing payment in your transaction log as soon as it is sent by Blixt.
To receive a keysend payment, you don't need to do anything, as Blixt will accept any keysend payment that is sent to your node's public key or alias.
You will see the incoming payment in your transaction log as soon as it is received by Blixt.

## Receiving your first Lightning sats


## Sending your first Lightning sats
Once you have some funds in your off-chain balance, you can start sending and receiving payments over the Lightning Network. To send a payment, you can tap on the send button at the bottom of the screen and scan a QR code or enter an invoice or an address. You can also use keysend, which allows you to send payments without needing an invoice. You just need to enter the node ID or alias of the recipient. You can also use keysend to send messages or tips to other Blixt users or services that support it.

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

## How to backup and restore your wallet

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














