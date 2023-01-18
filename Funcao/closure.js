// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite que você acesse e manipule variáveis declaradas externas à função

// Contexto léxico em ação

const x = "Global"

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

//Closure se refere ao modo como uma função interna consegue acessar os parâmetros e variáveis de uma função externa 
//a ela. Esse comportamento permite, por exemplo, acesso as variáveis fora do escopo, mesmo que a função externa já 
//tenha sido executada (o que por padrão não é possível, uma vez que a variável interna 'morre' após a execução)
 
//Exemplo 1
function retornaNome() {
    let name = "Samuel";
    return function () {
        return name;
    }
}
let retornouNome = retornaNome(); // retornouNome executa e retorna a referência da função retornaNome
console.log(retornouNome()); 
 
//Exemplo 2
function soma(x) {
    return function (y) {
        return x + y;
    }
}
let somaDois = soma(2);
let somaDoisMaisTres = somaDois(3);
console.log(somaDoisMaisTres);