// Fazer um programa para encontrar todos os pares entre 1 e 100

function encontrarPares(numeros = 1) {
    for(numeros=1; numeros <= 100; numeros++) {
        if (numeros % 2 === 0) {
            console.log(numeros)
        }
    }
}

encontrarPares()