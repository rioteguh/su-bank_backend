const express = require('express')
const transaksi = express.Router()
const cors = require('cors')

var response = require('../config/response');
var db_conn = require('../config/database');

const transaksi_model = require('../models/Transaksi_model')
transaksi.use(cors())

transaksi.get('/history/:id', (req,res) => {
	var data = req.params.id;
	var que = transaksi_model.getmytransaksi(data)
	db_conn.query(que,function(error,rows,fields){
		if (error) {
			console.log(error);
		} else {
			response.ok(rows,res);
		}
	});
})

transaksi.get('/saldo/:id', (req,res) => {
	var data = req.params.id;
	var que = transaksi_model.getmysaldo(data)
	db_conn.query(que,function(error,rows,fields){
		if (error) {
			console.log(error);
		} else {
			response.ok(rows,res);
		}
	});
})

transaksi.get('/profil/:id', (req,res) => {
	var data = req.params.id;
	var que = transaksi_model.getmyprofil(data)
	db_conn.query(que,function(error,rows,fields){
		if (error) {
			console.log(error);
		} else {
			response.ok(rows,res);
		}
	});
})

transaksi.post('/transfer', (req,res) => {
	var postdata = {
		'no_rek' : req.body.no_rek,
		'rek_tujuan' : req.body.rek_tujuan,
		'ket' : req.body.ket,
		'nominal' : req.body.nominal,
		'saldo' : req.body.sisa_saldo,
	}
	var que = transaksi_model.transfer(postdata)
	db_conn.query(que,function(error,rows,fields){
		if (error) {
			console.log(error)
			res.json({status : 'Gagal'})
		} else {
			res.json({status : 'Berhasil'})
		}
	});
})

transaksi.post('/trans_masuk', (req,res) => {
	var postdata = {
		'no_rek' : req.body.no_rek,
		'rek_tujuan' : req.body.rek_tujuan,
		'ket' : req.body.ket,
		'nominal' : req.body.nominal,
		'saldo' : req.body.saldo_tambah,
	}
	var que = transaksi_model.trans_masuk(postdata)
	db_conn.query(que,function(error,rows,fields){
		if (error) {
			console.log(error)
			res.json({status : 'Gagal'})
		} else {
			res.json({status : 'Berhasil'})
		}
	});
})

transaksi.post('/buka_rekening', (req,res) => {
	var postdata = {
		'no_rek' : req.body.no_rek,
	}
	var que = transaksi_model.buka_rekening(postdata)
	db_conn.query(que,function(error,rows,fields){
		if (error) {
			console.log(error)
			res.json({status : 'Gagal'})
		} else {
			res.json({status : 'Berhasil'})
		}
	});
})

module.exports = transaksi