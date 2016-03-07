angular.module('linguo').factory('PostContentTranslationVoteResource', ['$resource', function($resource){
	return $resource(apiRoot + '/post_content_translations/:id/vote', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);