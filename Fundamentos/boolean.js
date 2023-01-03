let isAtivo = false

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // ! é não

// !! torna para verdadeiro * baseado no contexto
// ! torna para falso * baseado no contexto

console.log("Verdadeiros...")
console.log(!! 3)
console.log(!! -1)
console.log(!! " ") // string preenchida equivale a true
console.log(!! [])
console.log(!! {})
console.log(!! Infinity)
console.log(!! (isAtivo = true)) // situação de atribuição é true, se refere ao valor atribuido e não ao sucesso da atribuição.

console.log("Falsos...")

console.log(!! 0)
console.log(!! '') // string vazia equivale a false
console.log(!! null)
console.log(!! NaN)
console.log(!! undefined)
console.log(!! (isAtivo = false))

console.log("Finalizando")

console.log(!! ('' || 0 || null || undefined))

let nome = ""

console.log(nome || "Desconhecido")