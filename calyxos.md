---
layout: page
title: Calyx OS
subtitle: Android, minus Google!
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/sharecalyx.png
---

<p align="center">
<img src="/assets/img/calyxlogo.svg" class=responsive width="250" height="250" maxheight="300" />
</p>

## What is CalyxOS?

[CalyxOS](https://calyxos.org/) is a privacy focused, 'de-googled', free + open source (FOSS) version of the Android operating system built by the [Calyx Institute](https://calyxinstitute.org/projects/calyx-os).

> CalyxOS minimizes the tracking, surveillance, and spying done by phone manufacturers, mobile phone service providers, internet service providers, advertising companies, data miners, and malicious hackers. The operating system is designed to ensure maximum usability and flexibility, so that you have an array of choices available to ensure your privacy and security.


## Why should I use CalyxOS?

CalyxOS is Android, with all of Google's spyware, trackers and bloat stripped out. By default it uses the [F-droid](https://www.f-droid.org/) FOSS app store to install and update applications. Users can also download [Aurora](https://auroraoss.com/) , a Play Store mirror that allows access to any app without the need for a Google account.

Instead of all the nasty stuff pre-installed on stock Android, CalyxOS includes a suite of privacy and security focused apps upon first boot. As you'd expect from a piece of FOSS, these are completely optional, but a nice touch when getting started. They include Signal (encrypted calls and messages), the privacy focused/ad blocking web browsers Tor + DuckDuckGo.  Encrypted email thanks to K-9, which also supports OpenKeyChain and Yubikey. CalyxOS also comes with a free VPN service.

For some great FOSS app recommendations, have a read of [this article](https://sethsimmons.me/posts/switching-to-calyxos/). 

## microG

A problem faced by anyone getting started with privacy focused Android forks is the loss of features from certain popular apps that most of us have become accustomed to. Things like :-
* Push notifications (although many apps like Telegram still function perfectly)
* Google based location services

When getting started with CalyxOS you'll have the option to enable a feature called [microG](https://microg.org/). microG is essentially an open source alternative to the proprietary [Google Play Services](https://en.wikipedia.org/wiki/Google_Play_Services). If enabled upon startup (*you cannot enable it afterwards*), microG takes care of push notifications and location services in a more controlled way when compared with the standard Google option. 

If installed, microG can be allowed access on a 'per app' basis and you can read more about how this is implemented [here](https://calyxos.org/features/microg/).


## Is CalyxOS available for my phone?

Ironically, CalyxOS is predominantly supported on Google Pixel devices. [Here](https://calyxos.org/get/) is a full list of all supported devices. 

<p align="center">
<img src="/assets/img/Calyx0.png" class=responsive width="550" height="300" maxheight="300" />
</p>{: .shadow}

## Calyx vs other Android forks

Calyx is by no means the only privacy focused Android alternative. Other options include

* [GrapheneOS](https://grapheneos.org/) (*The most private option with security as #1 focus*)
* [Copperhead](https://copperhead.co/android/) (*Similar to Graphene but currently closed source and not free*)
* [LineageOS](https://lineageos.org/) (*Wider device support but less secure*)

The most popular option is GrapheneOS, you can see a very detailed comparison video of the two [here](https://www.youtube.com/watch?v=7iS4leau088).

**TLDR** - Graphene is absolutely the most secure but suffers from slower performance and a lack of push notifications. Calyx offers a slicker day to day usability but surrenders some security features.

## How do I install CalyxOS?


1 - Ensure you have an unlocked device from the supported [list](https://calyxos.org/get/)

2 - [Download](https://calyxos.org/get/install/) the Calyx flashing tool relevant to your computers operating system

<p align="center">
<img src="/assets/img/Calyx1.png" class=responsive width="550" height="150" maxheight="300" />
</p>

3 - [Download](https://calyxos.org/get/) the software relevant to your device

4 - Place both files into a new folder

<p align="center">
<img src="/assets/img/calyx4.png" class=responsive width="550" height="100" maxheight="300" />
</p>

5 - Open this folder in the Terminal application of your computer

6 - Verify that the SHA256 has of the two downloaded files match those listed on the Calyx website. 

*Ensure you amend the commands below to match the specific files you downloaded*

`sha256sum device-flasher.linux`

`sha256sum sargo-factory-2021.03.03.09.zip`

> Mac users should use the command `shasum -a 256 [path to file]` when verifying checksums.


<p align="center">
<img src="/assets/img/calyx3.png" class=responsive width="550" height="100" maxheight="300" />
</p>


7 - Plug the device into the computer

8 - In the Terminal run the command to start the flashing process

-   Linux: `chmod +x ./device-flasher.linux; ./device-flasher.linux`
-   macOS: `chmod +x ./device-flasher.darwin; ./device-flasher.darwin`
-   Windows: `.\device-flasher.exe` 


<p align="center">
<img src="/assets/img/calyx6.png" class=responsive width="550" height="210" maxheight="300" />
</p>


9 - Follow the instructions above in yellow text to ensure your device is ready to be flashed


<p align="center">
<img src="/assets/img/calyx15.png" class=responsive width="250" height="370" maxheight="300" />
</p> 
 
 
10 - When instructed to do so, use the volume buttons on the phone the set the bootloader to 'unlock'. Confirm your choice with the power button


<p align="center">
<img src="/assets/img/calyx7.png" class=responsive width="550" height="35" maxheight="300" />
</p>


11 - The flashing script will now run for approximately 3-5 minutes. Do not touch the phone unless prompted to do so from the terminal window on your computer


12 - When prompted to do so, use the volume keys on the device to set the bootloader to 'locked'. Confirm your choice with the power button.


<p align="center">
<img src="/assets/img/calyx9.png" class=responsive width="550" height="200" maxheight="300" />
</p>



13 - Congratulations, you have successfully flashed CalyxOS onto your phone.


<p align="center">
<img src="/assets/img/calyx13.png" class=responsive width="250" height="370" maxheight="300" />
</p>


<p align="center">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/s59Ld9Y8YyE" class=responsive title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

## Where can I learn more?

* Visit the CalyxOS about [page](https://calyxos.org/about/)
* Find FAQ on their [Reddit](https://www.reddit.com/r/CalyxOS/)
* Read [this](https://sethsimmons.me/posts/switching-to-calyxos/) great article by Seth Simmons
* Read [this](https://www.econoalchemist.com/post/mobile-privacy-with-a-pixel-4a-calyxos) great article by Econoalchemist
* Watch [this](https://youtu.be/heVNcdq2MKA) intro video
* Reach out to [me](/contact ) if you have any specific questions before diving in





