import inquirer from "inquirer";
import chalk from "chalk";

inquirer.prompt([
    {
        name: "nome",
        message: "Qual o seu nome?"
    },
    {
        name: "idade",
        message:"Qual a sua idade?"
    }
]).then((respostas)=>{
    if(!respostas.nome || !respostas.idade){
        throw new Error("Campo nome ou idade, sem valores.")
    }

    console.log(chalk.bgYellow.black(`Nome: ${respostas.nome}, idade:${respostas.idade}`))

}).catch(()=>{
    console.log(chalk.bgRed.bold("Erro inesperado!"));
})
