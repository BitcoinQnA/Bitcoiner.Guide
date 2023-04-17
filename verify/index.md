---
layout: page
title: Verify.Supply
subtitle: Run the numbers
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareverifysupply.png
tags: [books, test]
---

<p align="center">
  <a href="/verify/de">Deutsch</a> |
  <a href="/verify/es">Español</a> |
  <a href="/verify/fr">Français</a> 
  <br><br>
</p>

Do you know how many dollars have ever been printed?

Do you know how much gold has ever been mined?

The answer to both of those questions is no. Certain government individuals may be privy to information that allows them to make an educated guess, but the fact is **nobody on earth** can answer those questions with any sort of accuracy. Bitcoin is different. 

For the first time in human history, anyone has the freedom to find out the **exact** total supply of a global monetary asset, without the need to ask for permission or rely on anyone else. All that's required is a [node](https://node.guide) and around 10 minutes of your time.  

***

## How?

Verifying the total supply of all bitcoins in existence is significantly easier than you might imagine. If you have your own node, you can do this any time you like, as often as you like, safe in the knowledge that you are only trusting your own hardware and open sourced software to verify for you.

### Stand Alone Nodes

1. Set up your [node](/node) and wait for your initial block download to complete
2. SSH in to your node. Instructions to do this will be found in your node's documentation pages. Mac + Linux users should do this via 'Terminal' and Windows users can download and use [Putty](https://www.putty.org/)
3. Enter the following command `bitcoin-cli gettxoutsetinfo`
4. Wait. Depending on your hardware, this could take up to 10 minutes

### Stand Alone Nodes (non SSH version)

Most of the popular node implementations now come packaged with a local version of [this explorer](https://explorer.btc21.org/) which allows you to execute RPC commands through the GUI. Simple navigate to the 'RPC browser' section and click on `gettxoutsetinfo` and then execute.

Once again, depending on your hardware this may take up to 10 minutes.

<p align="center">
<img src="/assets/img/RPC1.png" class=responsive width="450" height="300" maxheight="300">
</p>

### Bitcoin Core

1. Download and install [Bitcoin Core](https://bitcoin.org/en/download) then wait for your initial block download to complete
2. Open 'console' within Bitcoin Core and enter `gettxoutsetinfo`
3. Wait. Depending on your hardware, this could take up to 10 minutes

### Other options

Once connected to your node, the following applications allow you to verify the supply at the click of a button

* [Fully Noded](https://fonta1n3.github.io/FullyNoded/)
* [Specter Desktop](https://github.com/cryptoadvance/specter-desktop)

***

After a short wait, you should see a response that looks like this...

```
{
  "height": 655987,
  "bestblock": "00000000000000000002c5f4af7514bdbfcbe6bb5beff57329f9e418024dab7e",
  "transactions": 42277264,
  "txouts": 68674534,
  "bogosize": 5155427851,
  "hash_serialized_2": "85a745a8739f6907bd0cff3ffaccbc29e5545a85aee8aca8b38daabe8a790442",
  "disk_size": 4216833480,
  "total_amount": 18537233.94446619
}
```

***

## Calculations

So how did my node come to the conclusion that, at the time I ran `gettxoutsetinfo` there were a total of 18,537,233.94446619 bitcoins in existence out of the [known](https://en.bitcoin.it/wiki/Controlled_supply) final supply cap of a little under 21,000,000? 

Bitcoin has a fixed emission schedule that decreases with each halving event which occurs every 210,000 blocks (roughly four years). These periods are sometimes referred to as 'reward eras'. Here is a summary of the supply throughout the historical eras up to time of writing.

* Reward era 1 = 50 bitcoins per block
* Reward era 2 = 25 bitcoins per block
* Reward era 3 = 12.5 bitcoins per block
* Reward era 4 (current) = 6.25 bitcoins per block 

Now that we understand that we can calculate the expected amount of bitcoins at any given block height.

* Reward era 1 = (50 * 210,000) = **10,500,000**
* Reward era 2 = (25 * 210,000) = **5,250,000**
* Reward era 3 = (12.5 * 210,000) = **2,625,000**
* Reward era 4 = (6.25 * (655,987 - 629,999)) = **162,425**
 
*655,987 = The block height at time of running gettxoutsetinfo*  
*629,999 = The height of last block before the current reward era*  
*If we minus one from the other, we determine how many blocks have passed during the current reward era*

Add them all together and we get **18,537,425** of expected supply. 

However, my node calculated that, at block height 655,987 there were in fact **18,537,233.94446619**. 

***

## Missing Bitcoin?

Why would my node calculate that there are actually **191.05553381** less bitcoins in existence that the known emission schedule suggests there should be?  

There are a number of reasons that are outlined in great detail in [this article](https://fjahr.com/posts/where-are-the-coins/) by [Fjhar](https://twitter.com/fjahr) or you can read a shorter version in [this](https://bitcoin.stackexchange.com/questions/38994/will-there-be-21-million-bitcoins-eventually/38998#38998) Bitcoin Stack Exchange answer.

Here is a very brief summary...

1. It's hard coded into the Bitcoin code that the [genesis block](https://en.bitcoin.it/wiki/Genesis_block) reward can't be spent and does not form part of the UTXO set
2. Duplicate TxID bug outlined in [BIP30](https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki)
3. OP_RETURN 'burned' coins
4. Miners not claiming the full block reward






