/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

let notas = [1,2,3,4.9,5,6,6.9,7,8,8.9,9,10,21]

function verificarNota(array) {
    let conceito
    let arrayConceito=[]
    for (let i =0; i<array.length;i++){
        if(array[i] > 0 && array[i] < 5) {
            conceito = "D"
            arrayConceito.push(conceito)
        }
        else if(array[i] >= 5 && array[i] < 7) {
            conceito = "C"
            arrayConceito.push(conceito)
        }
        else if(array[i] >=7 && array[i] < 9) {
            conceito = "B"
            arrayConceito.push(conceito)
        }
        else if(array[i] >= 9 && array[i] <=10) {
            conceito = "A"
            arrayConceito.push(conceito)
        }
        else{
            conceito = "Nota inválida"
            arrayConceito.push(conceito)
        }
    }
    return arrayConceito
}

console.log(verificarNota(notas))