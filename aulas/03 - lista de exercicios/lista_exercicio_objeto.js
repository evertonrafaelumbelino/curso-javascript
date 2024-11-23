/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

/* Minha tentativa

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
}

function calculoValorGasto(distanciaViagem, precoGasolina) {
    console.log('O valor gasto foi', distanciaViagem * precoGasolina)
}

const carro1 = new Carros('chevrolet', 'branco', 10);

const distanciaViagem = 75;
const precoGasolina = 6.07;

console.log(carro1);
calculoValorGasto(distanciaViagem, precoGasolina); */


class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDoPercurso (distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
} 

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoDoPercurso(70, 5));

const palio = new Carro('Fiat', 'Preto', 1 / 10);
console.log(palio.calcularGastoDoPercurso(70, 5));