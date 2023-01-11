const saudacao = 'Olá' // contexto léxico 1

function exec() {
    const saudacao = 'Bom dia' // contexto léxico 2
    return saudacao

}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'Abobrinha',
        bairro: 'Melão',
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)