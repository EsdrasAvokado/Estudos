const escola = "cod3r";

console.log(escola.charAt(4)); //retorna o caractere em um especifico indexo 
console.log(escola.charAt(5));

console.log(escola.charCodeAt(3)); //retorna o valor para unicode

console.log(escola.indexOf('3')); //retorna a informação do indice associado

console.log(escola.substring(1)); //retorna do indice para frente
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola.concat("!")));// 
console.log('Escola ' + escola + "!"); //

console.log(escola.replace(3, 'e'));// 

console.log('Ana,Maria,Pedro'.split(',')); //cria um array usando um separador em um separador


