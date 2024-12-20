const pessoa = {
    idade: 18
}

const renan = {
    nome: 'renan',
    idade: 30,
    __proto__: pessoa
}

console.log(renan.idade)