angular.module('linguo').directive('postHero', ['PostService', '$location', 'LanguageService', 'PostVoteResource',
    function(PostService, $location, LanguageService, PostVoteResource) {
	function link(scope){
		scope.language = LanguageService.language;

		scope.changeLanguage = function(){
			scope.language = LanguageService.changeLanguage(scope.language);
		}

		scope.$on(LanguageService.languageChanged, function(){
			scope.language = LanguageService.language;
		});

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
		templateUrl: 'app/directives/post-hero/post-hero.html'
	};
}]);