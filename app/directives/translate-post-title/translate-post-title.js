angular.module('linguo').directive('translatePostTitle', ['LanguageService', '$modal', 'PostTitleTranslationResource', 'PostTitleTranslationVoteResource',
    function(LanguageService, $modal, PostTitleTranslationResource, PostTitleTranslationVoteResource) {
    function link(scope){
        scope.languageService = LanguageService;
        scope.translationLanguage = (scope.post.language=="en")?"es":"en";
        scope.translate = {};

        var addTranslationModal = $modal({scope: scope, templateUrl: '/app/directives/translate-post-title/translation-modal.html', show: false});
        
        scope.vote = function(translation, vote){
            if(translation.userVote==vote){
                translation.userVote = 0;
                if(vote==1){
                    translation.points -= 1;
                }else{
                    translation.points +=1;
                }
            }
            else{
                if(!translation.userVote || translation.userVote==0){
                    if(vote==1){
                        translation.points += 1;
                    }else{
                        translation.points -=1;
                    } 
                } else{
                    if(vote==1){
                        translation.points += 2;
                    }else{
                        translation.points -=2;
                    }
                }
                translation.userVote = vote;
            }
            var json = {
                id: translation.id,
                vote: translation.userVote
            }
            PostTitleTranslationVoteResource.save(json, function(){

            });
        };

        scope.translationModal = function() {
            addTranslationModal.$promise.then(addTranslationModal.show);
            scope.getTranslations();
        };

        scope.getTranslations = function(){
            PostTitleTranslationResource.get({postId: scope.post.id, sort: 'points', 'points.dir': 'desc'}, function(data){
                scope.translations = data.content;
            });
        };

        scope.submitTranslation = function(){
            var translation = {
                message: scope.translate.userTranslation,
                language: scope.translationLanguage,
                postId: scope.post.id
            };
            PostTitleTranslationResource.save(translation, function(data){
                scope.getTranslations();
                scope.translate.userTranslation = '';
            });
        };
    }
    return {
        link: link,
        scope: {
            'post': '=',
            'language': '='
        },
        templateUrl: '/app/directives/translate-post-title/translate-post-title.html'
    };
}]);