const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável

const soma = (a,b) => {
    return a + b
}

//return implicito - executa uma única linha

const subtrair = (a,b) => a-b
console.log(subtrair(2, 3))

const imprimir2 = a => console.log(a)
imprimir2(3)