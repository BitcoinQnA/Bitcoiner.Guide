---
layout: page
title: Mobile Coinjoin
subtitle: With Whirlpool on Samourai Wallet
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharecoinjoin.png
---

This page is a [tweet thread](https://twitter.com/BitcoinQ_A/status/1245061561074569219) I created in March 2020 which I have turned into an easy to follow article.

With the massive rise in Whirlpool usage since the introduction of mobile mixing I've finally got round to mixing some sats and thought I'd document the process for other people taking their first steps poolside that may have felt apprehensive about starting.

First step is to send some sats into your wallet. Hit the blue + in the bottom right hand corner of the home screen and hit receive.  You will then be given a screen like this. Scan the QR code or copy the address and paste into whatever wallet you are sending from.

<p align="center">
<img src="/assets/img/mix1.png" class=responsive width="322" height="349" maxheight="300" />
</p>


The transaction should appear in SW almost straight away and you will then need to wait for the transaction to confirm on chain. Obviously how long this takes depends on the mempool and the fees paid.

<p align="center">
<img src="/assets/img/mix2.png" class=responsive width="322" height="370" maxheight="300" />
</p>



Once the transaction has confirmed hit the blue + which will open up a small menu as shown here. Then hit Whirlpool.

<p align="center">
<img src="/assets/img/mix3.png" class=responsive width="200" height="380" maxheight="300" />
</p>


You will then be greeted with this loading screen.

<p align="center">
<img src="/assets/img/mix4.png" class=responsive width="322" height="180" maxheight="300" />
</p>


Once loaded, you will be greeted with your Whirlpool home screen which looks like this. Next up, hit the Whirlpool icon in the bottom right.

<p align="center">
<img src="/assets/img/mix44.png" class=responsive width="322" height="179" maxheight="300" />
</p>


Next, hit mix UTXO's

<p align="center">
<img src="/assets/img/mix5.png" class=responsive width="250" height="150" maxheight="300" />
</p>

You will then be presented with a list of your UTXOs ready for mixing.  With mobile you can select any number of these depending on the pool you wish to enter. 

- 0.01 (1m sats)
- 0.05 (5m sats)
- 0.5 (50m sats)

You need slightly more than the pool size to pay miner and mix fees.

<p align="center">
<img src="/assets/img/mix6.png" class=responsive width="322" height="294" maxheight="300" />
</p>

Once you have selected your UTXO's you will see this screen to select the pool you wish to enter and select your cycle priority. The cycle priority will adjust you miner fees up or down depending how desperate you are to mix those sats.

Once you have made your selections your miner and total fees will be displayed. When you are happy, hit review cycle details.

<p align="center">
<img src="/assets/img/mix7.png" class=responsive width="322" height="447" maxheight="300" />
</p>

You can now review the final details before you begin the mix. Once you are happy with how well smelted your sats are about to be you can press begin cycle.

<p align="center">
<img src="/assets/img/mix8.png" class=responsive width="250" height="530" maxheight="300" />
</p>

You should now see a warning about Doxxic Change. The wallet is basically asking you if you want to mark the change from this mix (which can be linked to your previous transactions) as 'do not spend.' It is always a good idea to hit yes but your change is always under your full control regardless which option you choose. It is just a measure to prevent you linking your mixed funds with your unmixed funds in the future and undoing all of your hard work sat smelting.

<p align="center">
<img src="/assets/img/mix9.png" class=responsive width="322" height="160" maxheight="300" />
</p>

Your UTXOs are now being prepared for a mix in the desired pool. The state of the mempool + fees paid at the time of mixing will dictate how long you see your UTXO queued for. You can check the status by pressing on the UTXO.

<p align="center">
<img src="/assets/img/mix10.png" class=responsive width="322" height="230" maxheight="300" />
</p>

Once the on chain transaction has confirmed you should be entered into a mix straight away and see something like this.

<p align="center">
<img src="/assets/img/mix11.png" class=responsive width="322" height="248" maxheight="300" />
</p>

Once the mix has completed you will see the UTXO's in your Whirlpool post mix. 

Fully mixed and ready to spend, safe in the knowledge that these UTXO's have 0 deterministic links to their past.

<p align="center">
<img src="/assets/img/mix12.png" class=responsive width="322" height="300" maxheight="300" />
</p>

---

## Some side notes...

- Always wait for the blue loading bar to stop moving before you take any action.
- To access your doxxic change click the three dots on the home page and press 'Show Unspent Outputs'.
- To increase your privacy look into running your own Dojo so that you do not rely on Samourai's servers. [myNode](/mynode) or [RoninDojo](/ronindojo) are the easiest examples.
- You only pay the pool fee once, remixing is free thereafter but SW needs to be open for this to occur.
- If multiple remixing is what you're after look into the desktop [GUI](https://samouraiwallet.com/download)+CLI implementations.

---

And that's it folks, coinjoining could not be easier now mobile is here! Shout out to the Samourai team for creating such an easy user experience and bringing fungible bitcoin to the masses.

If you get stuck feel free to DM me or hop into the Whirpool [Telegram](https://t.me/whirlpool_trollbox) chat.








