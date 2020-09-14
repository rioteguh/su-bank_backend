var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 2020

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

var router = require('./config/routes')
router(app)

app.listen(port, () => {
	console.log('API berjalan di port '+port)
})