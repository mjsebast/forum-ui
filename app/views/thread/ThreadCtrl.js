angular.module('linguo').controller('ThreadCtrl', ['$scope', 'LanguageService', 'ThreadService', '$routeParams',
	function($scope, LanguageService, ThreadService, $routeParams){

	$scope.thread = ThreadService.findById($routeParams.id);

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