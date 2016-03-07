angular.module('linguo').factory('PostTitleTranslationResource', ['$resource', function($resource){
	return $resource(apiRoot + '/post_title_translations/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);