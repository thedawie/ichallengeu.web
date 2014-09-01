// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1486982838206911', // your App ID
		'clientSecret' 	: '03150410afd9cc6a17013ca77d6943e1', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: '3iD6dCVbhjcwfCiBhEIJcpsmo',
		'consumerSecret' 	: 'ONQ5Qqhh9rJEbcngSRF4ypwJSMT6mXTItfqvZvZUWHtPs9KdJn',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};