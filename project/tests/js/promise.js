



Promise.all = function(promise){
    return new Promise((resolve,reject)=>{
        let index = 0
        let result = []
        if(promise.length === 0){
            resolve(result)
        }else{
            let count = 0
            for(let i=0;i<promise.length;i++){
                Promise.resolve(promise[i]).then(res=>{
                    count ++
                    result[i] = res
                    if(count == promise.length)  return resolve(result)
                })
            }
        }
    })
}





































//  基础
// new Promise((resolve,reject)=>{
//     console.log('111')
//     resolve('222')
// }).then(data=>{
//     return new Promise((resolve,reject)=>{
//         console.log(data)
//         // resolve(data+'1')
//     })
// })

// new Promise((resolve,reject)=>{
//     console.log('111----')
//     resolve('222---')
// }).then(data=>{
//     return new Promise((resolve,reject)=>{
//         console.log(data)
//     })
// })
// console.log(data)
// console.log(data1)


// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },1000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(2)
//     },2000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(3)
//     },3000)
// })


// const p4 = 12121
// Promise.all([p1,p2,p4,p3]).then(res=>{
//     console.log(res)
// })


// function PromiseAll(PromiseArr){
//     return new Promise((resolve,reject)=>{
//         if(!Array.isArray(PromiseArr)){
//             return reject('传入的数组必须是数组')
//         }
//         let arr = []
//         let count = 0
//         for(let i=0;i<PromiseArr.length;i++){
//             PromiseArr[i].then(res=>{
//                 count ++
//                 arr[i] = (res)
//                 if(count === PromiseArr.length){
//                     resolve(arr)
//                 }
//             })
//         }
//     })
// }

// PromiseAll([p1,p3,p2]).then(res=>{
//     console.log(res)
// })



// promise
// function print(wait,msg){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(msg)
//             resolve()
//         },wait)
//     })
// }


// print(1000,'1111').then(function(){
//     print(1000,'2222')
// }).then(function(){
//     print(1000,'3333')
// })


// async function asyncfun(){
//     await print(2000,'1111')
//     await print(1000,'2222')
//     await print(3000,'3333')
// }

// asyncfun()

// setTimeout(function(){
//     console.log('11111')
//     setTimeout(()=>{
//         console.log('2222')
//         setTimeout(()=>{
//             console.log('3333')
//         },1000)
//     },2000)
// },1000)


// new Promise((resolve,rejece)=>{
//     setTimeout(()=>{
//         console.log('1111')
//         resolve()
//     },1000)
// }).then(()=>{
//     return new Promise
// })


// var promise = Promise.resolve()
// promise.then(()=>{
//     console.log('1111')
//     throw new Error('sss')
// }).then(res=>{
//     console.log(res)
// },err=>{
//     console.log(err)
// })