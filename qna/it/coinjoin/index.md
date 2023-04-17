---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareqna.png
tags: [books, test]
---

## Coinjoin Q+A

#### Risposte semplici alle domande più comuni su Coinjoin


<br/>


| Domanda                                                   | Risposta                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [Cos'è Coinjoin?]() | Coinjoin (chiamato a volte mixing) è una soluzione per la privacy on-chain proposta per la prima volta nel 2013 da Gregory Maxwell. Coinjoin è strutturata in modo tale da invalidare la comune assunzione che tutti gli input di una transazione appartengono alla stessa entità. Gli indirizzi Bitcoin non sono collegati ad identità reali ma chiunque con sufficiente tempo e risorse (come aziende di blockchain-analytics) può iniziare a fare questi collegamenti tenendo d'occhio la blockchain di Bitcoin. Coinjoin aiuta a prevenire che ciò avvenga. |
| [Perchè abbiamo bisogno Coinjoin?]() | La blockchain di Bitcoin è completamente pubblica, quindi se hai dei bitcoin collegati alla tua identità personale (comprati ad esempio da un exchange con KYC) puoi essere tracciato on-chain da chiunque abbia gli strumenti adatti. Questo problema peggiora se inavvertitamente mischi bitcoin provenienti da fonti diverse in un'unica transazione. Magari stai pensando che questo non è un problema per te e che non hai nulla da nascondere, ma non permetteresti mai ad un estraneo di guardare il tuo conto in banca, quindi perché permetterlo con Bitcoin? |
| [Come funziona CoinJoin?]() | Ci sono diverse implementazioni diverse di Coinjoin, ma ciascuna è basata sulla stessa idea. Due o più utenti raggruppano i loro UTXO in una transazione collaborativa che è formata in modo unico. Per via di come la transazione è costruita, risulta molto difficile capire quale output della transazione appartiene a quale proprietario di input. Al massimo chi vede la transazione può fare delle ipotesi riguardo a chi possiede quale bitcoin ma non potrà mai esserne sicuro al 100%. |
| [Ci sono diversi tipi di Coinjoin?]() | Ci sono tre diverse implementazioni di coinjoin, 1) Joinmarket, che ha una struttura 'maker/taker' in cui il maker offre i suoi bitcoin (in cambio di una commissione) per farli diventare parte della transazione del taker. 2) Wasabi wallet, che usa un'app per desktop e realizza mix di grande entità. La qualità di questa implementazione è stata recentemente messa in dubbio. 3) Samourai Whirlpool, offre Coinjoin di ridotta entità ma efficaci il tutto con una interfaccia mobile molto facile da usare. Quest'ultima implementazione è l'unica che utilizziamo anche noi. |
| [Mixer e Coinjoin sono la stessa cosa?]() | No, un mixer in generale è un'entità centralizzata a cui invii i tuoi bitcoin, in modo che loro possano 'mischiarli' insieme ai bitcoin di altri utenti. Una volta finito il processo tu riceverai i bitcoin di qualcun altro in ritorno. Questi servizi dovrebbero essere evitati poiché usandoli devi avere completa fiducia che il servizio ti invii veramente dei bitcoin in ritorno dopo che il processo è stato completato. Dovresti sempre avere il controllo delle tue chiave private! |
| [Coinjoin si paga?]() | Si, tutti i servizi di Coinjoin descritti sopra applicano delle commissioni. Le commissioni applicate da ciascun servizio sono strutturate in modo diverso quindi dovresti sempre informarti in prima persona prima di iniziare ad usare questi servizi. |
| [C'è il rischio di perdere i bitcoin partecipando a una transazione Coinjoin?]() | I servizi Coinjoin descritti sopra, sono strutturati in modo che tu abbia sempre il controllo delle tue chiavi private. Per ora non siamo mai venuti a conoscenza di casi in cui gli utenti abbiano perso bitcoin per via di errori con il protocollo o per via di attori malintenzionati dietro a questi servizi. Detto ciò, dovresti sempre informarti in prima persona sui servizi che intendi usare e se sei insicuro allora fai pratica con dei bitcoin sulla testnet. |
| [Quali problemi posso incontrare usando Coinjoin?]() |  Ci sono stati dei casi in cui alcuni exchange hanno segnalato degli utenti che avevano utilizzato Coinjoin. Gli utenti così segnalati in alcuni casi hanno dovuto fornire maggiori informazioni KYC mentre altri hanno assistito alla chiusura del loro conto con l'exchange. Per trasparenza dobbiamo dire che tutti gli utenti che hanno riscontrato questi problemi utilizzavano l'implementazione del wallet Wasabi. Non sono stati rilevati casi problematici di utenti che utilizzano Joinmarket o Samourai Whirlpool. |
| [Quali problemi posso incontrare usando Coinjoin? *continua*]() | Un aspetto relativo a Coinjoin su cui spesso si sorvola, è cosa si fa dopo che il processo è stato completato. Le tue abitudini di spesa dopo la transazione Coinjoin, possono annullare tutta la privacy guadagnata facendo la Coinjoin. Le abitudini di spesa dopo il mixing sono un argomento complesso ma strumenti come Stonewall e Stowaway, implementati nel Wallet Samourai rendono il processo molto più semplice. |
| [Cos'è un Payjoin?]() |  Chiamata anche Pay-to-end-point (P2EP), Payjoin è un tipo particolare di Coinjoin che avviene tra due partecipanti in cui uno effettua un vero pagamento all'altro. Per via di come la transazione è strutturata, è impossibile per un osservatore capire l'ammontare che viene scambiato. Un altro vantaggio di Payjoin è che per le aziende di blockchain analytics una transazione Payjoin sembra una normale transazione Bitcoin. Se molti utenti inizieranno ad usarlo, Payjoin renderà completamente invalida l'assunzione detta sopra che tutti gli input ad una transazione appartengono alla stessa entità. |
| [Cos'è la blockchain analytics?]() | La Blockchain analytics è praticata da entità che sorvegliano la blockchain in cerca di cluster e tratti comuni nelle transazioni allo scopo di tracciare le persone o per capire le loro abitudini di spesa. Le aziende di blockchain analytics ufficialmente svolgono queste attività allo scopo di fermare criminali o terroristi. Ovviamente siamo d'accordo con l'intento di fermare attività illegali che potrebbero arrecare danno ad altri, non siamo però d'accordo con l'utilizzo degli strumenti molto invasivi che queste società utilizzano per alterare la privacy dei normali utenti di Bitcoin. |
| [Dove posso imparare di più su Coinjoin?]() |  Coinjoin è un argomento molto complesso con molte sfaccettature quindi fare sempre ricerche e informarsi è assolutamente necessario. Ascolta [questo](https://stephanlivera.com/episode/138/) episodio del podcast di Stephan Livera sul perché Coinjoin è necessario e [quest'altro](https://stephanlivera.com/episode/167/) sul problema della sorveglianza della blockchain. [Questo](https://6102bitcoin.com/coinjoin-overview/) articolo di @6102Bitcoin è un'ottima descrizione delle principali implementazioni di Coinjoin. |


<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Realizzato da Bitcoin Q+A</a> |
  <a href="https://twitter.com/MagnificentBTC">Traduzione di @MagnificentBTC</a> |
  <a href="http://stacking.tips">Supporto</a> |
  <a href="https://bitcoiner.guide">Altre risorse</a>
  <br><br>
</p>

