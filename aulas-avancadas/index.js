const pessoa = {
    genero: 'masculino'
}

const renan = Object.create(pessoa)

renan.nome = 'Renan'

console.log(renan.genero)