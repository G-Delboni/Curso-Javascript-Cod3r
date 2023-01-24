const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad PRO', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plastico', preco: 18.99, fragil: false},
]

function produtosCarosEFrageis(elementos) {
    if (elementos.preco > 2000 && elementos.fragil === true) {
        return elementos
    }
}

console.log(produtos.filter(produtosCarosEFrageis))