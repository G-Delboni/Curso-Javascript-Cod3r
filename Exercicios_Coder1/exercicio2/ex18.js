function calcularMedia(...args) {
    let total = 0
    for (let arg of args) {
        total += arg
    }
    total = total / args.length
    return total
}

console.log(calcularMedia(10,10))
console.log(calcularMedia(5,3,9))