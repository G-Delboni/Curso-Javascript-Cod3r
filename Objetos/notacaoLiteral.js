const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b,c:c}
const obj2 = {a, b,c}

console.log(obj1, obj2)

const nomeAttr = 'Nota'
const ValorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = ValorAttr // [] -> Reconhece como chave e valor
console.log(obj3)

const obj4 = {[nomeAttr]: ValorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2(){ //ECMAScript 2015
        //...
    }
}

console.log(obj5)