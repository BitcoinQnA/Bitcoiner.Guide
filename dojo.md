---
layout: page
title: Rescanning XPUBS
subtitle: To recover your Samourai Wallet balance
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharedojo.png
---

This is a short guide to walk Samourai Wallet users through the process of rescanning their extended public keys in the event that they connect to their Dojo backend and do not see a balance in their mobile wallet. 

RoninDojo users can follow a modified version of the steps outlined below, that have been suited to that platform, [here](https://wiki.ronindojo.io/en/troubleshooting/samourai-wallet).

## Step 1 (myNode users only)

If you are a myNode user then its good to start by checking the status at the top of the Dojo page of your nodes dashboard. If everything is running as it should be then move on to step 2.

If you don't see something that looks like the picture below then your Dojo may still be syncing and you should wait until that is done. Or there may be issue with your installation and you should ask for assistance in their Telegram chat.

<p align="center">
<img src="/assets/img/mnstatus.png" class=responsive width="450" height="100" maxheight="300" />
</p>


## Step 2

Log into your Dojo maintenance Tool using the Tor browser. Where your log in credentials are stored will depend on the type of Dojo installation you have. 

* myNode users credentials can be found on the Dojo page of your dashboard.
* RoninDojo users can find theirs at....Ronin Menu -> Dojo Menu -> Show Tor Hidden service Address.
* Nodl users, log in the main screen (can be done over Tor) and scroll to the Dojo tile. This will provide you with a link and admin key.

<p align="center">
<img src="/assets/img/dmt.png" class=responsive width="350" height="200" maxheight="300" />
</p>


## Step 3

You now need to check that there are no errors shown in the Dojo status tab. The main thing to look for is the block heights not matching between the Full node and tracker sections . If you see something like the below where the block heights match and a full house of green ticks then you are good to move on to the next step.

<p align="center">
<img src="/assets/img/dojostatus.png" class=responsive width="400" height="200" maxheight="300" />
</p>


## Step 4

On your Samourai mobile wallet tap the three vertical dots in the top right hand corner of the screen the go to Settings > Wallet > Show XPUB

Which extended public key you choose will depend where your funds you are looking for are located within your wallet.

<p align="center">
<img src="/assets/img/pubs.png" class=responsive width="250" height="250" maxheight="300" />
</p>

> **BIP44 XPUB** = Your deposit account for addresses starting with a '1'

> **Segwit BIP49 YPUB** = Your deposit account for addresses starting with a '3'

> **Segwit BIP84 ZPUB** = Your deposit account for addresses starting with 'bc'

> **Whirlpool pre-mix ZPUB** = The account for any funds sent to Whirlpool that have not yet been mixed

> **Whirlpool post-mix ZPUB** = The account where your mixed funds will be sat

*By default Samourai Wallet uses  BIP84 ZPUB so it's highly likely that this is the one you will need if you are scanning for a balance in your deposit account.*

Copy the xpub of the account you wish to check using Dojo Maintenance Tool

*ProTip thanks to [@Crazyk_031](https://twitter.com/Crazyk_031)- You can send your extended public keys from your mobile wallet to your computer  *(please use encrypted email)* by following these steps...*

Three vertical dots on the home page > Settings > Troubleshoot > Send backup to support. This will open the email app of your choice and paste in a data dump of your wallet details (including your xpubs). Simply change the email recipient to your own email address.

## Step 5

Back in Dojo Maintenance Tool click on '**xpubs tool**' and enter the xpub you want to rescan.

<p align="center">
<img src="/assets/img/xpubtool.png" class=responsive width="450" height="120" maxheight="300" />
</p>

## Step 6

The result should look similar to the below. The main things to look for here are... 

> **Tracked since** = Date

> **Balance** = Your expected balance

> **Derivation** = The derivation type relevant to your xpub (see step 4)

If the derivation type is incorrect you can '**retype this xpub**' to the desired derivation.

<p align="center">
<img src="/assets/img/result.png" class=responsive width="400" height="300" maxheight="300" />
</p>

## Step 7

If you do not see a balance or the result indicates that Dojo is not tracking the xpub, press '**rescan this xpub**'. Start with the default values and hit rescan. If you still do not see your balance, increase the lookahead value by 100 and repeat.

<p align="center">
<img src="/assets/img/lhresult.png" class=responsive width="400" height="50" maxheight="300" />
</p>

## Step 8

Restart your Samourai Wallet app and wait for the blue loading line to disappear and navigate to the part of the wallet where you expect to see your funds eg Deposit (the wallet opens on this page), Premix or Postmix and you should see all of your sats.

## Step 9

If you have funds stored in multiple parts of the wallet simply repeat Steps 4-8 for the relevant extended public key.

If you have followed all of these steps and still don't see your expected balance, drop into the [Dojo telegram group](https://t.me/samourai_dojo) or contact [support@samouraiwallet.com](mailto:support@samouraiwallet.com)

Thanks to [Ketan](https://twitter.com/_k3tan),[Max](https://twitter.com/maxtannahill) and [Crazy K](https://twitter.com/Crazyk_031) for their input into this article.

***

If you have any questions feel free to grab me on [Twitter](https://twitter.com/BitcoinQ_A) and be sure to follow [SamouraiWallet](https://twitter.com/SamouraiWallet) too.

Alternatively drop into the [telegram group](https://t.me/SamouraiWallet) or visit the [support](https://support.samourai.io/) documentation page.

Huge shout out to the Samourai team who have helped me learn an incredible amount about Bitcoin privacy.

*Disclaimer — All views expressed in this article are my own and not those of the SW developer team.*


