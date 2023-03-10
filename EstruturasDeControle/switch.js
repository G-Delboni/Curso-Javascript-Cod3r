const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10: // Quando estiver vazio olha a linha de baixo.
        case 9: 
            console.log('Quadro de honra')
            break // Só sai do switch se tiver break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
        default:
            console.log('Nota Inválida')
    }
}

// Switch nao suporta intervalo ou , - exemplo: case 3-0 ou case 3,2,1,0.
// Porém suporta casos como: case 10: case9: case8: - na mesma linha.

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)