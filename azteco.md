---
layout: page
title: Azteco 
subtitle: Non-KYC Bitcoin Vouchers
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/QNA_IMG.png
---

<p align="center">
  <a href="#what-is-azteco">Intro</a> |
  <a href="#preparation">Preparation</a> |
  <a href="#buy-vouchers">Buy Sats</a> |
  <a href="#faq">FAQ</a> |
  <a href="#learn-more">Learn More</a> 
</p>

<br/>

<p align="center">
<img src="/assets/img/azteco-logo.png" class=responsive style="max-width: 80%; height: auto;" />
</p>

<br/>

## What is Azteco?

Azteco is a service that offers a unique, easy, and private way to purchase Bitcoin. It allows users to buy Bitcoin using a voucher system, like purchasing a prepaid phone card, without sacrificing personal information.

The process is simple - users buy a voucher with a unique code from a participating location or online store and then redeem this code on the Azteco website. The equivalent Bitcoin value is transferred directly to the user's wallet upon redemption. 

## Preparation

### Bitcoin Wallet 

You need a Bitcoin wallet where you will receive the funds. In this guide, we will leverage a new feature from [Envoy](https://foundationdevices.com/envoy/) called "Azteco Voucher Redemption". This feature lets you scan Azteco's QR code and directly transfer sats to your Passport or Envoy wallet. Otherwise, you need a receiving Bitcoin address from any standard wallet.

If you need a Bitcoin wallet, consider the following options:

**On-chain wallets:**
- [Envoy](https://foundationdevices.com/envoy/) – Android/iOS
- [Samourai Wallet](https://samouraiwallet.com/) – Android Only
- [Sparrow Wallet](https://sparrowwallet.com/) – Desktop

**Lightning wallets:**
- [Zeus](https://zeusln.app/) – Android/iOS
- [Phoenix](https://phoenix.acinq.co/) – Android/iOS
- [Blixt](https://blixtwallet.github.io/) – Android/iOS

## Buy Vouchers

*Note that Azteco offers lightning and on-chain vouchers. In this guide, we will buy an on-chain voucher.*

### Physical Vendors
The **best** way to acquire your Azteco voucher is through its network of vendors. Check Azteco [official resellers' map](https://azte.co/find_a_vendor) and see if you can trade cash for sats in your local area. This is the most private way to acquire vouchers as you can pay with cash and bypass requests for identification.

### Order online from Azteco
Azteco offers a hybrid online and in-person service, available in a variety of countries, that allows you to purchase Bitcoin vouchers. The service provides numerous payment methods, including cash, bank transfer, and credit card. Azteco has [cash-in locations](https://azte.co/pay-in-person) across several countries including Brazil, Colombia, Mexico, Peru, Chile, Costa Rica, South Africa, Ghana, Uganda, Zambia, and Ireland.

Start by navigating to the [Pay-in-person](https://azte.co/pay-in-person) page. This page will provide you with all the necessary instructions to order your voucher online. You need to fill-up a form in order to get a bar code. Once you have this bar code you can go to any of the Azteco-affiliated physical locations. This physical vendor will scan your barcode and collect your payment. The vendor will communicate this transaction to Azteco. Once payment is confirmed, Azteco emails you the voucher.

Choosing this alternative might require you to provide personal data, like your TaxID as used in Brazil, for instance. Ensure that you have thoroughly reviewed the requirements, as this service might closely resemble the Know Your Customer (KYC) exchanges.

### Online resellers
If there aren't any Azteco vendors in your area, you can purchase a voucher online from [approved retailers](https://help.azte.co/article/97-buy-an-azteco-bitcoin-voucher-online-store) like G2A or Kinguin. However, it's important to remember that online purchases will require an email address/phone number and potentially less private payment methods compared to cash transactions. Providing such information like your phone number could potentially link your purchase to your personal identity.

If you're keen on maintaining your privacy while shopping online, here are some strategies to consider:

- Consider using an [email alias](https://simplelogin.io/). This tool allows you to disguise your actual email address, adding an extra layer of privacy. Note that some services may block or flag sign-ups from alias services.
- If an online retailer requires your address for the purchase, you might use a fake address generator like [Prepostseo](https://www.prepostseo.com/tool/fake-address-generator) to create a fictitious one. Depending on the retailer's terms of service, providing false information could lead to issues or account termination. 
- Utilize a temporary phone number or "phone burner" if the retailer requires phone verification. Similar to the email aliases, some services may flag or block these numbers. 
- Purchase a [Paysafecard](www.paysafecard.com) at a local shop and use it for your online transactions. This way, you won't need to use your credit card information online.
- If possible, ask a friend or family member to purchase the voucher on your behalf, and reimburse them in cash. This could help to preserve your anonymity. 

Once you have your voucher, it is time to redeem it. For reference, here is what the coupon looks like:

<p align="center">
  <img src="/assets/img/azteco-voucher-example.png" class="responsive" style="max-width: 80%; height: auto;" />
</p>

## Voucher acquisition opinion
If you don't have a local vendor around you, you'd be better off using non-KYC services such as [Bisq](/bisq), [Robosats](/robosats), [HodlHodl](/hodlhodl), [Peach Bitcoin](/peach) or [AgoraDesk](/agora). These services offer greater privacy than online Azteco vouchers.

Bitcoiner.guide has step-by-step guides for all of these alternatives. Don't hesitate to reach out if you have any questions!

## Redeem your Voucher

*Note that Azteco is required to collect the IP address of the device redeeming a voucher. For improved privacy, use a VPN such as [iVPN](https://www.ivpn.net/) or [Mullvad](https://mullvad.net/en).*

### Envoy

Download [Envoy](https://foundationdevices.com/envoy/) from the following links and generate a fresh hot wallet if you don't have one. Although the process is straightforward, you can find Envoy's docs [here](https://docs.foundationdevices.com/envoy). Alternatively, if you own a [Passport](https://foundationdevices.com/passport/) (hardware wallet), you can use Envoy to redeem the voucher directly there. 

- [Github](https://github.com/Foundation-Devices/envoy/releases)
- [F-Droid](https://foundationdevices.com/fdroid/)
- [Google Play Store](https://play.google.com/store/apps/details?id=com.foundationdevices.envoy)
- [App Store](https://apps.apple.com/us/app/envoy-by-foundation/id1584811818)

<p align="center">
  <img src="/assets/img/azteco-home-page.png" class="responsive" style="max-width: 90%; height: auto;" />
</p>

Open Envoy, select the account you wish to send sats to and press the scan button. 

<p align="center">
  <img src="/assets/img/azteco-envoy-01.png" class="responsive" style="max-width: 80%; height: auto;" />
</p>

Scan the Azteco voucher, confirm the redemption and press continue. You should see an Azteco pending UTXO. You simply need to wait for the network to confirm the transaction.

<p align="center">
  <img src="/assets/img/azteco-envoy-02.png" class="responsive" style="max-width: 80%; height: auto;" />
</p>

### Other wallets
If you don't want to use Envoy or purchase a lightning voucher, don't worry; the process is as easy as the on-chain.

#### On Chain
Navigate to [azte.co](https://azte.co/). Enter your 16-digit and your on-chain receiving address.

<p align="center">
  <img src="/assets/img/azteco-home-page-redeem.png" class="responsive" style="max-width: 90%; height: auto;" />
</p>

#### Lightning
I'd recommend [Phoenix](https://phoenix.acinq.co/) for a more approachable yet non-custodial lightning wallet. 

Download Phoenix for your relevant mobile operating system: 

- [iOS](https://apps.apple.com/us/app/phoenix-wallet/id1544097028)
- [Google Play Store](https://play.google.com/store/apps/details?id=fr.acinq.phoenix.mainnet)
- [APK](https://github.com/ACINQ/phoenix/releases)

Open the app, read the welcome pages, and create a new wallet. 

<p align="center">
  <img src="/assets/img/azteco-other-wallet-01.png" class="responsive" style="max-width: 80%; height: auto;" />
</p>

Once your wallet is created, navigate to the settings in the top left corner and go to "Recovery Phrase".

<p align="center">
  <img src="/assets/img/azteco-other-wallet-02.png" class="responsive" style="max-width: 80%; height: auto;" />
</p>

Read the warnings and the responsibilities that come with self-custody and click "Display Seed". Grab a piece of paper, and note down your recovery phrase. You must keep these offline and secure. Never share these with anyone.  

<p align="center">
  <img src="/assets/img/azteco-other-wallet-03.png" class="responsive" style="max-width: 80%; height: auto;" />
</p>

Finally, navigate to [azte.co](https://azte.co/). Enter your 16-digit voucher code to receive your QR code.

<p align="center">
  <img src="/assets/img/azteco-home-page.png" class="responsive" style="max-width: 90%; height: auto;" />
</p>

Open Phoenix, and click on "Send" to open the camera. Scan the QR code on the voucher and press "Redeem". Congrats!

## FAQ

### What's the market price of Bitcoin when purchasing the voucher? 

When you buy an Azteco voucher, the amount of Bitcoin you will receive is calculated using the market exchange rate at the time of purchase. However, depending on the website, you might have payment fees or commission fees on top of your purchase.

### What are the fees? 

Individual retailers selling Azteco vouchers establish the commission fees. You can view the commission and network fee at the bottom of your voucher, and retailers are expected to disclose these costs beforehand. If they don't, feel free to inquire. 

For instance, the approved retailer ENEBA discloses the following: *The bitcoin value of the voucher is calculated using the market price of bitcoin at the time of purchase. Azteco vouchers purchased from **Eneba include a 10% commission fee**. On-chain vouchers also include a "Network fee" to cover the cost of processing your voucher using the Main Bitcoin Network.*

Azteco vouchers might come with an additional "Processing fee" in certain countries. This fee covers the expenses related to processing payments in your local currency. Neither Azteco nor individual retailers determine this fee. 

If you order your voucher from Azteco through the pay-in-person option, you can read the following regarding fees: **7% commission + processing fee applies. Processing fees: Europe & Latin America $1.00 USD - Africa $0.00 USD**

### Can I sell vouchers?
Yes! As a business owner, you can offer Azteco vouchers to your customers. It opens up a new form of revenue for your business and attracts Bitcoiners in your area. You do not interact with Bitcoin or have to worry about the exchange rate; instead, you print vouchers from your top-up balance.  

You need to open an account with Azteco to become a vendor. This involves signing up and providing documents such as proof of residence, ID and selfie. 

You can learn more and become a vendor [here](https://azte.co/vendor_application).

## Learn More

- Official [website](https://azte.co).
- Official [resellers' map](https://azte.co/find_a_vendor).
- Official [resellers](https://help.azte.co/category/6-buy-a-voucher).
- [Azteco Raises $6M In A Seed Funding Round Led By Jack Dorsey](https://www.nobsbitcoin.com/azteco-raises-6m/).
- [Q&A with Akin Fernandez, Founder of Azteco](https://www.youtube.com/watch?v=tHxqroXSMqg).

#### About the writer
Hi, I'm Bitlevi! I crystallise what I learn on my journey to sovereignty by writing about Bitcoin and FOSS tools. Feel free to message me on [Twitter](https://twitter.com/Bit_levi). If you enjoyed this guide and want to donate, here is my [PayNym](https://paynym.is/+shinyfrost520)!

If you prefer donating with lightning, support bitcoiner.guide [here](/tips).

*Disclaimer - All views expressed in this article are our own, not those of the Azteco team. We are not affiliated with Azteco.*

