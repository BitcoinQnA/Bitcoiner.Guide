---
layout: page
title: Node.Guide 
subtitle: Bitcoin Core
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/sharenode.png
tags: [books, test]
---

<p align="center">
  <a href="/node/core">Core</a> |
  <a href="/node/pap">Plug + Play</a> |
  <a href="/node/diy">DIY</a> |
  <a href="/node/other">Other</a> |
  <a href="/node/compare">Compare</a>
  <br><br>
</p>


'Bitcoin Core' is the name of the [software](https://github.com/bitcoin/bitcoin) at the heart of **every** node implementation listed on this website. It is the ruleset that all Bitcoin users agree upon. The rest of this page covers the graphical user interface that is built around this software and is maintained by Core [developers](https://github.com/bitcoin/bitcoin/graphs/contributors).  

[Bitcoin Core](https://bitcoincore.org/) is the most popular and simplest way to run your own node. Core is software that you can download in a matter of clicks onto any laptop or computer. If you want to run a node quickly and without spending a lot, Core is the best option to get started. The user interface is somewhat basic (by design) but comes with everything you need to send/receive and verify your own transactions with your own node.

<p align="center">
<img src="/assets/img/photo_2020-10-25_16-27-15.jpg" class=responsive width="500" height="350" maxheight="350">
</p>

### Features

* Simple setup and user interface
* Built in wallet with coin control + labelling
* Can run over Tor

### Ease of setup

Could not be easier. Choose the [download](https://bitcoin.org/en/download) specific to you computer's operating system, install and wait for the initial block download to complete (*approx 3-5 days*).

With the inception of software like [Specter Desktop](https://github.com/cryptoadvance/specter-desktop) it is now easier than ever to use your hardware wallet with Bitcoin Core. [Here](https://www.youtube.com/watch?v=4koKF2MDXtk) is a walkthrough on doing exactly that.

UPDATE - Specter now comes prepackaged with Bitcoin Core, making setup even easier! See [here](/specter) for instructions. 

### Limitations

To be able to transact using a wallet that is connected to Bitcoin Core anytime you like (*think mobile wallets*), the computer you have it installed on needs to be running all of the time. This may not be practical for doing so on the shared family laptop. If you are running it on a powerful desktop computer, there are also power costs you need to consider.

The Bitcoin blockchain is currently around 350GB and growing, this will quickly fill up the hard drive of most home use computers so you may want to look at additional storage. A good tradeoff here for someone wanting to use a [Coldcard](https://coldcardwallet.com/), backed by their own node, without the requirement to transact regularly would be to run Bitcoin Core in [pruned mode](https://bitcoin.org/en/full-node#reduce-storage), paired with Specter Desktop. 

Using this setup, the storage requirements are reduced down to 10GB and the user would only need to run Bitcoin Core when they wanted to interact with their hardware wallet. However, pruned nodes cannot perform rescans of existing wallets so the hardware wallet needs to be connected to Specter before starting the IBD. This ensures that historical transactions are picked up and Bitcoin balances are accurate.

### Cost

The software itself is free. Other costs are dependant on the hardware you choose to run. The average price of a 1TB solid state hard drive is a little over $100 and should last many years.

### Recommended Hardware

Any laptop or computer and a robust [SSD](https://www.amazon.com/SAMSUNG-Portable-SSD-1TB-MU-PC1T0H/dp/B0874YJP92/ref=sr_1_3?dchild=1&keywords=samsung+1tb+ssd+t5&qid=1603541969&sr=8-3).


### Other resources

* [Codebase](https://github.com/bitcoin/bitcoin)
* [Bitcoin Wiki](https://en.bitcoin.it/wiki/Help:Installing_Bitcoin_Core)
* [Support Channels](https://bitcoin.org/en/bitcoin-core/help)
* [Bitcoin IRC](https://bitcoin.org/en/bitcoin-core/help#live)
* [Setup Video](https://www.youtube.com/watch?v=xc_TxlByxeY)

***

Tried Core and decided you want to try a dedicated node box? Check out the [Plug + Play](/node/pap) page.
