function getIntRandom(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != 1){
    opcao = getIntRandom(-1, 10) //troca de valores
    console.log(`A opção escolhida foi ${opcao}.`)
}

console.log('Ate a proxima')