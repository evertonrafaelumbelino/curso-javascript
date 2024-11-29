/* Minha tentativa:

const notas = [4, 5]

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
}

function gets() {
    const media = soma / notas.length
    return media
}

function print(texto) {
    console.log(texto)
}

module.exports = {gets, print} */

const entradas = [-1]
let i = 0

function gets() {
    const valor = entradas[i]
    i++
    return valor
}

function print(texto) {
    console.log(texto)
}

module.exports = {gets, print}