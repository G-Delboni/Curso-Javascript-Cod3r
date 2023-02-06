const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const { at } = require('lodash')

const pessoaPaisGenero = pessoa => pessoa.genero === 'F' && pessoa.pais === 'China'

axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionariasChinesas = funcionarios.filter(pessoaPaisGenero)

    const salarioMenor = funcionariasChinesas.reduce(function(anterior,atual){
        return anterior.salario < atual.salario ? anterior : atual
    })

    console.log(salarioMenor)
})
