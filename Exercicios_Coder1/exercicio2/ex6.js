function inverter(valor) {
    const tipo = typeof valor
    if(tipo == "boolean") {
        return !valor
    }
    else if (tipo == "number") {
        return -valor
    }
    else {
        return "Esperando valor numérico ou booleano."
    }
}

console.log(inverter(true))
console.log(inverter(6))
console.log(inverter(-6))
console.log(inverter("6"))