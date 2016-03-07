angular.module('linguo').factory('PostContentTranslationResource', ['$resource', function($resource){
	return $resource(apiRoot + '/post_content_translations/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);