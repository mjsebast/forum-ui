angular.module('linguo').factory('PostContentTranslationVoteResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/post_content_translations/:id/vote', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);