console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')

console.log(obj2.nome, obj3.nome)
obj3.exec()