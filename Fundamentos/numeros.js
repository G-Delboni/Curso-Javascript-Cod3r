const peso1 = 1.0
const peso2 = Number("1.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // n.0 detecta como int
console.log(Number.isInteger(peso2))

const nota1 = 9.5464
const nota2 = 6.1241

const notafinal = nota1 * peso1 + nota2 * peso2
const media = notafinal / (peso1 + peso2)

console.log(media.toFixed(2)) // to.Fixed - define casas decimais

console.log(media.toString(2)) // toString - converte em string / toString(2) - converte em binário
console.log(typeof media)

// Number = função / number = tipo de dado