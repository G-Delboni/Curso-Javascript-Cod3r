const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // valor vazio
console.log(escola.charCodeAt(3)) // codigo html do elemento 3
console.log(escola.indexOf("r")) // encontra a posição
console.log(escola.substring(1)) // exibe a partir da posição 1
console.log(escola.substring(1, 3)) // não inclui o ultimo elemento

console.log('Escola '.concat(escola).concat("!")) // concatena strings
console.log(escola.replace(3, "e"))

console.log("Ana, Maria, Pedro".split(','))

console.log("3" + 2) // resultado é 32, string tem prioridade.