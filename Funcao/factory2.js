function criarProduto(nome, precoTotal) {
    return {
        nome: nome,
        precoTotal: desconto(precoTotal)
    }
}

function desconto(precoTotal) {
    if (precoTotal >= 10) {
        return precoTotal - precoTotal * 0.1
    }

    else {
        return precoTotal
    }
}


console.log(criarProduto('Batata', 15))
console.log(criarProduto('Abobora', 7))
console.log(criarProduto('Beterraba', 9.99))
console.log(criarProduto('Arroz', 11.55))