---
layout: page
title: Cold Storage Implications  
subtitle: With Whirlpool + Samourai wallet
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharecsimplications.png
---


Recently there has been an influx of questions about sending smelted (mixed) coins to a Hardware Wallet (HWW) or cold storage (an offline wallet). In this article I’m going to explain why this does not need to be your default option, how to take your Samourai wallet offline and no longer consider it “hot” without potentially compromising your anonymity. This is article not written to throw any shade at HWW, it is written to help you better understand the implications of doing so with the Whirlpool zerolink protocol.

## Problems with sending to a HWW

While using a HWW as a form of security may be of interest to you, there are some problems you could face in regards to how the zerolink protocol works and the unintentional issues you could cause in the future to your UTXO set.

The power of the zerolink protocol is the equal output amounts. For example the smallest pool will produce 5 equal outputs of 0.01 every single round. If you own one of those outputs then you are 'hiding in a crowd' with 4 other Whirlpool users. This crowd grows exponentially with every remix you or any of the other 4 participants take part in (which is free).

<p align="center">
<img src="/assets/img/WP.png" class=responsive width="450" height="300" maxheight="300" />
</p>


When you send to a HWW after Whirlpool you lose the equal amount anonymity I outlined above because of miner fees. The other issue is that if in the future you merge any of the UTXO's through poor coin control or by using a HWW that doesn't even have the option. Merging the inputs in the future effectively undoes all of good work done by your initial mixes.

So... what's the alternative?

## Best Practice for Securing Your Postmix Wallet

So you have achieved the amount of mixes you feel comfortable with and are ready to secure your wallet and take it off-line. 

**Before you start** - If you haven’t already backed-up your seed phrase you should so now. There are multiple ways to do this, and you should DYOR and find out what is best for you.

You should also verify your passphrase within the wallet at Settings > Troubleshooting.

<p align="center">
<img src="/assets/img/backup.png" class=responsive width="400" height="150" maxheight="300" />
</p>


**Remember** - Your wallet is only as secure as your seed and passphrase. Never keep the two together.

**Step 1)** Scan your XPUBS into your Dojo backed [Sentinel](/sentinel) app. This is a watch only-wallet and allows you to track your wallet Public Keys for Premix or Postmix. You can use Sentinel to also deposit to any of these watch only wallets.

**Step 2)** [Export](https://support.samourai.io/article/9-manually-export-wallet-backup) your encrypted backup.

- This backup is encrypted by your BIP39 Passphrase used during wallet creation and is located in Documents > samourai > samourai.txt.
- You should send to two different locations:. Put on a single USB thumb drive (if you want that physical feel).
- Use a secure password manager like [Bitwarden](https://bitwarden.com/).

**Step 3)** Secure Erase Wallet from Samourai Wallet app

**Step 4)** Stop your Whirlpool Client CLI instance or Whirlpool GUI instance

*Skip this step if you are only using Mobile Mixing.*

1. CLI:
2. Stop Whirlpool
3. cd whirlpool
4. srm -rf *.json *.properties
5. GUI
6. Reset GUI from Configuration Menu

That's it, your wallet is now completely disconnected from the internet and less vulnerable to online attackers. It's worth noting that because your private keys have been used on an internet connected device, there will always be a small attack vector when compared to a device that generates and stores them completely offline (like a Coldcard). 

**Keep your backups and passphrase safe!**

<p align="center">
<img src="/assets/img/knox.png" class=responsive width="300" height="300" maxheight="300" />
</p>

***

## Recovering When You Want To Spend

**Step 1)** Access the encrypted backup. You can copy the entire payload or move the samourai.txt file to your phone

**Step 2)** Start Wallet

**Step 3)** Recover from existing Samourai Backup and paste payload or select the samourai.txt file on your phone

**Step 4)** Use Postmix Wallet and tools to spend as necessary.

**Step 5)** Take Wallet back offline from Step 1 of securing the wallet.

<p align="center">
<img src="/assets/img/importbackup.png" class=responsive width="300" height="300" maxheight="300" />
</p>


***NOTE** - You should always back your wallet with your own [Dojo](https://samouraiwallet.com/dojo) if you do not want to put Trust in Samourai’s Server*

Also, assuming your original wallet was backed by Dojo, it will still be backed up by Dojo when recovering from your encrypted backup.

The only way to unpair or “de-Dojo” your wallet is to recover from seeds and not pair with your Dojo. Otherwise your wallet will NEVER just revert to Samourai Servers.

---

## Common Questions

**Q**: I mixed my coins and all are in postmix, what now?

**A**: If you need to spend you should use postmix tools like [Stonewall](https://samourai.kayako.com/article/64-what-is-stonewall) (decoy coinjoin), [Stonewallx2](https://samourai.kayako.com/article/74-how-to-create-a-stonewallx2-transaction) (2 person collaborative coinjoin to third party) or [Stowaway](https://samourai.kayako.com/article/73-creating-a-stowaway-transaction) to another Samourai user (P2EP). I [wrote ](https://bitcoiner.guide/articles/samourai)about these recently.

**Q**: But what if I just want to hold them long term?

**A**: If you intend on maintaining the maximum entropy achieved in Whirlpool, you should leave them as equal outputs. To further distance yourself from the initial mix, let the UTXOs remix until you need them. Once you are done remixing see the steps outlined above for optimal anonymity whilst keeping your keys safe and offline.

**Q**: I want to send them to my HWW. Can’t I use Stonewall and I’ll be good?

**A**: Due to the way Stonewall's are constructed you can not use this feature to spend your entire Postmix balance. Using Stonewall to spend to HWW will not link you deterministically but the BIGGEST concern is what you do when you send them out of the HWW in the future. This is where most people will mess up and consolidate those mixed UTXOs.

Are you confident then when you come to spend from your HWW that you will know how to (or even be able to) practice proper coin control so as not to re merge your mixed UTXO's and undo all of the privacy gained with your initial Whirlpool?

**Q**: I don't care what you say I want to send everything to cold storage. What's the best way to do so?

**A**: If you have read this whole article and still want to send everything to cold storage then here is the steps you should follow to minimise the impact to your on-chain privacy.

- Use Stonewall transactions of decreasing amounts until Stonewall will no longer trigger automatically. Likely because you don't have enough inputs left in your postmix balance.
- Construct a Stonewall X2 (if possible) with another Samourai user to spend a little more to your HWW.
- Spend the remaining UTXOs one by one to a new address each time. Ensure you use varying fee rates and timing to obfuscate against anyone watching on chain. Remember, by spending and paying miner fees you lose the equal amounts created by the Whirlpool protocol. So instead of an equal output of 0.01, when it reaches your HWW it will look something like 0.00995 depending on miner fees.

<p align="center">
<img src="/assets/img/stowaway.png" class=responsive width="500" height="200" maxheight="300" />
</p>


To summarise, there is no one perfect solution. EVERYTHING comes with trade offs and it is important that you fully understand them before making a decision that may harm your privacy and/or anonymity.

This article was co written by [QnA](https://twitter.com/BitcoinQ_A) and [@BTCxZelko ](https://twitter.com/BTCxZelko)

If you have any questions feel free to grab us on Twitter and be sure to follow [SamouraiWallet](https://twitter.com/SamouraiWallet) too. Alternatively drop into the [Telegram group ](https://t.me/SamouraiWallet)or visit the [support](https://docs.samourai.io/) documentation page.

*Disclaimer  —  All views expressed in this article are my own and not those of the SW developer team.*

