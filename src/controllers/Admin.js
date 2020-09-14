const express = require('express')
const admin = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Admin = require('../models/Admin_model')
admin.use(cors())

process.env.SECRET_KEY = 'secret'

admin.post('/nasabah', (req,res) => {
	const today = new Date().toJSON()
	const postData = {
		no_rek : req.body.no_rek,
		nama : req.body.nama,
		tgl_lahir : req.body.tgl_lahir,
		lahir : req.body.tempat_lahir,
		alamat : req.body.alamat,
		tgl_join : today
	}
	Admin.findOne({
		where : {
			no_rek : req.body.no_rek
		}
	}).then(adm => {
		if (!adm) {
			Admin.create(postData)
			.then(adm => {
				res.json({status : adm.no_rek + ' registered'})
			})
			.catch(err => {
				res.send('error : '+err)
			})
		}else{
			res.json({status : 'Terdaftar'})
		}
	})
	.catch(err => {
		res.send('error ' + err)
	})
})
module.exports = admin