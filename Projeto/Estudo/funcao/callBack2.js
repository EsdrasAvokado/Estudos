const notas = [7.7, 8.1, 6.5, 4.3, 9.1, 5.9, 10.0]

//sem a utilização de call back

const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)
console.log('')

//com a utilização do call back

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)
console.log('')

const notaMenorQue7 = nota => nota < 7 // criação de uma constante/variavel para a atulização em todo o sistema
const notasBaixas3 = notas.filter(notaMenorQue7)
console.log(notasBaixas3)