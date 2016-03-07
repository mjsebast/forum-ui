angular.module('linguo').factory('CommentResource', ['$resource', function($resource){
	return $resource(apiRoot + '/comments/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);