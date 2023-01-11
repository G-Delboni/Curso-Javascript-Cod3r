const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'abobrinha',
        numero: 5,
    }
}

const { nome, idade } = pessoa // operador de destructuring - de dentro do objeto "pessoa" retire "nome, idade"
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // transformar em variavel
console.log(n, i)

const { batata, abobora } = pessoa
console.log(batata, abobora)

const { endereco: { rua, numero } } = pessoa
console.log(rua, numero)