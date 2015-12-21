angular.module('linguo').factory('CommentTranslationResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/comment_translations/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);