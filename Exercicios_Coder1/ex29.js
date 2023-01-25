/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

let array = [1,3,7,10,14,18,20,23,27]

function inInterval(e){
    if (e >= 10 && e <=20) {
        return e
    }
}

function outInterval(e) {
    if (e <10 || e>20) {
        return e
    }
}

let inIntervalResult = array.filter(inInterval).length
let outIntervalResult = array.filter(outInterval).length

console.log(inIntervalResult, outIntervalResult)
