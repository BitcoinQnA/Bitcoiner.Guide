$( document ).ready(function() {


	$("#input_btc").attr({
		 "max" : 21000000,        // substitute your own
		 "min" : 0          // values (or variables) here
	});
  
	var btcusd = 0;
	var btceur = 0;
	var btcgbp = 0;
  
	$.getJSON( "https://api.coindesk.com/v1/bpi/currentprice.json", function( data ) {
  
  
		  console.log(data.bpi);
		  btcusd = data.bpi.USD.rate_float;
		  btceur = data.bpi.EUR.rate_float;
		  btcgbp = data.bpi.GBP.rate_float;
  
  
		  var input_sat, input_btc, input_usd, input_eur, input_gbp,
			  output_sat, output_btc, output_usd, output_eur, output_yuan;
  
  
  
		  $("#input_sat").keyup(function() {
			  calc('sats');
			  FormatCurrency(this);
		  });
		  $("#input_btc").keyup(function() {
			  calc('btc');
			  FormatCurrency(this);
		  });
		  $("#input_usd").keyup(function() {
			  calc('usd');
		  });
		  $("#input_eur").keyup(function() {
			  calc('eur');
		  });
		  $("#input_gbp").keyup(function() {
			  calc('gbp');
		  });
  
  
		  $("#input_sat").change(function() {
			  calc('sats');
		  });
		  $("#input_btc").change(function() {
			  calc('btc');
		  });
		  $("#input_usd").change(function() {
			  calc('usd');
		  });
		  $("#input_eur").change(function() {
			  calc('eur');
		  });
		  $("#input_gbp").change(function() {
			  calc('gbp');
		  });
  
  
		  calc();
  
  
		  $("input").on("click", function () {
		   //$(this).select();
		  });
  
  
  
		  function calc(source){
  
  
  
			if (source === undefined){
  
			  input_sat = removeCommas($("#input_sat").val());
			  console.log("-> " + input_sat);
  
			  //$("#input_sat").focus();
  
			  output_sat = removeCommas(input_sat);
			  output_btc = output_sat/100000000;
			  output_usd = btcusd*output_btc;
			  output_eur = output_btc*btceur;
			  output_gbp = output_btc*btcgbp;
  
  
  
  
  
			} else{
  
			  input_sat = removeCommas($("#input_sat").val());
			  input_btc = removeCommas($("#input_btc").val());
			  input_usd = removeCommas($("#input_usd").val());
			  input_eur = removeCommas($("#input_eur").val());
			  input_gbp = removeCommas($("#input_gbp").val());
  
			  if (source == 'sats'){
				  console.log('sats');
				  output_btc = input_sat/100000000;
				  output_sat = output_btc*100000000;
				  output_usd = output_btc*btcusd;
				  output_eur = output_btc*btceur;
				  output_gbp = output_btc*btcgbp;
			  } else if (source == 'btc'){
				  console.log('btc');
				  output_btc = input_btc;
				  output_sat = output_btc*100000000;
				  output_usd = output_btc*btcusd;
				  output_eur = output_btc*btceur;
				  output_gbp = output_btc*btcgbp;
			  } else if (source == 'usd'){
				  console.log('usd');
				  output_btc = input_usd/btcusd;
				  output_sat = output_btc*100000000;
				  output_usd = output_btc*btcusd;
				  output_eur = output_btc*btceur;
				  output_gbp = output_btc*btcgbp;
			  } else if (source == 'eur'){
				  console.log('eur');
				  output_btc = input_eur/btceur;
				  output_sat = output_btc*100000000;
				  output_usd = output_btc*btcusd;
				  output_eur = output_btc*btceur;
				  output_gbp = output_btc*btcgbp;
			  } else if (source == 'gbp'){
				  console.log('gbp');
				  output_btc = input_gbp/btcusd;
				  output_sat = output_btc*100000000;
				  output_usd = output_btc*btcusd;
				  output_eur = output_btc*btceur;
				  output_gbp = output_btc*btcgbp;
			  }
			}
  
  
  
  
			if (source != 'sats'){
			  output_sat = parseInt(output_sat);
			  $("#input_sat").val(addCommas(output_sat)).text(addCommas(output_sat));
			}
			if (source != 'btc'){
			  output_btc = output_btc;
			  $("#input_btc").val(addCommas(output_btc)).text(addCommas(output_btc));
			}
			if (source != 'usd'){
			  output_usd = output_usd.toFixed(2);
			  $("#input_usd").val(addCommas(output_usd)).text(addCommas(output_usd));
			}
			if (source != 'eur'){
			  output_eur = output_eur.toFixed(2);
			  $("#input_eur").val(addCommas(output_eur)).text(addCommas(output_eur));
			}
			if (source != 'gbp'){
			  output_gbp = output_gbp.toFixed(2);
			  $("#input_gbp").val(addCommas(output_gbp)).text(addCommas(output_gbp));
			}
  
		  }
  
  
  
		  var satPerUSD = 1/(btcusd/1)*100000000;
		  $("#satsusd").text( satPerUSD.toFixed(0) );
  
  
		  function addCommas(x) {
			  var parts = x.toString().split(".");
			  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			  return parts.join(".");
			  //return x;
		  }
  
		  function removeCommas(x) {
			if (typeof x === 'string' || x instanceof String){
			  return parseFloat(x.replace(',', ''));
			}  else {
			  return parseFloat(x);
			}
		  }
  
		  var countDecimals = function(value) {
			  if (Math.floor(value) !== value)
				  return value.toString().split(".")[1].length || 0;
			  return 0;
		  }
  
  
  
  
  
		  function FormatCurrency(ctrl) {
			  //Check if arrow keys are pressed - we want to allow navigation around textbox using arrow keys
			  if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
				  return;
			  }
  
			  var val = ctrl.value;
  
			  val = val.replace(/,/g, "")
			  ctrl.value = "";
			  val += '';
			  x = val.split('.');
			  x1 = x[0];
			  x2 = x.length > 1 ? '.' + x[1] : '';
  
			  var rgx = /(\d+)(\d{3})/;
  
			  while (rgx.test(x1)) {
				  x1 = x1.replace(rgx, '$1' + ',' + '$2');
			  }
  
			  ctrl.value = x1 + x2;
		  }
  
		  function CheckNumeric() {
			  return event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 46;
		  }
  
  
  
  
  
	});
  
  });
  
  var validate = function(e) {
	var t = e.value;
	e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 9)) : t;
  }
  