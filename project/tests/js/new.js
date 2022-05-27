
function Person(name,age){
    this.name = name
    this.age = age
    this.info = function(){
        console.log(this.name + '/'+this.age)
    }
    // console.log(this)
    // console.log(this.name)
}

// Person('11',18)
// new Person('11',18)

// const p1 = new Person('11',18)
// console.log(p1.info())

function _new(obj,...rest){
    var newObj = Object.create(obj.prototype)
    var result = obj.apply(newObj,rest)
    return typeof result === 'object' ? result:newObj
}
console.log(_new(Person,'11',18))



// function _new(obj,...rest){
//     const newObj = Object.create(obj.prototype)
//     const result = obj.apply(newObj,rest)
//     return typeof result === 'object' ? result : newObj

// }

// console.log(_new(Person,'11',18))