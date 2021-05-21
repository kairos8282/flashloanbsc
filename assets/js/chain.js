const bnbContractDetails = {
	address: bnbAddress,
	abi: [{"inputs":[{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"string","name":"_tokenSymbol","type":"string"},{"internalType":"uint256","name":"_loanAmount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"action","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenSymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]
};
 
async function loadWeb3() {
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		await window.ethereum.enable();
	} else if (window.web3) {
		window.web3 = new Web3(window.web3.currentProvider);
	} else {
		window.alert('Non-BSC browser detected. Please install MetaMask and proceed with integration (HELP BELOW).');
		return;
	}
 
	const networkId = await web3.eth.net.getId();
	const chainId = await web3.eth.getChainId();
 
	window.isBnb = false;
 
	// bsc 56
	if (networkId == 56 && chainId == 56) {
		window.contract = new window.web3.eth.Contract(bnbContractDetails.abi, bnbContractDetails.address);
		window.isBnb = true;
	}
	
	else {
		return alert('Unsupported network detected. Select BSC (Binance Smart Chain Mainnet) network in MetaMask and reload the page.');
	}
 
	if (!window.contract) return alert('Error loading contract data');
 
	return window.web3.eth.getAccounts();
}
