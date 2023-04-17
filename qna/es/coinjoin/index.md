---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareqna.png
tags: [books, test]
---

## Coinjoin Q+A

#### Respuestas simples a las preguntas comunes de Coinjoin


<br/>


| Question                                                   | Answer                                                                             |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [¿Qué es Coinjoin?]() | Coinjoin (a veces llamado mezcla) es una solución de privacidad para Bitcoin que fue propuesta por primera vez en 2013 por Gregory Maxwell. Está diseñado para romper la 'heurística de propiedad común' que supone que todas las entradas a una transacción pertenecen a la misma entidad. Las direcciones de Bitcoin no están directamente vinculadas a identidades reales, pero cualquier persona con suficiente tiempo y recursos (como las empresas de análisis) puede comenzar a hacer estos enlaces mirando la Blockchain de Bitcoin. Coinjoin ayuda a prevenir esto. |
| [¿Por qué lo necesitamos?]() | La Blockchain de Bitcoin es completamente pública, por lo que, si tienes bitcoin que está vinculado a tu identidad personal (por ejemplo, a partir de un intercambio de KYC), cualquier persona con los recursos correctos puede vigilarte. Este problema empeora si accidentalmente combina bitcoins de diferentes fuentes al realizar una transacción. Puedes pensar que esto no es un problema y que no tienes nada que ocultar, pero no dejarías que un extraño vea tu saldo bancario, entonces, ¿por qué permitirlo con Bitcoin? |
| [H¿Cómo funciona Coinjoin?]() | Existen diferentes tipos de implementaciones de Coinjoin, cada una con su propia idea básica. Dos o más usuarios agrupan sus UTXO en una transacción colaborativa que se forma de una manera única. La forma en la que se construye la transacción hace que sea muy difícil para las empresas de vigilancia saber exactamente qué resultado de la transacción pertenece a cuál de los propietarios de los inputs. En el mejor de los casos, cualquiera que esté mirando la transacción puede idear una serie de escenarios posibles sobre quién posee qué pieza de bitcoin, pero nunca puede estar 100% seguro. |
| [¿Hay diferentes tipos de Coinjoin?]() | 1) Joinmarket que opera en una estructura de creador / tomador donde el creador ofrece su bitcoin (por una tarifa) para formar parte de la transacción del tomador. 2) Cartera Wasabi que utiliza una aplicación de escritorio y ofrece grandes mezclas. La calidad ha sido objeto de cierto escrutinio. 3) Samourai Whirlpool ofrece Coinjoins pequeños pero efectivos junto con una interfaz móvil fácil de usar. Es el único protocolo que usamos. |
| [¿Es un mezclador lo mismo que Coinjoin?]() | No, generalmente se considera que un mezclador es un servicio centralizado al que envías bitcoin, que luego lo mezcla y te devuelve el bitcoin de otra persona. Deben evitarse estos servicios porque se confía completamente en la entidad de mezcla para devolver algo de bitcoin después de haberlo enviado. ¡Siempre debes tener el control de tus claves privadas! |
| [¿Tengo que pagar por un Coinjoin?]() | Sí, todos los servicios de Coinjoin descritos anteriormente cobran tarifas. Cada uno tiene una estructura de tarifas ligeramente diferente, por lo que siempre debes hacer tu propia investigación antes de comenzar a usar cualquiera de ellos. |
| [¿Podría perder mi Bitcoin en un Coinjoin?]() | Cuando se utiliza un servicio Coinjoin como los enumerados anteriormente, están estructurados de tal manera que siempre tienes el control de tus claves privadas. Actualmente no tenemos conocimiento de casos de usuarios que pierdan bitcoin como resultado de un error con el protocolo o debido a que un mal actor está detrás de uno de ellos. Dicho esto, también debe practicar una diligencia debida estricta y, si no está seguro, practica primero usando bitcoin de la testnet. |
| [¿Qué problemas puedo tener con Coinjoin?]() |  Ha habido un par de casos en que los exchanges han marcado a los usuarios que han sido enlazados con un servicio Coinjoin. Esto ha provocado que algunos tengan que proporcionar información KYC y que otros tengan su cuenta en una lista negra, lo que significa que no pueden usar el exchange. Para mayor transparencia, debemos indicar que todos estos usuarios estaban vinculados a la implementación de Wasabi Wallet. No hay problemas registrados con los usuarios de Joinmarket o Samourai Whirlpool que están siendo marcados. |
| [¿Qué problemas puedo tener (continuado)?]() | Un aspecto a menudo pasado por alto de Coinjoin es lo que haces después de que se produce el coinjoin. Sus hábitos de gasto después del Coinjoin, si no se hacen correctamente, pueden deshacer por completo toda la privacidad obtenida. El gasto posterior a la mezcla puede ser un tema complejo, pero las herramientas como Stonewall y Stowaway, implementadas por Samourai Wallet, hacen que este sea un proceso mucho más fácil. |
| [¿Qué es Payjoin?]() |  A veces llamado Pay-to-end-point (P2EP), Payjoin es un tipo especial de Coinjoin entre dos partes donde una realmente paga a la otra. Debido a la estructura de la transacción, es imposible saber exactamente la cantidad que se está realizando. Otra gran cosa sobre Payjoin es que para las empresas de vigilancia de blockchain, Payjoin se parece a una transacción de bitcoinnormal. Si se adopta ampliamente, Payjoin arruinará por completo la heurística de propiedad de entrada común para siempre. |
| [¿Qué es análisis de Blockchain?]() | El análisis de Blockchain es la práctica de una entidad que supervisa la Blockchain para buscar grupos y patrones en las transacciones para tratar de rastrear a las personas o comprender sus hábitos de gasto. Las empresas de análisis de cadena hacen esto con el pretexto de que están tratando de detener a los delincuentes o al terrorismo. Si bien no estamos en desacuerdo con el sentimiento de luchar contra actividades ilegales que podrían causar daño a otros, sí estamos en desacuerdo con las herramientas de vigilancia de la red de arrastre que usan que infringen la privacidad del usuario común de bitcoin. |
| [¿Dónde puedo aprender más de Coinjoin?]() |  Coinjoin es un tema muy complejo con muchos matices, por lo que es absolutamente necesaria una investigación diligente. Escucha [este](https://stephanlivera.com/episode/138/) podcast de Stephan Livera sobre el 'por qué' de Coinjoin y [este](https://stephanlivera.com/episode/167/) sobre el problema de la vigilancia de blockchain. [Este artículo](https://6102bitcoin.com/coinjoin-overview/) de @6102Bitcoin es un excelente resumen de las tres implementaciones principales de Coinjoin  |


<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Por Bitcoin Q+A</a> |
  <a href="https://bqa.duckdns.org:20486/apps/96ZvtoJQr9bz5QyeDoUfhkmNTLZ/pos">Apoyo</a> |
  <a href="https://bitcoiner.guide">Más recursos</a>
  <br><br>
</p>

