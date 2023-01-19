// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' // Não fazer

const avo = { attr1:'A' }
const pai = {__proto__:avo, attr2:'B'}
const filho = {__proto__:pai, attr3:'C'}

console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0, filho.attr4)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Vai sobrepor o atributo original

}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // Super referencia o prototipo, caso usasse this ele ia referenciar o mesmo método e ia entrar em loop
    }
}

Object.setPrototypeOf(ferrari, carro) // -> Ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

console.log('--------------')

// Exemplo

class Animal {
    respirar() {
        console.log("Respirando...");
    }
}
 
class Peixe extends Animal {
    respirar() {
        console.log("Respirando embaixo da agua"); 
    }
}
 
class Sapo extends Animal {
    respirar() {
        console.log("Respirando pela pele!");
    }
}
 
let a1 = new Animal()
let p1 = new Peixe()
let s1 = new Sapo()
a1.respirar()
p1.respirar()
s1.respirar()