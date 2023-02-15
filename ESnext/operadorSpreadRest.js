// operador ...rest(juntar) / spread(separar)
// usar rest como parametro de funcao

// usar spread com objeto

const funcionario = {
    nome: 'Maria',
    salario: 12345.6
}

const clone = {ativo: true, ...funcionario}

// usar spread com array

const grupoA = ['a','b','c']
const grupoFinal = ['d', ...grupoA]
 
console.log(grupoA, grupoFinal)