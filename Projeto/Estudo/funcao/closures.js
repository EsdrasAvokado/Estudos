//Closure é o escopo criado quando uma função é declarada
//esse escopo permite a função acessar e manipular variaveis externas à função
//carrega com si o escopo mais externo à função
//contexto lexico em ação
const x = 'Global'

function fora(){
    const x = 'Local(Função)'
    function dentro(){
        return x
    }
    return dentro   
}

const minhaFuncao = fora()
console.log(minhaFuncao())