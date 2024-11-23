/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoa devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

/* Minha tentativa:

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calculoImc(peso, altura) {
        console.log(peso / (altura * altura));
    }
}

const jose = new Pessoa('José', 70, 1.75);
jose.calculoImc(70, 1.75); */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >=18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade grave');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classificarImc());

const renan = new Pessoa('renan', 100, 1.75);
console.log(renan.classificarImc());

const vitor = new Pessoa('vitor', 65, 1.69);
console.log(vitor.classificarImc());