const imprimirResultado = function(horas){
    if(horas === 0){
        console.log('Acordado na meia noite?')
    } else if(horas < 6){
        console.log('Acordado de madrugada? as', horas, 'horas')
    } else if(horas < 12){
        console.log('Bom dia!')
    } else if(horas < 18){
        console.log('Boa tarde')
    } else{
        console.log('Boa noite')
    }
}

imprimirResultado(0)
imprimirResultado(5)
imprimirResultado(6)
imprimirResultado(14)
imprimirResultado(20)

