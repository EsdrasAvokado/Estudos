//Função em JavaScript é FirstClass Object 
//Higher-Order Function

//criação de uma função
function fun1(){}

//Armazenando função em uma variavel
const fun2 = function(){}
//let fun2 = function(){}

//Armazenando uma função em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenando uma função em um atributo de objeto
const obj1 = {}
obj1.falar = function() {return 'Opa'}
console.log(obj1.falar())

//Passando de uma função para parâmetro
function run(fun){
    fun()
}

run(function(){console.log('Executando...') })

//Uma função pode retornar e conter uma função

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(3, 5)(2)
const rturn = soma(3, 5)
rturn(4)