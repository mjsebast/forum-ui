angular.module('linguo').directive('commentDisplay', ['LanguageService', function(LanguageService) {
	function link(scope){
		scope.language = LanguageService.language;
		scope.languageService = LanguageService;
		scope.commenting = false;
		scope.text = {};

		scope.changeLanguage = function(){
			scope.language = LanguageService.changeLanguage(scope.language);
		}

		scope.$on(LanguageService.languageChanged, function(){
			scope.language = LanguageService.language;
		});

		scope.saveResponse = function(){
			var response = {
				comment: {}
			};
			response.comment[scope.language] = scope.text.commentResponse;
			scope.comment.responses.unshift(response);
		}

	}
	return {
		link: link,
        scope: {
            'comment': '='
        },
		templateUrl: '/app/directives/comment-display/comment-display.html'
	};
}]);