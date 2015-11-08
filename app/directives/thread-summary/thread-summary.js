angular.module('linguo').directive('threadSummary', ['ThreadService', 'LanguageService', '$location', function(ThreadService, LanguageService, $location) {
	function link(scope){
		scope.language = LanguageService.language;
		scope.languageService = LanguageService;

		scope.changeLanguage = function(){
			scope.language = LanguageService.changeLanguage(scope.language);
		}

		scope.$on(LanguageService.languageChanged, function(){
			scope.language = LanguageService.language;
		});

		scope.openThread = function(){
			ThreadService.thread = scope.thread;
			$location.path('/thread/' + scope.thread.id);
		}

	}
	return {
		link: link,
        scope: {
            'thread': '='
        },
		templateUrl: '/app/directives/thread-summary/thread-summary.html'
	};
}]);