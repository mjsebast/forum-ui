angular.module('linguo').factory('CommentVoteResource', ['$resource', function($resource){
	return $resource(apiRoot + '/comments/:id/vote', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);