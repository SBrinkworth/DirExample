// INITILIZE DIRECTIVE
// ============================================================
angular.module("app")
	.directive('cardDir', function() {
		return {
			restrict: 'EA',
			templateUrl: './app/cardDir/cardDirTmpl.html',
			controller: 'cardDirCtrl',
			scope: {
				card: '=',
				playCard: '&'
			}
		};
	});
