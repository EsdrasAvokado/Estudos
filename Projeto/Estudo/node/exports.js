console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 
exports.b = 2 
module.exports.c = 3

exports = null 

exports = undefined

exports = {
    nome: 'Paulo'
}

console.log(module.exports)

module.exports = { noite: true }