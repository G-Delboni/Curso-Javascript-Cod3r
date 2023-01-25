let vetor = [1,2,3,4,5,6,7,8,9,10]

let quantosNumeros = vetor.length

const soma = vetor.reduce(function(acumulador, atual){
    let soma = acumulador + atual
    return soma
})

const resultado = soma / quantosNumeros

console.log(resultado)