//armazenamendo uma função em uma variavel
//sem retorno de valor

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//criando uma função arrow em uma variavel
//retornando um valor

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito / unica sequencia de dados
//função arrow + retorno implicito

const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

