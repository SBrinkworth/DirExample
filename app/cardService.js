// INITILIZE SERVICE
// ============================================================
angular.module("app")
	.service("cardService", function($http) {

		// CRUD FUNCTIONS
		// ============================================================
		var cards = [{
			suit: 'Hearts',
			type: '5',
			played: false
    }, {
			suit: 'Diamonds',
			type: 'K',
			played: false
    }, {
			suit: 'Clubs',
			type: '2',
			played: false
    }, {
			suit: 'Spades',
			type: 'Q',
			played: false
    }];

		// OTHER FUNCTIONS
		// ============================================================
		this.getCards = function() {
			return cards;
		};

	});
