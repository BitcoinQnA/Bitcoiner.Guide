---
layout: page
title: Coinjoin Change Outputs
subtitle: How to deal with them
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharedoxxic.png
---

No matter which Coinjoin implementation you use, at some point you are going to come across and have to deal with the change outputs they create. As a Samourai Wallet user, this article is going to be focused on dealing with the change created by their Whirlpool implementation, but most of the practices I discuss in this article can be applied to the change outputs of other Coinjoin tools too.

## What is Doxxic change?

Given that you are reading this article, I'm going to assume that you understand the reason why Coinjoin is important. If you don't and you just stumbled across this article then I would suggest reading through the [Coinjoin](https://www.bitcoinqna.com/coinjoin) section of my website before continuing.

**TLDR** - *The Bitcoin blockchain is completely public, so if you have bitcoin that is tied to your personal identity (say from a KYC exchange) you can be followed on chain by anyone with the right resources that is surveilling the blockchain. Coinjoin breaks the links between your UTXO's past and its future. Anyone coming across a Whirlpool transaction cannot say for sure which of the outputs belong to which input owner.*

---

When you enter Whirlpool, your wallet will create what's known as a Tx0 transaction. The Tx0 effectively chops up your chosen UTXO's into the correct sizes for the pool you have chosen to enter. Any pieces of bitcoin left over after those equal amounts are created will be your change output and are sent back to the deposit account of your wallet. This change output is known as 'Doxxic change'. Doxxic change gets its name from the fact that it's the only part of the transaction that can still be deterministically linked to your coin history. The Samourai team have a development coming soon called 'bad bank' which segregates this change even further. Keep your eyes peeled!

<p align="center">
<img src="/assets/img/change1.png" class=responsive width="447" height="228" maxheight="228" />
</p>

You should **never** combine your postmix funds with your doxxic change. Doing so completely undoes the effect of Whirlpool. Samourai Wallet makes this virtually impossible without great effort but I feel I should say as it's very important.

<p align="center">
<img src="/assets/img/change2.png" class=responsive width="600" height="320" maxheight="300" />
</p>

## How can I deal with doxxic Change?

Dealing with doxxic change is a complex topic and the point of this article is not to give you a definitive process to follow. I merely plan to outline the options available and explain the tradeoffs so that you can make an informed decision for yourself based on your own situation and threat models.

### Mix in a smaller pool

The easiest and most risk free option of dealing with doxxic change is to use it in a smaller pool. Using the image above as an example the 0.03 change output could be sent to the 0.01 pool to be mixed. Eventually you will still end up with a small amount of change, too small even for the smallest pool. This process is not always an option and depends completely on the combination of UTXO value entering the Tx0 and the pool size chosen.

### Mark as 'do not spend'

When creating your Tx0, Whirlpool will ask you if you want to mark the change as unspendable. This hides it from view and prevents any accidental merging in future transaction. You are still in full control of these funds and can change the setting any time you like. If the change is an insignificant amount you may be happy to let it sit there. There is a possibility that the Samourai team may implement smaller pools in the future so you may want to just leave the funds and wait. However, there are no timescales for this so don't expect one anytime soon.

<p align="center">
<img src="/assets/img/change3.png" class=responsive width="300" height="220" maxheight="300" />
</p>

### Merge with other doxxic change outputs

Generally speaking it is not recommended to merge Tx0 change outputs together, even if you are doing to do so to run the combined amount through Whirlpool. This is because you tie together the history of those two separate UTXO's and reveal that they have the same owner. Imagine one of your change outputs was bought from a non KYC source and has a history that can be linked to some illegal darknet market activity. The other was bought on Coinbase and has a history that can be linked to an interaction with a regulated entity. Do you really want that regulated company to know you may have sent some bitcoin to a source they deem questionable?

With that said, there may be a situation where combining change outputs may be ok for you. Let's imagine that you bought 10m sats from the same KYC source over the course of 6 months. Each time you made a purchase you ran your bitcoin through Whirlpool and now have lots of chunks of doxxic change. These pieces of doxxic change have the same history and are smaller than the minimum pool size.  Given the source of these funds and the fact they have your ID and purchase information, you may not see it as a problem to combine these pieces of change into a UTXO big enough to enter a Whirlpool.

<p align="center">
<img src="/assets/img/change4.png" class=responsive width="580" height="220" maxheight="300" />
</p>


### Stowaway

A [Stowaway](https://support.samourai.io/article/73-creating-a-stowaway-transaction) transaction is a great opportunity to spend your doxxic change when paying to another privacy conscious Samourai user. Stowaway is a mini coinjoin that looks exactly the same as a regular transaction but completely undermines the common input ownership heuristic that chain surveillance firms use. This reduces the effectiveness of tagging doxxic change UTXO to any specific entity. Stowaway also comes with the added privacy benefit that the amount being sent is not visible to anyone looking on chain.

### Gift cards

Using a service like [Bitrefill](https://www.bitrefill.com/)can be a good way to use doxxic change. You can sign up without giving away any personal details and convert that change into a gift card that you can spend online or or in a store, completely anonymously. 

### Swap services

There are services like[Fixed Float](https://fixedfloat.com/),[LN Swap Bot](https://t.me/lnswapbot) or [XMR swap](http://olnjdsj745kqe62evxtdkcohvgknnpgho7asvxkmfzzu53im7afklxqd.onion/faq)*(.onion site)* which offer varying takes on the same principal of swapping between lightning or other cryptocurrencies before returning back to BTC to obfuscate coin history. Each one comes with their own counter-party risk and fee structure so be sure to do your own research. Some more experienced users actually swap between more than one of these services before returning to BTC to add extra deniability. Of course this adds extra complexity so should be used with care.  

You could deposit the doxxic change to a non KYC exchange in small chunks and then withdraw at a later date into a single UTXO. This obviously should be used with extreme caution as you will not be in control of your funds for the time the bitcoin is on the exchange. These exchanges have been known to fail or get hacked so be aware!

### Lightning

Some users also like to use their doxxic change to open new or fund existing lightning channels. How successful this process is at adding any additional privacy benefits depends on a multitude of things such as channel types, where you spend to, how many hops are along the payment route etc.

### Donations

One of the easiest options, let someone else deal with it. Donating small amounts of sats makes a big difference and allows the developer teams to keep doing what they do best. This also gives you the perfect opportunity to test out your PayNym by [donating](https://paynym.is/+samouraiwallet) to the team.

Which option you pick will largely depend on your own threat model and technical abilities. Be sure to consider each one thoroughly and ask in the [Telegram](https://t.me/SamouraiWallet) chat if you have any more questions.

Special thanks to [Max](https://twitter.com/maxtannahill) for his input on this article.

*Disclaimer - All views expressed in this article are my own and not those of the Samourai Wallet team.*






