angular.module('linguo').factory('CommentTranslationVoteResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/comment_translations/:id/vote', {id:'@id'}, {
        
    });
}]);