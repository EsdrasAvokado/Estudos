let valor ;
console.log(valor);
//variavel valor não definida

valor = null ;
console.log(valor);
//variavel valor não possui valor
//console.log(valor.toString) ERROR 

const produto = {};
console.log(produto.preco);
console.log(produto);
produto.quanto = 'Ta quanto esse revolve?';
produto.preco = 500.00;
console.log(produto);

console.log('');
console.log(!!produto.preco);

produto.preco = null
produto.quanto = null
console.log(produto)

