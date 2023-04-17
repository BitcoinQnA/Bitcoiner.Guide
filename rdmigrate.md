---
layout: page
title: Migrating Samourai Wallet
subtitle: To your RoninDojo node
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharerdmigrate.png
---


So, you've watched the [livestream](https://www.youtube.com/watch?v=ebv0aN8opIc), looked at the roadmap and decided you want to dive in head first with [RoninDojo](https://ronindojo.io/). If you're already a Dojo user wanting to migrate to Ronin or a Samourai wallet user that wants to connect to their own node for the first time, this guide should help make things a little easier for you.

If you haven't done so already, check out my [RoninDojo 101](/ronindojo) for a flavour of what's in store from the Ronin team. It really is a fantastic product with a very exciting roadmap! The following steps assume that you have your RoninDojo and Ronin UI set up and ready to go. If you haven't done so already check out the [Wiki page](https://wiki.ronindojo.io) for a complete step by step guide.

---

## Wallet Migration/Connection

If you are a connecting a new wallet to RoninDojo for the first time, start at step 6. If you are connecting an existing wallet that has never been connected to a Dojo you control, it's best practice from a privacy viewpoint to create a fresh wallet and move the funds across.

**1.** Open your Samourai Wallet and press the three dots in the top right corner to access the menu. Go to `Settings` > `Wallet` > `Show mnemonic`. Check (and double check) this matches your offline backup.

**2.** Back to the menu and press `Troubleshoot` > `Passphrase/backup test`. Enter your wallet's passphrase. If you entered this correctly you will be notified. Do not move past this step until the wallet confirms you entered the right passphrase. **Without this, you cannot access your bitcoin.**

**3.** If you don't already know it, make a note of your PayNym. You can access this from the main wallet screen. Press the blue + and then press PayNyms. This is a good way of testing that you recovered the correct wallet at a later stage.

**4.** Go to `Settings` > `Wallet` > `Secure erase wallet`.

**5.** Restart Samourai Wallet.

**6.** Select `main-net` and activate `Tor`.

**7.** Press the three dots in the top right corner > `Connect to existing Dojo`.

<p align="center">
<img src="/assets/img/rdm1.png" class=responsive width="208" height="254" maxheight="300" />
</p>



**8.** Scan the Dojo connection QR code displayed by your RoninDojo UI. Alternatively if you are choosing not to run RoninUI, you can find the same QR pairing code within your Dojo Maintenance Tool which is accessed via the Tor browser.

<p align="center">
<img src="/assets/img/rdm2.png" class=responsive width="663" height="454" maxheight="300" />
</p>


**9.** If you are a setting up a new wallet, continue with the setup shown on your phone screen screen. If you are migrating an existing wallet, press `back` and then continue with these steps.

**10.** Press the three dots again and this time hit `Import External Wallet`

**11.** Enter your seed phrase and add in your passphrase that we checked earlier.

<p align="center">
<img src="/assets/img/rdm3.png" class=responsive width="320" height="254" maxheight="300" />
</p>

**12.** Set a pin code to secure the app.

**13.** You will now be prompted to claim your PayNym. Do this and check it matches the one from your old wallet. If it doesn't, you have recovered a completely different wallet. Check your seed and passphrase and repeat the steps above.

<p align="center">
<img src="/assets/img/rdm4.png" class=responsive width="300" height="270" maxheight="300" />
</p>

You now have your wallet connected to your RoninDojo. Congrats! If you connected a fresh wallet then the following steps are not necessary, skip to the Whirlpool section. If you are restoring an existing wallet, don't be alarmed at this stage that you do not see a balance, we will fix that next. 

To recap, we have checked our backups, deleted the wallet from the phone, connected the fresh app to your RoninDojo and then recovered the wallet within the app. Next we need to tell your RoninDojo to rediscover the bitcoin held by your wallet.

---

## Restoring Balances

**1.** In the Ronin UI go to settings and hit `Toggle Hidden Values`. You should now see your Dojo URL and Admin Key. Paste the `Dojo URL`into your Tor browser and then paste the `Admin Key` when prompted to log in. This will open your Dojo Maintenance Tool.

<p align="center">
<img src="/assets/img/rdm5.png" class=responsive width="660" height="450" maxheight="300" />
</p>

**2.** On your Samourai mobile wallet tap the three vertical dots in the top right hand corner of the screen the go to `Settings` > `Wallet` > `Show XPUB`. Which extended public key you choose will depend where your funds you are looking for are located within your wallet.

<p align="center">
<img src="/assets/img/rdm6.png" class=responsive width="322" height="281" maxheight="300" />
</p>

