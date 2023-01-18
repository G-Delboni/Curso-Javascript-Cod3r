function pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Olá ${this.nome}`)
    }
}

const p1 = new pessoa('João')

p1.falar()

// This -> torna o objeto referenciado visível globalmente, não apenas no escopo da função