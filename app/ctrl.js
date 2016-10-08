// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("mainCtrl", function($scope, cardService) {

		// VARIABLES
		// ============================================================
		$scope.cards = cardService.getCards();

		// FUNCTIONS
		// ============================================================
		$scope.playCard = function(card) {
			console.log(card);
			card.played = true;
		};


	});