> **BIP44 XPUB** = Your deposit account for addresses starting with a '1'

> **Segwit BIP49 YPUB** = Your deposit account for addresses starting with a '3'

> **Segwit BIP84 ZPUB** = Your deposit account for addresses starting with 'bc'

*By default Samourai Wallet uses  BIP84 ZPUB so it's highly likely that this is the one you will need if you are scanning for a balance in your deposit account.*

> **Whirlpool pre-mix ZPUB** = The account for any funds sent to Whirlpool that have not yet been mixed

> **Whirlpool post-mix ZPUB** = The account where your mixed funds will be sat

*Ensure you send your extended public keys from your mobile wallet to your computer in s secure manner by using encrypted email or an app like Standard Notes.*

**3.** Back in Dojo Maintenance Tool click on `xpubs tool` and enter the xpub you want to rescan.

<p align="center">
<img src="/assets/img/rdm7.png" class=responsive width="660" height="137" maxheight="300" />
</p>

The result should look similar to the below. The main things to look for here are...

> **Tracked since** = Date

> **Balance** = Your expected balance

> **Derivation** = The derivation type relevant to your xpub *(see step 2)*

If the derivation type is incorrect you can `retype this xpub` to the desired derivation.

<p align="center">
<img src="/assets/img/rdm8.png" class=responsive width="663" height="398" maxheight="300" />
</p>

**4.** If you do not see a balance or the result indicates that Dojo is not tracking the xpub, press `rescan this xpub`. Start with the default values and hit rescan. If you still do not see your balance, increase the lookahead value by 100 and repeat.

<p align="center">
<img src="/assets/img/rdm9.png" class=responsive width="663" height="58" maxheight="300" />
</p>


**5.** Restart your Samourai Wallet app and wait for the blue loading line to disappear and navigate to the part of the wallet where you expect to see your funds eg Deposit (the wallet opens on this page), Premix or Postmix and you should see all of your sats.

**6.** If you have funds stored in multiple parts of the wallet simply repeat Steps 4-8 for the relevant extended public key.

Once completed, repeat step 4 and you will now see your correct balance. This balance will now also be replicated in your Samourai Wallet.

So now we have successfully restored your wallet that is connected to your RoninDojo. Next step Whirlpool...

---

## Whirlpool Connection

**1.** If you were already a Whirlpool Desktop user, go to `System` > `Reset GUI`.

**2.** Ensure you have [Tor browser ](https://www.torproject.org/)installed and running as it provides the proxy Tor connection to allow Whirlpool to connect to your RoninDojo.

**3.** Select `Remote CLI`.

<p align="center">
<img src="/assets/img/rdm10.png" class=responsive width="503" height="311" maxheight="300" />
</p>

**4.** From your Ronin UI, press `Start Whirlpool` and from the settings menu grab your Whirlpool hidden service address and paste into the address field of the Whirlpool GUI.

Ensuring the format looks like this `http://youraddress.onion`

**5.** The Tor port should automatically change to '9150' but if it doesn't you can change it manually. Press connect.

<p align="center">
<img src="/assets/img/rdm11.png" class=responsive width="660" height="60" maxheight="300" />
</p>

**6.** From your mobile wallet go to `Settings` > `Transactions` > `Pair to Whirlpool GUI`. Copy the pairing payload and pass it to the computer with Whirlpool Desktop installed. Paste the payload into the box provided and press continue.

<p align="center">
<img src="/assets/img/rdm12.png" class=responsive width="663" height="277" maxheight="300" />
</p>

Then press `Initialise GUI`.

<p align="center">
<img src="/assets/img/rdm13.png" class=responsive width="663" height="222" maxheight="300" />
</p>

**7.** You will then be prompted to enter your wallet passphrase.

**8.** Whirlpool desktop should now open. If you are migrating an existing wallet you will see your UTXO's exactly where you left them prior to your RoninDojo migration.

If at anytime during this setup Whirlpool fails to connect, restart both Tor browser and the Whirlpool GUI.

<p align="center">
<img src="/assets/img/rdm14.png" class=responsive width="263" height="263" maxheight="300" />
</p>

---

Congratulations, you have now successfully connected/migrated your Samourai Wallet over to your new RoninDojo! You can now be safe in the knowledge that you are using the best and most private mobile wallet on the market, with your own full node and reaping the benefits of 24/7 remixing via the onboard Whirlpool CLI.

If you are interested in learning more visit their [website](https://ronindojo.io/), drop into the [Telegram](https://t.me/RoninDojoUI) chat and give [this](https://stephanlivera.com/episode/160/) Stephan Livera podcast with Zelko a listen.








