// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

let vetor = [1,2,3,4,5,6,7,8,9]


console.log(`A quantidade de números pares é: ${vetor.filter(x => x % 2 === 0).length}`)
console.log(`A quantidade de números ímpares é: ${vetor.filter(x => x % 2 != 0).length}`)