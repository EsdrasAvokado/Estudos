//Meus estudos sobre Java Script


var
Declara uma variável, opcionalmente, inicializando-a com um valor.

Experimental let
Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

Experimental const
Declara uma constante de escopo de bloco, apenas de leitura.


Tabela Verdade: {
 V e V -> v          
 V e F -> F            
 F e ? -> ?
 
 V ou F -> V
 F ou V -> V
 F ou F -> F

 V xor F -> V 
 F xor V -> V
 F xor F -> F
 V xor V -> F

 !F -> V
 !V -> F

 || = ou
 && = e
}

nota: 22:55 Sabado, 21 de janeiro de 2023{
    amanha termino de upar os codigos de solução matematica
}

Estrutura IF em JS:

Simples{
    if (condição){
        /comando/
    }
}

composta{
    if (condição){
        /comando/
    } else if{
        /comando/
    }
}

Encadeamento{
    if (condição){
        /comando/
    } else if (condição){
        /comando/
    } else {
        /comando/
    }
}