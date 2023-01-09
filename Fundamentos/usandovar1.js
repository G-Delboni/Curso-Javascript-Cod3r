{{{{var sera = "Será?"}}}} // variavel definida com var fica disponivel fora do bloco - escopo global

console.log(sera)

function teste() {
    var local = 23 // variável em funções só aparecem dentro dela
    console.log(local)
}

teste()