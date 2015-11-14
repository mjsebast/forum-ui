angular.module('linguo').filter('translation', [function(){
	var en = {
		login: 'Login',
		search: 'Search'
	}
	var es = {
		login: 'iniciar sesión',
		search: 'buscar'
	}
	return function(section, language) {
	    if(language=='es'){
	    	return es[section];
	    }
	    return en[section];
  	};
	
}]);