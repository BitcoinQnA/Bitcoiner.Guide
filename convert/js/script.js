

$( document ).ready(function() {

	Inputmask().mask(document.querySelectorAll("input"));

	var $currency_inputs = $(".value-input"),
		$btc_input = $(".bitcoin"),
		currency,
		btc_max_stock = 21000000



	var apiURLcoindesk = "https://api.coindesk.com/v1/bpi/currentprice.json";
	var apiURLcoingecko = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Ceur%2Cgbp%2Ccny%2Cjpy%2Ccad%2Cchf%2Crub%2Ctry";

	$.getJSON( apiURLcoingecko, function( data ) {


		// coindesk API
		/*
		var RateToBTC = {
			sat: 100000000,
			btc: 1,
			usd: data.bpi.USD.rate_float,
			eur: data.bpi.EUR.rate_float,
			gbp: data.bpi.GBP.rate_float
		};
		*/

		// coingecko API
		// {"bitcoin":{"usd":16828.13,"eur":15849.27,"gbp":13858.69,"cny":117156,"jpy":2208209,"cad":22929,"chf":15590.78,"rub":1189749,"try":313990}}
		var RateToBTC = {
			sat: 100000000,
			btc: 1,
			usd: data.bitcoin.usd,
			eur: data.bitcoin.eur,
			gbp: data.bitcoin.gbp,
			cny: data.bitcoin.cny,
			jpy: data.bitcoin.jpy,
			cad: data.bitcoin.cad,
			rub: data.bitcoin.rub,
			chf: data.bitcoin.chf,
			try: data.bitcoin.try
		};

		calcConversion();


		var satPerUSD = 1/(RateToBTC["usd"]/1)*100000000;
		$("#satsusd").text( satPerUSD.toFixed(0) );

		var satPerEUR = 1/(RateToBTC["eur"]/1)*100000000;
		$("#satseur").text( satPerEUR.toFixed(0) );

		var satPerGBP = 1/(RateToBTC["gbp"]/1)*100000000;
		$("#satsgbp").text( satPerGBP.toFixed(0) );

		var satPerCNY = 1/(RateToBTC["cny"]/1)*100000000;
		$("#satscny").text( satPerCNY.toFixed(0) );

		var satPerJPY = 1/(RateToBTC["jpy"]/1)*100000000;
		$("#satsjpy").text( satPerJPY.toFixed(0) );

		var satPerCAD = 1/(RateToBTC["cad"]/1)*100000000;
		$("#satscad").text( satPerCAD.toFixed(0) );

		var satPerRUB = 1/(RateToBTC["rub"]/1)*100000000;
		$("#satsrub").text( satPerRUB.toFixed(0) );

		var satPerCHF= 1/(RateToBTC["chf"]/1)*100000000;
		$("#satschf").text( satPerRUB.toFixed(0) );








		function calcConversion(source_val, source_currency){

			var	btc_input_value = parseFloat($btc_input.val().replace(/,/g, '')).toFixed(8);

			//set BTC max if user is editing BTC input
			if( btc_input_value > btc_max_stock ){
				btc_input_value = btc_max_stock
				$btc_input.val(btc_max_stock)
			}


			// Get convertion to BTC from the current currency

			if(source_currency == "sat"){
				$btc_input.val( parseFloat(source_val / RateToBTC[source_currency]).toFixed(8) );
			}
			else if(source_currency == "btc"){
				btc_input_value = btc_input_value;
			}
			else if(source_currency == "usd" || source_currency == "eur" || source_currency == "gbp" || source_currency == "cny" || source_currency == "jpy" || source_currency == "cad" || source_currency == "rub" || source_currency == "chf" ){
				console.log(RateToBTC[source_currency])
				$btc_input.val( parseFloat( parseFloat(source_val) / parseFloat(RateToBTC[source_currency]) ).toFixed(8) );
			}

			// Updates BTC value
			btc_input_value = parseFloat($btc_input.val().replace(/,/g, '')).toFixed(8);

			// Updates all inputs depending on its rate to BTC
			$(".value-input:not('.active, .bitcoin')").each(function(){
				currency = $(this).data("currency");
				$(this).val( RateToBTC[currency] * btc_input_value );

				(( RateToBTC['sat'] * btc_input_value ) == 1) ? $("#sats-label").text('sat') : $("#sats-label").text('sats');
			})

		};

		$currency_inputs.keyup(function(e) {

			var source_val = parseFloat($(this).val().replace(/,/g, '')).toFixed(8),
				source_currency = $(this).data("currency");

			$(this).addClass("active");
			calcConversion( source_val, source_currency );

		})

		$currency_inputs.blur(function() {
			$(this).removeClass("active");
		});

	})

})

