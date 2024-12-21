// First Class Functions
// Higher Order Functions

function funcao1() {
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const renan = {
    nome:'Renan',
    funcao1,
    funcao2
}

renan.funcao1()
renan.funcao2()