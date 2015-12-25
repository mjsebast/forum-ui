angular.module('linguo').factory('PostTitleTranslationVoteResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/post_title_translations/:id/vote', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);