let n1 = 10
let n2 = 5


// operadores aritméticos
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log( n1 % n2 );
console.log(3 ** 2);

// Operadores de atribuição
let n3 = 25;
// n3 = n3 + 15;
n3 += 2;
console.log(n3);

// Incrimento e decremento
let b = 0;
console.log(b--);
b++;
b++;
b++;
console.log(b);

// comparação 
/*
 igualdade de valor ==
 igualdade de valor e tipo ===
 <, >, <=, >=
 != valores diferentes
 !== valores e tipos diferentes
*/

console.log(n1 != "10");
console.log(n1 !== "10");

// operadores lógicos
/*
Para uma pessoa viajar para o exterior:
- precisa ser maior de 18 anos
Ou
acompanhado com os pais
E 
teer comprado o bilhete
*/
let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`pode viajar: ${podeViajar}`)


console.log(n1, n2, n3);
n1 = 6
n2 = 8
let media = (n1 + n2) / 2 
console.log(`media: ${media}`)
console.log((3 * 2) ** 2)