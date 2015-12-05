angular.module('linguo').directive('commentDisplay', ['LanguageService', '$modal', 'CommentResource',
	function(LanguageService, $modal, CommentResource) {
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

		var addCommentModal = $modal({scope: scope, templateUrl: '/app/views/add-comment/add-comment.html', show: false});
  
  		scope.addCommentModal = function() {
  			scope.text.reply = '';
    		addCommentModal.$promise.then(addCommentModal.show);
  		};

		scope.saveReply = function(){
			var reply = {
				threadId: scope.comment.threadId,
				language: scope.language,
				parentId: scope.comment.id,
				content: {}
			};
			reply.content[scope.language] = {
				message: scope.text.reply
			};
			CommentResource.save(reply, function(data){
				console.log(data);
			});
		};

	}
	return {
		link: link,
        scope: {
            'comment': '='
        },
		templateUrl: '/app/directives/comment-display/comment-display.html'
	};
}]);