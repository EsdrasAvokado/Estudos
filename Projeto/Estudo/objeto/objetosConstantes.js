const pessoa ={nome: 'João', idade: 21}
pessoa.nome = 'Pedro'

// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Ana'
pessoa.end = 'Rua A'

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome : 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

