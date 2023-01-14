function boaNoticia(nota) {
    if (nota >= 7) {
        console.log('Parabéns!!! Você foi aprovado')
    }
}

boaNoticia(8)

function seVerdade(valor) {
    if (valor) {
        console.log(`É verdade ${valor}`)
    }
}

// if pode converter para boolean

seVerdade('abobora')
seVerdade('')
seVerdade(null)
seVerdade(NaN)
seVerdade(undefined)
seVerdade(0)
seVerdade(-1)
seVerdade(' ')
seVerdade('?')
seVerdade([])
seVerdade(['abobora', 'feijao'])
seVerdade({})