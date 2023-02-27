function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('a')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            }
            else {
                resolve(valor)
            }
            
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando', 0.5) 
    .then(v => console.log(v))
    .then(
        v => consol.log(v),
        err => console.log('Erro: ' + err)
        )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(err)) 
    .then(() => console.log('Fim!'))