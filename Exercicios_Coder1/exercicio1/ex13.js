/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
* dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function verificarDiaUtil(dia) {
    switch(dia) {
        case 1: 
            console.log('O dia não é útil') 
            break
        case 2: 
            console.log('O dia é útil')
            break
        case 3: 
            console.log('O dia é útil')
            break
        case 4: 
            console.log('O dia é útil')
            break
        case 5: 
            console.log('O dia é útil')
            break
        case 6: 
            console.log('O dia é útil')
            break
        case 7: 
            console.log('O dia não é útil')
            break

        default: 
            console.log('Insira um valor válido.')

    }
}

verificarDiaUtil(1)
verificarDiaUtil(2)
verificarDiaUtil(3)
verificarDiaUtil(4)
verificarDiaUtil(5)
verificarDiaUtil(6)
verificarDiaUtil(7)
verificarDiaUtil(8)