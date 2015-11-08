angular.module('linguo').directive('threadHero', ['ThreadService', '$location', 'LanguageService', function(ThreadService, $location, LanguageService) {
	function link(scope){
		scope.language = LanguageService.language;

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
            'thread': '='
        },
		templateUrl: '/app/directives/thread-hero/thread-hero.html'
	};
}]);