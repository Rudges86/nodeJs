//npm init para criar o packager.json
//npm install minimist é uma dependência que serve para ler argumentos direto da linha de comando
// execução, node index.js --nome=rudge --estudante=sim
// modulo externo
const minimist = require("minimist");
//Execução node index.js --x=4 --b=9
//modulo externo
const args = minimist(process.argv.slice(2));
console.log(args);

const soma = require("./soma").soma
soma(2,2);

const a = parseInt(args['a']);
const b = parseInt(args['b']);

soma(a,b)