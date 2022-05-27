// const e = require("express")

const { clearScreenDown } = require("readline")

// //  求和
const arr = [1,2,3,4,5]
const arr1 = [[2, 3, 5], [1, 2, 4], [8, 5, 5]]
var result = arr.reduce((prev,curr,index,arr)=>{
    return prev+curr
},0)
console.log(result)
var result1 = arr1.reduce((prev,curr)=>{
    return prev.concat(curr)
},[])
console.log(result1)


// 原理及代码实现
Array.prototype._reduce = function(fn,initVal){
    let prev = initVal
    let i = 0
    if(!prev){
        prev = this[0] 
        i = 1
    }
    for(i;i<this.length;i++){
        prev = fn(prev,this[0],i,this)
    }
    return prev
}






// 原理及代码实现
// Array.prototype._reduce = function(fn,initVal){
//      console.log(this)
//      let pre = initVal
//      let i = 0
//      if(!pre){
//          pre = this[0]
//          i = 1
//      }
//      for(i;i<this.length;i++){
//          pre = fn(pre,this[i],i)
//      }
//      return pre
// }

// test_arr = ['张三','李四','王五','张三'];
// let nameNum = test_arr._reduce((prev,cur)=>{
//     if(cur in prev){
//         prev[cur] ++
//     }else{
//         prev[cur] = 1
//     }
//     return prev
// },{})
// console.log(nameNum)