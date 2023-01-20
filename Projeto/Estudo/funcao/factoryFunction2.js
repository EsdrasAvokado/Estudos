function criarProduto (nome, preco,desconto = 0.10){
    return{
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook', 900.100))