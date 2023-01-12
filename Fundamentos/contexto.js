let a = 3
global.b = 123

this.c = 456 // this === module.exports

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === true)

abc = 3

console.log(global.abc) // variavel sem var e let -> contexto global