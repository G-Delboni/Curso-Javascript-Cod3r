/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica.O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora(valor1, operacao, valor2) {
    switch (operacao) {
        case "+": 
            operacao = valor1 + valor2
            break
        case "-":
            operacao = valor1 - valor2
            break
        case "*":
            operacao = valor1 * valor2
            break
        case "/":
            operacao = valor1 / valor2
            break
        default:
            return 'Defina uma operação válida'    
    }

    let resultado = operacao
    return resultado

}

console.log(calculadora(2,"-",3))
console.log(calculadora(2,"+",3))
console.log(calculadora(2,"*",3))
console.log(calculadora(2,"/",3))
console.log(calculadora(2,"%",3))