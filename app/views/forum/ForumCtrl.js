angular.module('linguo').controller('ForumCtrl', [
	'$scope', 'ForumService', '$modal', 'LanguageService', 'ThreadResource', 
	function($scope, ForumService, $modal, LanguageService, ThreadResource){
	
	$scope.language = LanguageService.language;
	$scope.languageService = LanguageService;

	$scope.changeLanguage = function(){
		$scope.language = LanguageService.changeLanguage($scope.language);
	};

	$scope.$on(LanguageService.languageChanged, function(){
		$scope.language = LanguageService.language;
	});

	var addThreadModal = $modal({scope: $scope, templateUrl: '/app/views/add-thread/add-thread.html', show: false});
  
  	$scope.addThreadModal = function() {
  		$scope.thread = {};
    	addThreadModal.$promise.then(addThreadModal.show);
  	};

	$scope.getThreads = function(){
		ThreadResource.get({}, function(data){
			$scope.threads = data.content;
		});
	};

	$scope.saveThread = function(){
		var content = {};
		content[$scope.language] = $scope.thread.content[$scope.language];
		$scope.thread.content = content;
		$scope.thread.language = $scope.language;

		ThreadResource.save($scope.thread, function(){
			$scope.getThreads();
			addThreadModal.hide();
		});

	};
	$scope.getThreads();

}]);