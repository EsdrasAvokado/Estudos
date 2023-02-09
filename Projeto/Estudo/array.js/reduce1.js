const alunos = [
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'João', nota: 7.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(alunos => alunos.nota).reduce(function(acumulador, valorAtual){
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, /* 10, [] */)

console.log(resultado)