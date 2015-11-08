angular.module('linguo').directive('childResponse', ['LanguageService', function(LanguageService) {
	function link(scope){
		scope.language = LanguageService.language;
		scope.languageService = LanguageService;

		scope.changeLanguage = function(){
			scope.language = LanguageService.changeLanguage(scope.language);
		}

		scope.$on(LanguageService.languageChanged, function(){
			scope.language = LanguageService.language;
		});

	}
	return {
		link: link,
        scope: {
            'response': '='
        },
		templateUrl: '/app/directives/child-response/child-response.html'
	};
}]);