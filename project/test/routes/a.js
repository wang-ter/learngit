var express = require('express')
var router = express.Router()
router.get('/a',function(req,res){
    res.send('this is aaaa')
})

module.exports = router