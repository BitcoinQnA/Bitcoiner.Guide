---
layout: page
title: Ashigaru Mobile
subtitle: How to Setup and Use Ashigaru Mobile and its spending tools to Privately Secure and Manage your Bitcoin
---

<p align="center">
  <a href="#1-prerequisites-for-ashigaru">Prerequisites</a> |
  <a href="#2-verify-and-install-the-ashigaru-app">Install &amp; Verify</a> |
  <a href="#3-initialize-the-app-and-create-a-bitcoin-wallet">Initialize &amp; Wallet</a> |
  <a href="#4-configure-the-ashigaru-app">Settings</a> |
  <a href="#5-receive-bitcoin-in-ashigaru">Receive</a> |
  <a href="#6-send-bitcoin-with-ashigaru">Send</a> |
  <a href="#7-recover-your-ashigaru-wallet">Recovery</a> |
  <a href="#8-update-the-app">Update</a> |
  <a href="#9-donate-to-the-ashigaru-project">Donate</a> |
  <a href="#spending-tools-overview">Spending Tools</a> |
  <a href="#stonewall">Stonewall</a> |
  <a href="#stonewall-x2">Stonewall x2</a> |
  <a href="#payjoin">Payjoin</a> |
  <a href="#stowaway-payjoin">Stowaway</a> |
  <a href="#ricochet">Ricochet</a>
  <br>
  <a href="https://pandul.fr/">Original Author</a>
  <br>
</p>

<p align="center">
  <img src="/assets/img/ashigaru-mobile-guide/header.png" class="responsive" style="max-width: 80%; height: auto;" />
</p>

Ashigaru is a mobile Bitcoin wallet that continues the work of the Samourai Wallet project in a new form. The software emerged in a specific context: in April 2024, Samourai Wallet’s founders were arrested by U.S. authorities and their servers were seized. Although the Samourai app itself remained usable, it is currently no longer maintained. Ashigaru is a free and open fork of Samourai Wallet, maintained by an anonymous team, to preserve Samourai’s features and its original philosophy: defending the privacy and sovereignty of Bitcoin users.

Ashigaru keeps the core DNA of Samourai: a similar interface, a self‑custodial approach, open‑source code, and a strong focus on privacy. The code is licensed under GNU GPLv3, which guarantees anyone can audit, modify, or redistribute the software.

Ashigaru integrates a suite of advanced tools for privacy and UTXO management:
- Whirlpool, a coinjoin protocol based on Zerolink, to break deterministic links between transaction inputs and outputs without surrendering custody.
- PayNym, which implements reusable payment codes (BIP47), now represented via “Pepehash” avatars.
- Ricochet, which adds intermediate hops to transactions to complicate tracing.
- Coin Control to precisely select, freeze, and label your UTXOs.
- Batch Spending to reduce fees by grouping multiple payments into one transaction.
- Stealth Mode, which hides the app behind a decoy launcher to pass unnoticed during a physical phone inspection.
- Advanced spending tools to optimize privacy (payjoin, stonewall etc).
- An optimized recovery flow using a BIP39 passphrase.
- Automatic fee selection to optimize miner fees.

![Image](/assets/img/ashigaru-mobile-guide/01.webp)

Ashigaru is designed for users who are mindful of transaction traceability on Bitcoin. Whether you care about preserving privacy, you’re an experienced bitcoiner focused on self‑custody, or you face heightened surveillance risks, this wallet gives you the tools to take back control of your on‑chain activity.

