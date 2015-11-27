angular.module('linguo').controller('ThreadCtrl', ['$scope', 'LanguageService', 'ThreadService', '$routeParams',
	function($scope, LanguageService, ThreadService, $routeParams){

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

	$scope.saveComment = function(){
		var comment = {
			comment: {}
		};
		comment.comment[$scope.language] = $scope.threadComment;

		$scope.thread.responses.unshift(comment);
		$scope.threadComment = null;
	}

}]);