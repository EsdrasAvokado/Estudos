const pizza = [
    {nome: 'Pizza Toquio', valor: 58, sabor: 'Variavel'},
    {nome: 'Pizza de Frango com Bacon', valor: 68, sabor:'Variavel'}
]

const precoMenor = function(pizza){
    if(pizza.valor < 68)
    return pizza
}

console.log(pizza.filter(precoMenor))