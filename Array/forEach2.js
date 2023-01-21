const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)

})

const aprovados2 = ['Agatha2','Aldo2','Daniel2','Raquel2']

forEach2 = function () {
    let indice = 0
    for (let i = 0; i < aprovados2.length; i++) {
        indice++
        console.log(`${indice}) ${aprovados2[i]}`)
    }
}
console.log('---------')

aprovados2[forEach2()]

// Do modo do professor

console.log('---------'),

Array.prototype.forEach3 = function(callback) {
    for (let i = 0; i<this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach3(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)

})