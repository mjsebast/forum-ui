angular.module('linguo').directive('commentDisplay', ['LanguageService', function(LanguageService) {
	function link(scope){
		scope.language = LanguageService.language;
		scope.languageService = LanguageService;

		scope.changeLanguage = function(){
			scope.language = LanguageService.changeLanguage(scope.language);
		}

		scope.$on(LanguageService.languageChanged, function(){
			scope.language = LanguageService.language;
		});

		scope.$on('comment-added-' + scope.comment.id, function(event, newChild){
			scope.comment.children.push(newChild);
		});
	}
	return {
		link: link,
        scope: {
            'comment': '='
        },
		templateUrl: '/app/directives/comment-display/comment-display.html'
	};
}]);