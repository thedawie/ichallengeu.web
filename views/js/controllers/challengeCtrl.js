'use strict'

app.controller('challengeCtrl',function($scope,challengeService){

	$scope.msgtxt='';

	$scope.createChallenge=function(challenge){
		challengeService.create(challenge,$scope);//call login service
	};
})