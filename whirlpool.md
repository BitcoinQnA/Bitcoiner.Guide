---
layout: page
title: Whirlpool FAQ
subtitle: And Postmix spending tips
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharewhirlpool.png
---

## What is Whirlpool?

Whirlpool is a zerolink coinjoin implementation created by the Samourai Wallet developer team. It is the most structurally sound and easy to use implementation on the market today. Whirlpool breaks all deterministic links between inputs and outputs and provides the user with market leading postmix spending tools to allow for proper spend hygiene after mixing. 

## How does it work?

At a very high level, a Whirlpool mix is a collaborative transaction between 5 participants. The outputs of each Whirlpool mix are always identical resulting in every mix having 1496 possible interpretations. Anyone surveilling the blockchain and looking at a Whirlpool transaction cannot say for sure which output corresponds to which input. That's just a single mix, imagine if you do 5, 10 or even 50 of them back to back?

*(I'll let you into a secret - remixing is free, so why wouldn't you!?)*

Each of the 5 Whirlpool participants submits 1 input into the transaction. For a mix to start, a minimum of two of these participants must be new entrants to the pool. These new entrants are known as 'premixers' and they are structurally integral to every Whirlpool mix. Requiring 2 premixers to trigger a mix ensures that new liquidity forms part of every cycle and prevents the same pool UTXO's continually mixing with each other.  

