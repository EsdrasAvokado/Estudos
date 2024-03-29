//Primeiro metodo a se analisar para a criação de um parâmetro padrão
function soma1(a, b, c){
    a = a || 1 // ainda muito utilizado embora possa ter efeito colateral em alguns contextos 
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//2 ao 4 metodo para se analisar na criação de um parâmetro padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // versão mais segura
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//ES2015

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))