const carrinho = [
    '{ "Nome": "borracha", "preco": 3.45 }',
    '{ "Nome": "caderno", "preco": 22.13 }',
    '{ "Nome": "kit lapis", "preco": 41.22 }',
    '{ "Nome": "Caneta", "preco": 1.99 }'
]

const paraObjeto = json => JSON.parse(json)
const apernasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apernasPreco)
console.log(resultado)