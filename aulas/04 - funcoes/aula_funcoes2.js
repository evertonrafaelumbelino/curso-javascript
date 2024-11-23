function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('vitor') + 'é Maior');
    } else {
        console.log('Menor');
    }
}

verificarIdade(18);