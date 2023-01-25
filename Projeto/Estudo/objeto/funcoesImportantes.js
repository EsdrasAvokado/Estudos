const pessoa = {
    nome: 'Rebeca',
    idade: 19,
    peso: 71,
    altura: 1.72
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) 
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,//false
    writable: false,
    value: '06/08/2004'
})

pessoa.dataNascimento = '01/01/2004'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.Assign (ECMAscript - 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

console.log(obj)
Object.freeze(dest)
obj.c = 943
console.log(obj)
