const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User_model')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req,res) => {
	const today = new Date().toJSON()
	const postData = {
		no_rek : req.body.no_rek,
		nama : req.body.nama,
		password : req.body.password,
		tgl_add : today,
		id_verify : req.body.id_user
	}
	User.findOne({
		where : {
			no_rek : req.body.no_rek
		}
	}).then(user => {
		if (!user) {
			bcrypt.hash(req.body.password, 10, (err, hash) => {
				postData.password = hash
				User.create(postData)
				.then(user => {
					res.json({status : user.no_rek + ' registered'})
				})
				.catch(err => {
					res.send('error : '+err)
				})
			})
		}else{
			res.json({status : 'Terdaftar'})
		}
	})
	.catch(err => {
		res.send('error ' + err)
	})
})

users.post('/login', (req,res) => {
	User.findOne({
		where : {
			id_verify : req.body.id_verify
		}
	}).then(user => {
		if (user) { 
			if (bcrypt.compareSync(req.body.password, user.password)) {
				let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
					expiresIn : 1440
				})
				res.send({'auth':true,'token':token, 'user':user})
			}
		}else{
			res.status(400).json({error : 'User does not exists'})
		}
	})
	.catch(err => {
		res.status(400).json({error : err})
	})
})

users.post('/verifikasi', (req,res) => {
	User.findOne({
		where : {
			no_rek : req.body.no_rek
		}
	}).then(user => {
		if (user) {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				res.json({'kondisi': 'Berhasil'})
			}else{
				res.json({'kondisi' : 'Gagal'})
			}
		}else{
			res.status(400).json({error : 'User does not exists'})
		}
	})
	.catch(err => {
		res.status(400).json({error : err})
	})
})

module.exports = users