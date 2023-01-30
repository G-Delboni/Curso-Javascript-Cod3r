function somarElementosArray(acumulador, atual) {
    return acumulador + atual
}

console.log([1,2,3,4,5].reduce(somarElementosArray))