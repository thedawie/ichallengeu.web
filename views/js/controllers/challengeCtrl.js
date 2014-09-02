'use strict'

app.controller('challengeCtrl',function($scope,challengeService){

	$scope.msgtxt='';
	
	$scope.createChallenge=function(challenge){
		challenge.dueDate = new Date(challenge.dueDate);

		challengeService.create(challenge,$scope);//call login service
	};
})