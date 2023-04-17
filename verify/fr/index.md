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

Savons nous combien de dollars ont jamais été imprimés?

Iu combien d'or a jamais été extrait?

Non, personne ne le sait. L'état pourrait faire une estimation basée sur les informations dont il dispose, mais le fait est que **personne au monde** ne peut répondre à ces 2 questions avec précision. Mais pour le Bitcoin c'est différent.

Pour la première fois dans l'histoire de l'humanité, n'importe qui peut  constater la quantité totale **exacte** d'un actif monétaire mondial, sans avoir besoin de permission et sans dépendre d'un tiers. Tout ce dont il a besoin est un [node](https://node.guide) et environ 10 minutes de temps disponible.
***

## Comment faire ?

C'est beaucoup plus facile que vous ne le pensez de vérifier la quantité totale de bitcoins existants. Si vous gérez votre propre node, vous pouvez regarder à tout moment, aussi souvent que vous le souhaitez. Et vous savez que vous ne dépendez que  de votre propre matériel et de vos logiciels open source pour cela.


### Dans un node individuel

1. Configurez votre [node](/node) et attendez la fin du téléchargement initial des blocs
2. Connectez-vous en SSH à votre node. Vous trouverez les instructions pour cela dans les pages de documentation de votre node. Les utilisateurs de Mac et de Linux peuvent utiliser le 'terminal' et les utilisateurs Windows peuvent télécharger et utiliser [Putty](https://www.putty.org/)
3. Puis tapez la commande suivante `bitcoin-cli gettxoutsetinfo`
4. Puis attendez jusqu'à 10 minutes en fonction de votre matériel.

### Dans un node individuel (en mode graphique)

La plupart des nodes les plus populaires intègrent désormais une version locale de [cet explorateur](https://explorer.btc21.org/) qui vous permet d'exécuter des commandes RPC via l'interface graphique. Allez à la section «Navigateur RPC» et cliquez sur «gettxoutsetinfo», puis sur "execute".

Et, en fonction de votre matériel, cela peut prendre jusqu'à 10 minutes.

<img src = "/assets/img/RPC1.png" class = responsive width = "450" height = "300" maxheight = "300">

### Dans Bitcoin Core

1. Téléchargez et installez [Bitcoin Core](https://bitcoin.org/en/download), puis attendez la fin du téléchargement initial des blocs
2. Ouvrez la «console» dans Bitcoin Core et entrez «gettxoutsetinfo»
3. Puis attendez jusqu'à 10 minutes en fonction de votre matériel.

### Autres options

Les applications suivantes vous permettent de vérifier la quantité de bitcoin en un clic, une fois connecté à votre node

* [Fully noded](https://fonta1n3.github.io/FullyNoded/)
* [Spectre Desktop](https://github.com/cryptoadvance/specter-desktop)

***

Après un court instant, vous devriez obtenir une réponse du style :

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

## Calculs

Comment mon node a-t-il su qu'au moment de ma commande `gettxoutsetinfo`, il y avait un total de 18.537.233,94446619 bitcoins minés sur la somme [connue](https://en.bitcoin.it/wiki/Controlled_supply) d'un peu moins de 21.000.000 ?

C'est parce que le Bitcoin est émis selon un calendrier fixé à l'avance qui diminue avec chaque événement de "halving" (réduction de moitié) qui se produit tous les 210000 blocs (environ tous les quatre ans). Ces périodes sont parfois appelées «période de récompense». Voici un résumé de la quantité de bitcoins disponibles dans les périodes passées jusqu'à aujourd'hui, au moment de la rédaction de cet article.

* Période de récompense 1 = 50 bitcoins par bloc
* Période de récompense 2 = 25 bitcoins par bloc
* Période de récompense 3 = 12,5 bitcoins par bloc
* Période de récompense 4 (actuelle) = 6,25 bitcoins par bloc

Maintenant nous pouvons calculer la quantité attendue de bitcoins à n'importe quelle position de la blockchain.

* Période de récompense = (50 * 210.000) = **10.500.000**
* Période de récompense 2 = (25 * 210.000) = **5.250.000**
* Période de récompense 3 = (12,5 * 210.000) = **2.625.000**
* Période de récompense 4 = (6,25 * (655.987 - 629.999)) = **162.425**
 
*655.987 c'est la position dans la blockchain au moment de l'exécution de gettxoutsetinfo. 629.999 c'est le dernier bloc avant la période actuelle de récompense. Le premier moins le deuxième, nous donne le nombre de blocs qui ont été minés au cours de la période de récompense actuelle*

Additionnez toutes les périodes et vous obtiendrez la quantité totale de bitcoin attendue c'est à dire **18.537.425**.

Cependant, mon node a calculé qu'à la position de bloc 655.987, il n'y avait en fait que **18.537.233,94446619** bitcoin. 

***

## Bitcoins manquants?

Pourquoi mon node me dit-il qu'il manque **191,05553381** bitcoins par rapport à ce qu'indique le calendrier d'émission ?

Dans [cet article](https://fjahr.com/posts/where-are-the-coins/) par [Fjhar](https://twitter.com/fjahr) vous trouverez la description détaillée de quelques unes des raisons. Vous avez aussi une version courte dans la réponse de Bitcoin Stack Exchange [ici](https://bitcoin.stackexchange.com/questions/38994/will-there-be-21-million-bitcoins-eventually/38998#38998).

Voici un très bref résumé des raisons :

1. Dans le code Bitcoin il est écrit que la récompense [du bloc fondateur](https://en.bitcoin.it/wiki/Genesis_block) (genesis block) ne peut être dépensée et ne fait pas partie de l'ensemble des UTXO
2. Le bug du double TxID qui est décrit dans [BIP30](https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki)
3. La destruction de bitcoins via le le OP_RETURN pour les «brûler»
4. Certains des mineurs ne réclament pas l'entièreté de la récompense pour le bloc miné







