function calcularSalario(horasTrabalhadas, valorHora) {
    let salario = horasTrabalhadas * valorHora
    return `Seu salário é igual à R$${salario}`
}

console.log(calcularSalario(100, 10))