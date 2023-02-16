// Não aceita repetição/não indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)