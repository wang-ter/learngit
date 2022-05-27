var arr=[1,2,3,4,5]
// 计时器相关
// 计时器
let count = 1
function addcount(){
    count+=1
    console.log(count)
    if(count == 10){
        clearInterval(count2)
        console.log('结束了')
    }
}
let count1 = setTimeout(addcount,1000)
let count2 = setInterval(addcount,1000)
