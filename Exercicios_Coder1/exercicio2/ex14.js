function objetoParaArray(objeto){
    let newArray = []

    for (let chave in objeto) {
        newArray.push([chave, objeto[chave]])
    }
    return newArray
}

console.log(objetoParaArray({nome: "cinco", abobora: "azul"}))