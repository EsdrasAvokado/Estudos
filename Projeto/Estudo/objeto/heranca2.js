//Cadeira de protótipos (prototype chain)
Object.prototype.attr0 = '0' //extremo cuidado ao mexer no pai de todos os objetos, pai de todos não deve ser mexido
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'F'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0)
console.log(filho.attr1)

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'V40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())