const Sequelize = require('sequelize')
const db = require('../config/db_seq')

module.exports = db.sequelize.define(
	'tbl_nasabah',
	{
		id_pel : {
			type : Sequelize.INTEGER,
			primaryKey : true,
			autoIncrement : true
		},
		no_rek : {
			type : Sequelize.STRING
		},
		nama : {
			type : Sequelize.STRING
		},
		lahir : {
			type : Sequelize.STRING
		},
		tgl_lahir : {
			type : Sequelize.DATE
		},
		tgl_join : {
			type : Sequelize.DATE
		},
		alamat : {
			type : Sequelize.STRING
		},
	},
	{
		freezeTableName : true,
		timestamps : false
	}
)