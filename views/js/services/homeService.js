'use strict';

app.factory('homeService', function($http){
	return {
			login:function(user,scope){
				var $promise=$http.post('data/user.php',user);
				$promise.then(function(msg){
					if(msg.data=='success') scope.msgtxt='success login';
					else scope.msgtxt='error login';
				});
			}
	};
})