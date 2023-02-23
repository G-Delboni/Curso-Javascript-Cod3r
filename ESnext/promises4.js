function gerarNumeroEntre(min, max, tempo) {
    if(min > max) {
        [min,max] = [max,min]
    }
    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 60,4000),
        gerarNumeroEntre(1, 60,1000),
        gerarNumeroEntre(1, 60,500),
        gerarNumeroEntre(1, 60,300),
        gerarNumeroEntre(1, 60,100),
        gerarNumeroEntre(1, 60,1500)
    ])
}

gerarNumeroEntre(1, 60,1000)
    .then(console.log)

console.time('promise')

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promise')
    })