const lista = [{nome: 'Renan'}, {nome: 'Andresa'}, {nome: 'Vitor'}, {nome: 'Amanda'}]

const elementosEmHtml = lista
    .filter((e) => e.nome.startsWith('A'))
    .map((e) => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)