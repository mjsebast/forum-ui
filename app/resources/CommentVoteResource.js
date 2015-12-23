angular.module('linguo').factory('CommentVoteResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/comments/:id/vote', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);