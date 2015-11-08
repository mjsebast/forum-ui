angular.module('linguo', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/', {templateUrl: '/app/views/forum/forum.html', controller: 'ForumCtrl'})
  	.when('/thread/:id', {templateUrl: '/app/views/thread/thread.html', controller: 'ThreadCtrl'});
}])