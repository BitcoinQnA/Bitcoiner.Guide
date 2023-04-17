---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareqna.png
tags: [books, test]
---

## Wallets Q+A

#### Risposte semplici alle domande più frequenti sui wallet Bitcoin

<br/>


| Domanda                                                   | Risposta                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [Cos'è un wallet?]() | Un wallet (portafoglio) Bitcoin, così come il tuo normale portafoglio, è un modo per conservare valore. La differenza principale è che un wallet Bitcoin non conserva veramente i bitcoin al suo interno, i bitcoin esistono solo nella blockchain. Un wallet Bitcoin conserva solo le chiavi crittografiche necessarie a inviare o ricevere bitcoin tramite il network. |
| [Cosa sono le parole del seed?]() | Le parole del seed (o mnemonic) sono 12 o 24 parole in sequenza che vengono generate quando crei un nuovo wallet. Queste parole sono il backup principale per l'intero wallet e quindi non dovrebbero mai essere condivise con nessuno e non dovrebbero mai essere conservate in luoghi dove potrebbero essere compromesse. Chiunque abbia accesso a queste parole può rubare i tuoi bitcoin. |
| [Cos'è una passphrase?]() | Una passphrase (Spesso conosciuta come la tredicesima/ventiquattresima parola) è una parola o frase aggiuntiva che ha lo scopo di aggiungere più sicurezza al tuo backup. Se le tue parole del seed sono state rubate ma hai una passphrase, al ladro non basterà il seed ma avrà bisogno anche della passphrase per accedere ai tuoi bitcoin. Non conservare mai le tue parole del seed e la tua passphrase insieme. |
| [Cos'è una chiave privata?]() | La chiave privata è generata partendo dalle tue parole del seed. Essa è lo strumento necessario per spendere bitcoin appartenenti all'indirizzo corrispondente a quella specifica chiave privata. Il tuo wallet genererà una chiave privata per ogni indirizzo che crea. Al giorno d'oggi la maggior parte degli utilizzatori di Bitcoin non dovranno mai interagire direttamente con le chiavi private, infatti sono generalmente gestite dal software del wallet. |
| [Cos'è una chiave pubblica?]() | Le chiavi pubbliche sono usate nelle transazioni per verificare che il proprietario della corrispondente chiave privata abbia creato una firma valida per spendere i fondi. Anche in questo caso il normale utente non dovrà mai vedere o interagire con le chiavi pubbliche. |
| [Cos'è una chiave pubblica estesa (extended public key)?]() | Una chiave pubblica estesa (o Xpub) permette di visualizzare tutti i fondi contenuti nel tuo wallet. Una Xpub è in grado di generare e quindi vedere ogni indirizzo contenuto in un wallet, quindi devi fare attenzione alle persone con cui condividi la tua Xpub. Se non sei già connesso al tuo nodo personale allora è molto probabile che qualcun altro conosca la tua Xpub. Alcune varianti della Xpub sono Ypub e Zpub, ma hanno tutte la stessa funzione. |
| [Cos'è un indirizzo?]() | Un indirizzo è una stringa di lettere e numeri che appartiene al tuo wallet. E' ciò che condividi con gli altri per ricevere bitcoin. I wallet possono creare un numero infinito di indirizzi quindi è sempre una buona idea quella di non usare mai lo stesso indirizzo per motivi di privacy. La maggior parte dei wallet svolgono questa funzione in automatico producendo un nuovo indirizzo ogni volta che ricevi una transazione, tenendo allo stesso tempo il conto totale dei bitcoin che possiedi nei vari indirizzi. |
| [Cos'è un wallet mobile?]() | Un wallet mobile è un wallet sul tuo smartphone. Questi wallet permettono di accedere comodamente ai propri bitcoin ma comportano il rischio che perdendo o rompendo il tuo smartphone tu perda anche i tuoi bitcoin. Questo non dovrebbe essere un problema se hai scritto le tue parole del seed, infatti grazie ad esse puoi recuperare il tuo wallet su un altro dispositivo. |
| [Cos'è un wallet desktop?]() |  Un wallet desktop è un wallet sul tuo computer. I wallet desktop di solito hanno più funzionalità dei wallet mobile ma possono essere anche più complicati. Inoltre devi ricordare che i computer sono dispositivi connesi ad internet e sono soggetti ad attacchi malware quindi devi sempre stare attento al software che installi. |
| [Cos'è un wallet multi-sig?]() | Un wallet multi-signature, letteralmente "multi-firma", è un wallet che richiede più di una chiave privata per firmare una transazione. Questo potrebbe voler dire che sono richieste 2 chiavi private su 3 per spendere i bitcoin oppure 15 su 20 ecc. Questo andrà specificato dall'utente quando crea il wallet. I wallet Multi-sig sono più sicuri dei wallet a firma singola ma sono molto più complicati per quanto riguarda la creazione, i backup e le transazioni. Gli utenti inesperti dovrebbero procedere con cautela. |
| [Cos'è un wallet "watch-only"?]() |  Un wallet "watch-only" è creato usando la tua chiave pubblica estesa (Xpub) e ti permette di controllare il bilancio del tuo wallet in modalità di sola lettura. I wallet "watch-only" non contengono chavi private e non possono essere usati per spendere fondi. Stai attento alle persone a cui dai la tua Xpub, chiunque abbia accesso ad essa può tracciare i tuoi fondi. |
| [Cos'è un wallet custodial?]() | Questo è un wallet di cui tu non controlli le chiavi private. Questi wallet spesso sono in grado di semplificare di molto le cose ma hanno lo svantaggio che, di fatto, tu non hai il controllo dei tuoi bitcoin. I wallet custodial si trovano spesso sugli exchange e nessuno dovrebbe mai tenere grandi quantità di bitcoin in essi. |
| [Cos'è un wallet non-custodial?]() | Con un wallet non-custodial tu hai il controllo delle chiavi private. Questo è il modo in cui Bitcoin dovrebbe essere usato e anche tu dovresti sempre assicurarti di usare un wallet non custodial. Un modo veloce per capire se stai usando un wallet non-custodial è di farsi la domanda: quando l'ho aperto ho dovuto scrivere le parole del seed? Se sì, allora hai un wallet non-custodial. |
| [Come faccio a sapere quale commissione usare?]() | Questo dipende interamente da quanto velocemente vuoi che la tua transazione sia processata e da quanto è occupato il network nel momento in cui vuoi inviare bitcoin. La maggior parte dei wallet ti fornirà una commissione stimata calcolata su questi parametri e poi ti permetterà di modificarla in base alle tue necessità. |
| [Cos'è un codice QR?]() | Un codice QR è una rappresentazione visiva di alcuni dati. Essi sono usati in Bitcoin per convertire gli indirizzi, che sono lunghi e difficili da leggere, in una sorta di codice a barre che può essere facilmente scannerizzato da un wallet. Questo rimuove l'onere di digitare l'indirizzo a mano, cosa che potrebbe causare errori come l'invio di fondi a un indirizzo non esistente o sbagliato. |
| [Cos'è un block explorer?]() | Un block explorer è un sito o una applicazione che ti permette di trovare i dettagli di ogni blocco sulla blockchain. Puoi trovare dati come il numero di transazioni in un blocco, indirizzi coinvolti nelle varie transazioni, commissioni pagate, ammontare inviato, altezza del blocco e l'orario in cui è stato prodotto. |

  
    
<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Realizzato da Bitcoin Q+A</a> |
  <a href="https://twitter.com/MagnificentBTC">Traduzione di @MagnificentBTC</a> |
  <a href="http://stacking.tips">Supporto</a> |
  <a href="https://bitcoiner.guide">Altre risorse</a>
  <br><br>
</p>

