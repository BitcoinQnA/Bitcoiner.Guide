---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareqna.png
tags: [books, test]
---

## Questions et réponses sur Lightning

#### Réponses simples aux questions les plus courantes sur le réseau Lightning

Pour une analyse plus approfondie, cliquez [ici](https://bitcoiner.guide/lightning)

<br/>


| Question                                                   | Réponse                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [Qu'est-ce qu'un nœud?]() | Un nœud est un ordinateur qui exécute le logiciel du  Bitcoin. Votre nœud est votre exemplaire de la chaîne de blocs et de l'ensemble de règles du réseau Bitcoin et constitue une passerelle vers tout l'écosystème. Il distribue les transactions, vérifie que les bitcoins que vous recevez sont légitimes et préserve votre confidentialité en vous permettant d'y participer sans dépendre de qui que ce soit. |
| [Qu'est-ce que le réseau Lightning ?]() | C'est une solution évolutive basée sur le protocole Bitcoin. Il facilite les petits paiements instantanés entre des utilisateurs à des taux très bas. Cela évite que chaque transaction ait lieu sur la «couche une» du Bitcoin tout en garantissant le respect des règles et valeurs fondamentales du réseau pour chaque transaction. A propos, vous ne pouvez pas effectuer de transactions sur Lightning sans posséder de bitcoin.|
| [Pourquoi avons-nous besoin de Lightning ?]() | À l'heure actuelle, nous n'avons pas vraiment BESOIN du réseau Lightning car les transactions Bitcoin normales (communément appelées «transactions sur la chaîne») bénéficient de frais relativement bas, même avec un délai de confirmation rapide. Le Lightning commencera vraiment à être interéssant lorsque les frais «sur la chaîne» augmenteront en raison du nombre croissant d'utilisateurs et de la baisse de la subvention globale. Lightning est également très prometteur pour de petits paiements fréquents, tels que ceux nécessaires au déverrouillage de contenu en ligne. |
| [Comment fonctionne le réseau Lightning ?]() | Prenons un exemple: Alice ouvre un canal de paiement avec Bob en effectuant une «transaction de versement» sur la chaîne. La valeur de cette transaction de versement détermine la somme qu'Alice peut transférer à l'aide de Lightning. Une fois la transaction de versement confirmée sur la couche une, Alice est libre de traiter avec Bob par l'intermédiaire de Lightning autant de fois qu'elle le souhaite jusqu'à ce que l'un ou l'autre ou bien les deux décident de fermer le canal. Chaque transaction Lightning met à jour l'état actuel du canal afin qu'aucune des parties ne puisse se tromper sur les fonds. Lorsqu'ils ferment le canal, le dernier «état de la chaîne» est diffusé sur le réseau Bitcoin et les deux parties recevront le solde correspondant dans leur portefeuille. |
| [Et si Alice veut payer quelqu'un d'autre ?]() | C'est ici que Lightning est vraiment brillant. Les canaux de paiement peuvent être reliés afin de trouver une route vers le destinataire. Alice n'a pas besoin d'avoir un canal ouvert avec David pour lui envoyer des sats, car le réseau trouvera la route optimale pour acheminer le paiement via d'autres canaux. Cela pourrait ressembler au scénario suivant : Alice> Bob> Charlie> David. Tout au long du parcours, le paiement est sécurisé par du chiffrement afin qu'aucun intermédiaire ne puisse voler les fonds qui ne lui appartiennent pas. |
| [Qui possède et contrôle le réseau Lightning ?]() | Tout comme le Bitcoin, il est entièrement open source et n'appartient à personne ni à aucune organisation. Tout le monde peut exécuter un nœud et participer au réseau sans aucune autorisation. Il existe plusieurs mises en oeuvre populaires de Lightning, notamment LND, C Lightning et Eclair. Toutes ces versions sont interopérables à presque cent pour cent. |
| [Des mineurs sont-ils actifs sur le réseau Lightning ?]() | Non, le réseau Lightning est construit sur la couche une du Bitcoin avec les mêmes fonctionnalités de sécurité. Les frais minimaux que vous payez sur Lightning vont aux participants du réseau qui font partie de la route empruntée par votre paiement, et donc il peut s'agir de toute personne exécutant un nœud avec Lightning. |
| [Lightning a-t-il sa propre chaîne de blocs ?]() | Non, Lightning est un réseau de canaux de paiement interconnectés. Toutes les transactions d'ouverture et de fermeture du canal Lightning ont lieu sur le protocole Bitcoin sous-jacent. Lightning hérite de la sécurité de la chaîne de blocs. |
| [Quels sont les inconvénients de Lightning ?]() | Pour quelqu'un qui utilise fréquemment Lightning Network avec plusieurs canaux, la gestion des liquidités peut devenir fastidieuse. Le réseau est relativement jeune et certains paiements peuvent parfois échouer, mais à mesure que le développement se poursuit, ces cas sont de moins en moins fréquents. En raison de la structure du réseau, il n'est pas aussi bien adapté à des paiements importants par manque de liquidité. Cela devrait s'arranger à mesure que le réseau se développe et que les gens auront de plus en plus confiance en sa fiabilité. |
| [Ai-je besoin d'un nœud pour utiliser Lightning ?]() | Comme pour le Bitcoin, vous n'avez pas besoin d'un nœud pour interagir avec le réseau Lightning, mais c'est conseillé. N'oubliez pas que si vous n'exécutez pas votre propre nœud, vous vous fiez à celui de quelqu'un d'autre. La bonne nouvelle est que de nos jours la plupart des nœuds Bitcoin sont également équipés d'un nœud Lightning intégré, ce qui vous facilitera la tâche. |
| [Qu'est-ce que la liquidité entrante ?]() | La liquidité entrante est la quantité de bitcoin que vous pouvez recevoir sur le réseau Lightning. Si vous ouvrez simplement un canal vers quelqu'un d'autre, vous ne pouvez envoyer que du bitcoin dans un premier temps et ceci parce que tous les fonds sont de votre côté de la chaîne. Si vous avez ouvert un canal pour 100 000 sats, puis vous en avez dépensé 25 000, votre liquidité entrante possible serait de 25 000 sats. La meilleure façon d'obtenir des liquidités entrantes est de demander à quelqu'un d'ouvrir un canal avec vous et de cette façon tout le solde serait de son côté du canal. |
| [Qu'est-ce que la liquidité sortante ?]() |  La liquidité sortante est la quantité de bitcoin que vous pouvez envoyer sur le réseau Lightning. Si vous ouvrez un canal pour 100 000 sats et que vous en dépensez 75 000, votre liquidité sortante est de 25 000 sats. Pour obtenir des liquidités sortantes c'est aussi simple que de recevoir des sats dans vos canaux existants ou d'ouvrir un nouveau canal avec plus de sats. N'oubliez pas que vous ne pouvez jamais dépenser plus que la taille totale de votre plus grand canal. Cependant cela va bientôt changer lorsque les paiements Multi-route seront déployés. |
| [Par où commencer ?]() | Consultez notre page dédiée pour vous familiariser avec les nœuds disponibles. Ensuit choisissez un portefeuille Lightning pour mobile ou pour desktop. Notre favori s'appelle "Zap" car il a une version mobile et une version desktop avec une interface utilisateur très élégante. Vous pouvez consulter [ln.guide](https://bitcoiner.guide/lightning/fr/) pour un examen plus approfondi du réseau Lightning. |


    
<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Par Bitcoin Q+A</a> |
  <a href="https://twitter.com/infos_sim">Traduction par @infos_sim</a> |
  <a href="https://tips.bitcoiner.guide">Support</a> |
  <a href="/">Plus de resources</a>
  <br><br>
</p>

