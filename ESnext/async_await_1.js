
function esperarTempo(tempo = 2000) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(), tempo )
        })    
}

function retornarValor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), 5000);
    })
}

/* esperarTempo()
    .then(() => console.log('Executando'))
    .then(esperarTempo)
    .then(() => console.log('Executando'))
    .then(esperarTempo)
    .then(() => console.log('Executando'))
*/
async function executar() {
    let valor = await retornarValor()

    await esperarTempo(1000)
    console.log(`Async/Await ${valor}`)
    await esperarTempo(1000)
    console.log(`Async/Await ${valor + 1}`)
    await esperarTempo(1000)
    console.log(`Async/Await ${valor + 2}`)

    return valor + 3
}

async function executarDeVerdade(){
    const resposta = await executar()
    console.log(resposta)
}

executarDeVerdade()