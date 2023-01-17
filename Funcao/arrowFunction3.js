let comparaComThis = function (parametro) {
    console.log(this === parametro)
}

comparaComThis(global)

let comparaComThis2 = (parametro) => {
    console.log(this === parametro)
}

comparaComThis2(global)
comparaComThis2(module.exports)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

comparaComThis2 = comparaComThis2.bind(obj) // Função arrow é mais "forte"
comparaComThis2(obj)
comparaComThis2(module.exports)

