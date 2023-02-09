const compra = [
    {nome: 'Abacate', preco: 10, estado: 10},
    {nome: 'Tomate', preco: 5, estado: 10},
    {nome: 'Cebola', preco: 2.5, estado: 5}

]

const Validade = function(compra){
    if(compra.estado >= 10 )
    return compra
}

console.log(compra.filter(Validade))

//arrumar 'bug'