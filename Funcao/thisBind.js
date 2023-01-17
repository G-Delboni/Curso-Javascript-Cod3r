const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
        // nao funciona: console.log(saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre funcional e OO

const falarPessoa = pessoa.falar.bind(pessoa) // Amarra o objeto, o this será o objeto passado para a função bind
falarPessoa()