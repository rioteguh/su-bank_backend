var mysql = require('mysql')

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	port: '3306',
	password: '',
	database: 'subank'
})

db.connect(function(err){
	if(err){
		throw err
	}else{
		console.log('Database Terhubung')
	}
})

module.exports = db