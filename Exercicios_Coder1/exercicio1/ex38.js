/* Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor
*/

function imprimirImpares(valor1 = 0, valor2 = 100) {
    let valorMaior = valor2
    let valorMenor = valor1
    
        if (valor1 > valor2){
            valorMaior = valor1
            valorMenor = valor2
        }

        else {
            valorMaior = valor2
            valorMenor = valor1
        }
    
        for (let i = 0; i <= valorMaior;i++){
            verificarDivisao(i)
        }
}

function verificarDivisao(num) {
    if(num % 2 !=0) {
        console.log(num)
    }
}

imprimirImpares(2, 34)
console.log('---------------------')
imprimirImpares(200, 100)