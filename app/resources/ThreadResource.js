angular.module('linguo').factory('ThreadResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/threads/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);