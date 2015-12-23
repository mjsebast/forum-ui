angular.module('linguo').controller('ThreadCtrl', ['$scope', 'LanguageService', 'ThreadService', '$routeParams', 'CommentResource',
	function($scope, LanguageService, ThreadService, $routeParams, CommentResource){

	ThreadService.findById($routeParams.id).then(function(){
		$scope.thread = ThreadService.thread;
	});

	$scope.language = LanguageService.language;
	$scope.languageService = LanguageService;

	$scope.changeLanguage = function(){
		$scope.language = LanguageService.changeLanguage($scope.language);
	}

	$scope.$on(LanguageService.languageChanged, function(){
		$scope.language = LanguageService.language;
	});

	$scope.$on('thread-comment-added', function(event, newChild){
		$scope.comments.push(newChild);
	});

	$scope.saveComment = function(){
		var comment = {
			threadId: $routeParams.id,
			language: $scope.language,
			content: {}
		};
		comment.content[$scope.language] = {
			message: $scope.threadComment
		};
		CommentResource.save(comment, function(data){
			$scope.threadComment = '';
			$scope.getComments();
		});
	};

	$scope.getComments = function(){
		CommentResource.get({threadId: $routeParams.id}, function(data){
			$scope.comments = data.content;
		});
	};
	$scope.getComments();

}]);