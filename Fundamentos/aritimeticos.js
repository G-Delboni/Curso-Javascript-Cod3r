const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const sub = d - b
const multi = a * b
const div = d / a
const mod = a % 2

console.log(soma)
console.log(sub)
console.log(multi)
console.log(div)

if(mod === 0) {
    console.log('Par: ', mod)
}

else {
    console.log('Impar: ', mod)
}