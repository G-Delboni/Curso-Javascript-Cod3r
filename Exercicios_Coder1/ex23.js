/*  Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function aluno(codigoAluno, n1, n2, n3) {
    return {
        codigoAluno: codigoAluno,
        mediaPonderada: function (n1, n2, n3) {
            let mediaPonderada
            if (n1 > n2 && n1 > n3) {
    
                mediaPonderada = (((n1 * 4) + (n2 * 3) + (n3 * 3)) / 10)
    
            } else if (n2 > n1 && n2 > n3) {
    
                mediaPonderada = (((n1 * 3) + (n2 * 4) + (n3 * 3)) / 10)
    
            } else {
    
                (((n1 * 3) + (n2 * 3) + (n3 * 4)) / 10)
            }
    
            return mediaPonderada
        },
        n1: n1,
        n2: n2,
        n3: n3,
    
        status: function(mediaPonderada) {
            let status
            if (mediaPonderada >= 5) {    
               status = 'Aprovado'    
            } else {    
               status = 'Reprovado'
            }    
            return status
        }
    }
}
 
const aluno1 = aluno (10020, 8, 10, 7)
const mediaPonderada1 = aluno1.mediaPonderada(aluno1.n1, aluno1.n2, aluno1.n3)
const status1 = aluno1.status(aluno1.mediaPonderada(aluno1.n1, aluno1.n2, aluno1.n3))
console.log(status1);

const aluno2 = aluno (1232, 10, 6, 7)
const mediaPonderada2 = aluno2.mediaPonderada(aluno1.n1, aluno2.n2, aluno2.n3)
const status2 = aluno2.status(aluno2.mediaPonderada(aluno2.n1, aluno2.n2, aluno2.n3))
console.log(status2)