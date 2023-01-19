/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function calcularAnuidade(mes, valorAnuidade) {

    if (mes >= 1 && mes < 13) {
        atraso = mes - 1
        let juros = valorAnuidade * ( 1 + 0.05) ** atraso
        return juros.toFixed(2)
    }

    else {
        return 'Insira um mês válido'
    }

}

console.log(calcularAnuidade(1, 100))
console.log(calcularAnuidade(3, 100))
console.log(calcularAnuidade(4, 100))
console.log(calcularAnuidade(13, 100))