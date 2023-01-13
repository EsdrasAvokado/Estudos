// Diferente da estrutura While,
// o Do/While não é necessário atribuir um valor inicial para a variável opcao,
// ou seja, fazendo assim:

function getIntRandom(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = getIntRandom(-1,20) //troca de valores
    console.log(`A opção escolhida foi ${opcao}.`)
}while (opcao != 1)

console.log('Ate a proxima')

