angular.module('linguo').directive('translateComment', ['LanguageService', '$modal', 'CommentTranslationResource',
	function(LanguageService, $modal, CommentTranslationResource) {
	function link(scope){
		scope.language = LanguageService.language;
		scope.languageService = LanguageService;
		scope.translationLanguage = (scope.comment.language=="en")?"es":"en";

		var addTranslationModal = $modal({scope: scope, templateUrl: '/app/directives/translate-comment/translation-modal.html', show: false});
  
  		scope.translationModal = function() {
    		addTranslationModal.$promise.then(addTranslationModal.show);
    		CommentTranslationResource.get({commentId: scope.comment.id}, function(data){
    			scope.translations = data.content;
    		});
  		};

	}
	return {
		link: link,
        scope: {
            'comment': '='
        },
		templateUrl: '/app/directives/translate-comment/translate-comment.html'
	};
}]);