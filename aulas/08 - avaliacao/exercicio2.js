/* 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior número par e o menor número impar. 

Exemplo:
    Entrada:
        5
        3
        4
        1
        10
        8

    Saída:
        Maior número par: 10
        Menor número impar: 1
*/

/* Minha tentativa:

const {gets, print} = require('./funcoes-auxiliares-ex2')

const n = gets()

let numeroPar = 0;
let numeroImpar = 0;

for (let i = 0; i < n.length; i++) {
    if (n[i] > numeroPar) {
        numeroPar = n[i]
    }

    if (n[i] % 2 === 1) {
        numeroImpar = n[i]
    }
}

print(numeroPar)
print(numeroImpar) */

const {gets, print} = require('./funcoes-auxiliares-ex2')

const n = gets()

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets()

    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
        maiorNumeroPar = numero
    }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero
        }
    }
}

print('Maior número par: ' + maiorNumeroPar)
print('Menor número impar: ' + menorNumeroImpar)