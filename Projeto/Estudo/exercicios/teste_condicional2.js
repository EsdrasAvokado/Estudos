Number.prototype.entre  = function(inicio, fim){
    return this >= inicio && this <= fim
}


const imprimirResultado = function(horas){
    if(horas.entre(0, 5)){
        console.log('Acordado de madrugada? as', horas, 'horas')
    } else if(horas.entre(6, 12)){
        console.log('Bom dia!')
    } else if(horas.entre(13, 18)){
        console.log('Boa tarde!')
    } else if(horas.entre(19, 23)){
        console.log('Boa noite!')
    } else{
        console.log('NUMERO INVALIDO!')
    }
    }

imprimirResultado(4)
imprimirResultado(8)
imprimirResultado(16)
imprimirResultado(19)
imprimirResultado(24)
