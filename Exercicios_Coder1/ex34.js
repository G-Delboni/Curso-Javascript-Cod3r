/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function verificarString(string1,string2) {
    
    let contido = true

        for (let i = 0; i < string1.length; i++){
            let caracterUm = string1.charAt(i).toUpperCase()
            for (let j = 0; string2.length; j++) {
                let caracterDois = string2.charAt(j).toUpperCase()
                if (caracterUm == caracterDois) {
                    contido = true
                    break
                }
                else {
                    contido = false
                }
            }
            if(!contido) {
                return contido
            }

            
        }

        for (let i = 0; i < string2.length; i++) {
            let caractereDois = string2.charAt(i).toUpperCase()
    
            for (let j = 0; j < string1.length; j++) {
                let caractereUm = string1.charAt(j).toUpperCase()
    
                if (caractereUm == caractereDois) {
                    contido = true
                    break
                } else {
                    contido = false
                }
            }
            if (!contido) {
                return contido
            }
        }
        return contido
}

console.log(verificarString('dcba','abcd'))
console.log(verificarString('dcba','abcsd'))