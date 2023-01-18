// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

/* Sobre um exemplo de uso, esse tipo de função é muito conveniente para executar uma lógica de inicialização. Usando funções de invocação automática, executaremos o trabalho de inicialização apenas uma vez, porque após a execução, perderemos a referência para a função.
*/