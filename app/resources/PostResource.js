angular.module('linguo').factory('PostResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/posts/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);