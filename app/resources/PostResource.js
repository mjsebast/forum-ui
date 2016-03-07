angular.module('linguo').factory('PostResource', ['$resource', function($resource){
	return $resource(apiRoot + '/posts/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);