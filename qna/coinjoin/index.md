---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareqna.png
tags: [books, test]
---

#### Simple answers to the common Coinjoin questions

***


| Question                                                   | Answer                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [What is Coinjoin?]() | Coinjoin (sometimes called mixing) is an on chain privacy solution for Bitcoin that was first proposed in 2013 by Gregory Maxwell. It is designed to break the 'common ownership heuristic' which assumes that all inputs to a transaction belong to the same entity. Bitcoin addresses aren't directly tied to real identities but anyone with enough time and resources (like chain analysis firms) can start to make these links by watching Bitcoin's public ledger. Coinjoin helps prevent this. |
| [Why do we need Coinjoin?]() | The Bitcoin blockchain is completely public, so if you have bitcoin that is tied to your personal identity (say from a KYC exchange) you can be followed on chain by anyone with the right resources that is surveilling  the blockchain. This problem gets worse if you inadvertently combine bitcoin from different sources when making a transaction. You may feel like this isn't a problem and you have nothing to hide, but you wouldn't let a stranger look at your bank statement, so why allow it with Bitcoin? |
| [How does CoinJoin work?]() | There are different types of Coinjoin implementations, each with their own take on the same basic idea. Two or more users pool their UTXO's together into a collaborative transaction that is formed in a unique way. The way the transaction is constructed makes it very difficult for surveillance firms to know exactly which transaction output belongs to which of the input owners. At best anyone looking at the transaction can come up with a number of possible scenarios as to who owns which piece of bitcoin but they can never be 100% sure. |
| [Are there different types of Coinjoin?]() | There are three popular implementations of Coinjoin, 1) Joinmarket which operates on a maker/taker structure where the maker offers up their bitcoin (for a fee) to become part of the taker's transaction. 2) Wasabi wallet which uses a desktop app and offers large mixes. The quality of which has come under some scrutiny. 3) Samourai Whirlpool offers small but effective Coinjoins coupled with an easy to use mobile interface. It's the only protocol we use. |
| [Is a mixer the same as a Coinjoin?]() | No, a mixer is generally considered to be a centralised service that you send bitcoin to, who then jumbles them around and sends you someone else's bitcoin back. These services should be avoided because you put your complete trust into the mixing entity to actually send you some bitcoin back after you have sent it. You should always be in control of your private keys! |
| [Do I have to pay for a Coinjoin?]() | Yes, all of the Coinjoin services outlined above charge fees. Each one has a slightly different fee structure so you should always do your own research before starting to use any of them. |
| [Can I lose my bitcoin taking part in a Coinjoin?]() | When using a Coinjoin service like those listed above, they are structured in a way so that you are always in control of your private keys. We are not currently aware instances of any users losing bitcoin as a result of an error with the protocol or due to any bad actor being behind one of them. With that said, you should also practice strict due diligence and if you are unsure then practice first using testnet bitcoin. |
| [What problems can I face when using Coinjoin?]() |  There have been a couple of instances that exchanges has flagged users that have been tracked to or from a Coinjoin service. This has resulted in some having to provide KYC information and has resulted in others having their account blacklisted meaning that they could not use the exchange. For transparency we must state that all of these users were linked to the Wasabi Wallet implementation. The are no recorded issues with users of Joinmarket or Samourai Whirlpool being flagged. |
| [What problems can I face when using Coinjoin? *continued*]() | An often overlooked aspect of Coinjoin is what you do after the coinjoin takes place. Your spending habits after coinjoining, if not done correctly can completely undo all of the privacy gained. Post-mix spending can be a complex topic but tools such as Stonewall and Stowaway, implemented by Samourai Wallet are making this a much easier process. |
| [What is Payjoin?]() |  Sometimes called Pay-to-end-point (P2EP), Payjoin is a special type of Coinjoin between two parties where one is actually paying the other. Due to the transaction structure, it's impossible to tell exactly the amount being transacted. Another great thing about Payjoin is that to blockchain surveillance firms a Payjoin looks just like a regular bitcoin transaction. If widely adopted, Payjoin will completely ruin the common input ownership heuristic for good. |
| [What is chain analysis?]() | Chain analysis is the practice of an entity surveilling the blockchain to look for clusters and patterns in transactions to try to track people or to understand their spending habits. Chain analysis firms do this under the guise that they are trying to stop criminals or terrorism. Whilst we do not disagree with the sentiment of fighting illegal activities that could cause harm to others, we do disagree with the drag net surveillance tools they use that infringe on the privacy of the common bitcoin user. |
| [Where can I learn more about Coinjoin?]() |  Coinjoin is a very complex topic with lots of nuance so diligent research is absolutely necessary. Listen to this Stephan Livera podcast on the 'why' of Coinjoin and this one on the problem of blockchain surveillance. This article by @6102Bitcoin is a great run down of the three main Coinjoin implementations. |




