"use strict";

var util = require('util');
var request = require('request');

function init(cb){

var address = process.argv[2];
	var opt = {
		url : 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+/*1600+Amphitheatre+Parkway,+Mountain+View,+CA*/'&key=YOUR KEY',
		method : 'GET'
	}

	request(opt, function(err, httpRes, body){console.log(opt,httpRes.statusCode,body);
		if(err || httpRes.statusCode !== 200)
			return err;
		if(body.length === 0)
			return ("no data received");
		console.log(body);
		return cb(null);
	});
}
	

(function(){
	if(require.main === module){
		init(function(err){
			if(err)
				console.log(err);
			process.exit();
		});
	}

}());
