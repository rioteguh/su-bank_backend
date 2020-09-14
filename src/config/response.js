'use strict';

exports.ok = function(val,res){
	var data = {
		'status' : 200,
		'data' : val
	};
	res.json(data);
	res.end();
}