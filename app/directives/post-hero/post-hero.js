angular.module('linguo').directive('postHero', ['PostService', '$location', 'LanguageService', function(PostService, $location, LanguageService) {
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
            'post': '='
        },
		templateUrl: '/app/directives/post-hero/post-hero.html'
	};
}]);