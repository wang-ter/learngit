
// const { rejects } = require('assert')
// const { reject } = require('async')
// var fs = require('fs')
// const { resolve } = require('path')
// async function demo(){
//     console.log('我是async里面的函数')
// }

const { resolve } = require("path")

// async function demo1(){
//     return '返回一个promise对象'
// }

// // 微任务
// demo1().then(res=>{
//     console.log(res)
// })
// demo()
// console.log('我在函数调用之后')

// function test1(){
//     return new Promise((resolve,reject)=>{
//         resolve('成功了说')
//     })
// }

// async function testAsy(){
//     var result = await test1()
//     console.log(result)
//     // return '这个是promise对象吧'
// }

// testAsy()

// fs.readFile('','utf8',function(err,data){
//     fs.readFile(data,'utf8',function(err,data){
//         console.log(data)
//     })
// })


// function read(filename){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(filename,'utf8',function(err,data){
//             if(err) return reject(err)
//             return resolve(data)
//         })
//     })
// }

// read(filename).then(res=>{
//     return read(res).then(res=>{
//         return read(res).then(res=>{
//             console.log(res)
//         })
//     })
// })


// const p1 = new Promise((resolve,reject)=>{
//     console.log('第一个promise')
//     resolve('成功的返回')
// })

// console.log('after promise')

// const p2 = p1.then(res=>{
//     console.log('p1 运行的结果',res)
//     throw new Error('失败了')
// })

// const p3 = p2.then(res=>{
//     console.log(res)
// },err=>{
//     console.log(err)
// })



//  实现promise
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise{
    constructor(executor){
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        let resolve = (value)=>{
            if(this.status == PENDING){
                this.status = FULFILLED
                this.value = value
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
        }  
        
        let reject = (reason)=>{
            if(this.status === PENDING){
                this.status = REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn=>fn())
            }
        }

        try{
            executor(resolve,reject)
        }
        catch(err){
            reject(err)
        }
    }

        then(onFulfilled,onRejected){
            if(this.status == FULFILLED){
                onFulfilled(this.value)
            }
            if(this.status === REJECTED){
                onRejected(this.status)
            }
            if(this.status === PENDING){
                this.onResolvedCallbacks.push(()=>{
                    onFulfilled(this.value)
                })
                this.onRejectedCallbacks.push(()=>{
                    onRejected(this.reason)
                })
            }
        }
}



// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(resolve('data'))
//     },1000)
// })

// p.then(res=>{
//     console.log(res)
// },err=>{
//     console.log(err)
// })