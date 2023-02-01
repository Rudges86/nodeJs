//const soma = require("./02_Modulo/operacoes.js")
const operacoes = require("./02_Modulo/operacoes.js")
let soma =  operacoes.soma(10,20);
console.log(soma);

let multiplicacao = operacoes.multiplicacao(10,20);
let divisao = operacoes.divisao(10,20);
let subtracao = operacoes.subtracao(10,20);

console.log(multiplicacao + " " + divisao + " " + subtracao + " " + soma)

