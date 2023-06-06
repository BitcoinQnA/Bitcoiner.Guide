---
layout: page
title: Tips
subtitle: Sats are always greatly received
#thumbnail-img: /assets/img/thumb.png
share-img: https://bitcoiner.guide/assets/img/share.png
tags: [books, test]
---

If you find my contributions valuable, consider supporting my work with a some sats. 


<style> .btcpay-form { display: inline-flex; align-items: center; justify-content: center; } .btcpay-form--inline { flex-direction: row; } .btcpay-form--block { flex-direction: column; } .btcpay-form--inline .submit { margin-left: 15px; } .btcpay-form--block select { margin-bottom: 10px; } .btcpay-form .btcpay-custom-container{ text-align: center; }.btcpay-custom { display: flex; align-items: center; justify-content: center; } .btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; } .btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; } .btcpay-form select:hover { border-color: #a0a0a0 !important; } .btcpay-form option { color: #000; background: rgba(0,0,0,.1); } .btcpay-input-price { -moz-appearance: textfield; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #a0a0a0; }.btcpay-input-price::-webkit-outer-spin-button, .btcpay-input-price::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } </style>
<style> input[type=range].btcpay-input-range { -webkit-appearance:none; width:100%; background: transparent; } input[type=range].btcpay-input-range:focus { outline:0; } input[type=range].btcpay-input-range::-webkit-slider-runnable-track { width:100%; height:3.1px; cursor:pointer; box-shadow:0 0 1.7px #020,0 0 0 #003c00; background:#f3f3f3; border-radius:1px; border:0; } input[type=range].btcpay-input-range::-webkit-slider-thumb { box-shadow:none; border:2.5px solid #cedc21; height:22px; width:22px; border-radius:50%; background:#0f3723; cursor:pointer; -webkit-appearance:none; margin-top:-9.45px } input[type=range].btcpay-input-range:focus::-webkit-slider-runnable-track { background:#fff; } input[type=range].btcpay-input-range::-moz-range-track { width:100%; height:3.1px; cursor:pointer; box-shadow:0 0 1.7px #020,0 0 0 #003c00; background:#f3f3f3; border-radius:1px; border:0; } input[type=range].btcpay-input-range::-moz-range-thumb { box-shadow:none; border:2.5px solid #a0a0a0; height:22px; width:22px; border-radius:50%; background:#f99925; cursor:pointer; } input[type=range].btcpay-input-range::-ms-track { width:100%; height:3.1px; cursor:pointer; background:0 0; border-color:#a0a0a0; color:transparent; } input[type=range].btcpay-input-range::-ms-fill-lower { background:#e6e6e6; border:0; border-radius:2px; box-shadow:0 0 1.7px #020,0 0 0 #003c00; } input[type=range].btcpay-input-range::-ms-fill-upper { background:#f3f3f3; border:0; border-radius:2px; box-shadow:0 0 1.7px #020,0 0 0 #003c00; } input[type=range].btcpay-input-range::-ms-thumb { box-shadow:none; border:2.5px solid #cedc21; height:22px; width:22px; border-radius:50%; background:#0f3723; cursor:pointer; height:3.1px; } input[type=range].btcpay-input-range:focus::-ms-fill-lower { background:#f3f3f3; } input[type=range].btcpay-input-range:focus::-ms-fill-upper { background:#fff; } </style>
<div align=center>
<form method="POST" action="https://tips.bitcoiner.guide/api/v1/invoices" class="btcpay-form btcpay-form--block">
  <input type="hidden" name="storeId" value="8PwnXHpdUVCntmx8CT8voMsUwymhG25fquiDEwZUz1uz" />
  <input type="hidden" name="browserRedirect" value="https://bitcoiner.guide" />
  <div class="btcpay-custom-container">
      <input class="btcpay-input-price" type="number" name="price" min="1" max="500" step="1" value="1" data-price="1" style="width:146px;" />
    <select name="currency">
      <option value="USD" selected>USD</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
      <option value="BTC">BTC</option>
    </select>
    <input type="range" class="btcpay-input-range" min="1" max="500" step="1" value="1" style="width:146px;margin-bottom:15px;" />
  </div>
<button type="submit" class="submit" name="submit" style="min-width:146px;min-height:40px;border-radius:4px;background-color:#a0a0a0;cursor:pointer;" title="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"><span style="color:#fff">Tip with</span>
<img src="https://tips.bitcoiner.guide/img/paybutton/logo.svg" style="height:40px;display:inline-block;padding:5% 0 5% 5px;vertical-align:middle;">
</button></form></div>
<script>
    function handleSliderChange(event) {
        event.preventDefault();
        const root = event.target.closest('.btcpay-form');
        const el = root.querySelector('.btcpay-input-price');
        const price = parseInt(el.value);
        const min = parseInt(event.target.getAttribute('min')) || 1;
        const max = parseInt(event.target.getAttribute('max'));
        if (price < min) { 
            el.value = min;
        } else if (price > max) {
            el.value = max;
        } 
        root.querySelector('.btcpay-input-range').value = el.value;
    }
    function handleSliderInput(event) {
        event.target.closest('.btcpay-form').querySelector('.btcpay-input-price').value = event.target.value;
    }
    document.querySelectorAll(".btcpay-form .btcpay-input-range").forEach(function(el) {
        if (!el.dataset.initialized) {
            el.addEventListener('input', handleSliderInput);
            el.dataset.initialized = true;
        }
    });
    document.querySelectorAll(".btcpay-form .btcpay-input-price").forEach(function(el) {
        if (!el.dataset.initialized) {
            el.addEventListener('change', handleSliderChange);
            el.dataset.initialized = true;
        }
    });
    
    function handlePriceInput(event) {
        event.preventDefault();
        const root = event.target.closest('.btcpay-form');
        const price = parseInt(event.target.dataset.price);
        if (isNaN(event.target.value)) root.querySelector('.btcpay-input-price').value = price;
        const min = parseInt(event.target.getAttribute('min')) || 1;
        const max = parseInt(event.target.getAttribute('max'));
        if (event.target.value < min) {
            event.target.value = min;
        } else if (event.target.value > max) { 
            event.target.value = max;
        }
    }
    document.querySelectorAll(".btcpay-form .btcpay-input-price").forEach(function(el) {
        if (!el.dataset.initialized) {
            el.addEventListener('input', handlePriceInput);
            el.dataset.initialized = true;
        }
    });
</script>


***

- [Lightning Address](lightning:qna@tips.bitcoiner.guide)
- [PayNym](https://paynym.is/+BQA) (Samourai, Sparrow or Stack Wallet)


<p align="center">
  <img src="/assets/img/bip47small.png" />
</p>