Ashigaru is available as a mobile app, which we’ll explore in this tutorial. It has a companion desktop application called [Ashigaru Terminal](https://bitcoiner.guide/ashigaru-terminal-whirlpool), which can be used to initiate whirlpool coinjoins.

![Image](/assets/img/ashigaru-mobile-guide/02.webp)

In this tutorial, we’ll cover Ashigaru’s basic use: installation, connecting to Dojo, backups, receiving, sending bitcoin and using all the avaliable postmix spending tools.

## 1. Prerequisites for Ashigaru

Ashigaru requires a few prerequisites to work correctly. First, it is not available from mainstream app stores like Google Play or the App Store. It must be sideloaded on your phone from its .apk file, downloaded via Tor. Therefore, if you use an iPhone, this method will not work: you will need an Android device.

To download the .apk via Tor, you’ll need a browser that can access .onion sites. The easiest way is to install Tor Browser on your phone, available on the [Google Play Store](https://play.google.com/store/apps/details?id=org.torproject.torbrowser) or directly [via its .apk](https://www.torproject.org/download/#android).

![Image](/assets/img/ashigaru-mobile-guide/03.webp)

Most modern smartphones block app installs from unknown sources by default. You will need to temporarily enable this option for Tor Browser in your device settings to allow the install. Once Ashigaru is installed, disable this option again to keep your phone secure.

> Only enable “Install unknown apps” temporarily, and restrict it to Tor Browser for the install — then disable it again.
{: .prompt-warning }

Another critical prerequisite for using Ashigaru is running a Dojo Bitcoin node. For security and sovereignty, the Ashigaru team does not maintain centralized servers to connect your app. You must run your own Dojo instance or connect to one operated by someone you trust.

Dojo lets your Ashigaru app query blockchain data, view the balance of your addresses, and broadcast transactions to the Bitcoin network.

To learn more about Dojo and how to install it, check out the [Vanilla Samourai Dojo Guide](https://bitcoiner.guide/vanilla-dojo/) or download and run dojo on your [start9 directly](https://marketplace.start9.com/) by switching to the community registry.

If you truly cannot run your own Dojo, you can find people willing to share their instance on [dojobay.pw](https://www.dojobay.pw/mainnet/). This can be a temporary solution, but for the long term, it is strongly recommended to run your own Dojo to ensure sovereignty and privacy.

> Relying on a third‑party Dojo introduces trust and privacy trade‑offs. Treat it as a temporary measure and migrate to your own Dojo as soon as feasible.
{: .prompt-warning }

## 2. Verify and install the Ashigaru app

### 2.1. Download Ashigaru

On your phone, open Tor Browser and go to [Ashigaru’s official website](https://ashigaru.rs/download/), under the “Download” section. Tap “Download for Android” to get the .apk installer.

![Image](/assets/img/ashigaru-mobile-guide/04.webp)

Before installing, we will verify the app’s authenticity and integrity. This is especially important when installing from a .apk.

### 2.2. Verify the Ashigaru app

Back on [Ashigaru’s official website](https://ashigaru.rs/download/) in the “Download” section, copy the message shown under “SHA-256 Hash of the APK file.” Copy the entire block, from “BEGIN PGP SIGNED MESSAGE” to “END PGP SIGNATURE.”

![Image](/assets/img/ashigaru-mobile-guide/05.webp)

Still on your phone, open a new tab in Tor Browser and visit the [Keybase verify tool](https://keybase.io/verify). Paste the message you just copied and tap “Verify.”

![Image](/assets/img/ashigaru-mobile-guide/06.webp)

If the signature is valid, Keybase will confirm the file was signed by Ashigaru’s developers. You can also tap the “ashigarudev” profile shown by Keybase and verify that the key fingerprint matches exactly: A138 06B1 FA2A 676B.

If an error appears at this step, the signature is invalid. In that case, do not install the APK. Restart the process from the beginning or ask the community for help before proceeding.

![Image](/assets/img/ashigaru-mobile-guide/07.webp)

Keybase provided the app’s hash. Next, we’ll verify that the hash of the .apk you downloaded matches the verified value from Keybase. Go to [HASH FILE ONLINE](https://hash-file.online/).

![Image](/assets/img/ashigaru-mobile-guide/08.webp)

Tap “BROWSE...” and select the .apk file you downloaded in step 2.1.
Choose the SHA-256 hashing function, then tap “CALCULATE HASH” to compute your file’s hash.

![Image](/assets/img/ashigaru-mobile-guide/09.webp)

The site will display your .apk file’s hash. Compare it to the value you verified on Keybase.io. If both hashes match exactly, the authenticity and integrity checks are successful. You can now proceed with the installation.

![Image](/assets/img/ashigaru-mobile-guide/10.webp)

> Never install the .apk if the signature check or the hash comparison fails — investigate first.
{: .prompt-danger }

### 2.3. Install the Ashigaru app

To install, open your phone’s file manager and go to the downloads folder. Tap the .apk file we just verified, then confirm the installation when prompted.

Ashigaru is now installed on your phone.

## 3. Initialize the app and create a Bitcoin wallet

On first launch, select “MAINNET.”

![Image](/assets/img/ashigaru-mobile-guide/12.webp)

Tap “Get Started.”

![Image](/assets/img/ashigaru-mobile-guide/13.webp)

We’ll now create a new Bitcoin wallet. Tap “Create a new wallet.”

![Image](/assets/img/ashigaru-mobile-guide/14.webp)

### 3.1. Create a Bitcoin wallet

Ashigaru requires a BIP39 passphrase. Choose your passphrase and enter it in the fields. It should be as long and random as possible to resist brute‑force attacks.

Immediately make a physical backup of this passphrase. This step is crucial: if you lose your phone and you no longer have this passphrase, you will not be able to access the bitcoin secured by your Ashigaru wallet. This same passphrase is also used to encrypt the wallet recovery file.

If you don’t fully understand what a passphrase is or how it works, WATCH [THIS](https://www.youtube.com/watch?v=l1ISySyy72Y) passphrase overview from BTCSESSIONS. It’s critical: misunderstanding passphrase usage can cause irreversible loss of funds.

Once entered, tap “NEXT.”

![Image](/assets/img/ashigaru-mobile-guide/15.webp)

Next, choose a PIN code. This code unlocks your Ashigaru wallet and protects it against unauthorized physical access. It is not part of key derivation for your wallet. This means that even without the PIN, anyone who has your mnemonic and passphrase can regain access to your bitcoin.

Choose a long, random PIN. Keep a backup in a location separate from your phone so they are not compromised together.

![Image](/assets/img/ashigaru-mobile-guide/16.webp)

After setting the PIN, Ashigaru displays your wallet’s mnemonic phrase. Warning: this phrase, combined with your passphrase, gives full access to your bitcoin. Anyone with it can steal your funds, even without your phone. This 12‑word list restores your wallet if your phone is lost, stolen, or broken. Back it up carefully on physical media (paper or metal).

Never store this phrase digitally — doing so exposes your funds to theft. Depending on your security model, you can make multiple physical copies, but never split the phrase. Keep the words in order and number them.

Finally, never store the mnemonic phrase and the passphrase in the same place. If both are compromised at once, an attacker can access your wallet.

![Image](/assets/img/ashigaru-mobile-guide/17.webp)

Ashigaru will then ask you to confirm your passphrase again. Use this step to double‑check your physical backup is accurate.

![Image](/assets/img/ashigaru-mobile-guide/18.webp)

> Your mnemonic + passphrase = full wallet access. Treat both with extreme caution — they must be kept private, offline, and never digitized.
{: .prompt-danger }

### 3.2. Connect a Dojo

Next, connect to your Dojo. As explained earlier, Ashigaru requires a Dojo to interact with the Bitcoin network.

Log in to your Dojo’s Maintenance Tool and open the “PAIRING” menu.

![Image](/assets/img/ashigaru-mobile-guide/19.webp)

In Ashigaru, tap “Scan QR,” then scan the pairing QR displayed by your DMT. Tap “Continue” to confirm.

![Image](/assets/img/ashigaru-mobile-guide/20.webp)

Enter your PIN to unlock the wallet. You’ll see the synchronization screen. It’s normal to see PayNym‑related errors at this stage because the wallet is new. Just tap “Continue.”

![Image](/assets/img/ashigaru-mobile-guide/21.webp)

You’ll then arrive at your wallet’s home screen.

![Image](/assets/img/ashigaru-mobile-guide/22.webp)

## 4. Configure the Ashigaru app

To access app settings, tap your PayNym image at the top left, then select “Settings.”

![Image](/assets/img/ashigaru-mobile-guide/23.webp)

You’ll find several options to tailor Ashigaru to your needs. Two settings are especially important to enable early on.

First, open “Security > Stealth mode,” then enable it if you need it. Stealth Mode hides Ashigaru behind a normal‑looking app on your phone. The goal is to prevent anyone from identifying Ashigaru during a physical inspection of your phone.

![Image](/assets/img/ashigaru-mobile-guide/24.webp)

Each decoy app has a specific method to unlock Ashigaru’s real interface. For example, if you choose the calculator, the Ashigaru icon disappears from your home screen and is replaced by a fake calculator. When opened, it works like a regular calculator, but to access Ashigaru, tap the “=” symbol five times quickly.

The second key setting is RBF (Replace‑by‑Fee). This lets you bump transaction fees if a transaction is stuck in mempools due to low fees. Enable it in “Transactions > Spend using RBF.”

![Image](/assets/img/ashigaru-mobile-guide/25.webp)

Tip: You can toggle the wallet display unit between BTC and sats by tapping the total balance on the home screen.

## 5. Receive bitcoin in Ashigaru

Once your wallet is ready, you can receive sats. Tap the “+” button in the bottom‑right corner, then tap the green “Receive” button.

![Image](/assets/img/ashigaru-mobile-guide/26.webp)

Ashigaru shows you the first unused receiving address to avoid address reuse (which is very harmful to privacy). Share this address with the individual or service sending you bitcoin.

![Image](/assets/img/ashigaru-mobile-guide/27.webp)

Once the transaction is broadcast, it will automatically appear on the app’s home screen.

![Image](/assets/img/ashigaru-mobile-guide/28.webp)

## 6. Send bitcoin with Ashigaru

Once you have funds in Ashigaru, you can send them. Tap the “+” button at the bottom right, then select the red “Send” button.

![Image](/assets/img/ashigaru-mobile-guide/29.webp)

Choose the account to spend from. For now, we haven’t covered the “Postmix” account (used for coinjoins and covered in another [tutorial](https://bitcoiner.guide/ashigaru-terminal-whirlpool)). We’ll send from the main deposit account.

![Image](/assets/img/ashigaru-mobile-guide/30.webp)

Enter the transaction details: amount to send and the recipient’s Bitcoin address.

![Image](/assets/img/ashigaru-mobile-guide/31.webp)

By tapping the three dots in the top‑right, then “Show unspent outputs,” you can precisely select which UTXOs to spend to improve your privacy.

![Image](/assets/img/ashigaru-mobile-guide/32.webp)

When everything is set, tap the white arrow at the bottom to continue.

You’ll see a summary page with all transaction details:
- Destination: double‑check the recipient address and amount.
- Fees: review the fee rate automatically selected by Ashigaru; adjust via “MANAGE” if needed.
- Transaction: shows the transaction type (simple here); Ashigaru also supports other privacy‑optimized spending types (covered in another tutorial).
- Transaction Alert (red): flags patterns recognized by chain‑analysis heuristics that may degrade privacy. Tap to see details. For example, if your amount is a round number (e.g., “3000 sats”), it may reveal which output is the spend and which is the change.
- Label: you can add a label to remember the transaction’s purpose.

Once everything is correct, use the green arrow to send. Press and hold the arrow, then slide it to the right to confirm.

![Image](/assets/img/ashigaru-mobile-guide/33.webp)

Your transaction is now broadcast on the Bitcoin network.

![Image](/assets/img/ashigaru-mobile-guide/34.webp)

## 7. Recover your Ashigaru wallet

Ashigaru wallet recovery differs slightly from a standard Bitcoin wallet, as it inherits Samourai Wallet’s methods. If you lose access to your wallet (PIN forgotten, app uninstalled, or phone lost), you have several options to recover your funds.

If you still have access to your phone or you backed up the file, the simplest method is using the backup file “ashigaru.txt.” This file contains everything needed to restore your wallet on a new Ashigaru instance (or in Sparrow Wallet), but it is encrypted with the passphrase you set in step 3.1. You must have both the “ashigaru.txt” file and your passphrase to use this method.

With these two items, you can, for example, restore your wallet in Sparrow Wallet.

![Image](/assets/img/ashigaru-mobile-guide/35.webp)

If you don’t have the “ashigaru.txt” file, you can still access your funds using your mnemonic phrase and passphrase, like any other BIP39 wallet. It’s recommended to recover either in a new Ashigaru instance or directly in Sparrow Wallet, which simplifies retrieving Whirlpool derivation paths (if you used it). Otherwise, you can import into any BIP39‑compatible software by entering derivation paths manually.

As you’ve seen, regardless of the recovery method, the passphrase is indispensable. Make sure it is securely backed up. You can keep multiple copies depending on your security model.

> The passphrase is critical for recovery. Without it, even a correct mnemonic won’t unlock your wallet.
{: .prompt-danger }

## 8. Update the app

To update Ashigaru (since it was installed via .apk rather than the Play Store), you’ll need to download the new .apk for the updated version and install it manually.

Repeat the steps from section 2 of this tutorial. The only difference is that when you tap the .apk to start installation, your Android phone should offer “Update” and not “Install.”

![Image](/assets/img/ashigaru-mobile-guide/41.webp)

This is very important: if Android shows “Install” instead of “Update,” you’re likely installing a fraudulent version. Stop immediately.

As with the initial install, carefully verify the .apk’s authenticity and integrity before proceeding.

To know when a new version is available, check the official Ashigaru site occasionally. Ashigaru is a stable, mature app inherited from Samourai Wallet, so updates are relatively less frequent than in newer projects.

> Always verify signatures and hashes for each new .apk prior to updating.
{: .prompt-warning }

## 9. Donate to the Ashigaru project

Ashigaru is open source. To support development, you can donate directly from the app via PayNym.

Tap your PayNym at the top‑right of the interface, then select your payment code starting with “PM…”.

![Image](/assets/img/ashigaru-mobile-guide/36.webp)

Tap the “+” button at the bottom‑right.

![Image](/assets/img/ashigaru-mobile-guide/37.webp)

Choose “Ashigaru Open Source Project” as the recipient.

![Image](/assets/img/ashigaru-mobile-guide/38.webp)

Tap “CONNECT” to establish the BIP47 (PayNym) communication channel.

![Image](/assets/img/ashigaru-mobile-guide/39.webp)

Once the notification transaction confirms, you can send donations to the project by tapping the small white arrow at the top‑right of the interface.

![Image](/assets/img/ashigaru-mobile-guide/40.webp)

You now know how to use Ashigaru’s core features. In [this guide](https://bitcoiner.guide/ashigaru-terminal-whirlpool), we explore advanced spending types and Whirlpool — the coinjoin implementation inherited from Samourai Wallet.

## Spending tools overview

Below, we transition from basic sends (covered in Section 6) to Ashigaru’s privacy‑enhancing spending tools. To minimize repetition:

When steps begin with “Start a send,” use the standard flow described earlier (tap “+” → “Send,” choose account, enter details).

Use Coin Control (Section 6) to select UTXOs that best fit each tool’s privacy goals.

## Stonewall

> Break the assumptions of blockchain analysis with mathematically provable doubt between the sender and the recipient of your transactions.

### What is a Stonewall transaction?

Stonewall is a specific form of Bitcoin transaction that boosts user privacy by imitating a two‑party coinjoin — without actually being one. The transaction is not collaborative. A single user can construct it alone, using only their own UTXOs as inputs. You can create a Stonewall transaction anytime, without needing to coordinate with another user.

Mechanics:
- Inputs: the sender uses 2 of their own UTXOs
- Outputs: the transaction produces 4 outputs, including 2 outputs that are exactly the same amount; the other 2 are change
- Among the 2 equal‑amount outputs, only one goes to the actual payment recipient

There are only two roles in a Stonewall transaction:
- The sender, who makes the actual payment
- The recipient, who can ignore the specific nature of the transaction and simply expects a payment

Let’s use a simple example. Alice buys a loaf of bread for 4,000 sats and wants to pay in bitcoin while keeping her payment private. She decides to build a Stonewall transaction.

![image](/assets/img/ashigaru-stonewall/01.webp)

Analyzing this transaction, the baker receives 4,000 sats for the bread. Alice used two inputs: 10,000 sats and 15,000 sats. The outputs on Alice’s side are 4,000 sats, 6,000 sats, and 11,000 sats. Alice’s net balance change is −4,000 sats, which matches the price.

> For clarity, the example omits mining fees. In reality, the sender pays all transaction fees.
{: .prompt-info }

### What’s the difference between Stonewall and Stonewall x2?

Stonewall and Stonewall x2 share the same external pattern. The difference is collaboration:
- Stonewall is non‑collaborative — the sender creates it alone
- Stonewall x2 is collaborative — a second participant (“the collaborator”) contributes an input and receives their entire contribution back in the outputs (minus fees)

Continuing the bakery example: if Alice wanted Stonewall x2, she would collaborate with Bob. Each would contribute one input. Bob would receive back all his input on the outputs. The baker would receive the 4,000 sats payment as before, and Alice would end up with her initial balance minus the bread cost.

![image](/assets/img/ashigaru-stonewall/02.webp)

From the outside, the transaction pattern appears identical.

![image](/assets/img/ashigaru-stonewall/03.webp)

In short: Stonewall and Stonewall x2 share the same structure. Stonewall is built alone; Stonewall x2 involves cooperation between two users.

> Observers cannot distinguish Stonewall from Stonewall x2 with on‑chain data alone. This ambiguity is the point — more doubt, more privacy.
{: .prompt-info }

### Why use a Stonewall transaction?

The Stonewall structure adds meaningful entropy and confuses common chain‑analysis heuristics. From the outside, it can look like a small two‑party coinjoin. But in reality (like Stonewall x2), it’s just a payment. This duality introduces uncertainty and can lead watchers down false trails.

Returning to Alice’s bakery purchase, the blockchain view might look like this:

![image](/assets/img/ashigaru-stonewall/04.webp)

A typical heuristic‑driven conclusion could be: “Two people performed a small coinjoin, each with one input and two outputs.”

![image](/assets/img/ashigaru-stonewall/05.webp)

But you know the truth: one output went to the baker, both inputs belong to Alice, and she received three outputs of change.

![image](/assets/img/ashigaru-stonewall/01.webp)

Even if an observer recognizes the Stonewall pattern, they still cannot know:
- Which of the two equal‑amount outputs is the payment
- Whether the two inputs belong to two different people or to one person combining them

The second point exists because Stonewall x2 (collaborative) and Stonewall (non‑collaborative) share the same pattern. Without additional context, differentiating them is impossible, which adds yet more doubt to the spend.

![image](/assets/img/ashigaru-stonewall/03.webp)

> Stonewall introduces uncertainty about input ownership and payment destination. This uncertainty is privacy.
{: .prompt-tip }

### How to do a Stonewall transaction in Ashigaru

Stonewall was originally developed by the Samourai Wallet team and is now implemented in Ashigaru, the fork created after the Samourai developers’ arrest. Install Ashigaru and create a wallet as demonstrated above.

Unlike Stowaway or Stonewall x2 (“cahoots”), Stonewall does not require PayNyms. It can be executed directly, without preparation or collaboration.

In practice, Ashigaru generates Stonewall automatically for each spend when your wallet has sufficient UTXOs.

- Start a send using the standard flow (Section 6).

![Image](/assets/img/ashigaru-stonewall/06.webp)

- Choose the account to spend from.

![Image](/assets/img/ashigaru-stonewall/07.webp)

- Enter recipient address and amount, then confirm.

![Image](/assets/img/ashigaru-stonewall/08.webp)

- Adjust fees if needed; note the transaction type is “STONEWALL.” Tap “PREVIEW” for more details.

![Image](/assets/img/ashigaru-stonewall/09.webp)

You’ll see the Stonewall pattern: 2 inputs of equal amount, 2 outputs of equal amount, plus change outputs, and (in this example) an additional input to reach the payment sum.

![Image](/assets/img/ashigaru-stonewall/10.webp)

If you prefer a simple payment, tap the pencil icon (top‑right), then switch “STONEWALL” to “Simple.”

![Image](/assets/img/ashigaru-stonewall/11.webp)

After checking all details, slide the green arrow at the bottom to sign and broadcast.

![Image](/assets/img/ashigaru-stonewall/12.webp)

You now know how to make a Stonewall transaction and, more importantly, how it works. To further your privacy, read the [Ashigaru Terminal guide](https://bitcoiner.guide/ashigaru-terminal-whirlpool) explaining coinjoins via Whirlpool.

## Stonewall x2

> Make every spend a coinjoin.

### What is a Stonewall x2 transaction?

Stonewall x2 is a specific form of Bitcoin transaction that increases user privacy by collaborating with a third party who is not involved in the actual payment. This method simulates a mini‑coinjoin between two participants while making a payment to a third party. Stonewall x2 transactions are available in the Ashigaru Mobile app, a fork of Samourai Wallet (the team that originally created this transaction type).

Mechanics:
- You use one of your own UTXOs to fund the payment.
- A collaborator contributes one of their own UTXOs.
- The transaction has four outputs:
  - Two equal‑amount outputs: one goes to the payment recipient; the other returns to the collaborator.
  - A third output returns the rest of the collaborator’s input (so their net is neutral, minus mining fees).
  - A fourth output is your change.

Roles in Stonewall x2:
- The sender (payer), who makes the actual payment
- The collaborator, who contributes bitcoin to improve the transaction’s anonymity set and receives all their funds back (net‑neutral, minus mining fees)
- The recipient, who can ignore the transaction’s structure and simply receives a payment

Example: Alice buys a loaf for 4,000 sats and wants privacy. She collaborates with her friend Bob.

![image](/assets/img/stonewallx2/01.webp)

Analyzing the transaction:
- The baker receives 4,000 sats
- Alice inputs 10,000 sats and receives 6,000 sats as change (net −4,000 sats)
- Bob inputs 15,000 sats and receives two outputs: 4,000 sats and 11,000 sats (net 0)

> For clarity, mining fees are omitted in the example. In practice, transaction fees are split equally between the sender and the collaborator.
{: .prompt-info }

### What’s the difference between Stonewall and Stonewall x2?

A Stonewall x2 works exactly like a Stonewall in pattern, except that x2 is collaborative while Stonewall is not. Stonewall x2 involves a third party (outside the payment) who contributes bitcoin to boost privacy. In a regular Stonewall, the “collaborator’s role” is played by the sender alone.

Continuing the bakery example: if Alice didn’t find a collaborator like Bob, she could do a Stonewall by herself — both inputs would be hers, and she would receive three change outputs.

![image](/assets/img/stonewallx2/02.webp)

From the outside, the pattern would look the same:

![image](/assets/img/stonewallx2/05.webp)

Practical logic for Ashigaru spending tools:
- If the merchant does not support Payjoin/Stowaway, you can perform a collaborative spend (Stonewall x2) with an external participant.
- If you don’t find a collaborator, you can do a solo Stonewall that mimics the Stonewall x2 pattern.

> Both transactions share the same structure on‑chain. The difference (collaborative vs non‑collaborative) is invisible to observers, which increases doubt — and privacy.
{: .prompt-tip }

### Why use a Stonewall x2 transaction?

Stonewall x2 adds significant entropy to the transaction and confuses chain‑analysis heuristics. From the outside, it can be misinterpreted as a small two‑party coinjoin. In reality, it’s a payment with a collaborator who remains net‑neutral.

Returning to Alice, Bob, and the Baker, the blockchain view might look like:

![image](/assets/img/stonewallx2/03.webp)

A typical heuristic‑driven conclusion could be:

“**Alice and Bob did a small coinjoin, one input each, two outputs each.**”

![image](/assets/img/stonewallx2/04.webp)

But the actual situation is different: one output is the baker’s payment, Alice has one change output, and Bob has two outputs returning his contribution.

![image](/assets/img/stonewallx2/01.webp)

Even if the observer identifies the Stonewall x2 pattern, they cannot know:
- Which of the two equal‑amount outputs is the payment
- Whether Alice or Bob made the payment
- Whether the two inputs came from two different people or one person combining UTXOs

Because Stonewall (solo) and Stonewall x2 (collaborative) share the same pattern, distinguishing them without extra context is impossible, adding more doubt to the spend.

![image](/assets/img/stonewallx2/05.webp)

> The ambiguity about who paid and who contributed which inputs/outputs is the privacy benefit.
{: .prompt-info }

### Collaboration prerequisites (PayNyms & Soroban)

Like other collaborative Ashigaru transactions (Cahoots), Stonewall x2 requires exchanging partially signed transactions (PSBTs) between sender and collaborator. This can be done:
- Manually, when you’re physically together (QR exchange)
- Automatically, via the Soroban communication protocol

For Soroban (online) collaboration:
- Establish a PayNym connection first: your PayNym must “follow” your collaborator’s PayNym, and vice versa.
- Soroban uses BIP47 channels between PayNyms to exchange PSBTs securely.

> Verify you’re following each other before initiating; keep both devices online during the exchange.
{: .prompt-tip }

### How to do a Stonewall x2 in Ashigaru

- Open “Collaborate” (top‑left PayNym), then coordinate roles:
  - “Initiate” if you are the payer
  - “Participate” if you are the collaborator

![Image](/assets/img/stonewallx2/06.webp)
![Image](/assets/img/stonewallx2/07.webp)

- If you’re the collaborator (Soroban):
  - Tap “Participate”
  - Choose the account
  - Tap “LISTEN FOR CAHOOTS REQUESTS”

![Image](/assets/img/stonewallx2/08.webp)

- For in‑person collaboration:
  - On wallet home, tap the QR icon
  - Scan the payer’s QR

![Image](/assets/img/stonewallx2/09.webp)

- If you’re the payer:
  - “Collaborate” → “Initiate”
  - Choose “STONEWALL X2”
  - Pick collaboration mode: “Online” (Soroban) or “In Person / Manual”

![Image](/assets/img/stonewallx2/10.webp)
![Image](/assets/img/stonewallx2/11.webp)
![Image](/assets/img/stonewallx2/12.webp)

#### Online Cahoots (Soroban)

- Select a collaborator from the PayNyms you follow
- Tap “Set up transaction,” choose account
- Enter recipient address, amount, fee rate
- Tap “Review transaction setup,” then “BEGIN TRANSACTION”
- Keep apps open; sign and broadcast when complete

![Image](/assets/img/stonewallx2/13.webp)
![Image](/assets/img/stonewallx2/14.webp)
![Image](/assets/img/stonewallx2/15.webp)
![Image](/assets/img/stonewallx2/16.webp)
![Image](/assets/img/stonewallx2/17.webp)

> Keep the app open and online during the Soroban flow; interruptions will pause the PSBT exchange.
{: .prompt-info }

#### In‑person exchange (QR)

- Select “STONEWALL X2” → “In Person / Manual”
- “Set up transaction” → choose account
- Enter recipient address, amount, fee rate
- “Review transaction setup” → “BEGIN TRANSACTION”
- Alternate scans until all five steps complete
- Verify and broadcast

![Image](/assets/img/stonewallx2/18.webp)
![Image](/assets/img/stonewallx2/19.webp)
![Image](/assets/img/stonewallx2/20.webp)
![Image](/assets/img/stonewallx2/21.webp)
![Image](/assets/img/stonewallx2/22.webp)
![Image](/assets/img/stonewallx2/23.webp)

[The transaction has been broadcast](https://mempool.space/testnet4/tx/9082f3d989728aacd290535a1ac374ab8c04a241a1d798b378db626dabea7a24). Its structure looks like this:

![Image](/assets/img/stonewallx2/e.png)

Credit: [mempool.space](https://mempool.space/)

Observations:
- Two inputs are mine: 91,869 sats and 64,823 sats
- Two inputs are from the collaborator’s wallet
- Outputs:
  - 100,000 sats goes to the real recipient
  - 100,000 sats and 159,578 sats return to the collaborator (net‑neutral, minus mining fees)
  - 56,270 sats is my change

I can describe this structure since I built the transaction; but for an external observer, it’s generally impossible to determine which UTXOs belong to which participant — either on inputs or outputs.

> Stonewall x2 blurs input ownership and destination heuristics. Observers cannot reliably ascribe roles, adding doubt and protecting privacy.
{: .prompt-tip }

## Payjoin

> Force blockchain spies to rethink everything they think they know.

### Understanding Payjoin transactions on Bitcoin

Payjoin is a specific structure of Bitcoin transaction that enhances user privacy during a payment by collaborating with the payment recipient.

In 2015, [LaurentMT](https://twitter.com/LaurentMT) first described this method as “steganographic transactions” in a document available [here](https://gist.githubusercontent.com/LaurentMT/e758767ca4038ac40aaf/raw/c8125f6a3c3d0e90246dc96d3b603690ab6f1dcc/gistfile1.txt). Samourai Wallet adopted and implemented it as “Stowaway” in 2018. Payjoin concepts are also discussed in [BIP79](https://github.com/bitcoin/bips/blob/master/bip-0079.mediawiki) and [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki). Common terms you may see:

- Payjoin
- Stowaway
- P2EP (Pay‑to‑End‑Point)
- Steganographic transaction

What makes Payjoin unique is that it produces a transaction that looks ordinary at first glance but is actually a mini coinjoin between two parties. To achieve this, the recipient participates in the inputs alongside the sender. The recipient also includes a self‑payment in the transaction, allowing them to be paid.

Example: if you buy a baguette for 4,000 sats using a 10,000‑sat UTXO and opt for a Payjoin, the baker adds a 15,000‑sat UTXO that belongs to them as an input. They receive that in full as an output, plus your 4,000‑sat payment:

![Payjoin transaction diagram](/assets/img/payjoin/1.webp)

In this example, the baker introduces 15,000 sats as input and receives 19,000 sats as output — a difference of exactly 4,000 sats, the price of the baguette. You input 10,000 sats and end with 6,000 sats in change — a −4,000‑sat balance, i.e., the payment amount.

> For clarity, mining fees are omitted here. In practice, they are included and paid by the parties.
{: .prompt-info }

### What is the purpose of a Payjoin transaction?

Payjoin achieves two privacy goals:

A Payjoin transaction serves two objectives that allow users to enhance the privacy of their payment. First of all, Payjoin aims to mislead an external observer by creating a decoy in chain analysis. This is made possible through the Common Input Ownership Heuristic (CIOH). Usually, when a transaction on the blockchain has multiple inputs, it is assumed that all these inputs likely belong to the same entity or user. Thus, when an analyst examines a Payjoin transaction, they are led to believe that all the inputs come from the same person. However, this perception is incorrect because the payment recipient also contributes inputs alongside the actual payer. Therefore, chain analysis is diverted towards an interpretation that turns out to be false.

Furthermore, Payjoin also allows for deceiving an external observer about the actual amount of the payment that has been made. By examining the transaction structure, the analyst might believe that the payment is equivalent to the amount of one of the outputs. However, in reality, the payment amount does not correspond to any of the outputs. It is actually the difference between the recipient's output UTXO and the recipient's input UTXO. In this sense, the Payjoin transaction falls into the domain of steganography. It allows for hiding the actual amount of a transaction within a fake transaction that acts as a decoy.

Definition — Steganography:
> Steganography is a technique of concealing information within other data or objects in such a way that the presence of the hidden information is not perceptible. For example, a secret message can be hidden inside a dot in a text that has nothing to do with it, making it undetectable to the naked eye (this is the technique of micropoint). Unlike encryption, which makes information incomprehensible without the decryption key, steganography does not modify the information. It remains displayed in plain sight. Its objective is rather to hide the existence of the secret message, whereas encryption clearly reveals the presence of hidden information, although inaccessible without the key.
{: .prompt-tip }

Returning to our baguette example:

![Payjoin transaction schema from the outside](/assets/img/payjoin/2.webp)

A typical heuristic might conclude: “Alice merged 2 UTXOs to pay 19,000 sats to Bob.”

![Incorrect interpretation of Payjoin transaction](/assets/img/payjoin/3.webp)

That’s wrong. The two input UTXOs do not belong to one person, and the actual payment value is 4,000 sats — the difference between Bob’s output and Bob’s input. The observer’s analysis is led to an erroneous conclusion, protecting participants’ privacy.

![Payjoin transaction diagram](/assets/img/payjoin/1.webp)

If you want to analyze a real Payjoin, here’s one performed on testnet:
[8dba6657ab9bb44824b3317c8cc3f333c2f465d3668c678691a091cdd6e5984c](https://mempool.space/fr/testnet/tx/8dba6657ab9bb44824b3317c8cc3f333c2f465d3668c678691a091cdd6e5984c)

External resources:
- [LaurentMT steganography gist](https://gist.githubusercontent.com/LaurentMT/e758767ca4038ac40aaf/raw/c8125f6a3c3d0e90246dc96d3b603690ab6f1dcc/gistfile1.txt)
- [BIP78: Payjoin](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki)
- [payjoin.org](https://payjoin.org/)
- BTC 204 — Privacy on Bitcoin: Part 5
  [https://planb.academy/courses/65c138b0-4161-4958-bbe3-c12916bc959c](https://planb.academy/courses/65c138b0-4161-4958-bbe3-c12916bc959c)

## Stowaway (Payjoin)

Payjoin is implemented in Ashigaru as “Stowaway.” Below is how Stowaway works and how to use it step by step.

### How does Stowaway work?

Ashigaru includes a Payjoin tool called Stowaway, available in the Ashigaru Android app. To complete a Payjoin, the recipient (who also acts as the collaborator) must use software compatible with Stowaway — currently, Ashigaru only.

Stowaway belongs to Samourai’s “Cahoots” category — collaborative transactions that exchange information off‑chain. Ashigaru currently offers two Cahoots tools: Stowaway (Payjoins) and Stonewall X2.

Cahoots require exchanging PSBTs (partially signed transactions) between users. Manually, this involves five successive QR scans between participants (suitable when you’re together in person). At a distance, manual exchange is cumbersome; Soroban (an encrypted Tor‑based protocol) automates the PSBT exchange in the background.

Soroban requires an authenticated channel between participants. It uses users’ PayNyms for identification and encrypted communications.

A PayNym is a unique wallet identifier that activates features like encrypted exchanges. It appears as an ID with an illustration (example on testnet):

![Example PayNym](/assets/img/ashigaru-stowaway/01.webp)

Summary:
- Payjoin = specific collaborative transaction structure
- Stowaway = Ashigaru’s Payjoin implementation
- Cahoots = collaborative transaction types (Stowaway, Stonewall X2)
- Soroban = Tor‑based encrypted communications for Cahoots
- PayNym = unique wallet identifier used to establish Soroban communications for Cahoots

> Soroban automates PSBT exchange over Tor; PayNyms provide the authenticated channel used by Soroban.
{: .prompt-info }

### How to establish a connection between PayNyms

First, install Ashigaru and create a wallet (covered earlier in Sections 2–3).

To do a remote Cahoots (Payjoin/Stowaway), you must “follow” the user you’ll collaborate with, using their PayNym — in Stowaway, this means following the person you intend to pay.

> Before initiating Stowaway, ensure both PayNyms follow each other — it’s required to establish the encrypted Soroban channel.
{: .prompt-tip }

### How to do a Payjoin in Ashigaru

- Open “Collaborate” from your PayNym image (top‑left). The participant must do the same — unless you’re exchanging QR codes in person.

![Collaborate menu](/assets/img/ashigaru-stowaway/02.webp)

- Choose:
  - “Initiate” if you are the payer (sender)
  - “Participate” if you are the recipient (collaborator)

![Initiate or Participate](/assets/img/ashigaru-stowaway/03.webp)

- If you’re the recipient/collaborator (Soroban):
  - Tap “Participate”
  - Choose the account
  - Tap “LISTEN FOR CAHOOTS REQUESTS”

![Listen for requests](/assets/img/ashigaru-stowaway/04.webp)

- For in‑person collaboration:
  - Go to wallet home
  - Tap the QR icon
  - Scan the payer’s QR code

![Scan QR](/assets/img/ashigaru-stowaway/05.webp)

- If you’re the payer (initiator):
  - “Collaborate” → “Initiate”
  - Choose “Stowaway” (Payjoin)
  - Pick collaboration mode: “Online” (Soroban) or “In Person / Manual”

![Initiate](/assets/img/ashigaru-stowaway/06.webp)
![Choose Stowaway](/assets/img/ashigaru-stowaway/07.webp)
![Collaboration mode](/assets/img/ashigaru-stowaway/08.webp)

#### Online Cahoots (Soroban)

- Select the recipient from the PayNyms you follow
- Tap “Set up transaction,” then choose the spending account
- Enter amount and fee rate (no address needed; recipient supplies it during exchange)
- Tap “Review transaction setup,” then “BEGIN TRANSACTION”
- Keep both devices online; sign and broadcast when complete

![Select PayNym](/assets/img/ashigaru-stowaway/09.webp)
![Choose account](/assets/img/ashigaru-stowaway/10.webp)
![Review setup](/assets/img/ashigaru-stowaway/11.webp)
![Begin transaction](/assets/img/ashigaru-stowaway/12.webp)
![Broadcast](/assets/img/ashigaru-stowaway/13.webp)

> Keep both devices online and inside the app during Soroban — interruptions pause the PSBT exchange.
{: .prompt-info }

#### In‑person exchanges (QR)

- Select “Stowaway” → “In Person / Manual”
- “Set up transaction” → choose spending account
- Enter amount and fee rate (recipient provides address during exchange)
- “Review transaction setup” → “BEGIN TRANSACTION”
- Alternate scans until all five steps complete
- Verify and broadcast

![In person mode](/assets/img/ashigaru-stowaway/14.webp)
![Choose account](/assets/img/ashigaru-stowaway/15.webp)
![Review setup](/assets/img/ashigaru-stowaway/16.webp)
![Begin QR exchange](/assets/img/ashigaru-stowaway/17.webp)
![Alternate scans](/assets/img/ashigaru-stowaway/18.webp)
![Broadcast arrow](/assets/img/ashigaru-stowaway/19.webp)

[Broadcasted transaction (testnet)](https://mempool.space/testnet4/tx/82efd3700bba87b0f172e9cc045e441b38622c95a60df9f39a21f63eb4590a96)

Its structure looks like this:

![Structure diagram](/assets/img/ashigaru-stowaway/d.png)

Credit: [mempool.space](https://mempool.space)

Analysis:
- Inputs: my UTXO (164,211 sats) + recipient’s UTXO (190,002 sats)
- Outputs: my change (63,995 sats) + recipient’s output (290,002 sats)

Comparing inputs and outputs:
- Recipient gains 100,000 sats (payment amount)
- I lose 100,000 sats plus mining fees

I can describe this structure because I built the transaction; but for external observers, it’s generally impossible to determine which UTXOs belong to which participant — inputs or outputs.

> Stowaway blurs input ownership and destination; observers cannot reliably assign roles, which strengthens privacy.
{: .prompt-tip }

## Ricochet

> A premium tool that adds extra hops of history to your transaction. Stump blacklists and help guard against unjust third‑party account closures.

### What is Ricochet?

Ricochet is a technique where you create several self‑payments (to your own fresh addresses) to simulate a change of ownership of your bitcoin before the final spend. Unlike Ashigaru’s other spending tools (inherited from Samourai Wallet), Ricochet does not aim for prospective anonymity; instead, it provides a form of retrospective anonymity. In practice, Ricochet blurs properties that could compromise the fungibility of a Bitcoin UTXO.

For example, if you perform a coinjoin, your postmix coin will be identifiable as having passed through a coinjoin. Chain‑analysis tools can detect coinjoin patterns and tag coins that exit them. Coinjoins break historical links, but their presence is still detectable — like encrypted text: you can’t read it, but it’s easy to see that encryption was applied.

That “coinjoin‑tagged coin” label can affect fungibility. Regulated entities (e.g., exchanges) may refuse coinjoin‑sourced UTXOs, ask for explanations, or even freeze accounts/funds. In some cases, an exchange may report activity to state authorities.

Ricochet addresses this by inserting four successive self‑transactions, each to a new address you control, then sending to the final destination (e.g., an exchange). The goal is to create distance between the original coinjoin and the final spend. This makes chain‑analysis tools more likely to consider a change of ownership has occurred post‑coinjoin, discouraging them from taking action against the sender.

![image](/assets/img/ashigaru-ricochet/01.webp)

You might ask why chain‑analysis tools don’t simply look beyond four hops. In practice, these companies face an optimization dilemma: they must choose a threshold for “number of hops” after which they assume a change of ownership likely occurred and ignore older links. Raising that threshold increases false positives exponentially. As a result, raising the threshold is challenging; four hops is often enough to defeat their heuristics in many cases.

> Ideally, do not send coinjoin‑sourced coins to regulated entities. If you must (e.g., urgent fiat liquidation), Ricochet can help reduce misclassification risks.
{: .prompt-warning }

> Ricochet is a pragmatic, retrospective privacy tool. It does not guarantee acceptance by any third party, but it commonly reduces friction with blacklist heuristics.
{: .prompt-info }

### How Ricochet works in Ashigaru

Ricochet is simply sending bitcoin to yourself; you can simulate it manually without any specialized tool. Ashigaru offers streamlined, automated Ricochet that produces clean results.

- Service cost: Ricochet on Ashigaru charges 100,000 sats for service fees, plus mining fees.
- Practical use: Best suited for larger transfers where the fee overhead is proportionally reasonable.

> Because Ricochet costs 100,000 sats plus mining fees, it’s recommended for significant amounts rather than small spends.
{: .prompt-warning }

Ashigaru offers two Ricochet variants:
- Staggered delivery (reinforced Ricochet): distributes fees across five transactions, ensures distinct broadcast/confirmation times, maximizes ownership‑change appearance; slower.
- Classic Ricochet: faster execution, less privacy; use for urgent sends only.

> Choose “staggered delivery” for best privacy; choose “Classic” only if you need speed.
{: .prompt-tip }

### How to do a Ricochet in Ashigaru

- Start a send using the standard flow (Section 6): tap “+” → “Send,” select account.

![Image](/assets/img/ashigaru-ricochet/02.webp)

- Fill transaction details: amount, final destination address, check “Ricochet.”

![Image](/assets/img/ashigaru-ricochet/03.webp)

- Choose Ricochet mode: “Classic” or “staggered delivery,” then confirm.

![Image](/assets/img/ashigaru-ricochet/04.webp)

- Review and fee management: adjust miner fees; slide the green arrow to sign and broadcast the Ricochet sequence.

![Image](/assets/img/ashigaru-ricochet/05.webp)

- Wait for automatic hops to complete, then confirm final delivery.

![Image](/assets/img/ashigaru-ricochet/06.webp)
![Image](/assets/img/ashigaru-ricochet/07.webp)

> Ricochet will automatically manage the sequence of hops. If you chose staggered delivery, allow time for each hop to confirm in a separate block.
{: .prompt-info }

You now know how to use the full suite of tools avaliable in Ashigaru Mobile.