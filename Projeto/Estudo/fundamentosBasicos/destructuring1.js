// ES2015

const informacao = {
    nome: 'Ana',
    idade: 15,
    geoLocalizacao: {
        Estado: 'Rio de Janeiro',
        municipio: 'Rio de janeiro',
        endereco: {
            logradouro: 'Rua N',
            numero: 10
        }
    }
}

const { nome, idade} = informacao
console.log('Informação:', nome, idade, 'y')

console.log('')

const { nome: dadosNome, idade: dadosIdade } = informacao//const { nome: n, idade: i } = informacao
console.log('Informação:', dadosNome, dadosIdade, 'y') //console.log('Informação:', n, i, 'y')
console.log('')

const { n, i = true } = informacao
console.log(n, i)

const { geoLocalizacao: { endereco: { logradouro, numero, cep } } } = informacao
console.log(logradouro, numero, cep)


