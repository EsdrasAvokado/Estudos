function dadosPessoais ( idade = 0, salario = 0, altura = 0,
     genero = '', nome = '...'){
        return{
            idade,
            salario,
            altura,
            genero,
            nome
        }
     }

console.log(dadosPessoais(18, 4500, 1.65, 'F', 'Rebeca' ))