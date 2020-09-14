'use strict';

exports.getmytransaksi = function(data){
	var que = 'SELECT * FROM tbl_transaksi WHERE no_rek="'+data+'"';
	return que;
}

exports.getmysaldo = function(data){
	var que = 'SELECT * FROM tbl_transaksi WHERE no_rek = "'+data+'" ORDER BY id_transaksi DESC LIMIT 1';
	return que;
}

exports.getmyprofil = function(data){
	var que = 'SELECT * FROM tbl_nasabah WHERE no_rek="'+data+'"';
	return que;
}

exports.transfer = function(data){
	var que = 'INSERT INTO tbl_transaksi (no_rek,rek_penerima,rek_pengirim,tgl_transaksi,ket,nominal,status,kategori,saldo) VALUES ("'+data['no_rek']+'","'+data['rek_tujuan']+'","'+data['no_rek']+'",NOW(),"'+data['ket']+'","'+data['nominal']+'","Transfer","Transaksi Keluar","'+data['saldo']+'")';
	return que;
}

exports.trans_masuk = function(data){
	var que = 'INSERT INTO tbl_transaksi (no_rek,rek_penerima,rek_pengirim,tgl_transaksi,ket,nominal,status,kategori,saldo) VALUES ("'+data['rek_tujuan']+'","'+data['rek_tujuan']+'","'+data['no_rek']+'",NOW(),"'+data['ket']+'",'+data['nominal']+',"Transfer Masuk","Transaksi Masuk",'+data['saldo']+')';
	return que;
}

exports.buka_rekening = function(data){
	var que = 'INSERT INTO tbl_transaksi (no_rek,rek_penerima,rek_pengirim,tgl_transaksi,ket,nominal,status,kategori,saldo) VALUES ("'+data['no_rek']+'","-","-",NOW(),"Buka Akun",0,"Buka Akun","Transaksi Masuk",0)';
	return que;
}