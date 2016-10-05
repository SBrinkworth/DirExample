// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("cardDirCtrl", function($scope) {

		// VARIABLES
		// ============================================================
		$scope.suitArr = [];
		$scope.cardName = $scope.card.type + " " + $scope.card.suit;

		if ($scope.card.type !== 'K' || $scope.card.type !== 'Q') {
			for (var i = 0; i < $scope.card.type; i++) {
				$scope.suitArr.push($scope.card.suit);
			}
		}


		// FUNCTIONS
		// ============================================================


	});
