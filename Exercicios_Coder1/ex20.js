/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function calcularCedulas(valor) {

    let cemReais = 0
    let cinquentaReais = 0
    let dezReais =  0
    let cincoReais = 0
    let umReal = 0
    let valorPago = calcularValorNota(valor)

    while (valor >= valorPago) {
        switch(valorPago) {
            case 100:
                valor -= 100
                cemReais++
                break
            case 50:
                valor -= 50
                cinquentaReais++
                break
            case 10:
                valor -= 10
                dezReais++
                break
            case 5:
                valor -= 5
                cincoReais++
                break
            case 1:
                valor -= 1
                umReal++
                break
        }

        valorPago = calcularValorNota(valor)
    }

    return elaborarResultado(cemReais, cinquentaReais, dezReais, cincoReais, umReal)
   
}

function calcularValorNota(valor) { 
    if (valor >= 100)
        return 100
    else if (valor >= 50)
        return 50
    else if (valor >= 10)
        return 10
    else if (valor >= 5)
        return 5
    else if (valor >= 1)
        return 1
}

function elaborarResultado(cemReais, cinquentaReais, dezReais, cincoReais, umReal) {
    let resultado = ''

    if (cemReais > 0) {
        resultado += `${cemReais} notas de R$100. `
    }
    if (cinquentaReais > 0) {
        resultado += `${cinquentaReais} notas de R$50. `
    }
    if (dezReais > 0) {
        resultado += `${dezReais} notas de R$10. `
    }
    if (cincoReais > 0) {
        resultado += `${cincoReais} notas de R$5. `
    }
    if (umReal > 0) {
        resultado += `${umReal} notas de R$1. `
    }
    return resultado
}

console.log(calcularCedulas(153))
console.log(calcularCedulas(1253))