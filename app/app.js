var apiRoot = 'http://api.linglobes.com:8080'

angular.module('linguo', ['ngRoute', 'mgcrea.ngStrap', 'ngResource'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
  	$routeProvider.when('/', {templateUrl: 'app/views/forum/forum.html', controller: 'ForumCtrl'})
  		.when('/post/:id', {templateUrl: 'app/views/post/post.html', controller: 'PostCtrl'});
}])