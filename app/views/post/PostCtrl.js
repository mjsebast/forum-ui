angular.module('linguo').controller('PostCtrl', ['$scope', 'LanguageService', 'PostService', '$routeParams', 'CommentResource',
	function($scope, LanguageService, PostService, $routeParams, CommentResource){

	PostService.findById($routeParams.id).then(function(){
		$scope.post = PostService.post;
	});

	$scope.language = LanguageService.language;
	$scope.languageService = LanguageService;

	$scope.changeLanguage = function(){
		$scope.language = LanguageService.changeLanguage($scope.language);
	}

	$scope.$on(LanguageService.languageChanged, function(){
		$scope.language = LanguageService.language;
	});

	$scope.$on('post-comment-added', function(event, newChild){
		$scope.comments.push(newChild);
	});

	$scope.saveComment = function(){
		var comment = {
			postId: $routeParams.id,
			language: $scope.language,
			content: {}
		};
		comment.content[$scope.language] = {
			message: $scope.postComment
		};
		CommentResource.save(comment, function(data){
			$scope.postComment = '';
			$scope.getComments();
		});
	};

	$scope.getComments = function(){
		CommentResource.get({postId: $routeParams.id}, function(data){
			$scope.comments = data.content;
		});
	};
	$scope.getComments();

}]);