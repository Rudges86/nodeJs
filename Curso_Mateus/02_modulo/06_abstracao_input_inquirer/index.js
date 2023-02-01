//const inquirer = require("inquirer");
//mesmo problema do chalk, muda o import e no packge passe a linha type:module
// é mais complexo pois, você pass um array de perguntas e no then passa a manipulação e o catch é so
//o erro
import inquirer from "inquirer";

inquirer.prompt([
    {
        name:"p1",
        nota:"Qual a primeira nota?"
    }
    ,
    {
        name:"p2",
        nota:"Qual a segunda nota?"
    }
]).then((respostas)=>{
    console.log(respostas);
    const media = (parseInt(respostas.p1) + parseInt(respostas.p2))/2
    console.log(media);
}).catch(err => console.log(err))