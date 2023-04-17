---
layout: page
title: Bitcoin Q+A
subtitle: Simple answers to your Bitcoin questions
#thumbnail-img: /assets/img/thumb.png
share-img: /assets/img/shareqna.png
tags: [books, test]
---

## Lightning Q+A

#### Respuestas simples a las preguntas comunes de Lightning Network

Para una mirada más profunda a Lightning Network, consulte [aquí](/lightning)

<br/>


| Pregunta                                                  | Responder                                                                           |
|------------------------------------------------------------|------------------------------------------------------------------------------------|  
| [¿Qué es la Lightnin Network?]() | Lightning Network es una solución de escala construida sobre el protocolo Bitcoin. Facilita pagos más pequeños, casi instantáneos entre usuarios a un coste muy bajo. Evita la necesidad de que todas las transacciones realizadas se realicen en la "capa base" de Bitcoin y, al mismo tiempo, garantiza que el valor que se realiza se regirá por las reglas y valores centrales de la red de Bitcoin. No se puede realizar transacciones en Lightning sin poseer bitcoin. |
| [¿Por qué la necesitamos?]() | En este momento no NECESITAMOS realmente la Lightning Network porque las transacciones normales de bitcoin (comúnmente conocidas como "transacciones onchain") son relativamente baratas, incluso si desea un tiempo de confirmación rápido. LN realmente comienzan a brillar cuando las tarifas "en cadena" aumentan a medida que aumenta la base de usuarios de Bitcoin y disminuye el subsidio de bloque. Lightning también muestra una gran promesa en casos de uso de pagos más pequeños y frecuentes para cosas como desbloquear contenido en línea. |
|[¿Cómo funciona la Lightning Network?]() | Alice abre un canal de pago con Bob haciendo una "transacción de financiación" en cadena. El tamaño de esta transacción de financiación dicta cuánto valor puede transferir Alice usando Lightning. Una vez que se confirma la transacción de financiación en la capa base, Alice es libre de realizar transacciones con Bob sobre LN tantas veces como quiera hasta que uno o ambos decidan que desean cerrar el canal. Cada transacción Lightning actualiza el estado actual del canal para que ninguna de las partes pueda engañarse mutuamente con respecto a los fondos. Cuando se cierra el canal, el "estado del canal" más reciente se transmite a la red de Bitcoin y ambas partes recibirán el saldo correspondiente en su cartera. |
| [¿Pero y si Alice quiere pagar a alguien más?]() | Aquí es donde realmente brilla la Lightning Network. Los canales de pago se pueden vincular para encontrar una ruta al destinatario. Alice no necesita tener un canal abierto con David para enviarle algunos sats, la red encontrará la ruta óptima para enrutar el pago a través de otros canales. Podría parecerse a esto Alice> Bob> Charlie> David. A lo largo de la ruta, el pago está asegurado criptográficamente para que los intermediarios no puedan robar ninguno de los fondos que no les pertenecen. |
| [¿Quién controla la Lightning Network?]() | Al igual que Bitcoin, Lightning Network es completamente de código abierto y no es propiedad de una sola entidad. Cualquiera puede ejecutar un nodo y participar en la red completamente sin permiso. Existen múltiples implementaciones populares de Lightning que incluyen LND, C Lightning y Eclair. Todas estas implementaciones son casi 100% interoperables. |
| [¿Hay mineros en la Lightning Network?]() | No, Lightning Network está construida sobre la capa base de Bitcoin y mantiene las mismas características de seguridad. Las tarifas mínimas que pagas en Lightning van a los participantes de la red que forman parte de la ruta que toma su pago, por lo que podría ser literalmente cualquier persona que ejecute un nodo Lightning. |
| [¿Tiene Lightning su propia blockchain?]() | No, Lightning es una red de canales de pago interconectados. Todas las transacciones de apertura y cierre del canal Lightning tienen lugar en el protocolo subyacente de Bitcoin. Lightning hereda la seguridad de la blockchain de Bitcoin. |
| [¿Cuáles son las desventajas de Lightning?]() | Para alguien que usa Lightning Network con frecuencia con múltiples canales, la administración de liquidez puede volverse agotadora. La red es relativamente joven y algunos pagos a veces pueden fallar, pero a medida que el desarrollo continúa, estos errores se están volviendo mucho menos comunes. Debido a la estructura de la red, no es tan adecuada para pagos más grandes debido a las restricciones de liquidez de cada canal. Esto podría cambiar a medida que la red crezca y las personas ganen confianza en su seguridad. |
| [¿Necesito un nodo para usar Lightning?]() | Al igual que Bitcoin, no necesitas un nodo para interactuar con la red Lightning, pero es recomendable. Recuerda, si no estás ejecutando tu propio nodo, estás confiando en el de otra persona. La buena noticia es que la mayoría de los nodos de Bitcoin en estos días también vienen con un nodo Lightning incorporado, por lo que no debería suponer mucho trabajo adicional configurar Lightning. |
| [¿Qué es la liquidez entrante?]() |  La liquidez entrante es la medida de cuánto bitcoin puedes recibir a través de Lightning Network. Si abres un canal a otra persona, inicialmente sólo puedes enviar bitcoins. Esto se debe a que todos los fondos están de tu lado del canal. Si abrió un canal para 100k sats y luego gastó 25k, tu liquidez entrante sería de 25k sats. La mejor manera de obtener liquidez entrante es hacer que alguien te abra un canal, de esa manera todo el saldo estaría en tu lado del canal. |
| [¿Qué es la liquidez de salida?]() |  La liquidez de salida es la medida de cuánto bitcoin puedes enviar a través de Lightning Network. Si abres un canal para 100k sats y gastas 75k, tu liquidez saliente ahora es de 25k sats. Obtener liquidez saliente es tan simple como recibir sats en tus canales existentes o abrir un nuevo canal con más sats. Recuerda, nunca puedes gastar más que el tamaño total de tu canal más grande. Aunque esto está configurado para cambiar cuando se desplieguen los pagos de múltiples rutas. |
| [¿Dónde empiezo?] | Consulta nuestra página recomendada [para](/recommendations) saber qué nodos ejecutar, y luego decide si deseas o no una billetera Lightning móvil o de escritorio. Nuestro favorito personal es Zap, que ofrece dispositivos móviles y de escritorio combinados con una interfaz de usuario muy elegante. Una vez que hayas configurado ambos, abre un canal con nuestro nodo Lightning y envíe un par de sats para ver cómo funciona todo en la práctica |


<p align="center">
  <a href="https://twitter.com/BitcoinQ_A">Por Bitcoin Q+A</a> |
  <a href="https://bqa.duckdns.org:20486/apps/96ZvtoJQr9bz5QyeDoUfhkmNTLZ/pos">Apoyo</a> |
  <a href="https://bitcoiner.guide">Más recursos</a>
  <br><br>
</p>

