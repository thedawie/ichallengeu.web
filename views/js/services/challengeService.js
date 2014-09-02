'use strict';

app.factory('challengeService', function($http){
	return {
			create:function(challenge,scope){
				var $promise=$http.post('/create',challenge);
				$promise.then(function(res){
					if(res.data.message=='Challenge Created') scope.msgtxt='Created Successfully';
					else scope.msgtxt='An error Occured';
				});
			}
	};
})