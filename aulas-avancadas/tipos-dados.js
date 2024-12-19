/*
    boolean
    null
    undefined
    number
    string
    Symbol
*/

//object

const pessoa = {
    nome: 'Renan',
    idade: 30,
    falar: function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const y = pessoa.falar

pessoa.falar()
y()