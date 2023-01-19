// Faça uma função que calcule um fatorial de um número

function fatorarNumero(numero) {

    let result = 1

    for (let i = 1; i <= numero; i++) {
        result *= i
    }

    return result
}

console.log(fatorarNumero(4))
console.log(fatorarNumero(10))