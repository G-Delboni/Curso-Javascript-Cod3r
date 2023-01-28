function verificarIntervalo(numero,minimo,maximo,inclusivo = false) {
    if (numero > minimo && numero < maximo) {
        return true
    }
    else {
        if(inclusivo == true && numero == minimo || numero == maximo) {
            return true
        }
        else{
            return false
        }
    }
}

console.log(verificarIntervalo(3,3,100))
console.log(verificarIntervalo(3,3,100, true))
console.log(verificarIntervalo(3,1,100))

function verificarInter(numero,minimo,maximo,inclusivo = false) {
    if (inclusivo) {
        return numero>= minimo && numero <=maximo
    }
    return numero > minimo && numero < maximo
}

console.log(verificarInter(3,3,100))
console.log(verificarInter(3,3,100, true))
console.log(verificarInter(3,1,100))