function adicionarMais(vezes) {
    let mais = ""
    for (let i = 0; i<vezes;i++) {
        mais += ["+"]
    }
    return mais
}

console.log(adicionarMais(3))
console.log(adicionarMais(8))