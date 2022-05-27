const { query } = require('express');
var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'192.168.5.100',
    port:'3306',
    user:'root',
    password:'123456',
    database:'wtt',
})

connection.connect();
console.log('连接成功')
var query1 = 'select * from person'
connection.query(query1,function(err,data){
    console.log(data)
})
// 增
// var addSql = 'insert into person(username,password) values(?,?)'
// var addParams = ['jiujiu','4jiujiu']
// connection.query(addSql,addParams,function(err,result){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result,'添加成功')
// })

// 删
// var delSql = `delete from person where userid=7 `
// connection.query(delSql,function(err,data){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('删除成功')
// })




// 查
// var sql = 'select * from person'
// connection.query(sql,function(err,data){
//     if(err){
//         console.log(err)
//         return
//     }
//     var arr=[]
//     for(let i=0;i<data.length;i++){
//         arr.push({
//             username:data[i].username,
//             password:data[i].password,
//         })
//     }
//     console.log(arr)
// })

// 改
// var updateSql = 'update person set username=?,password=? where username=?'
// var updateparams = ['update1','update1','jiujiu']
// connection.query(updateSql,updateparams,function(err,data){
//     if(err){
//         console.log(err)
//         return 
//     }
//     console.log('修改成功')
// })