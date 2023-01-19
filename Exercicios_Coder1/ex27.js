/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

//Resolver quando terminar capítulos de objetos e arrays

function crianca(altura1, taxaCresimento1, altura2, taxaCresimento2) {
    
    let taxaCresimentoUm = taxaCresimento1 / 100 
    let taxaCresimentoDois = taxaCresimento2 / 100 
    qntAnos = 0

    if (altura1 === altura2) {
        return 'As alturas são iguais.'
    }

    else {
        return `A criaça alcançará a outra em ${crescer()} anos.`
    }
    function crescer(altura1, altura2) {
        while(altura1 > altura2 || altura2 > altura1) {
            taxaCresimentoUm += taxaCresimentoDois
            qntAnos++
        }
        return qntAnos
    }
}

console.log(crianca(1.37,5,1.35,10))