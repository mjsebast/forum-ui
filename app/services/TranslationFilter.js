angular.module('linguo').filter('translation', [function(){
	var en = {
		login: 'Login',
		search: 'Search',
		translate: 'Translate',
		comment: 'Comment',
		submit: 'Submit',
		submit_post: 'Submit Post',
		title: 'Title',
		message: 'Message',
		url: 'Url',
		cancel: 'Cancel'
	}
	var es = {
		login: 'Iniciar Sesión',
		search: 'Buscar',
		translate: 'Traducir',
		comment: 'Comentario',
		submit: 'Enviar',
		submit_post: 'Enviar Mensaje',
		title: 'Título',
		message: 'Mensaje',
		url: 'Url',
		cancel: 'Cancelar'
	}
	return function(section, language) {
	    if(language=='es'){
	    	return es[section];
	    }
	    return en[section];
  	};
	
}]);