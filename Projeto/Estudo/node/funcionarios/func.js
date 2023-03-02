// arrays de dados
const nomes = ['Maria', 'Pedro', 'Ana', 'João', 'Julia'];
const idades = [20, 21, 22, 23, 24];
const generos = ['Feminino', 'Masculino'];
const salarios = [2500.31, 3000.25, 2750.20, 3500.50, 3200.75];

// função para determinar o gênero
function determinarGenero(nome) {
    const ultimaLetra = nome.charAt(nome.length - 1).toLowerCase();
    
    if (ultimaLetra === 'a') {
      return 'Feminino';
    } else {
      return 'Masculino';
    }
  }
  

// função para gerar dados aleatórios
function gerarDados() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const idade = idades[Math.floor(Math.random() * idades.length)];
  const genero = determinarGenero(nome);
  const salario = salarios[Math.floor(Math.random() * salarios.length)];
  
  return { nome, idade, genero, salario };
}

// objeto de funcionários com dados aleatórios
const funcionarios = {
  ID1: gerarDados(),
  ID2: gerarDados(),
  ID3: gerarDados(),
  ID4: gerarDados(),
  ID5: gerarDados()
  // adicione mais funcionários aqui chamando a função gerarDados()
};

 //função para imprimir para que possa ser requisitado
function imprimirFuncionarios(funcionarios) {
    for (const id in funcionarios) {
      console.log(`ID: ${id}`);
      console.log(`Nome: ${funcionarios[id].nome}`);
      console.log(`Idade: ${funcionarios[id].idade}`);
      console.log(`Gênero: ${funcionarios[id].genero}`);
      console.log(`Salário: ${funcionarios[id].salario}`);
      console.log('---');
    }
  }

  for (let i = 1; i <= 100; i++) {
    console.log(`ID: ${funcionarios}`);
    console.log(`Nome: ${funcionarios.nome}`);
    console.log(`Idade: ${funcionarios.idade}`);
    console.log(`Gênero: ${funcionarios.genero}`);
    console.log(`Salário: ${funcionarios.salario}`);
    console.log('---');
};
  
  module.exports = {
    imprimirFuncionarios
  }

  //arrumar ou abandonar