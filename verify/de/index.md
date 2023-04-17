---
layout: page
title: Verify.Supply
subtitle: Run the numbers
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareverifysupply.png
tags: [books, test]
---

<p align="center">
  <a href="/verify/de">Deutsch</a> |
  <a href="/verify/es">Español</a> |
  <a href="/verify/fr">Français</a> 
  <br><br>
</p>

Weißt du, wie viele Dollar jemals gedruckt wurden?

Weißt du, wie viel Gold jemals abgebaut wurde?

Die Antwort auf beide Fragen ist nein. Bestimmte Personen der Regierung mögen in Informationen eingeweiht sein, die es ihnen erlauben, eine fundierte Vermutung anzustellen. Aber Tatsache ist, dass **niemand auf dieser Welt** diese Fragen mit irgendeiner Art von Genauigkeit beantworten kann. Bitcoin ist in dieser Hinsicht anders.

Zum ersten Mal in der Geschichte der Menschheit hat jeder die Freiheit, die **exakte** Gesamtmenge eines globalen Geldwertes herauszufinden, ohne um Erlaubnis bitten zu müssen oder sich auf jemand anderen verlassen zu müssen. Alles, was benötigt wird, ist eine [Node](https://node.guide) und etwa 10 Minuten deiner Zeit.  

***

## Wie?

Die Überprüfung des Gesamtbestandes aller existierenden Bitcoins ist wesentlich einfacher, als du dir vielleicht vorstellst. Wenn du deine eigene Node hast, kannst du dies jederzeit tun, so oft du willst, in dem sicheren Wissen, dass du nur deiner eigenen Hardware und Open-Source-Software vertraust.

### Eigenständige Node

1. Richte dir deine [Node](/node) ein und warte, bis der erste Blockchain-Download (initial block download) abgeschlossen ist
2. Greife per SSH auf deine Node zu. Anweisungen dazu findest du auf den Dokumentationsseiten deiner Node. Mac- und Linux-Benutzer sollten dies über "Terminal" tun, Windows-Benutzer können [Putty](https://www.putty.org/) herunterladen und verwenden.
3. Gebe den folgenden Befehl ein: `bitcoin-cli gettxoutsetinfo`
4. Warte ab. Abhängig von deiner Hardware kann es bis zu 10 Minuten dauern

### Eigenständige Node (ohne SSH)

Die meisten gängigen Node-Implementierungen werden mittlerweile mit einer lokalen Version von [diesem Explorer](https://explorer.btc21.org/) ausgeliefert, mit der du RPC-Befehle über die grafische Benutzeroberfläche ausführen kannst. Navigiere einfach zum Abschnitt "RPC-Browser" und klicke auf "gettxoutsetinfo" und dann auf "execute".

Auch hier gilt, dass dies je nach Hardware bis zu 10 Minuten dauern kann.

<img src="/assets/img/RPC1.png" class=responsive width="450" height="300" maxheight="300">


### Bitcoin Core

1. Lade [Bitcoin Core](https://bitcoin.org/en/download) herunter und installiere es. Warte, bis der erste Blockchain-Download (initial block download) abgeschlossen ist
2. Öffne die "Konsole" in Bitcoin Core und gebe "gettxoutsetinfo" ein.
3. Warte ab. Abhängig von deiner Hardware kann es bis zu 10 Minuten dauern.

### Andere Optionen

Sobald du mit deiner Node verbunden bist, kannst du mit den folgenden Anwendungen die Anzahl aller Bitcoins auf Knopfdruck überprüfen

* [Fully Noded](https://fonta1n3.github.io/FullyNoded/)
* [Specter Desktop](https://github.com/cryptoadvance/specter-desktop)

***

Nach einer kurzen Wartezeit solltest du ein Ergebnis sehen, welches etwa so aussieht...

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

## Berechnungen

Wie kam meine Node also zu dem Schluss, dass zu dem Zeitpunkt, als ich `gettxoutsetinfo` ausgeführt habe, insgesamt 18.537.233,94446619 Bitcoins von der [bekannten](https://en.bitcoin.it/wiki/Controlled_supply) endgültigen Angebotsobergrenze von etwas unter 21.000.000 vorhanden waren?

Bitcoin hat einen festen Emissionsplan (emission schedule), der mit jedem Halbierungsereignis (halving event), welches alle 210.000 Blöcke (etwa vier Jahre) stattfindet, abnimmt. Diese Perioden werden manchmal als "Belohnungs-Äras" ("reward eras") bezeichnet. Hier ist eine Zusammenfassung des Angebots in den verschiedenen Ären bis zum Zeitpunkt des Schreibens.

* Belohnungs-Ära 1 = 50 Bitcoins pro Block
* Belohnungs-Ära 2 = 25 Bitcoins pro Block
* Belohnungs-Ära 3 = 12,5 Bitcoins pro Block
* Belohnungs-Ära 4 (aktuell) = 6,25 Bitcoins pro Block

Nachdem wir das verstanden haben, können wir die erwartete Menge an Bitcoins bei jeder gegebenen Blockhöhe berechnen.

* Belohnungs-Ära 1 = (50 * 210.000) = **10.500.000**
* Belohnungs-Ära 2 = (25 * 210.000) = **5.250.000**
* Belohnungs-Ära 3 = (12,5 * 210.000) = **2.625.000**
* Belohnungs-Ära 4 = (6,25 * (655.987 - 629.999)) = **162.425**

*655.987 = Die Blockhöhe zum Zeitpunkt der Ausführung von gettxoutsetinfo*  
*629,999 = Die Höhe des letzten Blocks vor der aktuellen Belohnungs-Ära*  
*Wenn wir das eine vom anderen abziehen, ermitteln wir, wie viele Blöcke in der aktuellen Belohnungs-Ära vergangen sind

Wenn wir alles zusammenzählen, erhalten wir **18.537.425** Bitcoins als erwarteten Bestand.

Meine Node hat jedoch berechnet, dass es bei Blockhöhe 655.987 tatsächlich **18.537.233,94446619** waren.

***

## Fehlende Bitcoin?

Warum sollte meine Node berechnen, dass es tatsächlich **191,05553381** weniger Bitcoins gibt, als nach dem definierten Emissionsplan vorhanden sein sollten?  

Es gibt eine Reihe von Gründen, die sehr detailliert in [diesem Artikel](https://fjahr.com/posts/where-are-the-coins/) von [Fjhar](https://twitter.com/fjahr) erläutert werden oder du kannst eine kürzere Version in [dieser](https://bitcoin.stackexchange.com/questions/38994/will-there-be-21-million-bitcoins-eventually/38998#38998) Bitcoin-Stack-Exchange Antwort lesen.

Hier ist eine sehr kurze Zusammenfassung...

1. Es ist im Bitcoin-Code kodiert, dass die [Genesis-Block](https://en.bitcoin.it/wiki/Genesis_block)-Belohnung nicht ausgegeben werden kann und nicht Teil des UTXO-Sets ist
2. Duplizierter TxID-Bug, beschrieben in [BIP30](https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki)
3. OP_RETURN 'verbrannte' Münzen
4. Miner beanspruchten nicht immer die volle Blockbelohnung


