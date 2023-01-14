function imprimirResultado(nota) {
    let resultado

    if (nota >= 6) {
        resultado = 'Aprovado'
        console.log(`Você foi ${resultado}`)
    }

    else {
        resultado = 'Reprovado'
        console.log(`Você foi ${resultado}`)
    }
}

imprimirResultado(7)
imprimirResultado(5)
imprimirResultado('Teste')