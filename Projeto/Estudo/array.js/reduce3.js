Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], [i], i, this)
    }

    return acumulador
}

const soma = (total, valor) => total + valor 
const num = [1, 2, 3, 4, 5, 6]

console.log(num.reduce2(soma, 20))
console.log(num.reduce(soma, 21))