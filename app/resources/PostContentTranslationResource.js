angular.module('linguo').factory('PostContentTranslationResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/post_content_translations/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);