//npm init para criar o packager.json
//npm install minimist é uma dependência que serve para ler argumentos direto da linha de comando
// execução, node index.js --nome=rudge --estudante=sim
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
console.log(args);

const nome = args["nome"];
console.log(nome);