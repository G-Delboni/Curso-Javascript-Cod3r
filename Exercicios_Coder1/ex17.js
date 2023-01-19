/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A     10%
B     15%
C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function calcularNovoSalario(planoTrabalho, salarioAtual) {
    let novoSalario = 0
    let aumentoA = salarioAtual * 0.10
    let aumentoB = salarioAtual * 0.15
    let aumentoC = salarioAtual * 0.20

    switch(planoTrabalho) {
        case "A":
            novoSalario = salarioAtual + aumentoA
            break
        case "B":
            novoSalario = salarioAtual + aumentoB
            break
        case "C":
            novoSalario = salarioAtual + aumentoC
            break
        default:
            return 'Plano inválido.'
    }

    return novoSalario
}

console.log(calcularNovoSalario("A",100))