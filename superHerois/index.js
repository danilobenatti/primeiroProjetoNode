// index.js é o arquivo principal.
// quando utilizamos o arquivo index.js não é preciso
// informá-lo na chamado do módulo.
const herois = [
    {
        nome: 'Batman',
        poder: 'Inteligência'
    },
    {
        nome: 'Superman',
        poder: 'Super força'
    }
]
// export sempre no final do arquivo.
module.exports = herois;