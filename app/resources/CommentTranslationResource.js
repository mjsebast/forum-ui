angular.module('linguo').factory('CommentTranslationResource', ['$resource', function($resource){
	return $resource(apiRoot + '/comment_translations/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);