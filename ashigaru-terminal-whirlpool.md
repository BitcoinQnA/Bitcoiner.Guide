---
layout: page
title: Ashigaru Whirlpool
subtitle: How to Peform CoinJoins with Ashigaru Whirlpool
---

<p align="center">
  <a href="#1-install-ashigaru-terminal">Install</a> |
  <a href="#12-verify-ashigaru-terminal">Verify</a> |
  <a href="#13-launch-ashigaru-terminal">Launch</a> |
  <a href="#2-get-familiar-with-ashigaru-terminal">Get Familiar</a> |
  <a href="#3-connect-your-node-to-ashigaru-terminal">Connect Node</a> |
  <a href="#4-create-a-wallet-in-ashigaru-terminal">Create Wallet</a> |
  <a href="#5-use-the-wallet">Use Wallet</a> |
  <a href="#how-whirlpool-coinjoins-work">Whirlpool: How It Works</a> |
  <a href="#required-software">Required Software</a> |
  <a href="#receive-bitcoin">Receive</a> |
  <a href="#create-the-tx0">Tx0</a> |
  <a href="#run-the-coinjoins">Run Coinjoin</a> |
  <a href="#finishing-the-coinjoins">Finish Coinjoin</a> |
  <a href="#spending-the-doxxic-change">Doxxic Change</a> |
  <a href="#how-to-manage-postmix">Postmix</a>
  <br>
  <a href="https://pandul.fr/">Original Author</a>
  <br>
</p>

<p align="center">
  <img src="/assets/img/ashigaru-terminal-setup/header.png" class="responsive" style="max-width: 80%; height: auto;" />
</p>

Ashigaru Terminal is Ashigaru’s adaptation of Sparrow Server that implements the Whirlpool coinjoin protocol. It continues the work started by Samourai Wallet, especially around Whirlpool GUI, keeping the core principles of self‑custody and privacy preservation.

This software is a fork of Sparrow Server, modified and optimized for full integration with the Whirlpool ecosystem — the ZeroLink coinjoin protocol originally developed by the Samourai team.

Ashigaru Terminal runs in a minimalist TUI interface and can be deployed on a personal computer or a dedicated server. It lets you interact directly with Whirlpool to initiate Tx0 transactions, manage the Deposit, Premix, Postmix, and Badbank accounts, and perform automatic remixing to strengthen the privacy of your coins.

In short, Ashigaru Terminal is particularly useful if you want to perform coinjoins via Whirlpool.

In this first tutorial, we’ll handle installation and the basics of Ashigaru Terminal. A second, more advanced tutorial will then cover performing coinjoins in practice.

> Proper coinjoins improve privacy by breaking deterministic links between inputs and outputs.
{: .prompt-info }

## 1. Install Ashigaru Terminal

