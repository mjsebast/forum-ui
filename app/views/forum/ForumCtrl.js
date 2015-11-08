angular.module('linguo').controller('ForumCtrl', [
	'$scope', 'ForumService', function($scope, ForumService){
	$scope.language = 'en';
	$scope.threads = ForumService.threads;

}]);