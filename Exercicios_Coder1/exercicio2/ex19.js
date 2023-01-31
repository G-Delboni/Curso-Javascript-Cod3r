function calcularAreaTriangulo(base,altura) {
    let area = 0
    area = (base * altura) / 2
    return `${area.toFixed(2)}m²`
}

console.log(calcularAreaTriangulo(10,15))