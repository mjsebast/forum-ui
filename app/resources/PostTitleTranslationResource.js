angular.module('linguo').factory('PostTitleTranslationResource', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/post_title_translations/:id', {id:'@id'}, {
        'update': { method:'PUT' }
    });
}]);