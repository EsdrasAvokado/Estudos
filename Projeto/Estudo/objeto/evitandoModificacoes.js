//object.preventExtesions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'Boracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selavel:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 22
console.log(pessoa)

//object.freezer = selado + valores constantes
