---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareqna.png
tags: [books, test]
---


## Questions et réponses sur le coinjoin

#### Réponses simples aux questions courantes sur le coinjoin


<br/>


| Question                                                   | Réponse                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [Qu'est-ce que le Coinjoin ?]() | Le Coinjoin (parfois aussi appelé mixage) est une technologie qui vise à renforcer la confidentialité sur la chaîne du Bitcoin et a été proposée pour la première fois en 2013 par Gregory Maxwell. L'idée est de casser l'hypothèse de "propriété commune" qui suppose que toutes les entrées d'une transaction appartiennent à la même personne ou entité. Certes les adresses Bitcoin ne sont pas directement liées à des identités réelles, mais toute personne disposant de suffisamment de temps et de ressources (comme les entreprises d'analyse de chaîne) peut relier des données en étudiant le registre public du Bitcoin. Coinjoin permet d'éviter de lier une identité à une adresse bitcoin. |
| [Pourquoi avons-nous besoin du Coinjoin ?]() | La chaîne de blocs est publique et donc si vous possédez un bitcoin qui est lié à votre identité personnelle (par exemple par l'utilisation d'un échange KYC), tous ceux qui disposent de ressources de surveillance peuvent vous observer. C'est encore pire si vous combinez par inadvertance des bitcoins de différentes sources lors d'une transaction. Peut-être avez-vous l'impression aujourd'hui que ce n'est pas grave et que vous n'avez rien à cacher. Mais laisseriez-vous un étranger éplucher vos relevés bancaires ? Alors pourquoi tolérer ce manque de confidentialité dans le Bitcoin ? |
| [Comment fonctionne le CoinJoin ?]() | Il existe différents types de Coinjoin, chacun ayant sa propre interprétation de la même idée de base qui est : deux ou plusieurs utilisateurs mettent en commun leurs UTXO dans une transaction collaborative qui se déroulera d'une manière particulière. En conséquence, les entreprises de surveillance auront beaucoup plus de mal à savoir exactement quelle transaction sortante provient de quel échange entrant. Au mieux, elles pourront faire des suppositions mais elles ne seront jamais sûres à 100%. |
| [Existe-t-il différentes sortes de Coinjoin ?]() | Il y a trois versions populaires du Coinjoin : 1) Joinmarket qui est un service au client dans lequel le site met à disposition son bitcoin (moyennant des frais) pour le mélanger à la transaction du preneur. 2) Le portefeuille Wasabi (application desktop) qui propose des mélanges importants (dont la qualité a fait l'objet de doutes récemment). 3) Le Whirlpool de Samourai qui propose des Coinjoins modestes mais efficaces associés à une interface mobile facile à utiliser. Ce dernier est le seul protocole que nous utilisons. |
| [Un site de mixage est-il comparable au Coinjoin ?]() | Non, un site de mixage est généralement un service centralisé sur lequel vous envoyez des bitcoins, qui les mélange et vous renvoie ensuite le bitcoin de quelqu'un d'autre. Il vaut mieux éviter ce genre de service car vous n'avez aucune garantie que le site vous renvoie du bitcoin après avoir reçu le vôtre. Or il est impératif de toujours garder le contrôle de ses clés privées ! |
| [Dois-je payer pour un Coinjoin ?]() | Oui, tous les services de Coinjoin décrits ci-dessus facturent des frais. Chacun a une structure de frais légèrement différente. Vous devrez donc toujours faire des recherches avant de commencer à en utiliser un. |
| [Y-a-t-il un risque que je perde mes bitcoin dans un Coinjoin ?]() | Lorsque vous utilisez un service de Coinjoin comme ceux cités ci-dessus, il n'y a pas de risque car vous gardez toujours le contrôle de vos clés privées. Nous n'avons connaissance d'aucun cas d'utilisateurs qui auraient perdu des bitcoins à la suite d'une erreur de protocole ou par un acte de malveillance. Cela ne vous dispense cependant pas de faire vos propres recherches et si vous avez un doute, vous pouvez faire des essais en utilisant le testnet du bitcoin.|
| [Quels problèmes puis-je rencontrer lors de l'utilisation de Coinjoin ?]() |  Il y a eu quelques cas de sites d'échange qui ont fait un signalement sur des utilisateurs de Coinjoin. Certains ont du, à la suite de cela fournir leurs informations KYC (pièce d'identité et autres) et les comptes de certains autres ont été mis sur liste noire, les empêchant d'accéder au site d'échange. Dans un souci de transparence, il faut dire que toutes les personnes concernées étaient des utilisateurs des services de Wasabi. Il n'y a eu aucun  problème signalé pour Joinmarket ou Whirlpool de Samourai. |
| [Quels problèmes peut-il y avoir dans l'utilisation de Coinjoin? *suite*]() | Il faut aussi faire attention à ses dépenses après un coinjoin car celles-ci peuvent annuler entièrement la confidentialité acquise. Ces dépenses post-mix sont un sujet complexe, mais il y a des outils tels que Stonewall et Stowaway par Samourai Wallet qui vous facilitent la tâche. |
| [Qu'est-ce que Payjoin ?]() | Le Payjoin ou Pay-to-end-point (P2EP) est un version particulière de Coinjoin entre deux parties dans laquelle l'une paie en fait l'autre. De par la structure de la transaction, il est impossible de déterminer exactement le montant de l'échange. Pour les entreprises de surveillance de la blockchain, Payjoin présente un autre avantage car un Payjoin ressemble à une transaction Bitcoin classique. Si son utilisation se répand, Payjoin détruira complètement l'hypothèse de "propriété commune" qui suppose que toutes les entrées d'une transaction appartiennent à la même personne ou entité. |
| [Qu'est-ce que l'analyse de la chaîne ?]() | L'analyse de la chaîne Bitcoin est la pratique d'une entité qui surveille la chaîne de blocs pour rechercher des clusters et des modèles dans les transactions afin d'observer des personnes ou d'étudier leurs habitudes de dépenses. Les entreprises d'analyse de la chaîne prétendent le faire pour lutter contre la criminalité ou le terrorisme. Nous trouvons légitime de lutter contre des activités illégales nuisibles à autrui, mais nous réprouvons les outils de surveillance de masse qui portent atteinte à la vie privée de l'utilisateur lambda du Bitcoin.|
| [Où puis-je me renseigner sur Coinjoin ?]() |  Coinjoin est un sujet très complexe avec beaucoup de nuances et une recherche minutieuse est donc absolument nécessaire. Écoutez le [podcast](https://stephanlivera.com/episode/138/) de Stephan Livera sur le "Pourquoi" du Coinjoin ou/et [celui](https://stephanlivera.com/episode/167/) sur le problème de la surveillance de la blockchain. Cet [article](https://6102bitcoin.com/coinjoin-overview/de) @6102Bitcoin est un excellent aperçu des trois principales mises en oeuvre de Coinjoin.|


<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Par Bitcoin Q+A</a> |
  <a href="https://twitter.com/infos_sim">Traduction par @infos_sim</a> |
  <a href="https://tips.bitcoiner.guide">Support</a> |
  <a href="/">Plus de ressources</a>
  <br><br>
</p>

