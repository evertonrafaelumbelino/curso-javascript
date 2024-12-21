// First Class Functions
// Higher Order Functions

function falarMeuNome() {
    console.log('Meu nome é Renan')
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Johannsen de Paula')
}

falarMeuNomeCompleto(falarMeuNome)