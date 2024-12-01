/*
    3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
    O salário a ser transferido é calculado da seguinte maneira:

    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

    Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

    Exemplo:
        Entrada:
        2000
        250

    Saída:
        2050.00
*/

/* Minha tentativa:

const {gets, print} = require('./funcoes-auxiliares-ex3')

const valorBruto = gets()
const beneficioAdicional = gets()

let percentualImposto = valorBruto

if (percentualImposto > 0 && percentualImposto <= 1100.00) {
    percentualImposto = percentualImposto * 0.05
} else if (percentualImposto > 1100.00 && percentualImposto <= 2500.00 ) {
    percentualImposto = percentualImposto * 0.10
} else {
    percentualImposto = percentualImposto * 0.15
}

const calculoSalario = (valorBruto - percentualImposto + beneficioAdicional)

print(valorBruto)
print(beneficioAdicional)
print(percentualImposto)
print(calculoSalario) */

const {gets, print} = require('./funcoes-auxiliares-ex3')

const valorSalario = gets()
const valorBeneficios = gets()

function calcularPorcentagem(salario, percentual) {
    return salario * (percentual / 100)
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario < 1100) {
        return 5
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10
    } else {
        return 15
    }
}

const aliquotaImposto = pegarAliquota(valorSalario)

const valorImposto = (calcularPorcentagem(valorSalario, aliquotaImposto))

const valorATranferir = valorSalario - valorImposto + valorBeneficios

print(valorATranferir)