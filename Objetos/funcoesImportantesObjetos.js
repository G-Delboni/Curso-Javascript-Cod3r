const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // Retorna um array com subarrays que contém as chaves e valores do objeto

Object.entries(pessoa).forEach((e) => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log('-----------------------------------')

Object.entries(pessoa).forEach(([chave,valor]) => { // Operador destructuring
    console.log(`${chave}: ${valor}`)
})

console.log('-----------------------------------')

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Não enumera caso false
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}

const obj = Object.assign(dest, o1, o2) // Concatena objetos com o objeto passado no primeiro parâmetro - Sobrescreverá o valor de a

console.log(obj)

Object.freeze(obj)
obj.c = 1234

console.log(obj)