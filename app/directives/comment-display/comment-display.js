angular.module('linguo').directive('commentDisplay', ['LanguageService', 'CommentVoteResource', 
	function(LanguageService, CommentVoteResource) {
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

		scope.vote = function(vote){
			if(scope.comment.userVote==vote){
				scope.comment.userVote = 0;
                scope.comment.points -= 1;
			}
			else{
				scope.comment.points +=1;
				scope.comment.userVote = vote;
			}
            var json = {
                id: scope.comment.id,
                vote: scope.comment.userVote
            }
            CommentVoteResource.save(json, function(){

            });
		};
	}
	return {
		link: link,
        scope: {
            'comment': '='
        },
		templateUrl: 'app/directives/comment-display/comment-display.html'
	};
}]);