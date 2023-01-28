// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.


function verificarInteiro(x) {
    if (x % 3 === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(verificarInteiro(3))
console.log(verificarInteiro(5))
console.log(verificarInteiro(21))
console.log(verificarInteiro(23))