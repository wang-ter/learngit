
//  set map
const datamap = new Map()
datamap.set('{xxixi:111}','1111').set('second','22222')
console.log(datamap)

// 遍历
for(let [key,value] of datamap){
    console.log(key + '=' + value)
}
for(let item of datamap){
    console.log(item)
}
console.log([...datamap])
console.log([...datamap.values()])
console.log()
// console.log(datamap.size)
// // 取值 get
// console.log(datamap.get('first'))
// // 判断键当前键是否存在
// console.log(datamap.has('first'))
// //  delete
// console.log(datamap.delete('first'))
// // clear
// console.log(datamap.clear())
// console.log(datamap)

// var foo = {xo:'ssss'}
// var bar = '1'
// var map = new Object()
// map[foo] = 'hahaha'
// map[bar] = 'xixixi'
// console.log(map)
// console.log(map[foo])