class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addlancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 4500)
const luz = new Lancamento('luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addlancamentos(salario, luz)
console.log(contas.sumario())