---
layout: page
title: Multisig.Guide 
subtitle: Signer setup
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

This page walks you through setting up each of the three signing devices that will be used to create the 2-of-3 [wallet](/multisig/wallet). Once set up, a a signature from two of these devices will be required to spend bitcoin. All three signers operate via an airgap 

The three devices are :-

1. [Coldcard](#coldcard)
2. [Cobo Vault](#cobo-vault)
3. [Seed Signer](#seed-signer) - *For use as a redundant backup signer* 


<p align="center">
<img src="/assets/img/signers1.png" class=responsive width="500" height="230" maxheight="300" />
</p>


## Coldcard

Coldcard intro [video](https://www.keepitsimplebitcoin.com/setup-coldcard-wallet/) by Keep It Simple Bitcoin


When you receive your Coldcard, take a close look at the packaging and check for any damage or evidence of it being messed with in any way. The tamper evident bag the device comes in should make this very easy.

<p align="center">
<img src="/assets/img/cc1.png" class=responsive width="190" height="340" maxheight="300" />
</p>

Plug the Coldcard into your power supply and check that the number displayed on the screen matches the one printed on the tamper evident bag. 

Before a seed is generated, you must select a PIN. The pin consists of two parts, each part must contain between two and six numbers. Create the first part of your pin. You will now see your anti phishing words, make a note of these. These are used as a reference when you enter your pin in the future. If someone were to swap your device with another one, when you entered the first part of your pin on the fraudulent device you would see completely different words which would warn you that something is wrong before you enter your full pin.

<p align="center">
<img src="/assets/img/cc2.png" class=responsive width="160" height="81" maxheight="300" />
</p>

> If you lose either part of your pin, you lose access to the device.


Create the second part of your pin. You will then be greeted with the Coldcard home screen.

<p align="center">
<img src="/assets/img/cc.png" class=responsive width="160" height="81" maxheight="300" />
</p>

Press `new wallet` and you will see a list of 24 seed words. At this stage if you press the number [4]() on the Coldcard you will be taken to the dice roll screen where you can roll a dice and add additional entropy to your seed generation. You can roll as many times as you'd like and this is designed to reduce the trust in the devices inbuilt random number generator. The process can also be [verified](https://coldcardwallet.com/docs/verifying-dice-roll-math). If you do this additional step, after you finish your dice rolls you will see a completely new seed. Write this down, keep it safe and do not share with anyone.

<p align="center">
<img src="/assets/img/cc3.png" class=responsive width="179" height="90" maxheight="300" />
</p>

You will then be asked a series of questions based on your seed to ensure that you wrote it down correctly. 

***

### Upgrading the Coldcard Firmware

To ensure your Coldcard is running the most secure and up to date firmware, follow these steps. Alternatively you can watch a video guide [here](https://youtu.be/RYcB5HpfcaE).

[Download](https://coldcardwallet.com/docs/upgrade) the latest firmware from the Coldcard website.

<p align="center">
<img src="/assets/img/ccfirmware.png" class=responsive width="390" height="110" maxheight="300" />
</p>

Open the terminal on your computer and run `sha256sum 2021-04-29T1725-v4.1.0-coldcard.dfu`. Ensuring that you change the file name to the one you have just downloaded.

<p align="center">
<img src="/assets/img/ccshasum.png" class=responsive width="690" height="90" maxheight="300" />
</p>

Check for a match with the [published](https://raw.githubusercontent.com/Coldcard/firmware/master/releases/signatures.txt) hash.

<p align="center">
<img src="/assets/img/ccshasummatch.png" class=responsive width="690" height="90" maxheight="300" />
</p>

Now we know that the contents of the file we downloaded are the same as the one published we just need to check that the file is being produced by the person we think it is. (Peter Gray from Coinkite).

Import Peter's public key.

```
curl "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xA3A31BAD5A2A5B10" | gpg --import
```


<p align="center">
<img src="/assets/img/gpgpeter.png" class=responsive width="690" height="120" maxheight="300" />
</p>

Save the clear signed text file from [here](https://coldcardwallet.com/docs/upgrade#upgradenow) to your computer.

<p align="center">
<img src="/assets/img/cctextfile.png" class=responsive width="650" height="65" maxheight="300" />
</p>

Run `gpg --verify signatures.txt` and look for "Good Signature made from Peter D Gray"

<p align="center">
<img src="/assets/img/goodsig.png" class=responsive width="650" height="100" maxheight="300" />
</p>

Now we know the file contents are good, save the `.dfu` file onto a micro SD card. Insert the SD card into your Coldcard and power the device on. Enter your PIN and then go to `Advanced` > `Upgrade` > and then click on `From SD card`. 

The device will then install the new firmware and reboot. Enter your PIN again and go to `Advanced` > `Upgrade` >`Show Version` to verify the install went successfully.

***

### Adding Coldcard to Specter

Ensure the SD card is inserted into your device then go to `Settings` > `Multisig Wallets` > `Export XPUB`.

<p align="center">
<img src="/assets/img/coldcard00.png" class=responsive width="250" height="400" maxheight="300" />
</p>

Remove the micro SD card and insert into your computer. Open Specter and click `Add New Device`, choose Coldcard and then give the device a name. Then click `upload from SD card` and choose the  `.json` file that we just created.   


<p align="center">
<img src="/assets/img/coldcard1.png" class=responsive width="700" height="400" maxheight="300" />
</p>


Confirm by clicking `add device.`

<p align="center">
<img src="/assets/img/coldcard2.png" class=responsive width="700" height="320" maxheight="300" />
</p>

***

## Cobo Vault

Cobo Vault intro [video](https://www.keepitsimplebitcoin.com/cobo-vault-bitcoin) by Keep It Simple Bitcoin

When you receive your Cobo device, ensure that the tamper evident sticker has not been disturbed. First step is to upgrade the firmware to the Bitcoin only version to minimise the attack surface of the device. [Download](https://cobo.com/hardware-wallet/downloads?toBtc=true) the latest Bitcoin only firmware and extract the files to your computer. 

Run `sha256sum update.zip` and check it matches the checksum displayed on the downloads page.

<p align="center">
<img src="/assets/img/cobosha.png" class=responsive width="550" height="40" maxheight="400" />
</p>


<p align="center">
<img src="/assets/img/cobocheck.png" class=responsive width="500" height="170" maxheight="4000" />
</p>


Insert a micro SD card to your computer and copy the `update.zip` file onto it. Then insert the micro SD card into your Cobo Vault.

<p align="center">
<img src="/assets/img/cobosd.png" class=responsive width="200" height="250" maxheight="400" />
</p>

Go to `Menu` > `Settings` > `Version` > `Update Now`. The device should then restart.

<br/>

Power on the device and select your language and follow the on screen instructions to verify the [authenticity](https://cobo.com/hardware-wallet/web-authentication?page=hardware-wallet%2Fweb-authentication) of the device.

<p align="center">
<img src="/assets/img/coboweb.png" class=responsive width="480" height="400" maxheight="4000" />
</p>


Set a **strong** password.


<p align="center">
<img src="/assets/img/cobopass.png" class=responsive width="470" height="360" maxheight="300" />
</p>


Press `Create Vault` then triple tap on the image shown to bring up the dice rolls feature.

<p align="center">
<img src="/assets/img/cobodice.png" class=responsive width="270" height="400" maxheight="300" />
</p>

Roll a dice at least 50 times, entering each roll result as you go.

<p align="center">
<img src="/assets/img/cobodice1.png" class=responsive width="460" height="400" maxheight="300" />
</p>

You will then receive your new seed words.

<p align="center">
<img src="/assets/img/coboseed.png" class=responsive width="320" height="400" maxheight="300" />
</p>


Write down your generated seed words and press to confirm you have done so. 

You will then be asked to input all 24 words to ensure you have them written down correctly. 

<p align="center">
<img src="/assets/img/coboinput.png" class=responsive width="470" height="360" maxheight="300" />
</p>

***


### Adding Cobo Vault to Specter

Open the menu with the button in the top left of the screen then press `Multisig Wallet`.

<p align="center">
<img src="/assets/img/cobospecter.png" class=responsive width="350" height="400" maxheight="300" />
</p>

Tap the three dots in the top right corner then `Show/Export XPUB`. This will bring up a QR on screen. 

<p align="center">
<img src="/assets/img/cobospecter1.png" class=responsive width="350" height="400" maxheight="300" />
</p>

Open Specter and click `Add New Device`, choose Cobo Vault and then give the device a name. Then click `Scan  QR code` which will open your computers camera. Hold the device so that the QR code on the Cobo can be read. Once scanned, confirm with `Add Device`.

<p align="center">
<img src="/assets/img/cobospecter3.png" class=responsive width="680" height="220" maxheight="320" />
</p>

***

## Seed Signer

Seed Signer is an open source DIY signing device, built out of generic hardware that you can buy from anywhere you like. You can follow a full video walkthrough to build the device [here](https://www.youtube.com/watch?v=aIIc2DiZYcI) or follow the steps oulined below. Parts list [here](/multisig/ssparts).

> If the DIY approach is not for you, or you want to wait for signed releases, this device can be swapped for another Coldcard or [Paper Wallet](https://btcguide.github.io/setup-wallets/paper). 


Download the latest zip file from the [release page](https://github.com/SeedSigner/seedsigner/releases). 

Extract the `.img` file, insert the micro SD card into your computer and flash the file onto the SD card using [Balena Etcher](https://www.balena.io/etcher/). Once complete remove the SD card from your computer.

<p align="center">
<img src="/assets/img/ssetch.png" class=responsive width="450" height="220" maxheight="300" />
</p>

Connect the camera ribbon to the camera.

<p align="center">
<img src="/assets/img/sscamera.png" class=responsive width="450" height="400" maxheight="300" />
</p>

Place the camera lens down into the bottom of the case.

<p align="center">
<img src="/assets/img/sscamera1.png" class=responsive width="450" height="400" maxheight="300" />
</p>

Insert the micro SD card

<p align="center">
<img src="/assets/img/ssmicrosd.png" class=responsive width="450" height="400" maxheight="300" />
</p>

Insert the loose end of the camera ribbon into the Pi Zero

<p align="center">
<img src="/assets/img/sscamera2.png" class=responsive width="450" height="400" maxheight="300" />
</p>

Flip the Pi over and press into the bottom of the case.

<p align="center">
<img src="/assets/img/sscamera3.png" class=responsive width="450" height="280" maxheight="300" />
</p>

Using the spacers and long screws, secure the Pi to the case.

<p align="center">
<img src="/assets/img/sscamera4.png" class=responsive width="410" height="280" maxheight="300" />
</p>

Press the LCD screen gently down onto the pins of the Pi.

<p align="center">
<img src="/assets/img/sscamera5.png" class=responsive width="460" height="260" maxheight="300" />
</p>

<p align="center">
<img src="/assets/img/sscamera6.png" class=responsive width="460" height="230" maxheight="300" />
</p>

Fasten down the screen to the spacers using the shorter screws.

<p align="center">
<img src="/assets/img/sscamera7.png" class=responsive width="460" height="230" maxheight="300" />
</p>

Turn the top part of the case upside down and drop in the 3 buttons and joystick.

<p align="center">
<img src="/assets/img/sscamera8.png" class=responsive width="460" height="230" maxheight="300" />
</p>

With the case top still upside down, press the assembled parts together.

<p align="center">
<img src="/assets/img/sscamera9.png" class=responsive width="460" height="230" maxheight="300" />
</p>

The fully assembled device.

<p align="center">
<img src="/assets/img/ssfinished.png" class=responsive width="460" height="200" maxheight="300" />
</p>

Power on the device and wait for the home screen to appear. Then go to `Settings` > `Input/Output tests`. Work through each control to confirm each input works as expected.


<p align="center">
<img src="/assets/img/ssiotest.png" class=responsive width="460" height="240" maxheight="300" />
</p>

***

### Adding Seed Signer to Specter

Power on the device and wait for it to boot *(90 secs currently)*. Go to `Seed Tools` > `Create a Seed w/Dice`. 


<p align="center">
<img src="/assets/img/seedsigner1.png" class=responsive width="460" height="240" maxheight="300" />
</p>

Roll a dice 99 times, entering each roll result with the joystick.

<p align="center">
<img src="/assets/img/seedsigner2.png" class=responsive width="460" height="240" maxheight="300" />
</p>

You will then be shown your seed words, write them down.

<p align="center">
<img src="/assets/img/seedsigner3.png" class=responsive width="460" height="240" maxheight="300" />
</p>

Back at the main menu go to `Seed Tools` > `Store a Seed (temp)` > `Use Seed Slot 1`. This will store the seed you are about to enter to the device for as long as it remains powered on. 

Enter your seed words using the joystick and buttons. Press right on the joystick at the end to confirm the temporary save.


<p align="center">
<img src="/assets/img/seedsigner4.png" class=responsive width="460" height="240" maxheight="300" />
</p>

Now back at the main menu go to `Signing Tools` > `Generate XPUB`, press yes to used a saved seed and select `Seed Slot #1`. The device will now be showing an animated QR code.

<p align="center">
<img src="/assets/img/seedsigner5.png" class=responsive width="460" height="240" maxheight="300" />
</p>

Open Specter and click `Add New Device`, choose other and then give the device a name. Then click `Scan  QR code` which will open your computers camera. Hold the device so that the QR code on the device can be read. Once scanned, confirm with `Add Device`.

<p align="center">
<img src="/assets/img/seedsigner6.png" class=responsive width="680" height="220" maxheight="320" />
</p>




<br/>

Finished setting up your signers and importing them to Specter? Lets get started with creating the multisig [wallet](/multisig/wallet).

