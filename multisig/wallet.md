---
layout: page
title: Multisig.Guide 
subtitle: Wallet set up
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

## Intro

Now that we have all three devices public keys imported to Specter, it's time to combine them all to create your multisig wallet. This will be done in 3 steps:-

1. [Create multisig wallet](#create-multisig-wallet)
2. [Notify Cobo](#notify-cobo)
3. [Notify Coldcard](#notify-coldcard)

 

## Create Multisig Wallet

Open Specter and press `Add New Wallet` > `Multisignature Wallet`

<p align="center">
<img src="/assets/img/spec1.png" class=responsive width="400" height="340" maxheight="300" />
</p>

Choose the three signers we just imported and press `continue`.

<p align="center">
<img src="/assets/img/spec2.png" class=responsive width="520" height="240" maxheight="300" />
</p>

Give your wallet a name, choose `Segwit` and leave the default settings of requiring 2-of-3 signers to transact.

<p align="center">
<img src="/assets/img/spec3.png" class=responsive width="480" height="290" maxheight="300" />
</p>

Check the public keys of each signer and then press `Create Wallet`.

<p align="center">
<img src="/assets/img/spec4.png" class=responsive width="700" height="330" maxheight="300" />
</p>

Congratulations, you have just created your first multisig wallet! Click to save the backup PDF, we will revisit this later in the guide.

<p align="center">
<img src="/assets/img/spec5.png" class=responsive width="300" height="400" maxheight="300" />
</p>

You should now be prompted to export some data to your signing devices.

<p align="center">
<img src="/assets/img/spec6.png" class=responsive width="500" height="400" maxheight="300" />
</p>

***

## Notify Cobo

Click `Show Cobo Multisig QR Code`.

<p align="center">
<img src="/assets/img/spec7.png" class=responsive width="350" height="400" maxheight="300" />
</p>

On your Cobo open the menu then press `Multisig Wallet` > `Import Multisig`, then tap the QR scanner button in the top right. 

<p align="center">
<img src="/assets/img/spec8.png" class=responsive width="700" height="400" maxheight="300" />
</p>

Scan the QR code being displayed by Specter then check the public key information shown on the device matches those displayed in Specter.

<p align="center">
<img src="/assets/img/spec9.png" class=responsive width="350" height="400" maxheight="300" />
</p>

## Notify Coldcard

Back in Specter, press `Save Coldcard Multisig file`. 

<p align="center">
<img src="/assets/img/spec6.png" class=responsive width="500" height="400" maxheight="300" />
</p>


Insert the Coldcard micro SD card into your computer and copy the generated `.txt` file onto it. Then remove the SD card and insert back into your Coldcard.

<p align="center">
<img src="/assets/img/spec10.png" class=responsive width="500" height="150" maxheight="300" />
</p>

Power on your Coldcard and enter your PIN. Go to `Settings` > `Multisig Wallets` > `Import from SD`. 

<p align="center">
<img src="/assets/img/spec11.png" class=responsive width="200" height="250" maxheight="300" />
</p>

There will only be one to choose from. 

<p align="center">
<img src="/assets/img/spec12.png" class=responsive width="200" height="270" maxheight="300" />
</p>

Check all details shown on the device match those shown in Specter and then confirm.

<p align="center">
<img src="/assets/img/spec13.png" class=responsive width="200" height="270" maxheight="300" />
</p>


In Specter click `Finsih` and you will now be greeted with your first receive address. Don't send any sats in just yet, we have a couple more steps to go first! 

<p align="center">
<img src="/assets/img/spec14.png" class=responsive width="700" height="650" maxheight="300" />
</p>



<br/>

Finished creating the multisig wallet and ensuring each device is aware of the setup? Lets ensure we create a proper [backup](/multisig/backup).


