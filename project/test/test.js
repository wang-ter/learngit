var http = require('http')
var fs = require('fs')
var events = require('events').EventEmitter
const { compileFunction } = require('vm')
var url = require('url')
var util = require('util')







http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-Type':'text/plain'
    })
    console.log(url.parse(req.url,true).query)
    var params = url.parse(req.url,true).query
    res.write('ss'+params.url)
    // res.write(url.parse(req.url,true).query.url)
    res.end()
}).listen(8888)

console.log('运行success,请打开：http://127.0.0.1:8888/')
// http://127.0.0.1:8888/


// 一、 读取文件
// 1、阻塞代碼——同步读取
// var data = fs.readFileSync('./assets/input.txt')
// console.log(data,data.toString(),'读取文件')
// 2、异步读取文件——非阻塞代码
fs.readFile('./assets/input.txt',function(err,data){
    if(err){
        return console.error(err)
    }else{
        console.log(data.toString())
    }
})
console.log('程序执行结束')

// 二、events
var eventEmitter = new events()
// var connetHandle = function connected(){
//     console.log('连接成功,接下来接收数据')
//     eventEmitter.emit('data_received')
// }

// 监听事件 然后通过emit触发
// eventEmitter.on('connection',connetHandle)
eventEmitter.on('connection',function(){
    console.log('连接成功，接下来可以接收数据')
    eventEmitter.emit('data_received')
})
eventEmitter.on('data_received',function(){
    console.log('数据接收成功,接下来可以关闭连接')
    eventEmitter.emit('close_connect')
})
eventEmitter.on('close_connect',function(){
    console.log('关闭连接')
})
eventEmitter.emit('connection')

console.log('程序执行完毕！')

//  Buffer
const buf = Buffer.from('runoob','ascii')
console.log(buf)
console.log(buf.toString('hex'))
console.log(buf.toString('base64'))

const buf1 = Buffer.alloc(10,0)
console.log(buf1)

// 从流中读取数据
var data = ''
var readerStream = fs.createReadStream('./assets/input.txt')
readerStream.setEncoding('UTF8')
readerStream.on('data',function(chunk){
    console.log('ss-------------',chunk,'ss-------------')
    data+=chunk
})
readerStream.on('end',function(){
    console.log(data)
})
readerStream.on('error',function(){
    console.log(err.stack)
})

console.log(__filename,'ssss')
console.log(__dirname,'============')

//  打开文件
fs.open('./assets/input.txt','r+',function(err,fd){
    if(err){
        return console.error(err)
    }
    console.log(fd,'s?????/ssss------------s')
})

// 异步获取文件信息
fs.stat('./assets/input.txt',function(err,stats){
    if(err){
        return console.error(err)
    }
    // console.log(stats)
    console.log(stats.isDirectory())

})

// fs写入文件
fs.writeFile('./assets/input.txt','这是通过fs加入的方法',function(err){
    if(err){
        return console.error(err)
    }
    console.log('-------------------------')
    fs.readFile('./assets/input.txt',function(err,data){
        console.log(data.toString(),'kkkkkkkkkkkkk')
    })
})

var savedirarr = [`${__dirname}/assets/data/first`,
`${__dirname}/assets/data/second`,
`${__dirname}/assets/data/three`,
`${__dirname}/assets/data/four`]

// { recursive: true } 不断data文件是否存在
for(let i=0;i<savedirarr.length;i++){
    fs.mkdir(savedirarr[i],{recursive:true},function(err){
        if(err){
            return console.log(err)
        }
    })
}

fs.readdir(`${__dirname}/assets/data/`,function(err,files){
    if(err){
        return 
    }
    files.forEach(file=>{
        console.log(file)
    })
})

// fs.rmdir(`${__dirname}/assets/data/four`,function(err){
//     if(err){
//         return
//     }
//     console.log('删除成功')    
// })



