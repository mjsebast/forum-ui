angular.module('linguo').controller('ForumCtrl', [
	'$scope', 'ForumService', '$http', '$modal', 'LanguageService', 
	function($scope, ForumService, $http, $modal, LanguageService){
	$scope.language = LanguageService.language;
	$scope.languageService = LanguageService;

	$scope.changeLanguage = function(){
		$scope.language = LanguageService.changeLanguage($scope.language);
	}

	var addThreadModal = $modal({scope: $scope, template: '/app/views/add-thread/add-thread.html', show: false});
  
  	$scope.addThreadModal = function() {
  		$scope.thread = {};
    	addThreadModal.$promise.then(addThreadModal.show);
  	};

	$http.get('http://localhost:8080/api/threads').then(function(data){
		$scope.threads = data.data.content;
	});

	$scope.saveThread = function(){
		/*
		var thread = {
		    "language": "en",
		    "url": null,
		    "content": {
		    	"en": {
				    "languageId": "en",
				    "title": "Hello, how are you?",
				    "message": "I am fine, thank you"
				}    
			}
		};
		*/
		var content = {};
		content[$scope.language] = $scope.thread.content[$scope.language];
		$scope.thread.content = content;
		$scope.thread.language = $scope.language;

		
		$http.post('http://localhost:8080/api/threads', $scope.thread).then(function(data){
			console.log(data);
			//addThreadModal.show(false);
		});

	};

}]);