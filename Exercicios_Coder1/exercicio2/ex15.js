function retornarParEIndicePar(array) {
    let indice = 0
    let newArray = []

    for (let i=0; i < array.length;i++) {
        if(array[i] % 2 == 0 && indice % 2 == 0) {
            newArray.push(array[i])
        }
        indice++
    }
    return newArray
}

console.log(retornarParEIndicePar([1,2,3,4]))
console.log(retornarParEIndicePar([0,1,2,3,4]))