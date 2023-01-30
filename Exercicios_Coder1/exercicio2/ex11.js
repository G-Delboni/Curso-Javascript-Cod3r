function primeiroUltimoElemento(array) {
    let [one] = array
    let [last] = array.slice(-1)
    console.log(one, last)
}

primeiroUltimoElemento([100,200,"30b"])