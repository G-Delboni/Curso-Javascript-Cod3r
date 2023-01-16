function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log()
console.log(soma(3))
console.log(soma(3.1))
console.log(soma(3.2, 3))
console.log(soma(3, 5, 6))
console.log(soma(3, 5, 'abobora'))
console.log(soma('a', 'b', 'c'))