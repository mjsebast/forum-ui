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

  		scope.getMessage = function(){
  			if(scope.parentComment){
  				return scope.parentComment.content[scope.language].message;
  			}
  			else if(scope.post && scope.post.content[scope.language]){
  				return scope.post.content[scope.language].message;
  			}
  			else if(scope.post){
  				return scope.post.title[scope.language].message;
  			} 
  		}

		scope.saveReply = function(){
			var reply = {
				language: scope.language,
				content: {}
			};

			if(scope.post){
				reply.postId = scope.post.id;
			}
			else{
				reply.postId = scope.parentComment.postId;
			}

			if(scope.parentComment && scope.parentComment.id){
				reply.parentId = scope.parentComment.id;
			}
			else if(scope.parentComment && scope.parentComment.parentId){
				reply.parentId = scope.parentComment.parentId;
			}

			reply.content[scope.language] = {
				message: scope.text.reply
			};
			CommentResource.save(reply, function(data){
				if(reply.parentId){
					scope.$emit('comment-added-' + reply.parentId, data);
				}
				else{
					scope.$emit('post-comment-added', data);
				}
				
				addCommentModal.hide();
			});
		};

	}
	return {
		link: link,
        scope: {
            'post': '=',
            'parentComment': '=',
            'showButton': '=',
            'language': '=?'
        },
		templateUrl: '/app/directives/add-comment/add-comment.html'
	};
}]);