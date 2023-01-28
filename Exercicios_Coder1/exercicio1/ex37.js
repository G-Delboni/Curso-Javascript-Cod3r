/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function progressaoAritmetica(numeroTermos, primeiroTermo, razao) {
    let termoN = primeiroTermo + (numeroTermos - 1) * razao
    let somaTermos = (primeiroTermo + termoN) / 2 * numeroTermos
    while(numeroTermos > 0) {
        numeroTermos--
        console.log(termoN)
        termoN -= razao
    }
    return somaTermos
}

function progressaoGeometrica(numeroTermos, primeiroTermo, razao) {
    let termoN = primeiroTermo * (razao ** (numeroTermos -1 ))
    let somaTermos = primeiroTermo * (razao**numeroTermos -1) / (razao - 1)
    while(numeroTermos > 0) {
        numeroTermos--
        console.log(termoN)
        termoN /= razao
    }
    return somaTermos
}

console.log(progressaoAritmetica(5,1,2))
console.log('--------------------------')
console.log(progressaoGeometrica(5,4,3))