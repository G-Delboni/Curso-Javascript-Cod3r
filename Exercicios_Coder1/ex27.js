/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

//Resolver quando terminar capítulos de objetos e arrays

function crianca(altura1, taxaCresimento1, altura2, taxaCresimento2) {
    if (altura1 === altura2) {
        if (taxaCresimento1 === taxaCresimento2) {
            return 'As crianças tem alturas e taxas de crescimento iguais'
        }
        else if (taxaCresimento1 > taxaCresimento2) {
            return 'A primeira criança ultrapassará a segunda em 1 ano.'
        }
        else {
            return 'A segunda criança ultrapassará a primeira em 1 ano.'
        }
    }

    else {
        if (altura1 > altura2) {
            if (taxaCresimento1 >= taxaCresimento2) {
                return 'A criança menor não ultrapassará a maior'
            }
            else {
                return `A segunda criança ultrapassará a primeira em ${calcularTempo(altura1,taxaCresimento1,altura2,taxaCresimento2)} anos.`
            }
        }
            else {
                if (taxaCresimento2 >= taxaCresimento1) {
                    return 'A criança menor não ultrapassará a maior'
                }
    
                else {
                    return `A primeira criança ultrapassará a segunda em ${calcularTempo(altura1,taxaCresimento1,altura2,taxaCresimento2)} anos.`
                }
         }
        
    }

    
}

function calcularTempo(alturaMaior,taxaAlturaMaior,alturaMenor,taxaAlturaMenor){
    let qntAnos = 0
    while(alturaMaior > alturaMenor){
        alturaMaior += taxaAlturaMaior
        alturaMenor += taxaAlturaMenor
        qntAnos++
    }
    return qntAnos
}


console.log(crianca(135,10,135,10))
console.log(crianca(135,10,135,11))
console.log(crianca(135,11,135,10))
console.log(crianca(153,5,135,10))
console.log(crianca(150, 2, 130, 4));