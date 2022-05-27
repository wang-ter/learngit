

var ECStack = [globalContext]

let a = 'hello world'
function first () {
	console.log('进入 first 函数执行上下文');
	second();
	console.log('再次进入 first 函数执行上下文');
}
function second () {
	console.log('进入 second 函数执行上下文');
}
first();
console.log('进入 全局执行上下文（Global Execution Context）')