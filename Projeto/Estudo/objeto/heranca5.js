console.log(typeof Array)
console.log(typeof Object)
console.log(typeof String)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('JavaScript - EcmaScript 2015'.reverse())

Array.prototype.first = function(){
    return this[0]
}


console.log([1, 2, 3, 4, 5, 6].first())
console.log(['Abby', 'Joel', 'Ellie'].first())