If you would like to really get under the hood of a Whirlpool transaction, take a look at [this](https://translate.google.com/translate?depth=1&amp;nv=1&amp;pto=aue&amp;rurl=translate.google.com&amp;sl=auto&amp;sp=nmt4&amp;tl=en&amp;u=https://estudiobitcoin.com/como-entender-whirlpool-de-samourai-wallet-sin-morir-en-el-intento/) great article by [Estudio Bitcoin](https://twitter.com/estudiobitcoin).

<p align="center">
<img src="/assets/img/wp1.png" class=responsive width="663" height="270" maxheight="300" />
</p>

## How do I use Whirlpool?

There are 3 main ways you can carry out Whirlpool mixes, all of them require you to have a Samourai Wallet on your Android phone. I will cover them in order of ease of setup...

**Samourai Wallet - Mobile Mixing**

<p align="center">
<img src="/assets/img/wp2.png" class=responsive width="322" height="230" maxheight="300" />
</p>

By far the easiest way to do your first Whirlpool mix is using your phone. [Here](/mobilecoinjoin) is an article I wrote giving you a step by step guide on doing this. Mobile mixing is the fastest way to get started but it not the best solution (on it's own) for long term mixing of larger amounts.

Unfortunately, Android sometimes like to kill background activity of applications. This can sometimes mess with your ability to mix successfully. Here are some tips on ensuring you have a successful experience courtesy of [DammKewl](https://twitter.com/dammkewl)...

- Configure your phone to keep the app alive. Check out dontkillmyapp.com
- Turn off any eco modes
- Turn on any performance modes
- If possible use a widget that keeps your screen active
- Put it on the charger
- Put on the whirlpool main screen
- Intermittently go back to the Samourai wallet main screen, hit "close" on the whirlpool notification and then go back to the whirlpool main screen

**Whirlpool Desktop GUI**

The desktop [application](https://samouraiwallet.com/download) connects with your Samourai Wallet and allows you to manage your mixing on your computer. With the GUI (*graphical user interface*) you can deposit funds, set default remix targets and view your TxID's so that you can get a visualisation of your Whirlpool mixes via [OXT.me](http://OXT.me)

It's worth remembering that if you are using only the desktop GUI that mixing will only happen when the desktop app is open and running, so ensure that your computer doesn't have an auto sleep function active.

<p align="center">
<img src="/assets/img/wp3.png" class=responsive width="663" height="360" maxheight="300" />
</p>

**Whirlpool CLI**

Whirlpool CLI (*command line interface*) is the pinnacle of the Whirlpool stack. It's designed to run 24/7 on an 'always on' device like a Raspberry Pi4 or a RockPro64. Because it runs 24/7, Whirlpool CLI gives you the best opportunity to achieve the maximal amount of remixes with the least amount of effort. It does all of the heavy lifting, so you don't have to. It comes with the tradeoff that, of the 3 Whirlpool implementations, it's the hardest to setup. However projects like [RoninDojo](https://ronindojo.io/) make this setup a breeze. Whirlpool CLI also runs on the [myNode](http://mynodebtc.com) and [Nodl](http://nodl.it) node implementations.   

**The Ultimate**

Most 'power users' will connect and leverage all 3 of these approaches together into the ultimate Whirlpool stack. Here is what that looks like...

- Receive some sats into your Samourai Wallet
- Start a mix from the mobile wallet
- Set the default mix target to unlimited within the Desktop GUI
- Let the CLI takeover and manage all future remixing
- Repeat step 1

Here is a graphical explainer of how those parts link together...

<p align="center">
<img src="/assets/img/wp4.png" class=responsive width="663" height="373" maxheight="300" />
</p>


## A quick note on Dojo

Dojo is a backend server for your Samourai Wallet. Running your own Dojo isn't absolutely necessary to interact with Samourai Wallet or Whirlpool, but doing so is the most private way to use these tools. You can install Dojo using any of the three methods listed above or there is a standalone install option for the more advanced user. Once setup, wallet connection is as simple as scanning a QR code. Remember, if you aren't running your own Dojo, you are trusting someone else's.

---

## What is a Tx0?

A Tx0 is the transaction your Samourai Wallet will create that splits your selected UTXO's (pieces of bitcoin) into the right size chunks for the pool you have specified. Using the [example](https://www.kycp.org/#/a126e48d4a6eb8d19682ec0e23ad45e76cd52b45f6c17be5068ae051d4b2cc24) below we can see that a total of 2.2550 BTC has been split into the following outputs...

- 4x 0.5000302 (these are the UTXO's that are ready be mixed in the 0.5 pool)

- 1x 0.0250 (this is the coordinator or pool fee which we will cover later)

- 1x 0.22998418 (this is the doxxic change output that goes back to the deposit account of the users wallet)

**So why 0.5000302 instead of 0.5000000?**

In this example we are a premixer and entering the pool for the first time with these UTXO's. The extra 0.0000302 is to cover the miner fees of each Whirlpool transaction. You only pay these once as a premixer. Any remixing miner fees are covered by new people entering the pool.

<p align="center">
<img src="/assets/img/wp5.png" class=responsive width="663" height="270" maxheight="300" />
</p>


## How much does Whirlpool cost?

The Whirlpool fee structure is quite simple to understand. You pay a single flat fee to the pool when you Tx0 and enter. *There will of course be varying levels of miner fees which we will cover off in the next section.*

> 0.001 pool fee = 0.00005 (5,000 sats)

> 0.01 pool fee = 0.0005 (50,000 sats)

> 0.05 pool fee = 0.0025 (175,000 sats)

> 0.5 pool fee = 0.025 (1,750,000 sats)

**These fees are fixed regardless of the quantity of bitcoin you Tx0 and how often you want to remix it those UTXO's.**

To calculate your total fees based on your specific mix criteria, please visit [**Whirlpool Fees.**](http://whirlpoolfees.com)

<p align="center">
<img src="/assets/img/wp6.png" class=responsive width="489" height="406" maxheight="300" />
</p>

## What is Whirlbot?

[Whirlbot](http://t.me/SW_whirlpool_bot) is a telegram bot that can provide you with different Whirlpool related stats that can help decide how and when to mix. You can use the **/start **command to see everything he is capable of.

**Note** - The `/calculate` command has now been disabled. To calculate your Whirlpool fees please use [this](http://whirlpoolfees.com) website.
Alternatively, the wallet will give you a full breakdown of your mix fees before you enter a mix.

<p align="center">
<img src="/assets/img/wp7.png" class=responsive width="320" height="111" maxheight="300" />
</p>


## Do I pay a fee for every mix?

No, you only pay the pool and miner fees when you enter a pool for the first time. Any fees for subsequent remixes you participate in are covered by the new people entering the pool.

## Which pool should I mix in?

Everyone has their own preferences so there is no right or wrong answer here. Although there are two main things to consider, the fees you are going to pay for entering the pool and the amount of outputs you will need to manage postmix. 

You should also consider is your spending habits, if you are going to make lots of small purchases then the 0.01 pool would be a good idea. Alternatively, if you are mixing large amounts and not intending to spend for a long time then you will have far less UTXO's to manage if you use the 0.5 pool. It is generally accepted as good practice to have a mix of all UTXO sizes to accommodate all postmix decisions.

Use Whirlpoolfees.com to calculate fees and outputs created before you make your decision. 

## What is an SCODE?

An SCODE is a discount code that the Samourai team release occasionally to discount the pool fees by a certain percentage. You can enter this in either the mobile wallet or the desktop GUI. Be sure to initiate your mix from the same device that you enter the SCODE into.

<p align="center">
<img src="/assets/img/wp8.png" class=responsive width="335" height="270" maxheight="300" />
</p>

## How long does a mix take?

Your first mix will generally happen very quickly, particularly within the smaller pools. It's worth remembering that each mix is dependant on two premixers, so if you enter a larger pool and are the only premixer then your mix will not trigger until someone else joins the pool. You can view each pool's current liquidity by using the `/liquidity` command with Whirlbot.

Freeriders (people who have already mixed at least once) are selected completely at random so the rate at which you achieve remixes can fluctuate a lot. If there is lots of new liquidity coming into the pool then your remix numbers will likely increase. If it's a quieter day then you may not achieve any. This is a feature of Whirlpool not a bug, mix integrity is paramount. 

## How many mixes should I do?

A single mix is enough to break deterministic links of your UTXO's although most people aim for a minimum of 3. But if you ask me, just set it and forget it and get those free remixes. Remember you only pay once, every remix adds to your anonymity set and is completely free.

## Why am I not getting many remixes?

As outlined above, remixers are chosen completely at random. Some days you will get plenty of remixes and some days you won't get any. To be in with the best chance of maximising your remixes you should run Whirlpool CLI so that you are always online and ready to be chosen.

## What do I do with my doxxic change?

This is covered extensively in [this](/doxxic) article I wrote.

## Can I buy KYC, run it through Whirlpool and regain all my privacy?

Yes and no. You can do this and after mixing with Whirlpool anyone following you on chain could not be sure which output of each mix is yours but this does not change the fact that a KYC exchange (and by association, the government) knows exactly how much bitcoin you bought from them.

The far more private option would be to purchase via a non-KYC source such as [Bisq](/bisq) or [Hodl Hodl](/hodlhodl) and then run through Whirlpool.

## What do I do after mixing?

The best thing to do is to leave them in your Samourai Wallet, remixing (for free) until you want to spend. When you do come to spend, you can do so in a privacy preserving way using the postmix spend tools outlined below.

## Can I mix and send to cold storage?

Yes, you can. But there are multiple tradeoffs and pitfalls. All of which I cover in [this](/csimplications) article.

## What is a STONEWALL?

Stonewall builds your transaction in a unique way to increase the deniability of links between the sender and recipient. Once the [spending conditions](https://gist.github.com/SamouraiDev/4ced85a29996dd56781e2bf319b93aaf) are met the wallet will create this type of transaction automatically for you and it will display the level of entropy the transaction will have. Stonewall is actually a ‘fake’ mini coin join using only your own UTXO’s.

STONEWALL can be created from your deposit or postmix accounts, but the algorithm will never mix UTXO's from those accounts together. STONEWALL transactions always have 4 outputs...

**-** Your spend
**-** A decoy that goes back to your wallet
**-** Two change outputs that also go back to your wallet

<p align="center">
<img src="/assets/img/wp9.png" class=responsive width="663" height="300" maxheight="300" />
</p>

## Why can't my wallet build a STONEWALL?

There are some complex algorithms at work to create a STONEWALL but the main rule to trigger one is to spend less than half of your balance. If your Samourai wallet cannot construct one even though you are spending less than half, the likelihood is that the wallet does not have enough UTXO's to choose from to create the minimum amount of entropy required. The more UTXO's STONEWALL has to choose from, the better. 

## What is a STONEWALL X2?

This type of transaction creates a mini coin join with another Samourai user that you are in cahoots with. It mixes some of both Samourai users UTXO’s when paying to any third party to create a high entropy transaction. You don’t even need to be in the same room as your fellow Samourai user to [create a Stonewall X2](https://samourai.kayako.com/article/74-how-to-create-a-stonewallx2-transaction) as you can simply share QR codes via encrypted chat.

You do put a small amount of trust into your STONEWALL companion as they will be able to see some of your UTXO's, so be mindful who you construct one with.

## What is a Stowaway?

This is Samourai’s implementation of [P2EP](https://en.bitcoin.it/wiki/PayJoin) (Pay to End Point). When paying another trusted Samourai user it creates a transaction that looks just like any other Bitcoin transaction on chain but, it’s actually a form of mini coin join. The most powerful thing about Stowaway is that the amount being sent will never actually be visible to anyone looking at the blockchain. Stowaway also uses sender AND recipient UTXO’s on the input side of the transaction which completely destroys the common-input ownership heuristic for chain analysis firms.

Just like Stonewall X2, Stowaway can be [constructed](https://samourai.kayako.com/article/73-creating-a-stowaway-transaction) in person or remotely.

The image below is a Stowaway transaction where I was paid exactly 0.002 BTC (200,000 sats). See that value anywhere on this transaction? Nope, me either! [kycp.org](http://kycp.org) assumes that both of the inputs belong to the person paying me, which is false, one of them was mine! Want to know what's even cooler? The fact that this type of transaction even exists, casts doubt on every 'normal' transaction on the blockchain because it 'could' be a Stowaway.

<p align="center">
<img src="/assets/img/wp10.png" class=responsive width="663" height="240" maxheight="300" />
</p>

## Where can I learn more?

- There is a wealth of Samourai and Whirlpool related links in the [SW informational](https://t.me/SWInformational) Telegram group. You can also hop into the [Whirlpool](https://t.me/whirlpool_trollbox) group to ask specific questions.
- This [article](https://link.medium.com/hiZaEg6IL3) by Samourai Wallet takes a deep dive into Whirlpool anonymity sets.
- Keep up to date with the latest Whirlpool stats at [whirlpoolstats.com](http://whirlpoolstats.com)
- Visit my Coinjoin explainer [page](/coinjoin) for a simple overview of coinjoin and why it is important.
- Listen to [this](https://stephanlivera.com/episode/150/) Stephan Livera podcast with Samourai Wallet 



