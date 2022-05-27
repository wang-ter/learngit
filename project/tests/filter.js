

// 只保留奇数，删除偶数；
let arr =  [-1,1, 2, 3, 4, 5, 6, 9, 10, 15];
var result = arr.filter((x)=>{
    return x % 2 !== 0
})
console.log(result)


























// //  删除空白字符
// let arr1 = ['A', '', 'B', null, undefined, 'C', '  '];
// let r1 = arr1.filter((x)=>{
//     return x && x.trim()
// })
// console.log(r1)

// //  去除重复元素
let arr2 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
let r2 = arr2.filter((item,index,arr2)=>{
    return arr2.indexOf(item) === index
})



// 实现原理
Array.prototype._filter = function(fn){
    var newArr = []
    for(let i=0;i<this.length;i++){
        fn(this[i]) && newArr.push(this[i])
    }
    return newArr
}


// let r2 = arr2.filter((element,index,self)=>{
//     return self.indexOf(element) === index
// })
// console.log(r2)

// // 3、筛选出素数
// let arr3 = []
// for(let x=1;x<100;x++){
//     arr3.push(x)
// }

// function getsushu(arr){
//     return arr.filter(function(x){
//         var flag = true
//         if(x<2){
//             flag = false
//         }else{
//             for(let i=2;i<x;i++){
//                 if(x % i === 0){
//                     flag = false;
//                     break
//                 }
//             }
//         }
//         return flag
//     })
// }

//     console.log(getsushu(arr3))