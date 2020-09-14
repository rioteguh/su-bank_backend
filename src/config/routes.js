module.exports = function(app){
	var c_user = require('../controllers/Users')
	var c_transaksi = require('../controllers/Transaksi')
	var c_admin = require('../controllers/Admin')
	app.use('/users',c_user)
	app.use('/admin',c_admin)
	app.use('/data',c_transaksi)
}