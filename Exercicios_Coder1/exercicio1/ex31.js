// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

let vetor = [-3,-2,-1,0,1,,2,3]

function countNegativeNumbers(arr) {
    let negativeNumbers = arr.filter(e => e < 0).length
        
    let positiveNumbers = arr.length - negativeNumbers
        
    return {positiveNumbers, negativeNumbers} 
}

console.log(countNegativeNumbers(vetor))