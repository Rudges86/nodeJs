import chalk from "chalk";
//const chalk = require("chalk");
//o chalk só funciona importado desta forma, e no package.json passando uma linha chamada "type":"module"
//serve para estilizar a saída do console, ou seja colocando cores, estilos de fontes etc...
const nota = 1;
if(nota > 6){
    console.log(chalk.green('Parabéns'))
}else{
    console.log(chalk.bgRed.blue.bold("Ruim!"))
}

