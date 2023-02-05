Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{ "Nome": "borracha", "preco": 3.45 }',
    '{ "Nome": "caderno", "preco": 22.13 }',
    '{ "Nome": "kit lapis", "preco": 41.22 }',
    '{ "Nome": "Caneta", "preco": 1.99 }'
]

const paraObjeto = json => JSON.parse(json)
const apernasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apernasPreco)
console.log(resultado)