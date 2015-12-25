angular.module('linguo').factory('PostVoteResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/posts/:id/vote', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);