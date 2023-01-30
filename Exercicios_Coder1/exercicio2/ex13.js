function filtrarNumero(array) {
    let newArray = []

    for (let i=0; i<array.length;i++){
        if(typeof array[i] == "number") {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(filtrarNumero([1,"javascript",4,true,77]))