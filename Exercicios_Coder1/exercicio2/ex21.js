function jogoAdivinhacao(numeroJogador) {
    let numeroSorteado = Math.ceil(Math.random() * 10)
    if (numeroSorteado == numeroJogador) {
        return `O número sorteado foi ${numeroSorteado} e o número que você colocou foi ${numeroJogador}, portanto você ganhou!!`
    }
    else {
        return `O número sorteado foi ${numeroSorteado} e o número que você colocou foi ${numeroJogador}, portanto você perdeu!!`
    }
}

console.log(jogoAdivinhacao(10))