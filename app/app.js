angular.module('linguo', ['ngRoute', 'mgcrea.ngStrap', 'ngResource'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
  	$routeProvider.when('/', {templateUrl: '/app/views/forum/forum.html', controller: 'ForumCtrl'})
  		.when('/thread/:id', {templateUrl: '/app/views/thread/thread.html', controller: 'ThreadCtrl'});
}])