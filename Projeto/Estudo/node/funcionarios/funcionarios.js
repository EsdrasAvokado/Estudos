/* const url = 'https://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})

*/
// index.js
const axios = require('axios').default


//array de dados
const paises = ['Estados Unidos', 'China', 'Japão', 'Alemanha',
 'Reino Unido', 'Índia', 'França', 'Itália', 'Brasil', 'Canadá']

const generos = ['masculino', 'feminino']

//função pra calcular o salario conforme a idade aumenta
function calcularSalario(idade) {
  if (idade >= 18 && idade < 25) {
    return Math.floor(Math.random() * (13000 - 1200 + 1)) + 1200
  } else if (idade >= 25 && idade < 35) {
    return Math.floor(Math.random() * (17000 - 13000 + 1)) + 13000
  } else if (idade >= 35 && idade < 45) {
    return Math.floor(Math.random() * (23000 - 17000 + 1)) + 17000
  } else if (idade >= 45 && idade < 55) {
    return Math.floor(Math.random() * (28000 - 23000 + 1)) + 23000
  } else if (idade >= 55 && idade <= 60) {
    return Math.floor(Math.random() * (32000 - 28000 + 1)) + 28000
  } else {
    return null
  }
}


//pegando nomes da bibliotecas
async function getNomesSobrenomes() {
  const response = await axios.get('https://randomuser.me/api/?results=150&inc=name&nat=br')
  const results = response.data.results
  const nomes = results.map(result => result.name.first)
  const sobrenomes = results.map(result => result.name.last)
  return { nomes, sobrenomes }
}

//gerando dados aleatorios
async function gerarDados() {
  const { nomes, sobrenomes } = await getNomesSobrenomes()
  const idades = Array.from({ length: 150 }, () => Math.floor(Math.random() * 43) + 18)
  const salarios = idades.map(idade => calcularSalario(idade))
  const paisesOrigem = Array.from({ length: 150 }, () => paises[Math.floor(Math.random() * paises.length)])
  const generoPessoas = Array.from({ length: 150 }, () => generos[Math.floor(Math.random() * generos.length)])


  // criando o objeto pessoa para ser imprimido
  const pessoas = nomes.map((nome, i) => ({
    nome,
    sobrenome: sobrenomes[i],
    idade: idades[i],
    salario: salarios[i] ? salarios[i].toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : null,
    genero: generoPessoas[i],
    paisOrigem: paisesOrigem[i],
  }))

  //imprimido somente mulheres
  const mulheres = pessoas.filter(pessoa => {
    if (pessoa.genero === 'feminino') {
      if (pessoa.nome.endsWith('a')) {
        return true
      }
    }
    return false
  })

 

  console.log(mulheres)
}

gerarDados()