function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
        if (segundos < 0) {
            reject(frase)
        }
    })
}

falarDepoisDe(3,'Que legal!')
    .then(frase => frase.concat('!!'))
    .then(outraFrase => console.log(outraFrase))