const produto = new Object  
produto.nome = 'Cadeira de Madeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)


const carro ={
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    }, condutores: [{
        nome: 'Junior',
        idade: 21
    }, {
        nome: 'Ana',
        idade: 32
    }],
    calcularValorSeguro: function(){
        // if
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro']
console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete calcularValorSeguro
console.log(carro)
console.log(carro.carro)
console.log(carro.carro.length)