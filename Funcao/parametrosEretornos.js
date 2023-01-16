function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    }

    else {
        return area
    }
}

console.log(area(2, 3))
console.log(area(20, 3))

let resultado = area(5,3)
console.log(resultado)