function tratarErroELançar(e) {
    throw new Error('Error...')
}

function imprimirNomeCaps(obj) {
    
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }

    catch (e){
        tratarErroELançar(e)
    }
    
    finally {
        console.log('Fim')
    }
}

const obj = {
    nome: 'Ricardo',
}

imprimirNomeCaps(obj)
