let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)//o this nesse contexto lexico, não aponta para o 'this'
// comparaComThis(Window)
console.log('')
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('')
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

console.log('')
comparaComThisArrow === comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)