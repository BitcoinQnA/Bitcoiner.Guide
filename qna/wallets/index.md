---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareqna.png
tags: [books, test]
---

#### Simple answers to your common Bitcoin wallet questions

***


| Question                                                   | Answer                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [What is a wallet?]() | A bitcoin wallet is a just like your real wallet, it's a method of storing value. The main difference with a bitcoin wallet is that it doesn't actually store bitcoin inside, bitcoins exist solely on the distributed ledger (blockchain). A bitcoin wallet stores the keys required to send and receive over the distributed ledger. |
| [What are seed words?]() | Seed words (or mnemonic) are a sequence of 12 or 24 randomly generated words created when you make a new wallet. These words are your master backup for the entire wallet and should not be shared with anyone or stored anywhere they could be compromised. Anyone with access these words can steal your bitcoin. |
| [What is a passphrase?]() | A passphrase (often called the 13th/25th word) is a user defined additional word or phrase designed to add an extra layer of security to your backup. If your seed words become compromised but you have passphrase defined then an attacker would still need your passphrase to gain access to your bitcoin. Never store your seed words and passphrase together. |
| [What is a private key?]() | Generated from your seed words, a private key is proof that the entity in control of it has access to spend from the corresponding address. Your wallet will generate a private key for every address it creates. Most users of bitcoin today will never interact directly with a private key, it is generally managed automatically by wallet software. |
| [What is a public key?]() | Public keys are used in a transaction to verify that the owner of the corresponding private key has created a valid signature as proof of ownership of funds. Again, from a general user perspective public keys will never be directly used or seen. |
| [What is an extended public key?]() | An extended public key (or Xpub) can be seen as the master view into your bitcoin wallet. An Xpub is capable of generating and viewing every address contained within a wallet so you should be mindful who and you share your extended public keys with. If you aren't connected to your own node then it's highly likely than someone else knows your Xpub. Variations of an Xpub include Ypub and Zpub, all do the same job. |
| [What is an address?]() | An address is a string of numbers and letters that is unique to your wallet. It is what you share with others to receive bitcoin. Wallets can produce an infinite number of addresses so it's a good idea to never use the same one twice for privacy. Most wallets manage this for you and produce a new address every time you receive whilst keeping a track of your total balance. |
| [What is a mobile wallet?]() | A mobile wallet is one that runs on your mobile phone. They enable quick access to your bitcoin but carry the risk that if you lose or break your phone you may lose your bitcoin. This should not be a problem provided you have your seed words recorded safely so that you can restore you wallet on another device. |
| [What is a desktop wallet?]() |  A desktop wallet is one that runs on your computer. Desktop wallets generally come with more functionality than mobile wallets but can also be more complicated. With computers being internet connected devices that are susceptible to malware you should exercise caution with the software you install. |
| [What is a multi-sig wallet?]() | A multi-signature wallet is a wallet the requires more than one private key to sign a transaction. This could be anything from 2 of a possible 3 keys to sign or 15 of 20, It's up to the user when creating the wallet. Multi-sig is more secure than single-sig but is a lot more complicated when it comes to creation, backup and transacting. New users should tread carefully. |
| [What is a watch only wallet?]() |  A watch only wallet is created using your extended public key (Xpub) which allows you to track the balance of a wallet. Watch only wallets do not contain private keys and cannot be spent from. Be careful who you share your Xpubs with, anyone with access to this can track your bitcoin balances. |
| [What is a custodial wallet?]() | A custodial wallet is a wallet where the you do not control the private keys. Custodial wallets are often able to obfuscate away some of the complexity of bitcoin wallets but this comes with the risk of not being in control of your bitcoin. Custodial wallets are generally operated by exchanges and users should not keep large amounts of bitcoin in them. |
| [What is a non custodial wallet?]() | A non custodial wallet is a wallet where you are in control of your private keys. This is the way bitcoin was designed to be used and you should always ensure the wallet you are using is non custodial. A quick way to find out, did you have to write down your seed words when you opened your wallet? If yes, then you have a non custodial wallet. |
| [How do I know what fee to use?]() | This depends completely on how quickly you need your transaction to be processed and how busy the network is at the time you want to send bitcoin. Most wallets will provide you with an estimate based on these parameters and allow you to adjust as necessary. |
| [What is a QR code?]() | A QR code is a visual representation of data. They are most commonly used in Bitcoin to convert long and difficult to read addresses into a form of barcode that can be scanned by the senders wallet. This removes the need to type in the address which could lead to mistakes being made and bitcoin sent to the wrong address. |
| [What is a block explorer?]() | A block explorer is a website or application that allows you to find the details of any block on the blockchain. You can find data such as number of transactions in a block, sender address, recipient address, fees paid, amount sent, block height and block time. |

  
    

