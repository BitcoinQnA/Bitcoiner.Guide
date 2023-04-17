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

¿Sabes cuántos dólares existen en el mundo?

¿Sabes cuánto oro se ha extraído?

La respuesta a ambas preguntas es no. Ciertos individuos del gobierno pueden estar al tanto de la información que les permite hacer una suposición bien fundada, pero el hecho es que **nadie en el mundo** puede responder a esas preguntas con algún tipo de precisión. Bitcoin es diferente. 

Por primera vez en la historia de la humanidad, cualquier persona tiene la libertad de conocer la oferta total **exacta** de un activo monetario mundial, sin necesidad de pedir permiso ni depender de nadie. Todo lo que se necesita es un [nodo](https://node.guide) y unos 10 minutos de su tiempo.  

***

## ¿Cómo?

Verificar el suministro total de todos los bitcoins existentes es mucho más fácil de lo que imaginas. Si tienes tu propio nodo, puedes hacerlo cuando quieras, tan a menudo como quieras, con la seguridad de que sólo confías en tu propio hardware y en el software de código abierto para que lo verifiquen por ti.

### Nodos independientes

1. Configura tu [nodo](/node) y espera a que se complete la descarga inicial de bloques.
2. Accede por SSH a tu nodo. Las instrucciones para hacerlo se encuentran en las páginas de documentación de tu nodo. Los usuarios de Mac + Linux deben hacerlo a través de 'Terminal' y los usuarios de Windows pueden descargar y utilizar [Putty](https://www.putty.org/).
3. Introduce el siguiente comando `bitcoin-cli gettxoutsetinfo`.
4. Espera. Dependiendo de tu hardware, esto podría tardar hasta 10 minutos.

### Nodos Independientes sin SSH

La mayoría de las implementaciones de nodos populares ahora vienen empaquetadas con una versión local de [este explorador](https://explorer.btc21.org/) que le permite ejecutar comandos RPC a través de la GUI. Simplemente navega a la sección 'RPC browser' y haz clic en `gettxoutsetinfo` y luego ejecuta.

Once again, depending on your hardware this may take up to 10 minutes.
Una vez más, dependiendo de tu hardware, esto puede tardar hasta 10 minutos.

<img src="/assets/img/RPC1.png" class=responsive width="450" height="300" maxheight="300">


### Bitcoin Core

1. Descarga e instala [Bitcoin Core](https://bitcoin.org/en/download) y espera a que se complete la descarga del bloque inicial
2. Abre la "consola" dentro de Bitcoin Core e introduce `gettxoutsetinfo`.
3. Espera. Dependiendo de tu hardware, esto podría tardar hasta 10 minutos

### Otras opciones

Una vez conectado a tu nodo, las siguientes aplicaciones te permiten verificar el suministro con sólo pulsar un botón


* [Fully Noded](https://fonta1n3.github.io/FullyNoded/)
* [Specter Desktop](https://github.com/cryptoadvance/specter-desktop)

***

Tras una breve espera, deberías ver una respuesta parecida a esta...

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

## Cálculos

Entonces, ¿cómo llegó mi nodo a la conclusión de que, en el momento en que ejecuté `gettxoutsetinfo` había un total de 18.537.233,94446619 bitcoins en existencia de la oferta final [conocida](https://en.bitcoin.it/wiki/Controlled_supply) de un poco menos de 21.000.000? 

Bitcoin tiene un calendario de emisión fijo que disminuye con cada evento de reducción a la mitad que ocurre cada 210.000 bloques (aproximadamente cuatro años). Estos periodos se denominan a veces "eras de recompensa". He aquí un resumen de la oferta a lo largo de las eras históricas hasta el momento de escribir este artículo.

Ahora que entendemos eso podemos calcular la cantidad esperada de bitcoins en cualquier altura de bloque.

* Recompensa era 1 = (50 * 210.000) = **10.500.000**
* Recompensa era 2 = (25 * 210.000) = **5.250.000**
* Recompensa era 3 = (12,5 * 210.000) = **2.625.000**
* Recompensa era 4 = (6,25 * (655.987 - 629.999)) = **162.425**

*655,987 = La altura del bloque en el momento de ejecutar gettxoutsetinfo*  

*629,999 = La altura del último bloque antes de la era de la recompensa actual*  

*Si sustraemos uno del otro, determinamos cuántos bloques han pasado durante la era.*

Si los sumamos todos, obtenemos **18.537.425** de oferta prevista. 

Sin embargo, mi nodo calculó que, a la altura del bloque 655.987 había en realidad **18.537.233,94446619**. 

***

## ¿Falta de Bitcoin?

¿Por qué mi nodo calcula que en realidad hay **191,05553381** menos bitcoins en existencia de los que el calendario de emisiones conocido sugiere que debería haber? 

Hay una serie de razones que se describen con gran detalle en [este artículo](https://fjahr.com/posts/where-are-the-coins/) por [Fjhar](https://twitter.com/fjahr) o puede leer una versión más corta en [esta](https://bitcoin.stackexchange.com/questions/38994/will-there-be-21-million-bitcoins-eventually/38998#38998) respuesta de Bitcoin Stack Exchange.

Este es un resumen muy breve...

1. Está codificado en el código de Bitcoin que la recompensa del [bloque génesis](https://en.bitcoin.it/wiki/Genesis_block) no se puede gastar y no forma parte del conjunto de UTXO
2. Una vez conectado a su nodo, las siguientes aplicaciones le permiten verificar el suministro con sólo pulsar un botón
3. OP_RETURN Monedas 'quemadas'
4. Los mineros no reclaman la recompensa completa del bloque






