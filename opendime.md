---
layout: page
title: Opendime
subtitle: Physical bitcoin storage + transfer
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/shareopendime.png
---

## What is Opendime?

Opendime is a USB stick made by [Coinkite](https://coinkite.com/) that allows you to transact bitcoin in the same way you would a dollar bill, by physically handing it from one person to the next. As wonderful and innovative as Bitcoin is, the very nature of its structure means that every single transaction is 100% public, which can be troublesome if you do not take proper precautions. 

## Why use Opendime?

Opendime transactions are completely 'off chain' meaning that, like traditional cash transactions, they are completely untraceable. You simply load the device with any amount of bitcoin and physically hand it over to the recipient when you want to pay for something. The recipient can easily verify the amount of bitcoin stored within and that the private key has not been accessed so that they cannot be cheated out of any sats.

Anyone looking at the chain would not have a single clue that transaction had taken place because nothing 'on chain' has changed. The exact same bitcoin is still sitting in the exact same address. The only change is that you no longer have access to spend the bitcoin in the associated address. A single Opendime can change hands and facilitate thousands of transactions without the bitcoin EVER moving on chain. Not only does this help save valuable chain space and saves all but the very first user 100% of their miner fees, it also provides huge privacy benefits for anyone using it and negates the need to wait for on chain confirmations. 

## How does it work?

**1.** Plug your fresh Opendime into your pc or laptop and open up the Opendime folder like you would any other USB drive. You should see a both lights flash once and then a continuous blink from the green light. This indicates that the device is still sealed and the private key has not been accessed. The `readme.txt` contains in depth instructions on the use of the device and the `index.htm` give you the quick setup guide.

<p align="center">
<img src="/assets/img/od1.png" class=responsive width="600" height="230" maxheight="300" />
</p>

**2.** Drag and drop a number of pictures or files onto the drive. The Opendime uses the data contained in these files as a source of randomness for its private key generation. It doesn't matter what files you use and they will not be saved. Just keep going until the Opendime ejects itself.

**3.** Reopen the Opendime and you will now see an `address.txt`, a **QR code** and a `private-key.txt`. The address.txt file contains the bitcoin address for funding the Opendime. The QR code is also that same address just in an easy to scan format. Finally the private-key.txt contains the Opendime's private key for spending. At this time the private-key.txt file is useless and you will not be able to access until the Opendime is unsealed.

<p align="center">
<img src="/assets/img/od2.png" class=responsive width="580" height="400" maxheight="300" />
</p>

**4.** Open up the `index.htm` file and you will see your address in standard and QR format. You can check its balance (which will obviously be empty) and verify that the device is still sealed and the private key has not been accessed. 

*I have blanked out addresses and amounts to protect my privacy.*

<p align="center">
<img src="/assets/img/od3.png" class=responsive width="300" height="450" maxheight="300" />
</p>

<p align="center">
<img src="/assets/img/od4.png" class=responsive width="400" height="300" maxheight="300" />
</p>

**5.** You can now fund your Opendime by sending the desired amount of sats to the address shown. After a very short time the balance will be reflected in `index.htm`. Alternatively you can check the address using a block explorer of your choice. 

Your opendime is now ready for you to transact with whoever you like, completely off chain.

<p align="center">
<img src="/assets/img/od5.png" class=responsive width="445" height="400" maxheight="300" />
</p>

## Receiving an Opendime

We will now continue the guide from the recipient's perspective.

**6.** So you're exchanging something for bitcoin (good move!). First thing you're going to want to do is verify the balance on the Opendime is what your counterpart says it is. There are two way's you can do this, the first is essentially the same as step 5. Plug the Opendime into a PC or laptop, check for green lights to indicate the device is still sealed and the verify the balance via **index.htm **or by checking a block explorer of your choice.

The second option *(and coolest if you ask me)* is to verify it using Samourai Wallet on your Android phone. Simply plug the Opendime into your phone and check that you see only the blinking green light. Open Samourai Wallet and you will be greeted with the address, balance and the status of the private key on the device.

*Note - To connect the Opendime to your phone you will need an adapter *[*like this*](https://www.amazon.com/Syntech-Adapter-Thunderbolt-Compatible-MacBook/dp/B07CVX3516/ref=sr_1_4?crid=1F4RYHURNOWFX&amp;dchild=1&amp;keywords=usb+c+to+female+usb&amp;qid=1591821748&amp;sprefix=usb+c+to+female%2Caps%2C224&amp;sr=8-4)* (Depending on your phone ports you may need a slightly different adapter)*

<p align="center">
<img src="/assets/img/od6.png" class=responsive width="600" height="850" maxheight="300" />
</p>

**7.** You now have two choices, you can keep your newly acquired bitcoin on the Opendime to use in a future, private transaction. You can even add to the balance if you need to use it to purchase something of greater value. Just bear in mind that the previous holder of the Opendime knows the address and will be able to see any on chain activity relating to it. 

Alternatively you can access the private key on the device and withdraw the sats to another wallet you control. The latter is the path I'm going to outline next.

**8.** To spend from an Opendime, we need to access that private key. This unseals the device which is an irreversible process. To do so you need to pop a sharp object through the white circle on the back of the board. This will pop out a small chip and permanently unseal the Opendime, exposing the private key and allowing the funds to be spent.

<p align="center">
<img src="/assets/img/od7.png" class=responsive width="556" height="169" maxheight="300" />
</p>

**9.** Now, when plugged into a PC or laptop you will noticed that both the red and green lights flash indicated that the deivce is unsealed. When you open `index.htm` you will be greeted with a warning that the device is now unsealed and the private key is accessible.

<p align="center">
<img src="/assets/img/od8.png" class=responsive width="320" height="350" maxheight="300" />
</p>

**10.** Now that you have access to the private key you can spend in two main ways. The first is to import the private key into a wallet like Electrum or Bitcoin Core if you have access to a PC or laptop. The easier option, especially for times when you're on the go, is to use your Samourai Wallet. 

Plug the device in and you will now see a 'Sweep' button in the bottom right hand corner press this and then confirm the next screen and the Opendime balance will be sent on chain into your Samourai Wallet.

<p align="center">
<img src="/assets/img/od9.png" class=responsive width="660" height="675" maxheight="300" />
</p>

---

## A couple of things worth noting...

**1.** Due to their design, Opendimes are not designed to for cold storage of large amounts of funds. **Anyone with physical access to the device can steal all of the funds.**

**2.** They sell for around $16 each, so it isn't worth buying one for a $5 transaction!

---

In summary, I love the Opendime and think it's a really neat little idea for using Bitcoin in a private way. However, I don't think most bitcoiners will realise their true value proposition until they have a reason to look for off chain solutions. Scenarios like chain fees rising significantly or chain analysis becoming much more prevalent than it is today.

If you want to try Opendime for yourself visit [their website](https://opendime.com/) and for a video guide visit the [TFTC Youtube](https://www.youtube.com/watch?v=BlIeP7b2AFg). 

*Disclaimer - All views expressed in this article are my own and not those of the Coinkite team. I am not affiliated with Coinkite in any way.*


