const valores = [0.4, 0.1, 0.2, 0.3 ];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length); //

valores.push({id: 3}, false, null, 'teste');
console.log(valores);
console.log("")
console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);