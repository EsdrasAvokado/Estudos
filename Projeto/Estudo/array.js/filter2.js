const compra = [
    {nome: 'Abacate', preco: 10, estado: 'otimo'},
    {nome: 'Tomate', preco: 5, estado: 'Bom'},
    {nome: 'Cebola', preco: 2.5, estado: 'Ruim'}

]

const Validade = function(compra){
    if(compra.estado = 'Otimo')
    return compra.estado
}

console.log(compra.filter(Validade))

//arrumar 'bug'