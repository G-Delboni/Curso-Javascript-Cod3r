setTimeout(function() {
    console.log('Callback')

    setTimeout(function() {
        console.log('Callback')
    }, 2000)

}, 2000)

function esperarTempo(tempo = 2000) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log('Executando')
            resolve('Abobora')
        }, tempo)    
    })
}

esperarTempo(3000)
    .then((texto) => console.log(texto))