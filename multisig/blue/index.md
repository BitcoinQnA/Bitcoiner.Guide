---
layout: page
title: Multisig.Guide 
subtitle: Mobile approach with BlueWallet
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/sharemultisig.png
tags: [books, test]
---


<p align="center">
  <a href="/multisig/intro">Intro</a> |
  <a href="/multisig/shopping">Shopping</a> |
  <a href="/multisig/software">Software</a> |
  <a href="/multisig/signers">Signers</a> |
  <a href="/multisig/wallet">Wallet</a> |
  <a href="/multisig/backup">Backup</a> |
  <a href="/multisig/receive">Receive</a> |
  <a href="/multisig/spend">Spend</a> |
  <a href="/multisig/recover">Recover</a> 
  <br><br>
</p>

## Receiving on the go with Blue Wallet

So you've set up your 2-of-3 multisig using Specter. What happens if you want to receive into your multisig wallet when you don't have your laptop with you? Luckily, [Blue Wallet](http://bluewallet.io/) allows you to import your multisig wallet as a 'watch-only', meaning you can receive but not spend. However, you should consider the trade-offs of doing this, anyone with access to your phone may be able to see how much bitcoin you have! Mitigate this by using their password protection and plausible deniability features.  

> This does not negate the need to verify your receive addresses on your trusted signing devices. You should do this in small batches when you have some spare time. 

Ensure you followed [this](/blue) guide to connect your Blue Wallet to your own node. Tor connectivity is due in the next release which enables simple remote access without the need for an additional tool like [Orbot](https://guardianproject.info/apps/org.torproject.android/).

Press `Add now` > `Import wallet`

<p align="center">
<img src="/assets/img/blue1.jpg" class=responsive width="290" height="380" maxheight="400" />
</p>

Press `Scan or import a file`, this will open your phone's camera.

In Specter, open your multisig wallet then press `Settings` > `Export`

<p align="center">
<img src="/assets/img/bluespecter.png" class=responsive width="340" height="180" maxheight="400" />
</p>

Scan the presented QR code with your phone's camera.

<p align="center">
<img src="/assets/img/bluespecter1.png" class=responsive width="360" height="423" maxheight="400" />
</p>

Your wallet should now be imported.

<p align="center">
<img src="/assets/img/bluespecter2.jpg" class=responsive width="300" height="223" maxheight="400" />
</p>

Swipe down to refresh the wallet and check that your recent transactions are displayed. 

Finally, check that the next receive address matches the one shown in Specter.

<p align="center">
<img src="/assets/img/bluespecter3.jpg" class=responsive width="300" height="423" maxheight="400" />
</p>


