angular.module('linguo').directive('childResponse', ['LanguageService', 'CommentVoteResource', function(LanguageService, CommentVoteResource) {
	function link(scope){
		scope.language = LanguageService.language;
		scope.languageService = LanguageService;

		scope.changeLanguage = function(){
			scope.language = LanguageService.changeLanguage(scope.language);
		}

		scope.$on(LanguageService.languageChanged, function(){
			scope.language = LanguageService.language;
		});

		scope.vote = function(vote){
			if(scope.response.userVote==vote){
				scope.response.userVote = 0;
                scope.response.points -= 1;
			}
			else{
				scope.response.points +=1;
				scope.response.userVote = vote;
			}
            var json = {
                id: scope.response.id,
                vote: scope.response.userVote
            }
            CommentVoteResource.save(json, function(){

            });
		};

	}
	return {
		link: link,
        scope: {
            'response': '='
        },
		templateUrl: 'app/directives/child-response/child-response.html'
	};
}]);