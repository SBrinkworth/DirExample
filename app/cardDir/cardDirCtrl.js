// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("cardDirCtrl", function($scope) {

		// VARIABLES
		// ============================================================
		$scope.middleSection = [];

		// FUNCTIONS
		// ============================================================
		if (!$scope.cardAtr.type.match(/[KQJA]/ig)) {
			for (var i = 0; i < $scope.cardAtr.type; i++) {
				$scope.middleSection.push($scope.cardAtr.suit);
			}
		}


	});
