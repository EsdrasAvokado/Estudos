const alunos = [
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'João', nota: 7.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const todosBolsistas = function(resultado, bolsista){
    return resultado && bolsista
}

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const AlgumBolsista = function(resultado, bolsista){
    return resultado || bolsista
}

console.log(alunos.map(a => a.bolsista).reduce(AlgumBolsista))