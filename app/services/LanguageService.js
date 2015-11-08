angular.module('linguo').service('LanguageService', ['$rootScope', function($rootScope){
	this.language = 'en';
	this.languageChanged = 'languageChanged';

	this.changeGlobalLanguage = function(){
		this.language = this.changeLanguage(this.language);
		$rootScope.$broadcast(this.languageChanged);
	}

	this.changeLanguage = function(language){
		if(language=='en'){
			return 'es';
		}
		else{
			return 'en';
		}
	}

	this.getLanguageImage = function(language){
		return 'assets/images/' + language + '.png';
	}
	
}]);