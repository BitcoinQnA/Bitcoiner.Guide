---
layout: page
title: Bitcoin Wallet Guide
subtitle: Compare wallet features
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/sharewallet.png
tags: [books, test]
---

<p align="center">
  <a href="/wallet/about">About</a> |
  <a href="/wallet/mobile">Mobile</a> |
  <a href="/wallet/desktop">Desktop</a> |
  <a href="/wallet/hardware">Hardware</a> |
  <a href="/wallet/lightning">Lightning</a> |
  <a href="/wallet/compare">Compare</a>
  <br><br>
</p>

This page contains a key feature comparison for each type of wallet detailed on the site, it is not designed to be an exhaustive list of each wallet's feature set. Best viewed in landscape mode for mobile visitors.  

## Mobile Wallets

| Wallet                                                                     | Connect to own node  | Coin control | iOS | Android | Lightning | Native Segwit | Tor |
|----------------------------------------------------------------------------|----------------------|--------------|-----|---------|-----------|---------------|-----|
| [Blockstream Green](https://bitcoiner.guide/wallet/mobile/#blockstream-green) |   Y                  |  N           |  Y  |   Y     |      N    |    N          |  Y  |
| [Blue Wallet](https://bitcoiner.guide/wallet/mobile/#blue-wallet)             |    Y                 |  Y           |  Y  |    Y    |   Y *       |    Y          |  Y  |
| [Electrum](https://bitcoiner.guide/wallet/mobile/#electrum)                   |    Y                 |    Y         |  N  |   Y     |     Y     |     Y         |  Y  |
| [Fully Noded](https://bitcoiner.guide/wallet/mobile/#fully-noded)             |     Y                |     Y        |  Y  |    N    |    Y      |     Y         |  Y  |
| [Hexa](https://bitcoiner.guide/wallet/mobile/#hexa)                           |      N               |      N       |  Y  |     Y   |     N     |     Y         |  N  |
| [Muun](https://bitcoiner.guide/wallet/mobile/#muun)                           |       N              |       N      |   Y |    Y    |     N *   |      Y        |  N  |
| [Samourai Wallet](https://bitcoiner.guide/wallet/mobile/#samourai-wallet)     |        Y             |        Y     |   N |     Y   |     N     |     Y         |  Y  |


* *Blue Wallet lightning is custodial by default but allows users to connect to their own instance of LNDhub*
* *Muun allows payment of lightning invoices via submarine swaps*

***

## Desktop Wallets

| Wallet                                                                     | Connect to own node  | Coin control | Mac | Windows | Linux | Lightning  | HWW Support |
|----------------------------------------------------------------------------|----------------------|--------------|-----|---------|-------|------------|-------------|
| [Bitcoin Core](https://bitcoiner.guide/wallet/desktop/#bitcoin-core)          |   Y                  |  Y           |  Y  |   Y     |  Y    |    N       |  Y *        |
| [Blockstream Green](https://bitcoiner.guide/wallet/desktop/#blockstream-green)|   N                  |  N           |  Y  |   Y     |  Y    |    N       |  N          |
| [Blue Wallet](https://bitcoiner.guide/wallet/#blue-wallet)            |    Y                 |  Y           |  Y  |    N    |   N   |    Y       |  Y *        |
| [Electrum](https://bitcoiner.guide/wallet/desktop/#electrum)                  |    Y                 |    Y         |  Y  |   Y     |     Y |    Y       |  Y          |
| [Fully Noded](https://bitcoiner.guide/wallet/desktop/#fully-noded)            |     Y                |     Y        |  Y  |    N    |    N  |     Y      |  Y *        |
| [Lily Wallet](https://bitcoiner.guide/wallet/desktop/#lily-wallet)            |      N               |      N       |  Y  |     Y   |     Y |     N      |  Y          |
| [Specter Desktop](https://bitcoiner.guide/wallet/desktop/#specter-desktop)    |       Y              |       Y      |   Y |    Y    | Y     |      N     |  Y          |
| [Sparrow Wallet](https://bitcoiner.guide/wallet/desktop/#sparrow-wallet)      |        Y             |        Y     |   Y |     Y   | Y     |     N      |  Y          |

* *Bitcoin Core hardware wallet support is command line only* 
* *Blue Wallet hardware wallet support is only supoprted via PSBT* 
* *Fully noded only supports Coldcard via PSBT*

***

## Hardware Wallets

| Wallet                                                             | USB  | PSBT | Backup                  | Price                     | 
|--------------------------------------------------------------------|------|------|-------------------------|---------------------------|
| [BitBox02](https://bitcoiner.guide/wallet/hardware/#bitbox02)         |   Y  |  N   |  SD card (unencrypted)  | $99                       |
| [Cobo Vault](https://bitcoiner.guide/wallet/hardware/#cobo-vault)     |   N  |  Y   |  Shamir                 | $99, $149 or $479         | 
| [Coldcard](https://bitcoiner.guide/wallet/hardware/#coldcard)         |   Y  |  Y   |  Encrypted to SD card   | $120                      | 
| [Passport](https://bitcoiner.guide/wallet/hardware/#passport)         |   N  |  Y   |  Encrypted to SD card   | $199                      | 
| [Specter DIY](https://bitcoiner.guide/wallet/hardware/#specter-diy)   |   N  |  Y   |  Seed only              | $100-$200 depending on HW |  
| [Trezor](https://bitcoiner.guide/wallet/hardware/#trezor)             |   Y  |  N   |  Shamir                 | $70 or $210               |

***

## Lightning Native

| Wallet                                                    | Connect to own node  | Send/Receive on chain | iOS | Android | LND | C Lightning   | Eclair |
|-----------------------------------------------------------|----------------------|-----------------------|-----|---------|-----|---------------|--------|
| [Alby](https://bitcoiner.guide/wallet/lightning/#alby)     |   Y                  |  N        |  N  | N       | Y   | Y             | Y      |
| [Breez](https://bitcoiner.guide/wallet/lightning/#breez)     |   Y                  |  Y (via swaps)        |  Y  | Y       | Y   | N             | N      |
| [Phoenix](https://bitcoiner.guide/wallet/lightning/#phoenix) |   Y                  |  Y (via swaps)        |  N  | Y       | N   | N             | Y      |
| [Zap](https://bitcoiner.guide/wallet/lightning/#zap)         |   Y                  |  Y                    |  Y  | Y       | Y   | N             | N      |
| [Zeus](https://bitcoiner.guide/wallet/lightning/#zeus)       |   Y                  |  Y                    |  Y  | Y       | Y   | Y             | Y      |



