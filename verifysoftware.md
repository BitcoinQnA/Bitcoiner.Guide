---
layout: page
title: Verifying Software
subtitle: An important step when downloading Bitcoin software
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/shareverifysoftware.png
---

Verifying software sounds like a really scary thing that only 'technical people' do, which is the exact reason that until very recently, I didn't bother either! 

**"*I've never had a problem before, so why should I start now*?"**

Most people download software from 'App Stores' by verified organisations like Apple or Microsoft, during which the verification process is done for you. However, seems as you are here reading this article, I'm going to presume you like Bitcoin and using Bitcoin related open source software. To most newcomers, downloading free and open source software from somewhere like Github can feel a little bit like the Wild West. This is where having the knowledge to verify the software you're downloading is from the source you expect and contains the exact contents as those supplied by the developer, can come in very handy.

What happens if you don’t verify your software? Most of the time nothing at all. Other times, malicious software can infect your computer with malware that looks identical to the software you expect to see, but could be built to steal every sat you possess. This software could be the interface through which you interact with your life savings. Five minutes following this guide seems like a worthwhile investment now doesn't it?

---

## BASIC CONCEPTS

Some of the basic concepts and terminology used here may be familiar to those in Bitcoin. The principles and the way they work in relation to software is the same.

**Private Key** - A secret known only to its owner. It can be used to sign files or messages

**Public Key** - A publicly shareable ID that can be used to validate that a message or signature has come from its corresponding private key.

**Signature** - Provided by the private key as a type of proof which can be confirmed using the corresponding public key.

**SHA256** - A function which, when performed on any file will produce a string of letters and numbers as an output. This output can be compared with other produced outputs to verify the contents of the file are an exact match.

<br/>

## Verifying Specter Desktop

The following steps were done on a Linux machine, but the commands are identical for MacOS. The only difference being the name of the file downloaded in step 1, for Mac it will be a ***.dmg***file.

**1.**[Download](https://github.com/cryptoadvance/specter-desktop/releases) the latest version of Specter Desktop relevant to your computer's operating system. Then download the `sha256.signed.txt` file to your downloads folder.

<p align="center">
<img src="/assets/img/verify1.png" class=responsive width="544" height="255" maxheight="300" />
</p>


**2.** Next, we need to download the key that signs these releases. Depending on the software you are using you can obtain this in a number of different ways. In the case of Specter Desktop, it is signed by [Stepan Snigirev](https://github.com/stepansnigirev). A file containing his public key is provided as a download link on their [releases page](https://github.com/cryptoadvance/specter-desktop/releases) (it is the `.asc` file), save it to your downloads folder.

<p align="center">
<img src="/assets/img/verify2.png" class=responsive width="663" height="145" maxheight="300" />
</p>

It is always advisable to obtain the public key from a reputable source such as an official website, but it is good practice to verify the key from a second source. You can search for a public key using a name or email [online](https://keyserver.ubuntu.com/pks/lookup?search=stepan+snigirev&amp;fingerprint=on&amp;op=index). Comparing the fingerprint (*a shortened version of a public key*) displayed from the two sources is a good way to quickly verify the public key is the same.

Another way to obtain a public key is from a publicly posted PGP block like [mine](/pgp). Simply save the entire block as a text file onto your computer.

**3.** Now we need to import that public key into your computer's key chain so it can use it as a reference in the steps that follow. Open your downloads folder, right click and then "open in terminal". In the terminal, type the command below.

`gpg --import ss-specter-release.asc`

<p align="center">
<img src="/assets/img/verify3.png" class=responsive width="663" height="131" maxheight="300" />
</p>

**Side note** - If using this guide for different software or have imported the key using a text file then you should modify the file part of the command above to suit the file name you gave. 

***Pro Tip** - Once you start typing a filename in terminal, pressing the tab button should auto complete for you.*

**4.** Now we need to make sure that the signed release was actually signed by the person we think it was. The command below will check that the signature in the `sha256.signed.txt` file we downloaded in step 1 came from Stepan's key which we imported in step 3.

*Depending on the software you are downloading, some projects will provide a `.sig` file instead of a `.txt` file but the principle is identical.*

`gpg --verify sha256.signed.txt`

<p align="center">
<img src="/assets/img/verify4.png" class=responsive width="663" height="148" maxheight="300" />
</p>

Note the `Good signature from Stepan Snigirev`. We can now be confident that the file we downloaded in step 1 is signed by Stepan with his private key.

**5.** Finally, we need to ensure the contents of the file signed by Stepan are the exact same as the contents of the file we downloaded. Run the following command.

`sha256sum specter_desktop-v1.0.0-x86_64-linux-gnu.tar.gz`

<p align="center">
<img src="/assets/img/verify5.png" class=responsive width="663" height="103" maxheight="300" />
</p>

When we compare the output from the command above with the publicly shared SHA256 hash file below, we get an exact match *(see line 6)*. This means that the contents of the file we have downloaded are an exact match to the one the developers have signed for release.

<p align="center">
<img src="/assets/img/verify6.png" class=responsive width="663" height="230" maxheight="300" />
</p>

Had there have been one single byte of data different in the file we downloaded, compared with the one Stepan signed, the output from step 5 would look completely different and would suggest that something is wrong. In this scenario you should reach out to the developer team.

---

It might seem like a pain to verify software, particularly if there are regular releases. But think of the potential risks of not doing this. It only takes one piece of malicious software for a successful attack.

This guide used Specter Desktop as an example, but all open source software should follow an almost identical path. 

Remember...

- Import the developers public key (*you only need to do this once*)
- Check the signature came from that developers key
- Check the contents of the file match the contents of the file the developer produced

---

If you need help getting started with software verification, I offer private [support calls](/support) for those that benefit from more personalised tuition.



