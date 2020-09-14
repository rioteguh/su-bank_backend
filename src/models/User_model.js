const Sequelize = require('sequelize')
const db = require('../config/db_seq')

module.exports = db.sequelize.define(
	'tbl_user',
	{
		id : {
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
		password : {
			type : Sequelize.STRING
		},
		id_verify : {
			type : Sequelize.STRING
		},
		tgl_add : {
			type : Sequelize.DATE
		}
	},
	{
		freezeTableName : true,
		timestamps : false
	}
)