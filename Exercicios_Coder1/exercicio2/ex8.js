function multiplicar(numero1,numero2) {
    let resultado = 0

    for (let i=0; i <numero1;i++) {
        resultado += numero2
    }
    return resultado
}

console.log(multiplicar(3,9))