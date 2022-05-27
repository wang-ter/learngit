
function test1(){
    console.log(this)
    console.log(arguments)
}

// var re = test1.bind({a:1},[1,2,4,5,5,])
// re()


Function.prototype._bind = function(thisArg,...arg){
    // console.log(this)
    let self = this
    return function(...arg2){
        self.apply(thisArg,[...arg,...arg2])
    }
}

Function.prototype._bind = function(thisArg,...arg){
    let self = this
    return function(...arg2){
        self.apply(thisArg,[...arg,...arg2])
    }
}


test1._bind({a:1},[1,1,3,4,4])()