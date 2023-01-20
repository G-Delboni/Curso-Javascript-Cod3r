function aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem Vindo!', 123)
const aula2 = new aula('Até Breve!', 1234)
console.log(aula1,aula2)


// Simulando o new
function novoObj (f, ...parametros) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,parametros)
    return obj
}

console.log(novoObj(aula,'Boa Tarde', 321))

const aula3 = novoObj(aula, 'Bem vindo!', 3214)
const aula4 = novoObj(aula, 'Até Breve!', 456)

console.log(aula3,aula4)