---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareqna.png
tags: [books, test]
---

## Lightning Network Q+A

#### Risposte semplici alle domande più frequenti sul Lightning Network

Per una spiegazione più approfondita del Lightning Network, clicca [qui](https://bitcoiner.guide/lightning)

<br/>


| Domanda                                                   | Risposta                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [Cos'è un nodo?]() | Un nodo è un computer che opera il software di Bitcoin. Il tuo nodo è la tua versione personale della blockchain di Bitcoin e delle regole del protocollo. Pensa al tuo nodo come al tuo portale verso il mondo di Bitcoin. Un nodo trasmette le tue transazioni, verifica che i bitcoin che ricevi siano veri e mantiene la tua privacy permettendoti di partecipare al network senza fare affidamento su nessuno. |
| [Cos'è il Lightning Network?]() | Il Lightning Network è una soluzione per lo scaling di Bitcoin costruita sopra il protocollo base. Permette di effettuare pagamenti di dimensioni ridotte in modo molto veloce e ad un costo molto basso. Permette di evitare che ogni transazione debba essere registrata sulla blockchain di Bitcoin assicurando allo stesso tempo che ciò che viene scambiato rispetti le regole e i valori del protocollo Bitcoin. Questo significa che non puoi fare transazioni su Lightning senza possedere bitcoin. |
| [Perché serve il Lightning Network?]() | Attualmente non c'è veramente bisogno del Lightning Network poiché anche le normali transazioni (chiamate transazioni 'on-chain') sono relativamente economiche, anche considerando le transazioni con rapidi tempi di conferma. Lightning inizierà ad essere importante quando le commissioni per le transazioni 'on-chain' inizieranno ad aumentare per via dei maggiori utenti di Bitcoin e per via della diminuzione della ricompensa del blocco. Lightning sembra essere promettente anche per forme di pagamento ad alta frequenza e valore ridotto come quelle coinvolte nella fruizione di contenuti online. |
| [Come funziona il Lightning network?]() | Alice apre un canale di pagamento con Bob effettuando una transazione on-chain (funding transaction) finalizzata a fornire fondi scambiabili sul canale. Il valore di questa transazione di funding detta quanto valore Alice può trasferire usando Lightning. Una volta che la transazione di funding è stata confermata sul network di Bitcoin, Alice è libera di fare quante transazioni desideri con Bob fino a quando uno di loro o entrambi decidano di chiudere il canale di pagamento. Ogni transazione Lightning aggiorna i bilanci relativi dei due partecipanti al canale in modo che nessuno dei due possa truffare l'altro rubando dei fondi. Quando il canale è chiuso, l'ultimo bilancio del canale è trasmesso al network di Bitcoin ed entrambe le parti ricevono il loro bilancio relativo nel loro wallet Bitcoin. |
| [Ma come fa Alice a pagare qualcun altro?]() | L'utilità di Lightning sta proprio qui. I canali di pagamento possono essere collegati insieme per trovare un percorso verso il ricevente. Alice non ha bisogno di avere un canale di pagamento con David per mandargli dei satoshi; il network troverà il percorso ideale per inviare il pagamento attraverso molteplici canali. Il percorso potrebbe essere qualcosa del tipo: Alice > Bob > Charlie > David. Mentre i fondi viaggiano lungo il percorso essi sono protetti dalla crittografia in modo che nessuno dei partecipanti intermediari possa rubare fondi che non gli appartengono. |
| [Chi possiede e chi controlla il Lightning Network?]() | Così come Bitcoin, il Lightning Network è completamente open source e non è posseduto da nessuna singola entità. Chiunque può operare un nodo e partecipare nel network senza chiedere permesso a nessuno. Ci sono varie implementazioni di Lightning come LND, C Lightning e Eclair. Tutte queste implementazioni sono quasi completamente compatibili tra di loro. |
| [Ci sono i miner sul Lightning Network?]() | No, il Lightning Network è costruito sopra il protocollo Bitcoin e mantiene tutte le caratteristiche che lo rendono sicuro. Le ridotte commissioni che si pagano su Lightning vanno ai partecipanti che aiutano ad inviare i fondi lungo il percorso di pagamento quindi potrebbero andare a chiunque abbia un nodo Lightning. |
| [Lightning ha una blockchain?]() | No, Lightning è un network di canali di pagamento interconnessi. Tutte le transazioni di apertura e chiusura di un canale Lightning avvengono nel protocollo Bitcoin sottostante. Lightning eredita la sicurezza della blockchain di Bitcoin. |
| [Quali sono gli svantaggi di Lightning?]() | Per coloro che usano il Lightning Network spesso e con vari canali di pagamento, la gestione della liquidità può diventare un problema. Il network è relativamente giovane e a volte alcuni pagamenti possono non andare a buon fine, ma con l'avanzare dello sviluppo di Lightning queste occorrenze diventeranno sempre meno frequenti. Per via della sua struttura il network non è molto adatto a grandi pagamenti per via dei limiti imposti dalla liquidità dei canali. Questo però potrebbe cambiare man mano che il network cresce e i partecipanti iniziano a confidare di più nella sua sicurezza. |
| [Ho bisogno di un nodo per usare Lightning?]() | Così come con Bitcoin, non hai bisogno di un nodo per interagire con il Lightning network ma è comunque consigliato averne uno. Ricorda, se non stai operando il tuo nodo, stai usando quello di qualcun altro. La buona notizia è che al giorno d'oggi la maggior parte dei nodi Bitcoin ha già implementato un nodo Lightning al suo interno quindi iniziare a usare Lightning non richiederà lavoro extra. |
| [Cos'è la liquidità in entrata?]() |  La liquidità in entrata misura quanti bitcoin puoi ricevere usando il Lightning Network. Se ti limiti ad aprire un canale con qualcuno, inizialmente puoi solo inviare bitcoin. Questo è dovuto al fatto che tutti i fondi sono sul tuo lato del canale. Se aprissi un canale per 100k satoshi e poi ne spendessi 25k, la tua liquidità in entrata sarebbe 25k satoshi. Il modo migliore per avere liquidità in entrata è quello di far aprire a qualcun altro un canale di pagamento con te, in questo modo tutti i fondi sarebbero sul lato del canale appartenente alla tua controparte. |
| [Cos'è la liquidità in uscita?]() |  La liquidità in uscita è la misura di quanti bitcoin puoi inviare sul Lightning Network. Se aprissi un canale per 100k satoshi e ne spendessi 75k allora poi potresti inviare 25k satoshi. Per avere liquidità in uscita ti basta ricevere dei satoshi nei tuoi canali già aperti o aprire un nuovo canale con nuovi satoshi. Ricorda, non puoi mai spendere di più di quanto il tuo canale più grande permetta di spendere. Questa limitazione però è destinata a sparire una volta che i pagamenti 'Multi Path' verranno implementati. |
| [Da dove inizio?]() | Vai alla nostra pagina di raccomandazioni per scoprire quale nodo operare, e poi decidi se vuoi un wallet Lightning su mobile o su desktop. Il nostro wallet preferito è Zap che offre una versione sia desktop che mobile il tutto con un'interfaccia molto user-friendly. Vai su ln.guide per scoprire di più sul Lightning Network. |


    
<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Realizzato da Bitcoin Q+A</a> |
  <a href="https://twitter.com/MagnificentBTC">Traduzione di @MagnificentBTC</a> |
  <a href="http://stacking.tips">Supporto</a> |
  <a href="https://bitcoiner.guide">Altre risorse</a>
  <br><br>
</p>

