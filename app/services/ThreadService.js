angular.module('linguo').service('ThreadService', ['ForumService', 'ThreadResource', '$q', 
	function(ForumService, ThreadResource, $q){
	var thisService = this;	
	this.thread = {};

	this.findById = function(id){
		var deferred = $q.defer();
		if(this.thread.id==id){
			deferred.resolve();
		}
		else{
			ThreadResource.get({id:id}, function(data){
				thisService.thread = data;
				deferred.resolve();
			});
		}
		return deferred.promise;
	};
	
}]);