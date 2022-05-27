const { resolve } = require("path")




// 构造函数
class Promise{
    constructor(executor){
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []
        let resolve = (value)=>{
            // console.log(value)
            if(this.status == 'pending'){
                this.status = 'fulfilled'
                this.value = value
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
        }  
        let reject = (reason)=>{
            // console.log(reason)
            if(this.status === 'pending'){
                this.status = 'rejected'
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
            if(this.status == 'fulfilled'){
                onFulfilled(this.value)
            }
            if(this.status === 'rejected'){
                onRejected(this.status)
            }
            if(this.status === 'pending'){
                this.onResolvedCallbacks.push(()=>{
                    onFulfilled(this.value)
                })
                this.onRejectedCallbacks.push(()=>{
                    onRejected(this.reason)
                })
            }
        }  
}

let data = new Promise((resolve,reject)=>{
    resolve('111====')
}).then(res=>{
    return '111'
})

console.log(data)

