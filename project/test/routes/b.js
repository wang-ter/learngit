var express = require('express')
var router = express.Router()


router.get('/b',function(req,res){
    res.send('这个是b.js')
})

router.post('/bbb',function(req,res){
    console.log('这个也别刁颖吗')
})


module.exports = router