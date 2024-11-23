/* Minha tentativa :

const precoEtanol = 4.03;
const precoGasolina = 6.07;
let tipoDoCombustivel = 'Gasolina';
const kmPorLitro = 10;
const distanciaDaViagem = 120;
const litrosGastos = distanciaDaViagem / kmPorLitro;

if (tipoDoCombustivel === 'Gasolina') {
    console.log(litrosGastos * precoGasolina.toFixed(2));
} else if (tipoDoCombustivel === 'Etanol') {
    console.log(litrosGastos * precoEtanol.toFixed(2));
} */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;  
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2))
}