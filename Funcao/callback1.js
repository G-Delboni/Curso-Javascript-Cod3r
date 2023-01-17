const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice = 0) {
    console.log(`${indice + 1}, ${nome}`)
}

fabricantes.forEach(imprimir) // Para cada elemento no array aplica a função imprimir
fabricantes.forEach(function(a){ // Parametro a = Nome do fabricante - Para cada fabricante imprime uma vez no console
    console.log(a)
})
fabricantes.forEach((fabricante) => console.log(fabricante))