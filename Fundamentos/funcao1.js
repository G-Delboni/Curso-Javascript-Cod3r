// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // segundo valor é undefined, somando int com undef retorna Not a Number
imprimirSoma(2, 3, 4, 6, 9) // soma os dois primeiros e ignora o resto
imprimirSoma() // retorna NaN

//funcao com retorno

function soma(a, b=0) {
    return a + (b - 2)
}

console.log(soma(2,3))
console.log(soma(5))