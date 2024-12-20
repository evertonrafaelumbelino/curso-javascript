function Pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

const renan = new Pessoa('renan', 30)

renan.falar()