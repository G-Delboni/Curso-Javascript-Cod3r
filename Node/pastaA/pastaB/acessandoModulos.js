const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const saudacao = require('saudacao') // Por padrão procura o arquivo index

console.log(saudacao.ola)

const c = require('../pastaB/pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res) => {
    res.write("Bom dia")
    res.end()
}).listen(8080)