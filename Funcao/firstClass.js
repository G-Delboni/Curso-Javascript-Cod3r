// Função em JS é First-Class Object(ou Civilian)
// High-Ordem Function

// Literal

function funcao1() {}

// Armazenar função em variável

const funcao2 = function () {}

// Armazenar função em um array

const array = [function(a,b) {return a + b}, funcao1, funcao2]
console.log(array[0](2,3))

// Armazenar função em atributos de objetos

const obj = {}
obj.falar = function() { return "Opa" }
console.log(obj.falar())

// Passar função como parâmetro

function run(fun) {
    fun()
}

run(function() {console.log('Executando...')})

// Uma função pode retornar/conter outra função

function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(1, 3)(5)

const cincoMais = soma(2,3)
cincoMais(5)
