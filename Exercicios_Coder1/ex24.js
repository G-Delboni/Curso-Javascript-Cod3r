// Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function imprimirHello(vezes = 0) {
    
    while (vezes < 11) {
        vezes++
        console.log('Hello World!')
    }
}

imprimirHello()