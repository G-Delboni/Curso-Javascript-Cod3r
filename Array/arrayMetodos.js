const pilotos = ['Vettel', 'Alonso','Raikkonen','Massa'] // Não pode atribuir mais elementos por ser uma const

pilotos.pop() // Massa quebrou o carro -- pop remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento na ultima posição
console.log(pilotos) 

pilotos.shift() // shift remove o primeiro elemento
console.log(pilotos) 

pilotos.unshift('Hamilton')
console.log(pilotos) // adiciona um elemento na primeira posição

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) 

pilotos.splice(3, 1) // Massa quebrou /:
console.log(pilotos) 

const algunsPilotos1 = pilotos.slice(2) // Cria um novo array a partir do índice específicado
console.log(algunsPilotos1) 

const algunsPilotos2 = pilotos.slice(1,4) // Indice quatro não incluso 
console.log(algunsPilotos2) 