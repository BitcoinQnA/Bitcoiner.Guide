---
layout: page
title: Lightning Guide
subtitle: A beginners guide to the Lightning Network
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/shareln.png
tags: [books, test]
---

<p align="center">
  <a href="/lightning/de">Deutsch</a> |
  <a href="/lightning/es">Español</a> |
  <a href="/lightning/fr">Français</a> |
  <br><br>
</p>

## Ziel

Diese Seite soll dabei helfen, einen Einblick in den Aufbau von Lightning zu bekommen und wie es mit dem zugrunde liegenden Bitcoin-Netzwerk interagiert. Wir versuchen dies zu erreichen, indem wir eine einfache Terminologie verwenden und nicht zu tief in die Technik einsteigen, obwohl es einige weiterführende Links für diejenigen geben wird, die einen Schritt weiter gehen wollen. Dank der Entwickler der verschiedenen Anwendungen, die mit Lightning interagieren, sind viele der hier skizzierten Konzepte hinter einfachen Benutzeroberflächen verborgen. Es zahlt sich jedoch immer aus, ein gutes Grundverständnis zu haben, damit ein Benutzer besser versteht, was passiert, wenn er eine Zahlung über Lightning sendet oder empfängt.

<br/>

## Inhaltsverzeichnis

1.  [Der Anfang](#get-started)
1.  [Der Lightning-/Bitcoin-Stack](#the-bitcoin-and-lightning-stack)
2.  [Kanäle](#channels)
3.  [Transaktionen](#transactions)
4.  [Nachteile](#drawbacks)
5.  [FAQ](#faq)
6.  [Werkzeuge](#lightning-tools)
7.  [Weitere Ressourcen](#other-resources)

***

## Der Anfang

Theorie ist toll, aber es gibt nichts Besseres, als sich die Hände schmutzig zu machen! Sobald du eingerichtet bist, kannst du mir gerne eine Rechnung (invoice) für ein paar Sats [schicken](https://bitcoiner.guide/#get-in-touch), um deine Einrichtung zu testen.

[Breez](Https://Breez.technology) herunterladen, deine Seed-Phrase aufschreiben und sichern und du bist bereit Zahlungen über Lightning zu empfangen. Deine Kanäle (channels) werden für dich verwaltet (gegen eine kleine Gebühr) und du kannst sogar Bitcoin "On-Chain" (auf der Bitcoin Blockchain) senden/empfangen. Die App wickelt dies in deinem Namen über Submarine-Swaps ab und sendet oder hinterlegt den entsprechenden Betrag an Sats über Lightning. [So](https://youtu.be/5zhW7ilOjWg) sieht ein solcher Prozess aus.

Wenn jede Transaktion über deine eigene [Node](https://node.guide) abgewickelt werden soll, dann macht die Verwendung einer Implementierung wie myNode oder RaspiBlitz das Einrichten einfach. Sie sind mit Node-Management-Tools wie RTL und Thunderhub vorinstalliert und machen das Einrichten von [Handy-Wallets](https://bitcoinwallet.guide/lightning) wie Zap oder Zeus sehr einfach. Hier ist ein vereinfachter Arbeitsablauf für die Verwendung dieser Lösungen...

1.  Richte deine Node ein
2.  Activiere Lightning und erstelle eine Wallet
4.  Basierend auf deinen erwarteten Kaufgewohnheiten entscheidest du dich für einen Betrag mit dem du dein Kanal eröffnen möchtest
4.  Sende den gewählten Betrag an dein neues On-Chain-Wallet
3.  Identifiziere einen geeigneten Kanalpartner (channel partner) anhand des Ratgebers weiter [unten](#who-to-open-a-channel-with) und besorge den öffentlichen Schlüssel (public key) seiner/ihrer node
5.  Öffne den Kanal mit RTL oder Thunderhub und warte, bis er auf der Blockchain bestätigt wird
6.  Wähle eine Handy-Wallet aus und verbinden sie mit deiner Node, indem du die für die gewählte Node/Wallet-Kombination relevanten Anleitungen verwendest (*dies ist völlig optional, da RTL oder Thunderhub für Transaktionen verwendet werden können, aber keine eigene Handy-App haben*)
7.  Jetzt kannst du einige Sats über Lightning senden und benutzt dafür deine eigene Node
8.  Sehe dir die [hier](#drawbacks) beschriebenen Schritte an, um etwas eingehende Liquidität zu erlangen, damit du auch sats empfangen kannst

***

## Der Bitcoin- und Lightning-Stack

Die Bitcoin-"Grundebene" (die Blockchain) kann nicht genug Transaktionen ermöglichen, damit Milliarden von Menschen sie täglich nutzen können. Wenn zum Beispiel ein paar Millionen Menschen plötzlich anfangen würden, das Netzwerk ständig für alltägliche Einkäufe zu nutzen, würde der Transaktionsrückstau und damit die Gebühren schnell in die Höhe schießen, da die Menschen darum konkurrieren, ihre Transaktionen bearbeitet zu bekommen. Um dies zu vermeiden und zu versichern, dass das Netzwerk den erwarteten exponentiellen Anstieg der Transaktionszahlen bewältigen kann, wird an einem mehrschichtigen System gearbeitet, ähnlich wie beim [Internet-Protokoll-Stack](https://en.wikipedia.org/wiki/Internet_protocol_suite).

Natürlich könnte die Transaktionszahl drastisch erhöht werden, indem man eine zentralisierte Datenbank verwendet, ähnlich wie das aktuelle Finanzsystem, das wir heute haben. Aber das wäre nicht sehr "Bitcoin", oder? Transaktionen könnten zensiert werden, die Privatsphäre wäre nicht existent und wir wären nicht besser dran. So entstand die Idee der originalen "Ebene 2", [Das Lightning-Netzwerk](https://lightning.network/lightning-network-paper.pdf).



<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/LN%20visual.png" class=responsive width="750" height="350" maxheight="300" />

Eine Visualisierung des Lightning Netzwerks von <a href="https://explorer.acinq.co/">Acinq</a>
</p>

***

## Kanäle

Das Lightning-Netzwerk besteht aus Tausenden von Zwei-Parteien-Zahlungskanälen. Diese Zahlungskanäle ermöglichen es diesen beiden Parteien, Zahlungen so oft hin und her zu senden, wie sie wollen - beinahe in Echtzeit und ohne Blockchain-Gebühren.

Ein Kanal wird eröffnet, indem ein oder zwei Benutzer Sats in eine On-Chain-'Finanzierungstransaktion' einschließen, die eine 2 von 2 Multi-Signatur-Wallet im Bitcoin-Netzwerk erstellt, wobei jeder Benutzer einen der Schlüssel erhält. Der "Zustand" (state) des Eröffnungskanals spiegelt den Betrag wider, den jeder Benutzer beigesteuert hat, und jeder Benutzer bestätigt mit ihrer Unterschrift, dass sie dies als korrekt akzeptiert. Diese "Anerkennung" (sign off) ist eigentlich eine nicht ausgestrahlte Bitcoin-Transaktion, die die Signatur beider Parteien enthält und über das Lightning-Netzwerk an die jeweils andere Partei weitergegeben wird. Diese signierten, aber nicht ausgestrahlte Transaktionen erlauben es jeder Partei, den Kanal zu jedem Zeitpunkt zu schließen und stellen sicher, dass die darin enthaltenen Sats "On-Chain" an ihren rechtmäßigen Besitzer zurückgegeben werden.

<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/Open%20Channel.png" class=responsive width="650" height="400" maxheight="300" />

Übersichtliche Illustration einer Kanal-Eröffnungstransaktion
</p>

Jedes Mal, wenn eine Zahlung von Person A an Person B getätigt wird, werden Sats von einer Seite des Kanals zur anderen geschoben (denke an Perlen, die entlang eines Abakus gleiten). Die beiden Parteien unterschreiben dann eine Bitcoin-Transaktion, die den aktualisierten "Zustand" des jeweiligen Kanals widerspiegelt und an den anderen Teilnehmer weitergegeben wird. Dieser Prozess kann unbegrenzt oft wiederholt werden und diese signierten Transaktionen werden immer nur im Falle einer Kanalschließung an das Bitcoin-Netzwerk gesendet.

<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/Alice%20and%20Bob.png" class=responsive width="650" height="400" maxheight="300" />

Übersichtliche Illustration einer direkten Kanal-Zahlung
</p>

<br/>

## Mit wem kann ich einen Kanal eröffnen?

Du kannst einen Kanal mit so ziemlich jedem Netzwerkteilnehmer eröffnen, jedoch gibt es eine Reihe von Dingen zu beachten, bevor du damit anfängst...

**Ist es jemand, mit dem du wahrscheinlich häufig Transaktionen durchführen wirst?** Wenn ja, ist es sinnvoll, einen direkten Kanal zu öffnen, um die Routing-Gebühren zu minimieren.
**Ist er ein zuverlässiger Partner (Peer)?** Wenn er regelmäßig offline ist, wird dies zu Problemen beim Senden oder Empfangen von Transaktionen führen.
* Ist er gut verbunden?** Wenn du nur ein oder zwei Partner hast, zahlt es sich aus, wenn sie ziemlich gut verbunden sind, damit du Transaktionen über sie durch das Netzwerk leiten kannst. Dies wird im nächsten Abschnitt über Transaktionen deutlicher werden.
**Ist er vertrauenswürdig?** Dies wird weiter unten im Detail behandelt, aber dein Partner hat die Möglichkeit, dich zu betrügen, wenn er einen Kanal schließt (obwohl es unwahrscheinlich ist, dass er Erfolg damit hat). Es kann dir einigen Ärger ersparen, einen Partner auszuwählen, den du kennst, oder aber ein öffentlicher Node-Betreiber, der allgemein als ehrlicher Partner angesehen ist.

Du kannst diese sowie viele weitere Statistiken auf [1ml](https://1ml.com/) vergleichen wenn du einen Partner auswählst oder nutze eine einfachere Lösung wie diese [hier](https://nodes.lightning.computer/availability/v1/btc.json). Letzteres vergibt Nodes eine aggregierte Bewertung welche auf eine Kombination aus Betriebszeit, Liquidität und Konnektivität basiert. Es werden die Besten 5% gelistet.

<br/>

## Kanalschließungen

Ähnlich wie eine Kanalöffnung ist eine Kanalschließung eine On-Chain Bitcoin-Transaktion. Kanalschließungen treten auf, wenn eine oder beide Parteien ihr Guthaben wieder an das Bitcoin-Netzwerk auszahlen wollen. Es gibt drei Arten von Kanalschließungen, die mit Lightning auftreten können und in allen Fällen werden die On-Chain-Gebühren von der Person bezahlt, die den Kanal eröffnet hat.

**Kollaboratives schließen (collaborative close)**

Eine Partei initiiert eine Kanalschließung und kommuniziert dies mit ihrem Kanalpartner. Beide Parteien stimmen zu, den Kanal zu schließen, und der letzte "Kanalzustand" wird an das Bitcoin-Netzwerk gesendet. Jeder Teilnehmer erhält seine Sats in seine On-Chain-Wallet zurück. Dieses Szenario deckt die große Mehrheit aller Lightning-Kanalschließungen ab.

**Forciertes Schließen (force close)**

Hier schließt eine Partei den Kanal ohne die Zustimmung der Gegenpartei. Diese Art der Schließung tritt in der Regel auf, wenn eine der Kanalparteien nicht erreichbar ist. Um ein forciertes Schließen durchzuführen, sendet ein Benutzer einfach den letzten ihm bekannten "Kanalzustand". Sobald ein forciertes Schließen auf der Blockchain bestätigt wurde, wird das Guthaben des Benutzers, der das forcierte Schließen initiiert hat, für eine bestimmte Zeit gesperrt. Dies ermöglicht der Gegenpartei, die Kanalschließung zu erkennen und wieder online zu kommen, um den "Kanalzustand" zu bestätigen. Wenn dies nicht geschieht, wird das Guthaben der Partei, die den Kanal geschlossen hat, nach Ablauf der Sperrzeit (in der Regel 2016 Blöcke, etwa zwei Wochen) freigegeben.

**Umstrittenes Schließen (disputed close)**

Ein umstrittenes Schließen kann nur aus einem forcierten Schließen resultieren. Wenn die initiierende Partei einen alten "Kanalzustand" veröffentlicht, der sie begünstigt und ihr mehr Sats zurück auf die Blockchain zahlt, kann die Partei, die betrogen wird, die Schließung anfechten. Um diese Anfechtung in Gang zu setzen, muss lediglich die eigene Node innerhalb der Sperrfrist (typischerweise 2016 Blöcke, etwa 2 Wochen) wieder online gebracht werden. Wenn das nicht möglich ist, weil sich ihre Node an einem anderen geografischen Ort befindet, können sie alternativ einen [Watchtower](https://bitcoinmagazine.com/articles/watchtowers-are-coming-lightning)-Service einrichten, welche ihre Kanäle für eine kleine Gebühr überwacht und im Notfall eingreift.

Wenn die Partei, die den Disput erzeugt, erfolgreich einen aktuelleren Kanalstatus als den von ihrem Kanalpartner gesendeten veröffentlichen kann, kann ihr Knoten eine Gerechtigkeits-Transaktion ([Justice transaction](https://bitcoinmagazine.com/articles/bitmex-research-confirms-lightning-justice-works)) veröffentlichen und damit das gesamte Guthaben des Kanals einfordern. Die Bedrohung, durch ein solches Szenario das gesamte eigene Guthaben zu verlieren, reicht aus, um die meisten unehrlichen Lightning-Betreiber abzuschrecken.

***

##  Transaktionen

Lightning-Transaktionen werden innerhalb weniger Sekunden abgewickelt und können nicht zurückgerufen, rückgängig gemacht oder nachträglich verändert werden. Das Clevere daran ist, dass Lightning dies erreicht, ohne auf eine Blockbestätigung auf der Blockchain warten zu müssen. Gleichzeitig werden die Sicherheitsprinzipien von Bitcoin beibehalten, da jeder Lightning-Teilnehmer auf der Blockchain abrechnen kann, wann immer er möchte.

In der Lage zu sein, schnelle und günstige Zahlungen an einen einzelnen Benutzer zu tätigen, könnte von Vorteil sein, wenn du viele Transaktionen durchführen willst. Dabei solltest du aber nicht vergessen, dass jeder Kanal einen Blockchain-Fußabdruck von zwei On-Chain-Transaktionen hat. So ist das Öffnen eines Kanals, um nur ein paar Zahlungen durchzuführen, eher kontraproduktiv. Lightning ist nicht immer die Lösung. Was passiert also, wenn ein Benutzer eine Lightning-Zahlung an jemanden vornehmen möchte, mit dem er keinen Kanal geöffnet hat? Er muss doch nicht mit jeder Person, mit der er eine Transaktion durchführen möchte, einen Kanal öffnen?

Zum Glück nicht. Hier beginnt das Lightning Netzwerk zu glänzen! Vorausgesetzt, du hast ein oder zwei Kanäle zu ziemlich gut verbundenen Nodes, kannst du Transaktionen an Personen senden, mit denen du nicht direkt verbunden bist, indem du die Zahlung über direkte Partner weiterleitest (routing).

<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/Tx%20route%202.png" class=responsive width="650" height="380" maxheight="300" />

Alice leitet eine Zahlung an Dan weiter, obwohl sie keinen direkten Kanal zu ihm hat.
</p>

Diese Art von Multi-Hop-Transaktionen wird auf vertrauensfreie Weise mit einem Verfahren namens [Onion-Routing](https://wiki.ion.radar.tech/tech/lightning/onion-routing) durchgeführt. Diese Methode ermöglicht eine sichere Übertragung von "Nachrichten", die als "Gehashte Zeitgesperrte Verträge" (Hashed Time Locked Contracts) oder [HTLCs](https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts) bekannt sind. HTLCs sind so strukturiert, dass jeder "Sprung" (hop) nur die Informationen sieht, die er braucht, um seine Gebühr zu nehmen und die Zahlung an den nächsten Teilnehmer in der Route weiterzuleiten, bis sie das endgültige Ziel, den Empfänger, erreicht.

Hier ist eine vereinfachte Darstellung dessen, was passiert, damit die obige Transaktion erfolgreich ist. Es klingt kompliziert, aber unter der Haube passiert alles in wenigen Sekunden.

1.  Dan sendet Alice eine Rechnung (eine Zahlungsaufforderung) über 10.000 Sats. Diese wird von Dans Lightning-Wallet generiert und kann über eine beliebige Kommunikationsmethode an Alice gesendet werden.
2.  Alice erhält die Rechnung und öffnet sie mit ihrer Lightning-Wallet. Sie prüft die Details und bestätigt die Zahlung der Rechnung
3.  Alices Lightning-Node nutzt ihr Wissen über das Lightning-Netzwerk, um nach einem geeigneten Pfad zu suchen, um die Zahlung an Dan weiterzuleiten
4.  Sobald eine Route gefunden ist, geht der erste Hop an Bob, mit dem Alice einen direkten Kanal hat
5.  Alices Nachricht an Bob besagt, dass er, wenn er 10.001 Sats an Carol sendet, 1 Sat für sich behalten kann
6.  Alice und Bob aktualisieren ihren Kanalstatus
7.  Bob sendet eine Nachricht an Carol, die besagt, dass, wenn sie 10.000 Sats an Dan sendet, sie 1 Sat für sich behalten kann
8.  Bob und Carol aktualisieren ihren Kanalstatus
9.  Carol sendet eine Nachricht an Dan, für die Dan ein Geheimnis zum entschlüsseln besitzt, damit er die 10.000 Sats von Alice beanspruchen kann
10. Carol und Dan aktualisieren ihren Kanalstatus
11. Alices Wallet teilt ihr mit, dass die Transaktion erfolgreich war

*In Lightning gibt es keine "realen" Identitäten. Die oben genannten Namen dienen lediglich der Veranschaulichung. Jeder Teilnehmer hat einen öffentlichen Schlüssel (Node Public Key), der als seine "Lightning-ID" fungiert.*

***

##  Nachteile

Während das Lightning-Netzwerk eine fantastische Skalierungslösung für Bitcoin darstellt, hat es natürlich einige Einschränkungen. Diese werden im Folgenden kurz skizziert...

* **Kanalmanagement (channel management)** - Wenn ein Benutzer viele Zahlungen in eine Richtung vornimmt, können Kanäle aus dem Gleichgewicht geraten, was bedeutet, dass alle Gelder auf einer Seite des Kanals stecken bleiben. In diesem Fall muss der Benutzer Maßnahmen ergreifen, indem er seine Kanäle ausgleicht. Dies kann durch zirkuläres Rebalancing (sich selbst aus einem Kanal aus- und in einen anderen einzahlen) oder über einen [Submarine-Swap](https://lightning.engineering/loop/)-Service erfolgen, der es dir ermöglicht, einen bestehenden Kanal gegen eine geringe Gebühr ab- oder aufzufüllen. Die meisten der gängigen Lightning-Node [Management-Tools](#lightning-tools) haben irgendeine Form von Swap-Service eingebaut.

* **Eingehende Liquidität (inbound liquidity)** - Wenn ein Benutzer einen Kanal mit jemand anderen öffnet, befinden sich alle Gelder zunächst auf seiner Seite des Kanals. Das heißt, er kann ausschließlich Zahlungen senden und nicht empfangen. Lightning-Wallets wie [Breez](https://breez.technology/) und [Pheonix](https://phoenix.acinq.co/) haben vor kurzem Upgrades veröffentlicht, die dies durch das Öffnen von Kanälen [on the go](https://medium.com/breez-technology/the-breez-release-candidate-getting-lightning-ready-for-the-global-takeover-b5d1f9756229) bei Bedarf abmildern. Für diejenigen, die ihre eigene Lightning-Node betreiben und ihre eigenen Kanäle verwalten, sind im Folgenden jedoch die wichtigsten Möglichkeiten aufgeführt, um dies zu umgehen...
  * Finde Personen, die ein Kanal mit dir eröffnen. Bestimmte Unternehmen wie [LN Big](https://lnbig.com/) werden alle Kanäle, die für sie geöffnet werden, erwidern.   
  * Durch das Kaufen von Dienstleistungen oder Produkten mit Sats verschiebt sich das Guthaben auf die andere Seite des Kanals.
  * Kaufe etwas eingehende Liquidität von einem Dienst wie [Lightning Pool](https://lightning.engineering/posts/2020-11-02-lightning-pool/)
  * Verwende einen [Submarine-Swap](https://wiki.ion.radar.tech/tech/research/submarine-swap)-Service.

* **Kanalgröße (channel size)** - Wenn ein Benutzer einen Kanal für 1 Mio. Sats öffnet und dann eine Zahlung von 1,5 Mio. Sats vornehmen muss, kann er dies nicht ohne die Verwendung von Multipfad-Zahlungen ([Multi Path Payments](https://lightning.engineering/posts/2020-05-07-mpp/)) tun, die die Verwendung von mehr als einem Zahlungskanal ermöglicht, der von einem einzigen Benutzer gesteuert wird, um eine Transaktion zu leiten. Erfreulicherweise wird dies schnell zur Standardpraxis und erhöht das Benutzererlebnis und die Erfolgsquote von Zahlungen enorm.

* **Routenliquidität (route liquidity)** - Wenn Alice eine große Zahlung an Dan über Lightning senden möchte, muss bei allen Personen auf der von ihr gewählten Route mindestens so viel Kanalguthaben vorhanden sein, sonst schlägt die Zahlung fehl. Dies wird nur bei größeren Zahlungen ein wirkliches Problem.

* **Hot Wallets** - Aufgrund der Natur des Lightning-Netzwerks muss die Lightning-Node eines Benutzers rund um die Uhr online sein, um Transaktionen zu bestätigen und zu signieren. Dies bedeutet, dass es ratsam ist, dass Benutzer davon absehen große Mengen Bitcoin ohne ordnungsgemäße Sicherheit sowie Backups auf Lightning zu halten.

* **Backups** - Bitcoin-Benutzer werden es gewohnt sein, ihre Seed-Phrase zu sichern, und Lightning-Wallets sind da nicht anders. Die gängigste Lightning-Implementierung [LND](https://github.com/lightningnetwork/lnd) verfügt jedoch auch über statische Kanal-Backups ([static channel backups](https://wiki.ion.radar.tech/tutorials/troubleshooting/static-channel-backups#solution-2-static-channel-backups-scb)), damit Benutzer ihre Lightning-Gelder außerhalb der Blockchain im Falle eines Hardware-Ausfalls oder Ähnlichem wiederherstellen können. Es ist eine gute Praxis, eine Kopie deiner SCB-Datei herunterzuladen, wenn du irgendwelche Kanäle öffnest oder schließt. Wie du dies erreichst, hängt von der Art und Weise ab, wie du mit deiner Lightning-Node interagierst. Die meisten gängigen Ansätze haben irgendwo in der Benutzeroberfläche eine Schaltfläche zum Herunterladen.

***

## FAQ

**Sollte ich Lightning benutzen?**

Hier gibt es keine richtige oder falsche Antwort. Derzeit sind die Bitcoin-Gebühren noch recht günstig, was On-Chain-Transaktionen für 95% der Nutzer akzeptabel macht. Aber für diejenigen, die regelmäßig Transaktionen mit kleineren Beträgen durchführen, bietet Lightning die Möglichkeit, Gebühren zu sparen und außerdem von der nahezu sofortigen Abwicklung der Transaktion zu profitieren.

**Brauche ich eine Node?**

Ähnlich wie bei Bitcoin brauchst du nicht zwingend eine Node, um mit Lightning zu interagieren. Aber deine eigene zu betreiben ist der Weg, der deine Privatsphäre sowie deine Gelder am besten schützt. Wenn du deine Zahlungen nicht mithilfe deiner eigenen Node verifizierst, dann tust du es zwangsläufig mithilfe einer fremden Node. Glücklicherweise werden die meisten gängigen Bitcoin-Nodes auch mit einer Lightning-Implementierung ausgeliefert. Schaue dir Diese weiter unten im Abschnitt Lightning-Tools an.

**Wer pflegt das Lightning Network?**

Das Lightning Netzwerk ist ein offenes Protokoll, an dem viele Menschen arbeiten und zu dem sie beitragen. Alle Implementierungen arbeiten nach dem offenen Standard [B.O.L.T](https://github.com/lightningnetwork/lightning-rfc/blob/master/00-introduction.md) und die gemeinsamen Implementierungen sind vollständig miteinander Kompatibel. FOlgend sind diese Implementierungen gelistet...

1.  [LND](https://github.com/lightningnetwork/lnd)
2.  [C Lightning](https://github.com/ElementsProject/lightning)
3.  [Eclair](https://github.com/ACINQ/eclair)

**Gibt es einen "Lightning-Coin"?**

Nein, Lightning-Transaktionen übertragen lediglich die Eigentumsrechte von Bitcoin zwischen verschiedenen Personen.

**Warum scheitern Zahlungen?**

Zahlungsausfälle treten aus vielen unterschiedlichen Gründen auf. Der häufigste ist jedoch, dass die Node, über die du die Transaktion durchführst, keinen geeigneten Zahlungsweg zum Ziel finden kann.

**Was bedeutet "ausgeglichene Kanäle"?**

Ein "ausgeglichener Kanal" bedeutet einfach, dass du eine annähernd ähnliche Anzahl von Sats auf beiden Seiten deines Kanals hast. Stelle dir das wie einen Abakus vor, auf dem sich auf jeder Seite die gleiche Anzahl von Perlen befindet. Dies stellt sicher, dass der Benutzer in der besten Position ist, über Lightning zu senden **oder** zu empfangen. Es ist auch vorteilhaft für diejenigen, die Sats verdienen wollen, eine [Routing-Node](https://blog.lightning.engineering/posts/2019/11/07/routing-guide-2.html) zu sein, obwohl dieses Konzept eher für fortgeschrittene Benutzer geeignet ist.

Im Beispiel unten ist des blaue Guthaben (balance) auf der linken Seite das "lokale Guthaben" ("local balance"). Dies stellt die Größe des Gutahbens auf deiner Seite jedes Kanals dar und gibt an, wie viel du in jedem Kanal **ausgeben** kannst. Das grüne Guthaben auf der rechten Seite ist das "fremde Guthaben" ("Remote-Balance"). Dies ist die das Guthabens auf der Seite des Kanals deines Partners und gibt an, wie viel du in jedem Kanal **empfangen** kannst.

<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/Channels.png" class=responsive width="650" height="300" maxheight="300" />

Kanal-Guthaben-Diagramme von Thunderhub.
</p>

**Wie halte ich meine Kanäle ausgeglichen?**

Die beiden gängigsten Lightning-Node Verwaltungs-Tools [Ride the Lightning](https://twitter.com/Suheb__/status/1228470045715681280?s=20) und [Thunderhub](https://apotdevin.com/blog/thunderhub-balancing) machen dies innerhalb der Benutzeroberflächen sehr einfach. Klicke auf die genennten Links für Video-Demos von beiden.

**Was passiert, wenn meine Node ausfällt, während ich offene Kanäle habe?**

Die optimale Lösung ist es, deine Node wieder in Schuss zu bringen und zu vermeiden, dass du deine Kanäle überhaupt schließen musst. Dies wird jedoch nicht immer möglich sein und hier sind Backups entscheidend. Du kannst deine Lightning-Wallet-Seed und statische Kanal-Backup-Datei in einer anderen Lightning-Node importieren, was automatisch eine Schließungsbenachrichtigung an alle Partner (Peers) auslöst und deine Sats zurück in deine On-Chain-Wallet sendet. Dieser Prozess ist über die Cammand-Line möglich, aber am einfachsten geht es über Verwaltungs-Tools wie RTL oder Thunderhub. Ein anderes Ergebnis könnte sein, dass ein Lightning-Partner bemerkt, dass du offline bist und sich entscheidet, das Schließen des Kanals zu forcieren (force close) (hoffentlich auf [ehrliche Art und Weise](#channel-closures)), dies wird alle Sats in diesem Kanal zurück an deine On-Chain-Wallet senden.

**Warum ändert sich meine Kanalguthaben im Laufe der Zeit?**

Das liegt wahrscheinlich daran, dass jemand eine Transaktion über deine Node geleitet hat. Dadurch wird ein Teil des Guthabens von einer Seite des Kanals auf die andere verschoben. Wenn du dies nicht willst, kannst du festlegen, dass dein Kanal zum Zeitpunkt des Öffnens privat ist. Dadurch wird er von dem Rest des Netzwerks effektiv abgeschirmt.

**Wie bekomme ich meine Sats aus Lightning raus?**

Du kannst einen Kanal schließen, wodurch dein Guthaben zurück in dein On-Chain-Wallet fließt. Alternativ kannst du, wenn du viele Lightning-Zahlungen erhalten hast und dein Kanalguthaben voll wird, einen [loop out](https://lightning.engineering/loop/) durchführen. Dies bedeutet, dass ein gewählter Teil deines Kanalguthabens zurück zu deiner On-Chain-Wallet abführt wird, wodurch etwas Kanalkapazität für dich frei wird, um wieder zu empfangen. Der umgekehrte Vorgang (loop in) kann verwendet werden, um dein Kanalguthaben "aufzufüllen", wenn du viele Zahlungen getätigt hast und nicht mehr über genügend ausgehende Liquidität verfügst.

[CoinOS](https://coinos.io/) bietet eine weitere gute Lösung, um einfach zwischen On-Chain und Off-Chain zu wechseln. Stelle sicher, dass du die Option "Non-Custodial" verwendest, um jedes Risiko einer dritten Partei auszuschließen.

**Kann ich meinen Kanal größer machen, nachdem ich ihn geöffnet habe?**

Nein, die Kanalgrößen sind zum Zeitpunkt der Eröffnung festgelegt. Allerdings kannst du mit Multi Path Payments mehrere Kanäle gleichzeitig nutzen.

**Kann ich mit dem Lightning-Netzwerk Geld verdienen?**

Ja, theoretisch kannst du über das Weiterleiten von Zahlungen (routing) Sats verdienen. Allerdings sind die zu erzielenden Gewinne im Vergleich zum erforderlichen Node- und Kanalmanagement für den durchschnittlichen Lightning-Benutzer unerreichbar.

**Wie viel kostet es, einen Kanal zu öffnen oder zu schließen?**

Das hängt vom aktuellen Stand des Bitcoin-[Mempools](https://mempool.space) und dem entsprechenden Gebührensatz ab, den du mit deinem Kanal-Partner ausgehandelt hast.

**Was ist Keysend?**

Keysend ist eine Entwicklung, die es ermöglicht, spontane Zahlungen ohne Rechnung durchzuführen.

**Was sind MPP?**

Multipfad-Zahlungen ([Multi Path Payments](https://lightning.engineering/posts/2020-05-07-mpp/)) ermöglichen es einem Benutzer, Zahlungen zu senden, die größer sind als die Kapazität seines größten Einzelkanals, indem er die Liquidität von mehr als einem Kanal gleichzeitig nutzt. Dies muss auf der Node-Ebene aktiviert sein.

***


##  Lightning Tools

* [Wallets](https://bitcoinwallet.guide/lightning)
* [Nodes](https://node.guide)
* [Börsen und Dienstleistungen](/docs/EXCHANGES.md)
* [Lightning-Netzwerk Händler](https://lightningnetworkstores.com/)
* [Netzwerk-Explorer](https://1ml.com/)
* [Lightning Tipps](https://tippin.me/)


##  Weitere Ressourcen

* [White paper](https://lightning.network/lightning-network-paper.pdf)
* [Ausführliche Erläuterung zum Lightning-Netzwerk](https://dev.lightning.community/overview/)
* [Mastering the Lightning Network Buch](https://github.com/lnbook/lnbook) (*in Bearbeitung*)
* [Lightning Wiki](https://lightningwiki.net/index.php/Main_Page)
* [Lightning Node Management von Openoms](https://openoms.gitbook.io/lightning-node-management/)
* [Umfangreiche Liste von Lightning-Ressourcen](https://github.com/bcongdon/awesome-lightning-network)
* [Eine weitere Sammlung von Lightning-Ressourcen](https://www.lopp.net/lightning-information.html)

## Videos

* [Ministry of Nodes LN Überblick](https://youtu.be/39HRCfMQ_ZU)
* [Ministry of Nodes praktische Anwendung](https://youtu.be/DfRYJcBsfkA)
* [TFTC Breez Wallet Vorführung](https://youtu.be/5zhW7ilOjWg)
* [BTC Sessions Vollständiges Lightning-Intro und Setup-Anleitung](https://youtu.be/KItleddMYFU)
* [BTC Sessions Phoenix Wallet Vorführung](https://youtu.be/Cx5PK1H5OR0)
* [KIS Bitcoin RTL Vorführung](https://www.keepitsimplebitcoin.com/nodl-lightning-node/)

## Podcasts

* [Stephan Livera - Managing your Lightning node](https://stephanlivera.com/episode/135/)
* [What Bitcoin Did - Intro to Lightning #1](https://www.whatbitcoindid.com/podcast/the-beginners-guide-to-bitcoin-part-13-the-lightning-network-with-jack-mallers)
* [What Bitcoin Did - Intro to Lightning #2](https://www.whatbitcoindid.com/podcast/christian-decker-an-introduction-to-the-lightning-network)

***

<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Von Bitcoin Q+A</a> |
  <a href="https://twitter.com/antomousB">Übersetzung von antomousB</a> 
  <br><br>
</p>
