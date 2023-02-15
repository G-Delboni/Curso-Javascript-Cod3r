//ES8 Object.values/Object.entries

const obj = {a:1, b:2, c:3}
console.log(Object.values(obj), Object.entries(obj))

// Melhorias na notação literal

const nome = 'Carla'
const pessoa = {
    nome,
    idade: 13,
    ola() {
        return "Ola"
    }
}

console.log(pessoa.nome, pessoa.ola())

// Classe

class animal {}

class cachorro extends animal {
    falar() {
        return "Au au!"
    }
}

console.log(new cachorro().falar())