Array.prototype.filter2 = function(callBack){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callBack(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produto = [ 
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4500, fragil: true },
    { nome: 'Taça', preco: 12.45, fragil: true},
    { nome: 'Copo de plastico', preco: 18.99 }
]

console.log(produto.filter2(function(p) {
    false //true
 }))

 const caro = function(produto){
    if(produto.preco >= 500){
        return produto
    }//const caro = produto => produto.preco >= 500
 }

 const fragil = function(produto){
    if(produto.fragil){
        return produto
    }
 } //const fragil = produto => produto.fragil

 console.log(produto.filter2(caro).filter2(fragil))