<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1561.61">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
    span.Apple-tab-span {white-space:pre}
  </style>
</head>
<body>
<p class="p1">&lt;!DOCTYPE html&gt;</p>
<p class="p1">&lt;html lang="en"&gt;</p>
<p class="p2"><br></p>
<p class="p1">&lt;head&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;meta charset="UTF-8"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</p>
<p class="p2"><span class="Apple-tab-span">	</span></p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;title&gt;Flash Loan Client&lt;/title&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;link rel="stylesheet" href="./assets/css/styles.css"&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"&gt;&lt;/script&gt;</p>
<p class="p1">&lt;/head&gt;</p>
<p class="p2"><br></p>
<p class="p1">&lt;body ng-app="myApp" ng-controller="myCtrl"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;p class="highlight"&gt;BNB Flash Loan is also supported now&lt;/p&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;form ng-show="formStep == 1" ng-submit="submitErc20Form()"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;h1&gt;STEP 1&lt;/h1&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;p&gt;Your ERC20 Details&lt;/p&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;&amp;nbsp;&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="input-holder"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;label&gt;Token Name:&lt;/label&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;br&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;input type="text" ng-model="erc20.name" maxlength="10" autofocus /&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="input-holder"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;label&gt;Token Symbol:&lt;/label&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;br&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;input type="text" ng-model="erc20.symbol" maxlength="4" /&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="input-holder"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;label&gt;Select Network:&lt;/label&gt;</p>
<p class="p2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;&amp;nbsp;&lt;/div&gt;</p>
<p class="p2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;input type="radio" ng-model="erc20.network" id="n1" name="network" ng-value="true" ng-checked="erc20.network"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;label for="n1"&gt;Ethereum&lt;/label&gt;</p>
<p class="p2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;&amp;nbsp;&lt;/div&gt;</p>
<p class="p2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;input type="radio" ng-model="erc20.network" id="n2" name="network" ng-value="false" ng-checked="!erc20.network"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;label for="n2"&gt;Binance Smart Chain&lt;/label&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="input-holder btn-holder"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;button type="submit"&gt;Next Step&lt;/button&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;/form&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;form ng-show="formStep == 2" ng-submit="submitLoanForm()"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;h1&gt;STEP 2&lt;/h1&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;p&gt;Flash Loan Details&lt;/p&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;&amp;nbsp;&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="input-holder"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;label&gt;Loan Amount ({{currency}}):&lt;/label&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;br&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;input id="loanAmtInput" type="number" ng-change="amountChanged()" ng-model="loan.amount" step="5" min="25" max="500" /&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="input-holder info"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="kv"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;Token Deployment Fee&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;{{loan.tokenFee}} {{currency}}&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="kv"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;{{dex}} Swapping Fee&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;{{loan.swapFee}} {{currency}}&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="kv"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;Total Cost&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="spend"&gt;{{loan.totalFee}} {{currency}}&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;hr&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="kv"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div&gt;Profit from Arbitrage&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="gain"&gt;{{loan.gain}} {{currency}}&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="input-holder btn-holder"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;button type="submit" ng-disabled="processing || ethDeposited"&gt;Deposit {{currency}}&lt;/button&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;div class="input-holder btn-holder"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;button type="submit" ng-disabled="processing || !ethDeposited"&gt;Execute Flash Loan&lt;/button&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;/form&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;div class="youtube-note"&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&lt;p&gt;&lt;a href="https://www.youtube.com/channel/UCx71PM8WE1NhuL9G6LnXMHg" target="_blank"&gt;Watch Tutorial on YouTube&lt;/a&gt;&lt;/p&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js"&gt;&lt;/script&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;script src="./assets/js/addr.js?v=11"&gt;&lt;/script&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;script src="./assets/js/chain.js?v=11"&gt;&lt;/script&gt;</p>
<p class="p1"><span class="Apple-tab-span">	</span>&lt;script src="./assets/js/script.js?v=11"&gt;&lt;/script&gt;</p>
<p class="p1">&lt;/body&gt;</p>
<p class="p2"><br></p>
<p class="p1">&lt;/html&gt;</p>
</body>
</html>
