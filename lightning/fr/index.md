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
  <a href="/lightning/fr">Français</a> 
  <br><br>
</p>

## A propos

Cette page à pour but d'aider à la compréhension du fonctionnement de Lightning et son interaction avec le réseau Bitcoin qui le soutend. Nous emploierons des termes simples et pas trop techniques, car il y a d'autres textes qui se penchent sur le sujet plus en profondeur. Grâce aux développeurs d'applications interagissant avec Lightning, de nombreux concepts décrits ici sont occultés par des interfaces utilisateur conviviales. Cependant, il est toujours intéressant de bien comprendre les concepts de base afin de savoir comment Lightning envoie ou reçoit un paiement.

<br/>

## Table of Contents 

1.  [Pour commencer](#get-started)
1.  [La pile Lightning/Bitcoin](#the-bitcoin-and-lightning-stack)
2.  [Les canaux](#channels)
3.  [Les transactions](#transactions)
4.  [Les inconvénients](#drawbacks)
5.  [Questions fréquentes](#faq)
6.  [Outils](#lightning-tools)
7.  [Autres ressources](#other-resources)

***

## Pour commencer

La théorie c'est bien mais il n'y a rien de tel que de mettre les mains dans le cambouis ! Une fois que vous aurez terminé la configuration qui suit, n'hésitez pas à m'[envoyer](https://bitcoiner.guide/#get-in-touch) une facture de quelques sats afin de la tester.

Téléchargez [Breez](Https://Breez.technology), sauvegardez votre phrase secrète et vous voilà prêt à recevoir des fonds via Lightning. Vos canaux seront alors gérés automatiquement (pour une somme modique) et vous pourrez même envoyer ou recevoir des Bitcoins sur la blockchain principale. Pour cela, l'application fait des échanges (swaps) en sous-marin et envoie ou dépose le montant équivalent de sats via Lightning. [En cliquant ici](https://youtu.be/5zhW7ilOjWg) vous pouvez voir à quoi ces transactions ressemblent.

Si vous souhaitez utiliser votre propre [node](https://node.guide), alors des dispositifs tels que myNode ou RaspiBlitz rendront la configuration plus facile. Ils sont fournis avec des outils de gestion de node comme RTL et Thunderhub et simplifient la connexion à des [portefeuilles mobiles](https://bitcoinwallet.guide/lightning) tels que Zap ou Zeus. Voici les étapes de travail principales :

1. Configurez votre node
2. Activez Lightning et créez un portefeuille
4. Déterminez le montant pour lequel vous voulez ouvrir un canal en fonction de vos habitudes de dépenses.
4. Envoyez des fonds sur votre nouveau portefeuille 
3. Identifiez un partenaire de distribution approprié à l'aide des conseils [ci-dessous](# who-to-open-a-channel-with) et obtenez la clé publique de son node.
5. Ouvrez le canal en utilisant RTL ou Thunderhub et attendez qu'il soit confirmé sur la blockchain
6. Sélectionnez un portefeuille mobile et connectez-le à votre node en utilisant les guides correspondant au node+portefeuille choisi (*ceci est entièrement facultatif car RTL ou Thunderhub peuvent être utilisés pour effectuer des transactions, mais ils ne sont pas natifs pour les mobiles*).
7. Vous voici prêt à envoyer des sats via Lightning en utilisant votre propre node
8. Pour gagner de la liquidité entrante qui vous permettra de recevoir des sats, voir les étapes décrites [ici](# inconvénients) 

***

## La pile Bitcoin/Lightning

La "couche de base'' du Bitcoin (la blockchain) n'est pas capable de traiter les transactions quotidiennes de milliards d'individus. Si par exemple, des millions de personnes voulaient soudainement utiliser le réseau pour leurs achats quotidiens, la file d'attente des échanges et leurs frais augmenteraient rapidement. Pour atténuer cela et permettre au réseau de s'adapter et faire face à la future augmentation exponentielle du nombre de transactions, un système en surcouches est en cours d'élaboration et de déploiement. On peut les comparer à la [pile de protocoles Internet](https://en.wikipedia.org/ wiki / Internet_protocol_suite).
Bien sûr, en utilisant une base de données centralisée comparable au système financier actuel le nombre d'échanges pourrait être bien supérieur. Mais ce ne serait pas vraiment dans l'esprit  "Bitcoin '', n'est-ce pas ? Les transactions risqueraient d'être censurées, la confidentialité serait inexistante et nous ne serions pas mieux lotis que dans le système bancaire. Voici donc la description de la couche 2 (layer 2) du Bitcoin, à savoir [le réseau Lightning](https://lightning.network/lightning-network-paper.pdf).

Le réseau Lightning est une solution évolutive basée sur le protocole Bitcoin. Il facilite les petits paiements quasi instantanés entre les utilisateurs à moindre fraiss. Il permet d'éviter de réaliser toutes les transactions sur la «couche de base», celle du Bitcoin tout en garantissant que la valeur de la transaction se conforme aux règles du réseau Bitcoin. Ce réseau n'opère pas sur une base de confiance, sans bases de données centralisées et chaque partie du réseau Lightning commence et se termine sur la blockchain Bitcoin. Les utilisateurs peuvent quitter la «couche 2» et revenir à la couche de base à tout moment.
<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/LN%20visual.png" class=responsive width="750" height="350" maxheight="300" />

Une représentation du réseau Lightning par <a href="https://explorer.acinq.co/">Acinq</a>
</p>

***

## Les canaux

Le réseau Lightning est constitué de milliers de canaux de paiement entre deux pairs. Ces canaux de paiement permettent à deux utilisateurs de s'envoyer des fonds autant de fois qu'ils le souhaitent, et ce presque instantanément et sans frais de blockchain.

Pour ouvrir un canal, un ou deux utilisateurs bloquent une certaine quantité de sats dans une "transaction de dépôt" sur la blockchain ce qui crée un portefeuille multi-signature 2 de 2 sur le réseau Bitcoin. Chacun des utilisateurs reçoit l'une des clés. Le statut du canal d'ouverture reflètera le montant de la contribution d'un utilisateur et chacune des parties signera pour dire qu'elle en approuve l'exactitude. Cette "signature" est en fait une transaction Bitcoin qui n'est pas diffusée et qui contient la signature des deux parties transmises via le réseau Lightning. Ces transactions signées mais non diffusées permettent à l'un ou l'autre des participants de clôturer le canal à tout moment en garantissent que les sats qu'il renferme seront retournés sur la blockchain à leur propriétaire respectif.

<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/Open%20Channel.png" class=responsive width="650" height="400" maxheight="300" />
  
Illustration simplifiée d'un canal d'échange ouvert
</p>

A chaque fois qu'un paiement a lieu de A à  B, les sats sont poussés d'un côté du canal à l'autre (tels des perles qui glissent sur un boulier). Les deux partenaires signent ensuite une transaction Bitcoin pour refléter leur solde respectif après mise à jour du canal et ils la transmettent à l'autre. Il est possible de réitérer ce processus un nombre illimité de fois sans que ces transactions pourtant signées ne soient jamais diffusées sur le réseau Bitcoin sauf en cas de fermeture du canal.

<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/Alice%20and%20Bob.png" class=responsive width="650" height="400" maxheight="300" />
  
Illustration simplifiée d'un canal de paiement direct
</p>

<br/>

## Avec qui ouvrir un canal ?

Vous pouvez ouvrir un canal avec presque tous les participants du réseau qui vous chantent, tout en faisant attention aux points suivants :

* **Est-ce quelqu'un avec qui vous allez faire des échanges fréquents ?** Si oui, il est utile d'ouvrir un canal direct pour réduire les frais de routage.
* **S'agit-il d'un partenaire sur lequel vous pouvez compter ?** S'il est régulièrement hors ligne, cela posera des problèmes d'envoi ou de réception de transactions.
* **A-t-il une bonne connexion internet ?** Si vous n'avez qu'un ou deux pairs (peers), il vaut mieux qu'ils aient une bonne connexion afin que vous puissiez envoyer les transactions à travers eux sur le réseau. Nous en parlerons plus amplement dans le paragraphe suivant qui porte sur les transactions.
* **Pouvez vous leur faire confiance ?** Nous en parlerons en détail ci-dessous, mais votre pair peut essayer de vous escroquer lors de la fermeture d'une chaîne (même s'il a peu de chances de réussir). Pour éviter de stresser, choisissez un pair que vous connaissez ou une entité de node public reconnu pour son intégrité.

Vous pouvez comparer des statistiques et bien d'autres données lors du choix d'un pair sur [1ml](https://1ml.com/) ou bien dans la version simplifiée [ici](https://nodes.lightning.computer/availability/v1/btc .json). Ces sites vous donnent une note dévaluation de nodes constitué se basant sur la disponibilité, la liquidité et le degré de connexion. Ils affichent les meilleurs 5%.

<br/>

## Clôture de canaux

Tout comme l'ouverture d'un canal, sa fermeture est une transaction sur la blockchain. Les fermetures de canaux se produisent lorsque l'une des deux parties souhaite régler leur solde sur le réseau Bitcoin. Dans Lightning, il existe trois types de fermetures de canal et dans tous les cas, les frais sont payés par la personne qui a ouvert le canal.

**Clôture consensuelle**

Ici l'une des parties initie une fermeture de canal et le fait savoir à son partenaire d'échanges. Les deux parties conviennent de fermer le canal et son état le plus récent est diffusé sur le réseau. Puis chaque participant reçoit ses sats dans son portefeuille bitcoin. Ce scénario correspond à la grande majorité des les fermetures de canaux Lightning.

**Clôture forcée**

C'est lorsqu'une des parties clôture le canal sans le consentement de l'autre. Ce type de fermeture se produit généralement lorsque l'un des pairs est injoignable. Pour initier une clôture forcée, l'utilisateur diffuse simplement l'état du canal le plus récent. Une fois que la fermeture forcée est confirmée sur la blockchain, l'utilisateur qui l'a initiée verra son solde verrouillé pendant un temps défini. Cela laissera du temps au pair injoignable de voir que le canal a été fermé. Il pourra ensuite se reconnecter pour confirmer l'état du canal. S'il ne le fait pas, la personne qui a clôturé aura accès à ses fonds sur la blockchain après un temps de verrouillage (généralement 2016 blocs ou deux semaines).

**Clôture contestée**

Une fermeture contestée résulte d'une clôture forcée. Si la partie initiatrice publie un état de canal ancien (donc pas le plus actuel) qui serait en sa faveur et qui lui attribue plus de sats sur la blockchain, l'autre partie peut contester la fermeture. Pour déclencher ce différend, les deux parties remettent simplement leur node en ligne pendant la période de verrouillage (généralement 2016 blocs ou 2 semaines). Si c'est impossible parce que leurs nodes se trouvent dans des régions géographiques différentes, ils peuvent choisir de configurer un service [Watchtower](https://bitcoinmagazine.com/articles/watchtowers-are-coming-lightning). Celui-ci, pour une somme modique, surveillera leurs canaux respectifs et agira en leur nom.

Si la partie qui crée le litige parvient à publier un état de canal plus récent que celui diffusé par son partenaire d'échange, son node pourra publier une [transaction de justice](https://bitcoinmagazine.com/articles/bitmex-research- confirme-la-foudre-justice-fonctionne) et revendiquera tout le solde du canal. La menace d'un tel scénario suffit à éloigner, par peur de pertes, la plupart des participants Lightning malhonnêtes.

***

##  Les transactions

Les transactions Lightning sont finalisées en quelques secondes et ne peuvent pas être rappelées, annulées ou modifiées par la suite. Et Lightning ne nécessite pas d'attendre la validation de block tout en préservant la sécurité de Bitcoin. En effet, tout participant de Lightning peut finaliser sur la blockchain à tout moment.

Il peut être bénéfique, lorsque les transactions sont nombreuses, de pouvoir faire des paiements rapides à peu de frais vers un seul utilisateur, mais n'oubliez pas que chaque canal laisse une trace de deux transactions sur la blockchain. Et donc il est parfois contre-productif d'ouvrir un canal pour ne faire que quelques paiements. Lightning n'est pas toujours la solution adaptée. Alors, que se passe-t-il lorsqu'un utilisateur souhaite effectuer un paiement Lightning à une personne avec laquelle il n'a pas de canal ouvert ? Et il est d'ailleurs souhaitable qu'il n'aie pas à mettre en place un canal pour chacun de ses partenaires d'échanges.

Heureusement ce n'est pas le cas, et c'est là que le réseau Lightning excelle ! Du moment que vous avez ouvert un ou deux canaux vers des nodes assez bien connectés, vous pouvez acheminer les transactions vers des personnes avec lesquelles vous n'êtes pas directement connecté, en passant par d'autres avec qui vous avez un canal.

<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/Tx%20route%202.png" class=responsive width="650" height="380" maxheight="300" />
  
Alice achemine un paiement à Dan, bien qu'elle n'ait pas de canal direct avec lui.
</p>

Ce type de transaction multi-sauts est effectué sans que vous ayez à faire confiance en utilisant un processus appelé [routage en oignon](https://wiki.ion.radar.tech/tech/lightning/onion-routing). Cette méthode permet de faire un transfert sécurisé de «messages» appelés "contrats Hashed Time Locked " ou [HTLC's](https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts). Les HTLC sont structurés de telle manière que chaque «saut» ne voit que les informations dont il a besoin pour encaisser les frais et pour continuer à acheminer les informations de paiement au prochain participant de l'itinéraire jusqu'à ce les fonds arrivent au le destinataire.

Voici un aperçu simplifié de ce qui se passe dans une transaction réussie. Cela semble compliqué, mais ne prend que quelques secondes en réalité.

1. Dan envoie une facture de 10 000 sats à Alice (instruction de paiement). Cet ordre est généré par le portefeuille Lightning de Dan et peut être envoyé à Alice via n'importe quelle méthode de communication
2. Alice reçoit la facture et l'ouvre avec son portefeuille Lightning. Elle vérifie les détails et confirme le paiement de la facture
3. Le node Lightning d'Alice utilise sa connaissance du réseau Lightning pour rechercher un chemin approprié afin d'acheminer le paiement vers Dan
4. Une fois qu'une route est trouvée, du saut initial elle continue jusqu'à Bob, avec qui Alice a un canal direct.
5. Le message d'Alice à Bob est qu'elle lui demande d'envoyer 10 001 sats à Carol, et qu'il peut garder 1 satoshi pour lui
6.Puis ils mettent tous les deux à jour l'état de leur chaîne
7. Bob envoie ensuite un message à Carol pour lui dire que si elle envoie 10 000 sats à Dan, elle peut garder 1 satoshi pour elle
8. Ils mettent à jour l'état de leur chaîne
9. Carol envoie un message à Dan, qu'il déverrouille avec une clé secrète, lui permettant de percevoir les 10 000 sats d'Alice
10. Ils mettent à jour l'état de leur chaîne
11. Le portefeuille d'Alice indique que la transaction a réussi

*Lightning n'utilise pas les identités du monde "réel". Les noms ci-dessus servent uniquement d'exemples. Chaque participant a une clé publique du node qui est son identifiant de Lightning.*

***

##  Les inconvénients

Bien que le réseau Lightning rende augmente grandement les possibilité pour le Bitcoin, il a bien sûr quelques limites :

* **La gestion des canaux** - Si un utilisateur effectue beaucoup de paiements dans une seule direction, les canaux peuvent se déséquilibrer c'est à dire que tous les fonds sont concentrés d'un côté du canal. Cela oblige alors l'utilisateur à faire un rééquilibrage circulaire par exemple en se payant lui-même d'un canal vers un autre ou via un service [d'échange sous-marin](https://lightning.engineering/loop/). Celui-ci propose, pour une somme modique, de vider ou de remplir un canal existant. La plupart des [outils de gestion] des nodes Lightning  (# lightning-tools) sont dotés d'un service d'échange.

* **Liquidité entrante** - Si un utilisateur ouvre une chaîne vers quelqu'un d'autre, tous les fonds se trouvent initialement de son côté du canal. Cela signifie qu'ils ne peuvent qu'envoyer des paiements mais pas en recevoir. Des portefeuilles Lightning comme [Breez](https://breez.technology/) et [Pheonix](https://phoenix.acinq.co/) ont récemment publié des mises à jour qui gèrent ce problème en ouvrant des canaux [à la demande](https: //medium.com/breez-technology/the-breez-release-candidate-getting-lightning-ready-for-the-global-takeover-b5d1f9756229) selon les besoins. Cependant, pour ceux qui ont leur propre node Lightning et qui gèrent leurs propres canaux, voici les principaux moyens de contourner ce problème :
  * Demandez à quelqu'un d'autre de vous ouvrir une chaîne. Certaines entreprises comme [LN Big](https://lnbig.com/) rendront la pareille à tous les canaux ouverts avec eux
  * Envoyez quelques sats "au loin" vers l'autre côté du canal
  * Achetez de la liquidité entrante auprès d'un service comme [Lightning Pool](https://lightning.engineering/posts/2020-11-02-lightning-pool/)
  * Utilisez un service [d'échange sous-marin](https://wiki.ion.radar.tech/tech/research/submarine-swap)

* **Taille du canal** - Si un utilisateur ouvre une chaîne pour 1 million de sats et qu'il veut ensuite effectuer un paiement de 1,5 million de sats, il ne peut pas le faire sans l'utilisation de [Multi Path Payments](https://lightning.engineering/posts/2020-05 -07-mpp /) qui lui permet d'utiliser plusieurs canaux contrôlés par un seul utilisateur pour acheminer une transaction. Heureusement, ce procédé est en train de se développer et améliore considérablement l'expérience utilisateur et le taux de réussite des paiements.

* **Liquidité de la route** - Si Alice souhaite envoyer un paiement important à Dan via Lightning, toutes les personnes sur l'itinéraire choisi devront avoir au moins un solde du même montant dans leur canal, sinon le paiement échoue. Mais cela n'est un problème que pour les paiements importants.

* **Portefeuilles à chaud** - En raison de la nature du réseau Lightning, le node Lightning d'un utilisateur doit être en ligne 24h / 24 et 7j / 7 pour accuser réception et signer les transactions dans les deux sens. Cela signifie qu'il est conseillé aux utilisateurs de ne pas y garder de grandes quantités de bitcoin sans les précautions de sécurité et de sauvegarde appropriées.

* **Sauvegardes** - Les utilisateurs de Bitcoin ont déjà l'habitude de sauvegarder leur phrase secrète. Les portefeuilles Lightning ne sont pas différents. Cependant, l'implémentation Lightning la plus courante [LND](https://github.com/lightningnetwork/lnd) dispose également de [sauvegardes de canaux statiques](https://wiki.ion.radar.tech/tutorials/troubleshooting/static-channel -backups # solution-2-static-channel-backups-scb) pour permettre aux utilisateurs de récupérer leurs fonds Lightning en dehors de la blockchain en cas de panne matérielle ou autre. Il est recommandé de télécharger une copie de votre fichier SCB lors de l'ouverture ou de la fermeture de canaux. Comment vous le faites dépendra de votre interaction avec le node Lightning, mais la plupart des interfaces ont un bouton de téléchargement.

***

## Questions fréquentes

**Dois-je utiliser Lightning ?**

Il n'y a pas de bonne ou de mauvaise réponse à cela. À l'heure actuelle, les frais de Bitcoin sont encore assez faibles, ce qui rend les transactions sur la blockchain acceptables pour 95% des utilisateurs. Mais pour ceux qui font régulièrement des transactions avec de petits montants, Lightning permet d'économiser sur les frais et de bénéficier d'une durée de transaction quasi instantanée.

**Ai-je besoin d'un node ?**

Tout comme pour le Bitcoin, vous n'avez pas besoin d'un node pour interagir avec Lightning, mais le fait d'avoir votre propre node permet de le faire en toute sécurité et confidentialité. Sinon vous devrez faire confiance au node de quelqu'un d'autre. Heureusement, la plupart des nodes du Bitcoin sont également fournis avec Lightning. Découvrez-les dans la section Outils Lightning ci-dessous.

**Qui gère le réseau Lightning ?**

Le  réseau Lightning est un protocole ouvert sur lequel travaillent  et contribuent de nombreuses personnes. Toutes les implémentations fonctionnent sur le open standard [BOLT](https://github.com/lightningnetwork/lightning-rfc/blob/master/00-introduction.md)  et sont totalement interopérables. Celles-ci sont :

1. [LND](https://github.com/lightningnetwork/lnd)
2. [C Lightning](https://github.com/ElementsProject/lightning)
3. [Eclair](https://github.com/ACINQ/eclair)

**Y a-t-il un "coin" Lightning  ?**

Non, les transactions Lightning transfèrent les avoirs de bitcoin d'une personne à une autre.

**Pourquoi les paiements échouent-t-ils ?**

Les échecs de paiement se produisent pour différentes raisons, mais le plus souvent parce que le node avec lequel vous effectuez des transactions ne trouve pas d'itinéraire de paiement adapté pour atteindre sa destination.


**Que sont des canaux équilibrés ?**

Un canal équilibré signifie simplement que vos sats sont bien répartis des deux côtés du canal comme un boulier dont les boules sont bienéquilibrées des deux côtés. Cela est avantageux pour envoyer **ou** recevoir des fonds via Lightning et c'est également bénéfique pour ceux qui souhaitent être rémunérés en sats en faisant office de [node de routage](https://blog.lightning.engineering/posts/ 2019/11/07 / routing-guide-2.html) (réservé aux utilisateurs avancés).

Dans l'exemple ci-dessous, le solde bleu sur la gauche est le «solde local». C'est la taille du solde de mon côté de chaque canal et c'est aussi ce que je peux **dépenser** pour chacun d'eux. Le solde vert sur la droite est le «solde distant». C'est la taille du solde de mes pairs du canal et correspond à ce que je peux **recevoir** de chacun d'entre eux.

<p align="center">
<img src="https://raw.githubusercontent.com/BitcoinQnA/ln-guide/master/assets/images/Channels.png" class=responsive width="650" height="300" maxheight="300" />
  
Schéma du solde des canaux dans Thunderhub.
</p>

**Comment équilibrer mes canaux ?**

Les deux outils de gestion de node Lightning les plus courants sont [Ride the Lightning](https://twitter.com/Suheb__/status/1228470045715681280?s=20) et [Thunderhub](https://apotdevin.com/blog/thunderhub-balancing ) et ils ont des interfaces utilisateur très simples. Cliquez sur les liens pour voir les démos vidéo de chacun d'eux.

**Que se passe-t-il si mon node est hors service alors que j'ai des canaux ouverts ?**

La meilleure solution est de réactiver votre node et d'éviter d'avoir à fermer vos canaux, mais cela ne sera pas toujours possible. C'est pour cela que les sauvegardes sont cruciales. Dans un cas comme celui-là, vous pouvez importer votre fichier de sauvegarde du portefeuille Lightning et les canaux statiques dans un autre node Lightning. Cela déclenchera une notification de fermeture à tous vos pairs et renverra vos sats dans votre portefeuille sur la blockchain. Il est possible de le faire en ligne de commande, mais c'est plus simple de le faire dans des interfaces comme RTL ou Thunderhub. Une autre conséquence pourrait être qu'un de vos pairs Lightning remarque que vous êtes déconnecté et fasse une fermeture forcée du canal (en espérant qu'il soit [honnête](# channel-closures)), et cela renverra tous les sats de ce canal sur votre portefeuille sur la blockchain.

**Pourquoi le solde de mes canaux change-ils avec le temps ?**

C'est probablement parce que quelqu'un a fait une transaction via votre node. De ce fait une partie du solde est envoyé d'un côté du canal à l'autre. Si vous souhaitez éviter cela, vous pouvez spécifier que votre canal est privé au moment de l'ouverture. Cela le protège efficacement du regard du reste du réseau.

**Comment faire pour retirer mes sats de Lightning ?**

Vous pouvez fermer un canal, ce qui enverra votre solde sur votre portefeuille bitcoin. Sinon, si vous avez reçu de nombreux paiements Lightning et que le solde de votre canal est saturé, vous pouvez faire une [boucle de sortie](https://lightning.engineering/loop/) qui ramènera un pourcentage du solde de votre canal sur un portefeuille de la blockchain, libérant ainsi plus de capacité pour recevoir des fonds à nouveau. L'opération inverse (loop in) peut être utilisée pour "recharger" le solde de votre canal si vous avez effectué beaucoup de paiements et que vous ne disposez plus de liquidités sortantes suffisantes.

[CoinOS](https://coinos.io/) est aussi une autre bonne solution pour permuter facilement entre "on chain" et "off chain". Assurez-vous d'utiliser l'option non-dépositaire pour éviter tout risque émanant d'un tiers.

**Puis-je agrandir mon canal après l'avoir ouvert ?**

Non, la taille des canaux sont fixées au moment de l'ouverture. Cependant, vous pouvez exploiter plusieurs canaux en même temps en utilisant Multi Path Payments.

**Puis-je gagner de l'argent sur le réseau Lightning ?**

Oui, techniquement, vous pouvez gagner des sats via le routage. Cependant, les gains possibles par rapport à l'effort à fournir pour la gestion des nodes et des canaux font que ce n'est pas à la portée de l'utilisateur moyen.

**Combien coûte l'ouverture ou la fermeture d'un canal ?**

Cela dépend de l'état actuel du [mempool](https://mempool.space) Bitcoin et des frais négociés avec votre pair de canal.

**Qu'est-ce que Keysend ?**

Keysend est une application qui permet de router des paiements spontanés sans facture.

**Que sont MPP ?**

Le MPP, [Multi Path Payments](https://lightning.engineering/posts/2020-05-07-mpp/) permet à un utilisateur d'envoyer des paiements supérieurs à la capacité de son plus grand canal en utilisant la liquidité de plusieurs canaux en même temps. Cette option doit être active sur le node.


***


##  Outils Lightning 

* [Portefeuilles](https://bitcoinwallet.guide/lightning)
* [Nodes](https://node.guide)
* [Echanges et Services](/docs/EXCHANGES.md)
* [Boutiques Lightning](https://lightningnetworkstores.com/)
* [Explorateur de réseau](https://1ml.com/)
* [Astuces Lightning](https://tippin.me/)


##  Autres ressources

* [White paper](https://lightning.network/lightning-network-paper.pdf)
* [Explications approfondies du réseau Lightning](https://dev.lightning.community/overview/)
* [Livre: Maitriser le réseau Lightning](https://github.com/lnbook/lnbook) (*En cours de rédaction*)
* [Wiki sur le réseau Lightning ](https://lightningwiki.net/index.php/Main_Page)
* [Gérer les nodes Lightning par Openoms](https://openoms.gitbook.io/lightning-node-management/)
* [Liste exhaustive de ressources Lightning](https://github.com/bcongdon/awesome-lightning-network)
* [Un autre portail de ressources Lightning](https://www.lopp.net/lightning-information.html) 

## Vidéos

* [Aperçu Ligntning par Ministry of Nodes](https://youtu.be/39HRCfMQ_ZU)
* [Cas concrets d'utilisation par Ministry of Nodes ](https://youtu.be/DfRYJcBsfkA)
* [Guide pas à pas du portefeuille TFTC Breez](https://youtu.be/5zhW7ilOjWg)
* [Introduction complète à Lightning et guide de mise en service par BTC Sessions ](https://youtu.be/KItleddMYFU)
* [Guide pas à pas du portefeuille Phoenix par BTC Sessions ](https://youtu.be/Cx5PK1H5OR0)
* [Guide pas à pas de Bitcoin RTL par KIS](https://www.keepitsimplebitcoin.com/nodl-lightning-node/)

## Podcasts

* [Gérez votre node Lightning par Stephan Livera](https://stephanlivera.com/episode/135/)
* [Introduction(1) à Lightning de What Bitcoin Did](https://www.whatbitcoindid.com/podcast/the-beginners-guide-to-bitcoin-part-13-the-lightning-network-with-jack-mallers)
* [Introduction(2) à Lightning de What Bitcoin Did](https://www.whatbitcoindid.com/podcast/christian-decker-an-introduction-to-the-lightning-network)

***

<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">De Bitcoin Q+A</a> |
  <a href="https://twitter.com/infos_sim">Traduction par @infos_sim</a> 
  <br><br>
</p>
