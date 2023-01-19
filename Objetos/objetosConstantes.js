// Pessoa --> endereço de memória "123" --> {...}
// Ou seja, pessoa aponta para o endereço de memória que aponta para o objeto criado.

const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' // O objeto é alterado, mas a constante não

console.log(pessoa)

// Pessoa --> endereço de memória "456" --> {...}
// pessoa = {nome: "Ana"}

Object.freeze(pessoa) // Congela o objeto

pessoa.nome = "Maria"
pessoa.endereco = "Rua abc"
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: "João"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)