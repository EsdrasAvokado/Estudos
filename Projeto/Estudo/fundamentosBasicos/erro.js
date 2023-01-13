function ErrorTra(erro){
    //trow new Error('...')
    //trow 10
    //trow true
    //trow "Mensagem"
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date 
    }
}

function ImprimNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        ErrorTraELancar(e)
    } finally {
        console.log('Final: ')
    }
}

const obj = { nome: 'Roberto' }
ImprimNomeGritando(obj)
