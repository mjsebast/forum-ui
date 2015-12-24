angular.module('linguo').service('PostService', ['ForumService', 'PostResource', '$q',
	function(ForumService, PostResource, $q){
	var thisService = this;	
	this.post = {};

	this.findById = function(id){
		var deferred = $q.defer();
		if(this.post.id==id){
			deferred.resolve();
		}
		else{
			PostResource.get({id:id}, function(data){
				thisService.post = data;
				deferred.resolve();
			});
		}
		return deferred.promise;
	};
	
}]);