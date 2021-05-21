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
<p class="p1">const contractDetails = {</p>
<p class="p1"><span class="Apple-tab-span">	</span>address: ethAddress,</p>
<p class="p1"><span class="Apple-tab-span">	</span>abi: [{"inputs":[{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"string","name":"_tokenSymbol","type":"string"},{"internalType":"uint256","name":"_loanAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"action","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenSymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">const bnbContractDetails = {</p>
<p class="p1"><span class="Apple-tab-span">	</span>address: bnbAddress,</p>
<p class="p1"><span class="Apple-tab-span">	</span>abi: [{"inputs":[{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"string","name":"_tokenSymbol","type":"string"},{"internalType":"uint256","name":"_loanAmount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"action","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenSymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">async function loadWeb3() {</p>
<p class="p1"><span class="Apple-tab-span">	</span>if (window.ethereum) {</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.web3 = new Web3(window.ethereum);</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>await window.ethereum.enable();</p>
<p class="p1"><span class="Apple-tab-span">	</span>} else if (window.web3) {</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.web3 = new Web3(window.web3.currentProvider);</p>
<p class="p1"><span class="Apple-tab-span">	</span>} else {</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.alert('Non-Ethereum browser detected. Please install MetaMask.');</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</p>
<p class="p1"><span class="Apple-tab-span">	</span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>const networkId = await web3.eth.net.getId();</p>
<p class="p1"><span class="Apple-tab-span">	</span>const chainId = await web3.eth.getChainId();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>window.isBnb = false;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>// bsc 56</p>
<p class="p1"><span class="Apple-tab-span">	</span>if (networkId == 56 &amp;&amp; chainId == 56) {</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.contract = new window.web3.eth.Contract(bnbContractDetails.abi, bnbContractDetails.address);</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.isBnb = true;</p>
<p class="p1"><span class="Apple-tab-span">	</span>}</p>
<p class="p2"><span class="Apple-tab-span">	</span></p>
<p class="p1"><span class="Apple-tab-span">	</span>// eth</p>
<p class="p1"><span class="Apple-tab-span">	</span>else if (networkId == 1 &amp;&amp; chainId == 1) {</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.contract = new window.web3.eth.Contract(contractDetails.abi, contractDetails.address);</p>
<p class="p1"><span class="Apple-tab-span">	</span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>else {</p>
<p class="p1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return alert('Unsupported network detected. Select a supported network in MetaMask and reload the page. \n\nSupported networks:\n- Ethereum Mainnet \n- Binance Smart Chain Mainnet');</p>
<p class="p1"><span class="Apple-tab-span">	</span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>if (!window.contract) return alert('Error loading contract data');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-tab-span">	</span>return window.web3.eth.getAccounts();</p>
<p class="p1">}</p>
</body>
</html>
