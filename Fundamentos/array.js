// array = vetor

const valores = [7.2 , 9.4 , 3.3 , 8.3]

console.log(valores[0], valores[3]) // se tentar acessar um índice que não existe retorna um valor vazio

valores[4] = 37
console.log(valores[4])
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')

console.log(valores)

console.log(valores.pop()) // imprime o ultimo valor do array
delete valores[0]

console.log(valores)
console.log(typeof valores) // array é um objeto