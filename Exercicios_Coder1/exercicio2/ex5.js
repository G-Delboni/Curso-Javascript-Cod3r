function maiorNumero(numero1, numero2) {
    if (numero1 > numero2 || numero1 === numero2) {
        return true
    }
    else {
        return false
    }
}

console.log(maiorNumero(2,1))
console.log(maiorNumero(1,1))
console.log(maiorNumero(1,2))
console.log(maiorNumero(1,"1"))