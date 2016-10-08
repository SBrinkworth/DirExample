angular.module('app')
	.directive('cardDir', function() {
		return {
			restrict: 'EA',
			templateUrl: './app/cardDir/cardDirTmpl.html',
			controller: 'cardDirCtrl',
			scope: {
				cardAtr: '=',
				playCardFunc: '&'
			},
			link: function(scope, element, atributes) {
				element.css('color', 'blue');
			}
		};
	});
