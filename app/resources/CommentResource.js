angular.module('linguo').factory('CommentResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/comments/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);