Array.prototype.reduce2 = function(callback, valorInicial = 0){
    let total = valorInicial
    for (let i=0; i<this.length; i++) {
        total = callback(total, this[i], i, this)
    }
    if (total === 0) {
        return false
    }
    return total
}

// Do modo do professor 

Array.prototype.reduce3 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i<this.length;i++) {
        acumulador = callback(acumulador,this[i], i,this)
    }
    return acumulador
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const saoTodosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a =>a.bolsista).reduce3(saoTodosBolsistas))

const algumAlunoBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a =>a.bolsista).reduce2(algumAlunoBolsista))