---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareqna.png
tags: [books, test]
---

## Lightning Q+A

#### Einfache Antworten auf die häufigsten Lightning-Fragen

Einen tieferen Einblick in das Lightning Netzwerk erhalten Sie [hier](https://bitcoiner.guide/lightning)

<br/>


| Frage                                                   | Antwort                                                                            |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [Was ist eine Node?]() | Eine Node ist ein Computer, auf dem die Bitcoin-Software läuft. Stelle dir einen Knotenpunkt in einem großen Netzwerk vor. Das ist deine Node. Sie ist deine eigene Kopie der Bitcoin-Blockchain und des Regelwerks. Betrachte deine Node als dein persönliches Tor zum Bitcoin-Ökosystem. Sie sendet Transaktionen und verifiziert, dass die Bitcoin, die du erhältst, legitim sind. Zusätzlich bewahrt sie deine Privatsphäre, indem sie dir erlaubt, ohne jegliche Abhängigkeit von Dritten teil des Netzwerks zu sein. |
| [Was ist das Lightning Netzwerk?]() | Das Lightning Netzwerk ist eine Skalierungslösung, die auf dem Bitcoin-Protokoll aufbaut. Es ermöglicht kleinere, nahezu instentane Zahlungen zwischen Nutzern zu sehr geringen Kosten. Es verhindert, dass jede Transaktion auf der Bitcoin-"Basisschicht" - die Blockchain - stattfinden muss, während es gleichzeitig sicherstellt, dass der Wert, der übermittelt wird, den Konsensregeln und Werten des Bitcoin-Netzwerks entspricht. Sie können keine Transaktionen auf Lightning durchführen, ohne Bitcoin zu besitzen. |
| [Warum brauchen wir Lightning?]() | Aktuell brauchen wir das Lightning-Netzwerk nicht wirklich, weil normale Bitcoin-Transaktionen (allgemein als "On-Chain-Transaktionen" bezeichnet) relativ günstig sind, selbst wenn man eine schnelle Bestätigungszeit benötigt. Lightning fängt wirklich an zu glänzen, wenn die "on chain" Gebühren steigen sollten. Dies wird passieren wenn die Bitcoin-Nutzerbasis wächst und die Block-Subventionierung sinkt. Vor allem wenn es um kleinere, häufigere Zahlungsfälle geht (für Dinge wie das Freischalten von Online-Inhalten), wird das Potential des Netzwerks deutlich. |
| [Wie funktioniert das Lightning Netzwerk?]() | Alice öffnet einen Zahlungskanal mit Bob, indem sie eine On-Chain-"Finanzierungstransaktion" durchführt. Die Größe dieser Finanzierungstransaktion bestimmt, wie viele Sats Alice über Lightning übertragen kann. Sobald die Finanzierungstransaktion auf der Blockchain bestätigt wurde, steht es Alice frei, mit Bob so viele Transaktionen über Lightning durchzuführen, wie sie möchte, bis eine der beiden Parteien entscheidet, dass sie den Kanal schließen möchte. Jede Lightning-Transaktion synchronisiert den aktuellen Status des Kanals, so dass keine Partei die andere um Geldbeträge betrügen kann. Wenn der Kanal geschlossen wird, wird der letzte "Kanalstatus" an das Bitcoin-Netzwerk gesendet und beide Parteien erhalten den entsprechenden Wert zurück auf ihre Bitcoin-Wallet. |
| [Was ist, wenn Alice eine andere Person bezahlen möchte?]() | Hier kann Lightning wirklich glänzen. Zahlungskanäle können miteinander verknüpft werden, um einen Weg zum Empfänger zu finden. Alice muss keinen Kanal mit David offen haben, um ihm ein paar Sats zu schicken. Das Netzwerk wird den optimalen Weg finden, um die Zahlung durch andere Kanäle zu leiten. Das könnte etwa so aussehen: Alice > Bob > Charlie > David. Während des gesamten Weges ist die Zahlung kryptografisch gesichert, so dass keine Zwischenhändler etwas von den Geldern entwenden können. |
| [Wem gehört und und wer kontrolliert das Lightning Netzwerk?]() | Wie Bitcoin ist auch das Lightning Netzwerk komplett Open-Source und nicht im Besitz einer einzelnen Entität. Jeder kann eine Node betreiben und am Netzwerk teilnehmen, völlig frei von jeglicher Genehmigung. Es gibt mehrere populäre Lightning-Implementierungen, darunter LND, C Lightning und Eclair. Alle diese Implementierungen sind fast zu 100% kompatibel. |
| [Gibt es Miner auf dem Lightning Netzwerk?]() | Nein, das Lightning Netzwerk baut auf der Bitcoin-Blockchain auf und verfügt entsprechend auf diesen Sicherheitsmerkmale auf. Die minimalen Gebühren, die du auf Lightning zahlst, gehen an die Netzwerkteilnehmer, die Teil der Route sind, die deine Zahlung nimmt. |
| [Hat Lightning eine eigene blockchain?]() | Nein, Lightning ist ein Netzwerk von Zahlungskanälen, die alle miteinander verbunden sind. Alle Transaktionen zum Öffnen und Schließen von Lightning-Kanälen finden auf der zugrunde liegenden Bitcoin-Blockchain statt. Lightning erbt die Sicherheit der Bitcoin-Blockchain. So lange ein Kanal offen ist, reicht es, wenn nur die zwei beteiligten Personen den Status des Kanals speichern. Dafür ist keine Blockchain nötig. |
| [Was sind die Nachteile von Lightning?]() | Für jemanden, der das Lightning Network häufig mit mehreren Kanälen nutzt, kann das Liquiditätsmanagement lästig werden. Das Netzwerk ist relativ jung und einige, vor allem große Zahlungen können manchmal fehlschlagen. Mit fortschreitender Entwicklung werden diese Fälle deutlich seltener. Aufgrund der Struktur des Netzwerks ist es wegen der Liquiditätsbeschränkungen der einzelnen Kanäle nicht so gut für größere Zahlungen geeignet. Dies sollte sich ändern, wenn das Netzwerk wächst und die Menschen Vertrauen in dessen Zuverlässigkeit gewinnen. |
| [Brauche ich eine Node um Lightning zu benutzen?]() | Ähnlich wie bei Bitcoin brauchst du keine eigene Node, um mit dem Lightning-Netzwerk zu interagieren, aber es ist ratsam. Denk dran, wenn du nicht selbst eine eigene Node betreibst, verlässt du dich auf die Node eines anderen. Die gute Nachricht ist, dass die meisten Bitcoin-Nodes heutzutage auch eine integrierte Lightning-Node haben. |
| [Was ist Eingehende Liquidität (inbound liquidity)?]() |  Eingehende-Liquidität beschreibt, wie viel bitcoin du über das Lightning Netzwerk empfangen kannst. Wenn du einfach einen Kanal mit einer anderen Person öffnest, kannst du zunächst nur Bitcoin senden. Das liegt daran, dass alle Sats auf deiner Seite des Kanals liegen. Wenn du einen Kanal für 100k Sats öffnest und dann 25k ausgibst, würde deine eingehende Liquidität 25k sats betragen. Jemanden zu finden, der einen Kanal mit dir öffnet ist der bessere Weg, um eingehende Liquidität zu bekommen. So sind alle Sats auf seiner Seite des Kanals und dieser Betrag definiert entsprechend deine eingehende Liquidität. |
| [Was ist ausgehende Liquidität (outbound liquidity)?]() |  Ausgehende Liquidität beschreibt, wie viel Bitcoin du über das Lightning Network senden kannst. Wenn du einen Kanal für 100k sats öffnest und 75k ausgibst, dann ist deine ausgehende Liquidität 25k Sats. Ausgehender Liquidität zu bekommen ist so einfach wie das Empfangen von Sats in deinen bestehenden Kanälen oder das Öffnen eines neuen Kanals mit mehr Sats. Denk dran, dass du in einer Transaktion nie mehr ausgeben kannst als die Gesamtgröße deines größten Channels. Dies wird sich jedoch ändern, wenn Multi Path Payments eingeführt wird. |
| [Wo fange ich an?]() | Die Wichtigsten Informationen haben wir auf unserer Empfehlungsseite zusammengetragen. Wähle eine Node aus und entscheide dann, ob du eine mobile oder eine Desktop-Lightning-Wallet möchtest. Unser persönlicher Favorit ist Zap. Die App gibt es sowohl in einer mobilen als auch in einer Desktop Version. Die Funktionalität ist überzeugend und die Benutzeroberfläche macht die Bedienug einfach. Schaue dir ln.guide an, um einen tieferen Einblick in Lightning zu bekommen. |



<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Von Bitcoin Q+A</a> |
  <a href="https://twitter.com/antomousB">Übersetzt von antomousB</a> |
  <a href="http://stacking.tips">Support</a> |
  <a href="/">Mehr Ressourcen</a>
  <br><br>
</p>
