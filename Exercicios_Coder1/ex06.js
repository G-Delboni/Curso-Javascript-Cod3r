/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
*primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
*retornará o valor da aplicação sob o regime de juros compostos.
*/



function jurosSimples(capitalInicial,taxaJuros,tempoAplicacao) {
    taxaJuros = taxaJuros / 100

    let juroSimples = capitalInicial * taxaJuros * tempoAplicacao
    montante = capitalInicial + juroSimples
    return montante
}

console.log(jurosSimples(100, 10, 3))

function jurosCompostos(capitalInicial,taxaJuros,tempoAplicacao) {
    taxaJuros = taxaJuros / 100

    let montante = capitalInicial * ( 1 + taxaJuros) * tempoAplicacao
    return montante
}