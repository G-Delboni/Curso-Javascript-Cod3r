function removerPropriedade(objeto,remover) {
    delete objeto[remover]
    return objeto
}

console.log(removerPropriedade({nome: "carlos", idade: 5}, 'idade'))
console.log(Object.is(removerPropriedade({nome: "claudio", idade: 3}, "idade"), {nome: "claudio", idade: 3}))