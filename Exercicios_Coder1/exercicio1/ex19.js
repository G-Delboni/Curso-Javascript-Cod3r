/* O cardápio de uma lanchonete é o seguinte:
Código      Descrição do Produto        Preço
100             Cachorro Quente         R$ 3,00
200             Hambúrguer Simples      R$ 4,00
300             Cheeseburguer           R$ 5,50
400                Bauru                R$ 7,50
500             Refrigerante            R$ 3,50
600                Suco                 R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function calcularPedido(codigo, quantidade) {

    let precoTotal = 0
    let preco = 0

    switch(codigo) {
        case 100: 
            preco = 3.00
            precoTotal = quantidade * preco
            break

        case 200: 
            preco = 4.00
            precoTotal = quantidade * preco
            break

        case 300: 
            preco = 5.50
            precoTotal = quantidade * preco
            break

        case 400: 
            preco = 7.50
            precoTotal = quantidade * preco
            break

        case 500: 
            preco = 3.50
            precoTotal = quantidade * preco
            break

        case 600: 
            preco = 2.80
            precoTotal = quantidade * preco
            break
        
        default:
            return 'Código do produto inválido.'
    }

    return `O preço do(s) produto(s) é de R$${precoTotal.toFixed(2)}`
}

console.log(calcularPedido(100,2))
console.log(calcularPedido(400,3))
console.log(calcularPedido(4200,3))