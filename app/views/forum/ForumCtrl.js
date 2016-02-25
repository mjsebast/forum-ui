angular.module('linguo').controller('ForumCtrl', [
	'$scope', 'ForumService', '$modal', 'LanguageService', 'PostResource',
	function($scope, ForumService, $modal, LanguageService, PostResource){
	
	$scope.language = LanguageService.language;
	$scope.languageService = LanguageService;

	$scope.changeLanguage = function(){
		$scope.language = LanguageService.changeLanguage($scope.language);
	};

	$scope.$on(LanguageService.languageChanged, function(){
		$scope.language = LanguageService.language;
	});

	var addPostModal = $modal({scope: $scope, templateUrl: 'app/views/add-post/add-post.html', show: false});
  
  	$scope.addPostModal = function() {
  		$scope.post = {};
    	addPostModal.$promise.then(addPostModal.show);
  	};

	$scope.getPosts = function(){
		PostResource.get({sort:'id', 'id.dir': 'desc'}, function(data){
			$scope.posts = data.content;
		});
	};

	$scope.savePost = function(){
		var content = {};
		content[$scope.language] = $scope.post.content[$scope.language];
		$scope.post.content = content;
		$scope.post.language = $scope.language;

		PostResource.save($scope.post, function(){
			$scope.getPosts();
			addPostModal.hide();
		});

	};
	$scope.getPosts();

}]);