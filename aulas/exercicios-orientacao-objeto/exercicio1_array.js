// 1) Crie um programa que dado um número imprima a sua tabuada.

/* Minha tentativa:

const tabuada = [];

tabuada.push(1);
tabuada.push(2);
tabuada.push(3);
tabuada.push(4);
tabuada.push(5);
tabuada.push(6);
tabuada.push(7);
tabuada.push(8);
tabuada.push(9);
tabuada.push(10);

let numero = 1;

for (let i = 0; i < tabuada.length; i++) {
    let valorTabuada = (numero * tabuada[i]);
    console.log(valorTabuada);
} */

const numero = 10;

for (let i = 1; i <= 10; i++) {
    console.log(i * numero);
}