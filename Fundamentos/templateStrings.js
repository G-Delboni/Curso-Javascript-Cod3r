const nome = "Rebeca"
const concate = "Olá " + nome + "!"
const template = `
    Olá
    ${nome}!
`

console.log(template, concate)

//expressoes

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // transforma em maiúsculo

console.log(`Ei... ${up("cuidado!!!")}`)