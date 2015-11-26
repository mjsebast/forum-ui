angular.module('linguo').filter('translation', [function(){
	var en = {
		login: 'Login',
		search: 'Search',
		translate: 'Translate',
		comment: 'Comment',
		submit: 'Submit'
	}
	var es = {
		login: 'iniciar sesión',
		search: 'buscar',
		translate: 'traducir',
		comment: 'comentario',
		submit: 'enviar'
	}
	return function(section, language) {
	    if(language=='es'){
	    	return es[section];
	    }
	    return en[section];
  	};
	
}]);