var express = require('express')

a = require('./routes/a')
b = require('./routes/b')

var app = express()
app.use('/',a)
app.use('/',b)
app.listen(8888)

// app.get('/',)
console.log('运行success,请打开：http://127.0.0.1:8888/')