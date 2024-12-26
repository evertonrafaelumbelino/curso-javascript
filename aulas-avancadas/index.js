class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Andresa'), new Pessoa('Vitor'), new Pessoa('José')]

const listaEmHtml = lista.map((element) => {
    return `
    <li>
        ${element.name}
    </li>
    `
})

console.log(listaEmHtml)