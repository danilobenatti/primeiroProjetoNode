console.log("Estou no arquivo app.js");
// módulos nativos entre ''. fs - (f)ile (s)ystem
// quanto utiliza-se '' a pasta do modulo será "node_modules"
const fs = require('fs');

// módulos adicionais:$ npm install moment --save
let moment = require('moment');

// quanto um módulo específico/'criado' utilizar './nomePasta'
const superHerois = require('./superHerois');

// função readFileSync() exibe conteúdo de um arquivo.
let dados = fs.readFileSync(__dirname +'/dados.txt', 'utf8');
let data = moment().format('MMM do YY');

console.log(dados);
console.log(data);
console.log(superHerois);