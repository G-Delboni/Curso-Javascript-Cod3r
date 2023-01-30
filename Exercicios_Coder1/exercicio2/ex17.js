function somarPrecos(array) {
    let total = 0

    let precos = array.map(function(elementos){
        return elementos.preco
    })

    for (let i = 0;i < precos.length;i++) {
        precos.reduce(function(acumulador,atual){
            total = acumulador + atual
        })
    }
    return total
}

console.log(somarPrecos([{nome:"abobora", preco: 1300}, {nome:"arroz", preco: 1000}]))