---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareqna.png
tags: [books, test]
---

## Nodes Q+A

#### Einfache Antworten auf die häufigsten Node-Fragen


[Hier](https://bitcoiner.guide/node) erfährst du mehr über die diversen Node-Implementierungen

<br/>


| Frage                                                  | Antwort                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [Was ist eine Node?]() | Eine Node ist ein Computer, auf dem die Bitcoin-Software läuft. Deine Node ist deine eigene Kopie der Bitcoin-Blockchain und des -Regelwerks. Betrachte sie als dein persönliches Tor zum Bitcoin-Netzwerk. Sie sendet Transaktionen, verifiziert, dass die Bitcoin, die du erhältst, legitim sind und bewahrt deine Privatsphäre, indem sie dir erlaubt, am Bitcoin-Netzwerk zu partizipieren ohne jemanden um Erlaubnis bitten zu müssen. |
| [Warum sollte ich eine Node haben?]() | Deine Node = Deine Regeln. Wenn du deine Bitcoin-Wallet mit deiner eigenen Node verbindest, musst du nicht darauf vertrauen, dass eine fremde Node deine Transaktionen verifiziert. Eine Node schützt dich vor unehrlichen Netzwerkteilnehmern und hält das Netzwerk dezentralisiert. Wenn du keine eigene Node hast, vertraust du darauf, dass die Node eines Anderen dir sagt, wie viel bitcoin du hast und kannst nur hoffen, dass sie deine Transaktionen wie gewünscht sendet und empfängt. |
| [Was solltest du beachten bevor du eine Node aufsetzt?]() | Nodes sind für den 24/7-Betrieb ausgelegt so, dass je nach verwendeter Hardware gewisse Stromkosten anfallen. Die meisten Nodes laufen auf stromsparenden Einplatinencomputern wie dem Raspberry Pi, sodass die Betriebskosten vernachlässigbar sind. Du solltest auch eine Internetverbindung ohne Datenlimit haben, da ein Knoten etwa 20 GB Datenvolumen pro Monat benötigt. Stelle sicher, dass du eine Node kaufst oder zusammenstellst, die einen initialen Blockdownload durchläuft und nicht bereits beim Kauf die gesamte Blockchain-Geschichte gespeichert hat. Sonst vertraust du wieder den Blockchain-Daten eines Anderen. |
| [Welche Node-Varianten gibt es?]() | Es ist möglich, eine Node auf deinem bestehenden Computer zu betreiben, indem du einfach die Software Bitcoin-Core herunterlädst und installierst. Die gängigsten "Plug + Play"-Nodes sind MyNode oder Nodl. Diese werden mit allem geliefert, was benötigt wird, um sofort loszulegen. Viele Benutzer entscheiden sich dafür, ihre eigene Hardware zu kaufen und die Bitcoin-Software selbst zu installieren. Gängige Software hierzu gibt es z.B. von MyNode, Ronin Dojo oder Raspiblitz (die alle kostenlos und Open-Source sind). Hier findest du eine Liste der Nodes, die wir empfehlen. |
| [Was gibt es noch, was eine Node kann?]() | Dies ist sehr stark von der Node abhängig, die du verwendest. Einige gängige "Apps" sind unter anderem eine Lightning-Node, Electrum-Server, Block-Explorer, Mempool-Viewer, Whirlpool und Zahlungsinfrastruktur wie BTC Pay Server. |
| [Was ist der initiale Block-Download?]() | Der initiale Block-Download (IBD) muss durchgeführt werden, wenn du deine Node zum ersten Mal startest. Die installierte Software lädt die Bitcoin-Blockchain vollumfänglich herunter und verifiziert die gesamte Transaktionshistorie. Sobald dieser Prozess abgeschlossen ist, kann deine Node verifizieren, dass die Bitcoin, die du erhältst, legitim sind und jede Transaktion zurückweisen, die nicht den Bitcoin-Regeln entspricht. Die Zeit bis deine Node einsatzbereit ist variiert je nach Hardware und Internetgeschwindigkeit. Im Durchschnitt dauert der Prozess des IBD etwa 4-7 Tage. |
| [Was ist eine gestutzte Node (pruned node)?]() |  Das "Stutzen" einer Node ist eine Lösung, bei der alte Daten aus der Blockchain verworfen werden, die nicht mehr zwingend notwendig sind, nachdem die gesamte Blockchain vollständig heruntergeladen und validiert wurde. Diese Lösung kann nützlich sein, wenn du Speicherplatzbeschränkungen hast. Es bedeutet aber auch, dass deine Node, anderen neuen Nodes nicht bei dem IBD unterstützen kann. |
| [Was ist eine lightning-Node?]() |  Eine Lightning-Node ist dein Tor zum Lightning-Netzwerk. Lightning ist eine experimentelle Skalierungslösung, die auf Bitcoin aufbaut. Die Lightning-Node läuft in der Regel auf demselben Gerät wie deine Bitcoin-Node und dient, ähnlich wie deine Bitcoin-Node, der Interaktion mit anderen Personen in diesem Netzwerk durch das Senden und Empfangen von Transaktionen. |
| [Kann ich auch eine fremde Node benutzen?]() | Ja, du kannst dich mit der Node einer anderen Person verbinden. Dies ist der Standard für viele Wallets. In den vorangegangenen Antworten haben wir erklärt, warum es gefährlich sein kann eine Fremde Node zu benutzen und welche Sicherheiten dir das Betreiben einer eigenen bietet. Dessen solltest du dir bewusst sein. Wenn du einen vertrauenswürdigen Freund hast, der eine Node betreibt, ist die Mitverwendung seiner Node eine bessere Alternative als einer gänzlich fremden Node zu vertrauen. Am Ende sollte aber das ultimative Ziel sein, deine eigene Node zu verwenden um am Bitcoin-Netzwerk teilzunehmen. |

<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Von Bitcoin Q+A</a> |
  <a href="https://twitter.com/antomousB">Übersetzt von antomousB</a> |
  <a href="http://stacking.tips">Support</a> |
  <a href="/">Mehr Ressourcen</a>
  <br><br>
</p>
