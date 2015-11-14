angular.module('linguo').directive('navigationHeader', ['LanguageService', function(LanguageService) {
	function link(scope){
		scope.languageService = LanguageService;
	}
	return {
		link: link,
		restrict: 'E',
		templateUrl: '/app/directives/navigation-header/navigation-header.html'
	};
}]);