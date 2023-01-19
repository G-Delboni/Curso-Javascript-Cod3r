// Usando a notação literal

const obj = {}

console.log(obj)

// Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construturas

function protudo(nome,preco,desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desconto)
    }
}

const prod1 = new protudo('Caneta', 7.99, 0.15)
const prod2 = new protudo('Notebook', 2998.99, 0.25)

console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto())

// Funções factory

function criarFuncionario(nome,salarioBase,faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const funcionario1 = criarFuncionario('João', 7980, 4)
const funcionario2 = criarFuncionario('Maria', 11400, 1)

console.log(funcionario1.getSalario(), funcionario2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'

console.log(filha)

// Uma função famosa que retorna um objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')

console.log(fromJSON.info)