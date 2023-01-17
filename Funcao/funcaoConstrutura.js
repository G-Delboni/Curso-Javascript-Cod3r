function carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // método publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }

    // método público
    this.getvelocidadeAtual = () => {
        return velocidadeAtual
    }
    }
}

const uno = new carro()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())

console.log(typeof carro) // A função carro funciona como uma classe
console.log(typeof ferrari) // "Ferrari" é um objeto criado da classe carro