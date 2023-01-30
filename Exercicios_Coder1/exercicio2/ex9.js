function repetir(elemento,vezes) {
    let arrayResultado = []

    for (let i = 0; i<vezes;i++) {
         arrayResultado.push(elemento)
    }

    return arrayResultado
}

console.log(repetir("Abobora", 5))