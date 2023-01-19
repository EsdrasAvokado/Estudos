const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar//conflito entre paradigamas: funcional e 00
falar()

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

const falar2 = pessoa.falar
falar2()