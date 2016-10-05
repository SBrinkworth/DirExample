// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("mainCtrl", function($scope, cardService) {

		// VARIABLES
		// ============================================================
		$scope.cards = cardService.getCards();

		// FUNCTIONS
		// ============================================================
		$scope.play = function(card) {
			alert(card);
		};

	});
