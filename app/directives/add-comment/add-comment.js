angular.module('linguo').directive('addComment', ['LanguageService', '$modal', 'CommentResource',
	function(LanguageService, $modal, CommentResource) {
	function link(scope){
		scope.languageService = LanguageService;
		scope.commenting = false;
		scope.text = {};

		scope.changeLanguage = function(){
			scope.language = LanguageService.changeLanguage(scope.language);
		}

		scope.$on(LanguageService.languageChanged, function(){
			scope.language = LanguageService.language;
		});

		var addCommentModal = $modal({scope: scope, templateUrl: '/app/directives/add-comment/add-comment-modal.html', show: false});
  
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
			if(scope.comment.parentId){
				reply.parentId = scope.comment.parentId;
			}

			reply.content[scope.language] = {
				message: scope.text.reply
			};
			CommentResource.save(reply, function(data){
				scope.$emit('comment-added-' + reply.parentId, data);
				addCommentModal.hide();
			});
		};

	}
	return {
		link: link,
        scope: {
            'comment': '=',
            'language': '=?'
        },
		templateUrl: '/app/directives/add-comment/add-comment.html'
	};
}]);