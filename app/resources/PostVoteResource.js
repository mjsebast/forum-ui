angular.module('linguo').factory('PostVoteResource', ['$resource', function($resource){
	return $resource(apiRoot + '/posts/:id/vote', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);