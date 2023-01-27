/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function progressaoAritmetica(numeroTermo, primeiroTermo, razao) {
    let proximoTermo = primeiroTermo + razao
    while (numeroTermo > 0) {
        proximoTermo +=razao
        numeroTermo--
        console.log(proximoTermo)
    }
}

console.log(progressaoAritmetica(5,1,2))