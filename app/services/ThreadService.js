angular.module('linguo').service('ThreadService', ['ForumService', function(ForumService){
	this.language = 'en';
	this.thread = {};

	this.findById = function(id){
		if(this.thread.id==id){
			return this.thread;
		}
		else{
			for(var i=0;i<ForumService.threads.length;i++){
				if(ForumService.threads[i].id==id){
					return ForumService.threads[i];
				}
			}
		}
		return {};
	};
	
}]);