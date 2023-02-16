const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))
console.log(tecnologias)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Obj'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave,valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)