To install Ashigaru Terminal, you’ll need Tor Browser because binaries are distributed only over the Tor network. If you haven’t already, [install Tor Browser](https://www.torproject.org/download/) on your machine.

### 1.1. Download Ashigaru Terminal

From Tor Browser, go to the releases page of the Git repository and download the latest version for your operating system:

Onion link - http://ashicodepbnpvslzsl2bz7l2pwrjvajgumgac423pp3y2deprbnzz7id.onion/Ashigaru/Ashigaru-Terminal/releases/

![Image](/assets/img/ashigaru-terminal-setup/01.webp)

Download the two files that match your operating system:
- The binary (for example: `ashigaru_terminal_v1.0.0_amd64.deb ` for Debian/Ubuntu, `.dmg ` for macOS, or `.zip ` for Windows)
- The signed hashes file: `ashigaru_terminal_v1.0.0_signed_hashes.txt `

> Always download both the binary and the signed hashes file — you’ll need the latter to verify authenticity and integrity before running anything.
{: .prompt-warning }

### 1.2. Verify Ashigaru Terminal

Before running the software, verify its authenticity and integrity. This step helps you avoid installing a tampered version that could compromise your bitcoin or infect your machine.

Open a new tab and go to the [Keybase verification tool](https://keybase.io/verify). Paste the content of the `.txt ` signed hashes file into the field, then click “Verify.”

![Image](/assets/img/ashigaru-terminal-setup/02.webp)

To diversify verification sources, you can also compare the message with what’s on the clearnet site [ashigaru.rs](https://ashigaru.rs/download/) under the `/download ` section.

![Image](/assets/img/ashigaru-terminal-setup/03.webp)

If the signature is valid, Keybase will confirm the file was signed by the Ashigaru developers.

![Image](/assets/img/ashigaru-terminal-setup/04.webp)

You can also click the “ashigarudev” profile shown by Keybase and ensure the key fingerprint matches exactly: A138 06B1 FA2A 676B.

![Image](/assets/img/ashigaru-terminal-setup/05.webp)

> If the Keybase verification fails, do not install the software. Start the process over or ask the community for help before proceeding.
{: .prompt-danger }

Keybase gives you the authenticated hash for the app. Now verify the hash of the `.deb `, `.zip `, or `.dmg ` you downloaded matches the Keybase-verified value. Use [HASH FILE ONLINE](https://hash-file.online/).

- Click “BROWSE...” and select the `.deb `, `.zip `, or `.dmg ` you downloaded
- Choose SHA‑256 as the hashing function
- Click “CALCULATE HASH” to generate your file’s hash

![Image](/assets/img/ashigaru-terminal-setup/06.webp)

The site will display the software hash. Compare it to the one verified on Keybase. If both match perfectly, authenticity and integrity checks have succeeded. You can now install/run the software.

![Image](/assets/img/ashigaru-terminal-setup/07.webp)

> Never proceed if the signature or hash comparison fails — investigate the mismatch first.
{: .prompt-danger }

### 1.3. Launch Ashigaru Terminal

- Debian / Ubuntu

To install:

 ` ` `bash
cd ~/Downloads
sudo apt install ./ashigaru_terminal_v1.0.0_amd64.deb
 ` ` `
> Adjust the filename to match the version you downloaded.
{: .prompt-info }

Then verify the installation:

 ` ` `bash
/opt/ashigaru-terminal/bin/Ashigaru-terminal --version
 ` ` `
> Prints the installed version to confirm the binary is available.
{: .prompt-tip }

Launch the software:

 ` ` `bash
/opt/ashigaru-terminal/bin/Ashigaru-terminal
 ` ` `
> Starts the TUI app in your terminal.
{: .prompt-info }

- Windows

Right‑click the `.zip ` file you downloaded and verified, then select “Extract All...” to unpack it.

Once extraction is complete, double‑click `Ashigaru-terminal.exe ` to launch the app.

![Image](/assets/img/ashigaru-terminal-setup/08.webp)

> On macOS, open the downloaded `.dmg ` and follow the standard app installation process. Gatekeeper may require you to allow running apps from this developer.
{: .prompt-tip }

## 2. Get familiar with Ashigaru Terminal

Ashigaru Terminal uses a TUI (Text‑based User Interface), meaning a minimalist interface that runs directly in the terminal. You interact using menus and keyboard shortcuts without a traditional GUI.

![Image](/assets/img/ashigaru-terminal-setup/09.webp)

Navigation is straightforward: use your keyboard’s arrow keys to move through menus, and press `Enter ` to confirm or perform actions.

## 3. Connect your node to Ashigaru Terminal

By default, Ashigaru Terminal connects to a public Electrum server. This has obvious privacy and sovereignty drawbacks. Configure it to connect directly to your own Electrum server.

Open `Preferences > Server `.

![Image](/assets/img/ashigaru-terminal-setup/10.webp)

Click `< Edit > `.

![Image](/assets/img/ashigaru-terminal-setup/11.webp)

Select `Private Electrum Server `, then click `< Continue > `.

![Image](/assets/img/ashigaru-terminal-setup/12.webp)

Enter your server’s URL and port. You can enter a Tor `.onion ` address. Click `< Test > ` to check the connection.

![Image](/assets/img/ashigaru-terminal-setup/13.webp)

If the connection works, you’ll see `Success ` and your server’s details.

![Image](/assets/img/ashigaru-terminal-setup/14.webp)

> For best privacy, use your own Electrum server (onion if remote). Public servers can see and correlate wallet queries.
{: .prompt-warning }

To learn more about Dojo and how to install it, I have the following dedicated guide:

[Vanilla Samourai Dojo Guide](https://bitcoiner.guide/vanilla-dojo/)

Note: For this tutorial, the author disconnects from their because they’re on testnet. Operation is the same on mainnet.

## 4. Create a wallet in Ashigaru Terminal

With the software configured, add a Bitcoin wallet.

You have two choices:
- Create a brand‑new wallet to use exclusively with Ashigaru Terminal. You’ll need this app running whenever you want to interact with the wallet.
- Import your existing Ashigaru (mobile) wallet into Ashigaru Terminal. This slightly reduces security (one wallet across two environments), but it lets Ashigaru Terminal run continuously to mix coins while you spend from the mobile app.

In this tutorial, we’ll use the second option. If you prefer creating a new wallet, the procedure is identical — the only difference is you’ll back up the new mnemonic and BIP39 passphrase during creation.

Note: Ashigaru Terminal does not allow you to spend your bitcoins directly. You can either synchronize the same wallet on Ashigaru Terminal and the Ashigaru app (which I will do in this tutorial), or on Sparrow Wallet.

If you don’t yet have a wallet in the Ashigaru app, follow [this guide](https://bitcoiner.guide/ashigaru-mobile).

Go to `Wallets `.

![Image](/assets/img/ashigaru-terminal-setup/15.webp)

Select `Create / restore wallet... `. Use `Open Wallet... ` later to reopen a wallet already saved in Ashigaru Terminal.

![Image](/assets/img/ashigaru-terminal-setup/16.webp)

Give your wallet a name.

![Image](/assets/img/ashigaru-terminal-setup/17.webp)

Choose `Hot Wallet ` as the wallet type.

Note: `Watch‑only ` lets you save a hardware wallet xpub for later use with `Mix to `. A watch‑only wallet cannot participate in coinjoins. We’ll cover “Mix to” in a future tutorial.

![Image](/assets/img/ashigaru-terminal-setup/18.webp)

Now the flow differs based on your choice:
- To create a new wallet from scratch, click `< Generate New Wallet > `, set a BIP39 passphrase, and carefully back up the mnemonic and passphrase on physical media:

- To use the same wallet as your Ashigaru Mobile app, enter your 12‑word mnemonic and your BIP39 passphrase exactly: lowercase words, in order, separated by a single space, with no extra characters.

Click `< Next > ` when done.

Note: If `< Next > ` is disabled, your mnemonic is invalid. Double‑check for typos or incorrect words.

![Image](/assets/img/ashigaru-terminal-setup/19.webp)

You’ll then set a password. This unlocks your wallet in Ashigaru Terminal and protects it from unauthorized physical access. It is not part of key derivation. In other words, even without this password, anyone with your mnemonic and passphrase can restore your wallet and access your funds.

Choose a long, random password. Store a copy safely — ideally on physical media or in a secure password manager.

Click `< OK > ` when finished.

![Image](/assets/img/ashigaru-terminal-setup/20.webp)

> Mnemonic + passphrase = full access. Treat the Terminal password as a local lock; it does not replace seed security.
{: .prompt-info }

## 5. Use the wallet

Choose which account to view. Since we haven’t started mixing yet, open the `Deposit ` account.

![Image](/assets/img/ashigaru-terminal-setup/21.webp)

Operation is similar to Sparrow (Ashigaru Terminal is a fork of Sparrow Server), so you’ll see familiar menus:

![Image](/assets/img/ashigaru-terminal-setup/22.webp)

- `Transactions `: view transaction history for this account. In this example, some appear already because they were made with the Ashigaru Mobile app using the same wallet.

![Image](/assets/img/ashigaru-terminal-setup/23.webp)

- `Receive `: generate a fresh receiving address to fund the deposit account.

![Image](/assets/img/ashigaru-terminal-setup/24.webp)

- `Addresses `: list all addresses in this account (internal and external chains).

![Image](/assets/img/ashigaru-terminal-setup/25.webp)

- `UTXOs `: list all available UTXOs.

![Image](/assets/img/ashigaru-terminal-setup/26.webp)

- `Settings `: view the wallet descriptor, check the seed, adjust Gap Limit, or change the wallet birthday/start date.

![Image](/assets/img/ashigaru-terminal-setup/27.webp)

You now know how to install and get started with Ashigaru Terminal. Next we’ll cover performing coinjoins and managing Postmix funds via the Ashigaru mobile app.

“a bitcoin wallet for the streets”

Here, you’ll learn what a coinjoin is in practice and how to perform one using the Ashigaru ecosystem and Whirlpool — a coinjoin protocol inherited from Samourai Wallet — via Ashigaru Terminal.

## How Whirlpool coinjoins work

This guide does not explain coinjoin theory, why it’s useful, or the formal design of Whirlpool, as these topics will be covered in detail in a future post.

Here are a few quick points that will help in practice.

Wallets compatible with Whirlpool use 4 distinct accounts to support the coinjoin process:
- Deposit account, index `0' `
- Bad Bank (aka doxxic change), index `2 147 483 644' `
- Premix, index `2 147 483 645' `
- Postmix, index `2 147 483 646' `

As of November 2025 on Ashigaru, two pool denominations are available (this list will likely evolve in the coming months — check values at the time you read this):
- `0.25 BTC `, with an entry fee of `0.0125 BTC `
- `0.025 BTC `, with an entry fee of `0.00125 BTC `

Each mixing cycle usually includes 5 UTXOs as inputs and outputs.

![Image](/assets/img/ashigaru-terminal-guide/01.webp)

> Pool sizes and entry fees can change. Be sure to check current values before starting.
{: .prompt-info }

## Required software

To perform coinjoins with Whirlpool, you need three separate tools:

- Ashigaru Terminal — manage your coinjoins directly from your computer

- [Ashigaru Mobile](https://bitcoiner.guide/ashigaru-mobile/) — the mobile app you’ll use to spend your postmix bitcoin anywhere

- Dojo — a Bitcoin node implementation to ensure a sovereign connection without relying on third‑party servers, it can be run on:

    - Start9 by downloading dojo from the community marketplace (I would link to this directly but start9's marketplace website is poor to say the least)

    - Umbrel by installing the "[Samourai Server](https://apps.umbrel.com/app/samourai-server)" app

    - Vanilla dojo on Ubuntu or Debian by following [this guide](https://bitcoiner.guide/vanilla-dojo/).

    - You may also use a public dojo run by a community member but know that this is not ideal for privacy and you should strive to run your own dojo. You may want to use a public dojo if you are just testing with testnet coins for example. Learn more here: [dojobay.pw](https://dojobay.pw/)

Install each tool following its dedicated tutorial. Then you can start doing your first coinjoins.

## Receive bitcoin

After creating your wallet, you start with a single account — index `0' ` — called `Deposit `. Send bitcoin you intend to coinjoin to this Deposit account. You can receive via the Ashigaru mobile app (see Section 5 of its tutorial) or via Ashigaru Terminal (also detailed in Section 5 of its tutorial).

Once your Deposit account holds at least the amount required to join the smallest pool (plus service fees and a minimum to cover mining fees), you’re ready to initiate your first coinjoins.

![Image](/assets/img/ashigaru-terminal-guide/02.webp)

## Create the Tx0

When funds have arrived in your Deposit account and the transaction is confirmed, you can start the coinjoin process. In Ashigaru Terminal, open the `Wallets ` menu, then choose your wallet. If it’s locked, you’ll be asked for your password and passphrase.

![Image](/assets/img/ashigaru-terminal-guide/03.webp)

Select the `Deposit ` account.

![Image](/assets/img/ashigaru-terminal-guide/04.webp)

Go to the `UTXOs ` menu.

![Image](/assets/img/ashigaru-terminal-guide/05.webp)

You’ll see all UTXOs in your Deposit account. Select the UTXOs you want to enter into coinjoin cycles.

For better privacy — and to avoid the Common Input Ownership Heuristic (CIOH) — it’s recommended to use a UTXOs from the same sources in each Tx0, you do not want accidentally associate your KYC and Non-KYC coins for example.

Press `ENTER ` to select a UTXO: an asterisk `(*) ` will appear next to it.

![Image](/assets/img/ashigaru-terminal-guide/06.webp)

Click `Mix Selected `.

![Image](/assets/img/ashigaru-terminal-guide/07.webp)

If you have a UTXO large enough to enter one of the available pools, choose the pool using the arrow keys. On this page, you’ll see your Tx0 details:
- Number of UTXOs entering the pool
- Fees applied (service fees and mining fees)
- Amount of doxxic change

Review the information carefully, then click `Broadcast ` to send the Tx0.

![Image](/assets/img/ashigaru-terminal-guide/08.webp)

Ashigaru will then show the TXID of your Tx0, confirming the transaction was broadcast to the network.

![Image](/assets/img/ashigaru-terminal-guide/09.webp)

> Use UTXOs from similar sources when possible — combining multiple UTXOs can expose your ownership of said UTXOs via the CIOH.
{: .prompt-warning }

## Run the coinjoins

After broadcasting the Tx0, return to your Deposit account’s home page, click `Accounts `, and select the `Premix ` account.

![Image](/assets/img/ashigaru-terminal-guide/10.webp)

In the `UTXOs ` menu, you’ll see the equalized pieces ready to enter coinjoin cycles. As soon as the Tx0 confirms, Ashigaru Terminal can automatically start the first mixing cycle.

![Image](/assets/img/ashigaru-terminal-guide/11.webp)

Once the Tx0 is confirmed, the first coinjoin transaction will be created and broadcast automatically by Ashigaru Terminal. In `Accounts > Postmix > UTXOs `, you can view your equalized UTXOs waiting for their first cycle’s confirmation.

![Image](/assets/img/ashigaru-terminal-guide/12.webp)

You can now leave Ashigaru Terminal running in the background. It will continue mixing and remixing your coins automatically.

> Remixes continue automatically and cost nothing extra in Whirlpool (no additional service or mining fees for remixes).
{: .prompt-tip }

## Finishing the coinjoins

You can let your coins keep remixing automatically. In Whirlpool, remixes accrue no extra fees — neither service nor mining — so more cycles can only improve your privacy.

To better understand this mechanism and how many cycles are worthwhile, I will post a detailed article in the future, stay tuned!

To see how many remixes each coin has completed, open the `UTXOs ` menu of the `Postmix ` account.

![Image](/assets/img/ashigaru-terminal-guide/13.webp)

To spend your mixed coins, use the Ashigaru mobile app, which shares the same wallet as Ashigaru Terminal. The default view is the `Deposit ` account. To access the `Postmix ` account (where mixed UTXOs live), tap the Whirlpool icon at the top right.

![Image](/assets/img/ashigaru-terminal-guide/14.webp)

In this account, you’ll see all your coins in the mixing process. To spend, tap the `+ ` symbol at the bottom right, then select `Send `.

![Image](/assets/img/ashigaru-terminal-guide/15.webp)

Enter your transaction details: the recipient address, the amount, and — if you wish — select a specific transaction type for even stronger privacy.

![Image](/assets/img/ashigaru-terminal-guide/16.webp)

Carefully check the transaction information, then slide the arrow at the bottom of the screen to confirm sending.

![Image](/assets/img/ashigaru-terminal-guide/17.webp)

Your transaction has been signed and broadcast to the Bitcoin network.

![Image](/assets/img/ashigaru-terminal-guide/18.webp)

## Spending the doxxic change

Remember: Whirlpool’s model equalizes coins in the Tx0 before entering pools, which makes tracking harder. This is the most effective coinjoin model, but it has a drawback: a change output that does not go through the coinjoin process, we call this doxxic change.

This change output is created for each Tx0. It is isolated in a specific account named `Doxxic Change ` or `Bad Bank ` (depending on the software) to avoid using it with your other UTXOs. This point is critical: these UTXOs have not been mixed — their traceability links remain intact and can compromise your privacy by tying you to your coinjoin activity. Handle them carefully and never use them with other UTXOs, mixed or not. Combining a toxic UTXO with a mixed UTXO destroys all privacy gains from coinjoins. — Although using official wallets should never allow this to happen, easy tiger.

Currently, Ashigaru does not provide direct access to the `Doxxic Change ` account (at least, it wasn’t found at the time of writing). This feature will likely be added in a future update. In the meantime, the only way to retrieve these funds is to import your seed into Sparrow Wallet. Sparrow usually auto‑detects a Whirlpool wallet and gives access to all four accounts, including `Doxxic Change `. You can then spend those UTXOs like regular bitcoin from Sparrow.

Here are several possible strategies to handle coinjoin change UTXOs without compromising your privacy:

- Mix them in smaller pools: If a toxic UTXO is large enough for a smaller pool, this is often the best option. Do not merge multiple toxic UTXOs to reach the threshold — that would link your entries.

- Mark them as unspendable: Another cautious approach is to keep them in their separate account and not touch them to avoid accidental spending. If BTC appreciates, new pools may become available for their size.

- Donate them: You can donate toxic UTXOs to Bitcoin developers, open‑source projects, or nonprofits that accept BTC. This disposes of them usefully while supporting the ecosystem.

- Buy gift cards or prepaid Visa cards: Platforms like [Bitrefill](https://www.bitrefill.com/) allow exchanging bitcoin for gift cards or reloadable Visa cards. This can be a simple, discreet way to spend toxic UTXOs. But be aware that these UTXOs are still linked to their previous history so be careful which ones you spend

- Swap them for Monero: Samourai Wallet previously offered atomic BTC/XMR swaps (now discontinued). This service exists in [Eigen Wallet](https://eigenwallet.org/), you can isolate these UTXOs, convert to XMR, then back to BTC if desired. This method can be costly and depends on available liquidity. Also you must consider do you want to potentially risk a UTXO that may be associated with you being given to a third party who can do whatever they want with it?

- Open a lightning channel: Transferring toxic UTXOs to LN to benefit from lower transaction fees can be useful. However, this may leak information depending on your LN usage, so proceed carefully.

> Carefully consider what you want to do with your doxxic change, always proceed carefully.
{: .prompt-danger }

## How to assess coinjoin quality

Effective coinjoins exhibit high homogeneity between input and output amounts. This uniformity increases the number of plausible interpretations for an external observer and therefore uncertainty about the transaction. We measure this uncertainty using entropy applied to the transaction. Whirlpool’s model is recognized as one of the strongest in this regard, thanks to excellent homogeneity between participants.

The performance across multiple coinjoin cycles is measured by the size of the sets in which a coin is hidden — called anonsets. There are two types:
- One measures privacy against retrospective analysis (from present to past)
- The other measures resistance against prospective analysis (from past to present)

For a full explanation of these two indicators a follow-up post will be posted.

## How to manage postmix

After several coinjoin cycles, the best strategy is to keep UTXOs in the `Postmix ` account, letting them remix indefinitely until you actually need to spend them.

Some users prefer moving mixed BTC to a hardware wallet. This is possible, but it requires discipline to avoid compromising privacy gains from coinjoins.

The most common mistake is merging UTXOs. Never combine mixed UTXOs with unmixed UTXOs in the same transaction, or you risk creating links via the CIOH. This means rigorous UTXO management is key — clear and precise labeling is essential. In general, UTXO merging is risky and often leads to privacy loss when done poorly.

Be careful with consolidation of mixed UTXOs with each other, too. Limited consolidation may be acceptable if UTXOs have large anonsets, but it inevitably reduces your privacy. Avoid large or rushed consolidations before sufficient remixes, as they can create deducible links between your coins before and after mixing. When in doubt, do not consolidate postmix UTXOs. Instead, transfer them one by one to your hardware wallet, generating a fresh receiving address each time. Label every transferred UTXO carefully.

It is strongly discouraged to move postmix UTXOs into wallets using minority scripts. For example, if you participated in Whirlpool from a multisig `P2WSH ` wallet, few users share that script type. Sending postmix UTXOs back to the same script greatly reduces your anonymity set. Beyond script type, other wallet fingerprints can harm your privacy. The safest option is to spend from the Ashigaru app.

Finally, as with any Bitcoin usage, never reuse a receiving address. Each payment should go to a fresh, unused address.

The simplest and safest method remains: keep mixed UTXOs resting in `Postmix `, let them remix naturally, and spend only when needed from Ashigaru.

Ashigaru and Sparrow include additional protections against common chain‑analysis pitfalls, helping you preserve transaction privacy.

> Avoid merging mixed and unmixed UTXOs; prefer spending from Postmix directly; don’t reuse addresses; and be cautious with script types and consolidations.
{: .prompt-warning }