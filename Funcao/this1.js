// Depende do contexto de execução 
// Exemplo em navegador web

function f1() {
    console.log(this === window) // true
}

document.getElementsByTagName('body')[0].onclick = f1 // false

function f2() {
    console.log(this === document) // false
}

document.getElementsByTagName('body')[0].onclick = f2 // false

const body = document.getElementsByTagName('body')[0]

function f2() {
    console.log(this === body) // false
}

document.getElementsByTagName('body')[0].onclick = f2 // true

const f3 = () => console.log(this === window) // true - (Parametro) - => Função

document.getElementsByTagName('body')[0].onclick = f3 // true - This não varia em arrow function
