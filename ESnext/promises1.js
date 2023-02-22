let a = 1
console.log(a)

let p = new Promise(function(resolve) {
    resolve(['Ana','Bia','Carlos'])
})

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(imprimir => console.log(imprimir))