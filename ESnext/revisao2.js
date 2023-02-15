// arrow function

const soma = (a,b) => a + b
console.log(soma(2,3))

// arrow function (This)

const lexico1 = () => console.log(exports === this)
const lexico2 = () => lexico1.bind({})
lexico1()
lexico2()

// parametros default

function log (texto = "Node") {
    console.log(texto)
}

log()

// Operador rest

function total(... numeros) {
    let total = 0 
    numeros.forEach(n => total += n) 
    return total
}

console.log(total(2,5,7,2))