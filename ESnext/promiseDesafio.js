const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

fs.readFile('./ESnext/dados.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

function lerAquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler o arquivo')
    })
}

lerAquivo(caminho)
    .then(console.log)