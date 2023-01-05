let valor //nao inicializada

console.log(valor)

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString()) erro


/*
*teste
*for (let i = 0; i<5; i++) {
*    console.log("ola")
*}
*/

const produto = {}
console.log(produto.preco) // preço undefined

produto.preco = 500
console.log(produto.preco)

console.log(!!undefined) // falso
