function Carro(velocidadeMaxima = 200, Delta = 5){
    let velocidadeAtual = 0
    this.acelerar = function(){
        if (velocidadeAtual + Delta <= velocidadeMaxima){
            velocidadeAtual += Delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())