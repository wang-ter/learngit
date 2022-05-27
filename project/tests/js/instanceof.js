

//  instanceof
function _instanceof(L,R){
    let R0 = R.prototype
    L = L.__proto__
    while(true){
        if(L === null) return false
        if(L.__proto__ === R0) return true
        L = L.__proto__
    }
}













// function _instanceof(L,R){
//     let R0 = R.prototype
//     L = L.__proto__
//     while(true){
//         if(L ===  null){
//             return false
//         }
//         if(L === R0){
//             return true
//         }
//         L = L.__proto__
//     }
// }



//  数字 字符串 布尔 对象 函数 undefined
// console.log(typeof '111')  // string 2222222222 
// console.log(typeof new String('111')) // object
// console.log(typeof new Date()) // object
// console.log(typeof 1) // number 1111111111
// console.log(typeof ['1','2']) // object
// console.log(typeof new Array(1,2,3)) // object
// console.log(typeof true) // boolean 33333333
// console.log(typeof function(){}) // function
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object









// console.log('111' instanceof String)
// console.log(new String('111') instanceof String)
// console.log(1 instanceof Number)
// console.log(String instanceof Object)
// console.log(Number instanceof Object)
// console.log(Boolean instanceof Object)
// console.log(Array instanceof Object)
// console.log(Function instanceof Object)
// console.log(Object instanceof Function)

// console.log(new String('111') instanceof String)
// console.log([1,2,3,34] instanceof Array)
// console.log('111' instanceof String)

// console.log(Object.prototype)
console.log(this,'---')