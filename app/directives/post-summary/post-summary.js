angular.module('linguo').directive('postSummary', ['PostService', 'LanguageService', '$location', 'PostVoteResource',
    function(PostService, LanguageService, $location, PostVoteResource) {
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

		scope.vote = function(vote){
            if(scope.post.userVote==vote){
                scope.post.userVote = 0;
                scope.post.points -= 1;
            }
            else{
                scope.post.points +=1;
                scope.post.userVote = vote;
            }
            var json = {
                id: scope.post.id,
                vote: scope.post.userVote
            }
            PostVoteResource.save(json, function(){

            });
        };
	}
	return {
		link: link,
        scope: {
            'post': '='
        },
		templateUrl: '/app/directives/post-summary/post-summary.html'
	};
}]);