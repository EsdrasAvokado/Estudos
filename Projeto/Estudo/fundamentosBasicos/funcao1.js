//função - basica
//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
};

imprimirSoma(3, 2);

console.log("")

//função com retorno
function soma(a = 0, b = 0){
    return a + b
};

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma(3))
