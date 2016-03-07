angular.module('linguo').factory('CommentTranslationVoteResource', ['$resource', function($resource){
	return $resource(apiRoot + '/comment_translations/:id/vote', {id:'@id'}, {
        
    });
}]);