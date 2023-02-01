const fs = require("fs");

console.log("Início");

fs.writeFile('assincrono.txt',"assíncrono", (err)=>{
        setTimeout(()=>{
            console.log("Arquivo criado");
        },2000);

})

console.log("Fim");