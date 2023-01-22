const carrinhoCompras = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno" , "preco": 13.90 }',
    '{ "nome": "Kit de lápis" , "preco": 41.22 }',
    '{ "nome": "Caneta" , "preco": 7.50 }'
]


// Retornar um array somente com os precos 

let carrinhoPrecos = carrinhoCompras.map(function(elementos){ // elementos se refere aos elementos do array
    return JSON.parse(elementos).preco
})

console.log(carrinhoPrecos)

// Do modo do professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinhoCompras.map(paraObjeto).map(apenasPreco)

console.log(resultado)