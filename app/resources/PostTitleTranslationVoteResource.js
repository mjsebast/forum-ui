angular.module('linguo').factory('PostTitleTranslationVoteResource', ['$resource', function($resource){
	return $resource(apiRoot + '/post_title_translations/:id/vote', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);