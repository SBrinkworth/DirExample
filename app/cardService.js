// INITILIZE SERVICE
// ============================================================
angular.module("app")
	.service("cardService", function($http) {

		// CRUD FUNCTIONS
		// ============================================================
		var cards = [{
			suit: 'Hearts',
			type: '5'
    }, {
			suit: 'Diamonds',
			type: 'K'
    }, {
			suit: 'Clubs',
			type: '2'
    }, {
			suit: 'Spades',
			type: 'Q'
    }];

		// OTHER FUNCTIONS
		// ============================================================
		this.getCards = function() {
			return cards;
		};

	});
