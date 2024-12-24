const pessoa = {
    nome: 'Renan',
    idade: 30
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olaaaaa'])
gritar.call(pessoa, 'Olaaaaa')