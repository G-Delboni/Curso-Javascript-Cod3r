/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

const vetor = [1,2,3,4,5,6]

function multiplicarElemento(array,num) {
    let novoArray = []
        vetor.forEach(elemento => {
            novoArray.push(elemento * num)
        })
    return novoArray
}

const multiplicarMaior5 = function(array,num) {
    let novoArray = []
        vetor.forEach(function(elemento){
            if (elemento > 5) {
                novoArray.push(elemento * num)
            }
        })
    return novoArray
}

console.log(multiplicarElemento(vetor,3))
console.log(multiplicarMaior5(vetor,3))