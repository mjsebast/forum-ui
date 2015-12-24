angular.module('linguo').directive('postSummary', ['PostService', 'LanguageService', '$location', function(PostService, LanguageService, $location) {
	function link(scope){
		scope.language = LanguageService.language;
		scope.languageService = LanguageService;

		scope.changeLanguage = function(){
			scope.language = LanguageService.changeLanguage(scope.language);
		}

		scope.$on(LanguageService.languageChanged, function(){
			scope.language = LanguageService.language;
		});

		scope.openPost = function(){
			PostService.post = scope.post;
			$location.path('/post/' + scope.post.id);
		}

	}
	return {
		link: link,
        scope: {
            'post': '='
        },
		templateUrl: '/app/directives/post-summary/post-summary.html'
	};
}]);