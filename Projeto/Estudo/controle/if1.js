function boaNoticia(nota){
    if(nota >= 7) {
        console.log('Aprovado ' + nota)
    }
}

boaNoticia(8)
boaNoticia(6.9)

function seTrueEntãoPrint(valor){
    if(valor){
        console.log('É verdade...')
    }
}

seTrueEntãoPrint()
seTrueEntãoPrint(null)
seTrueEntãoPrint(undefined)
seTrueEntãoPrint(NaN)
seTrueEntãoPrint('')
seTrueEntãoPrint(' ')
seTrueEntãoPrint(0)
seTrueEntãoPrint(1)
seTrueEntãoPrint(1-1)
seTrueEntãoPrint([])
seTrueEntãoPrint({})
seTrueEntãoPrint([1, 2, 3])
seTrueEntãoPrint(false)
seTrueEntãoPrint(true)
