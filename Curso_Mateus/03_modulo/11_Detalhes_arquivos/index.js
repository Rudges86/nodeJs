const fs = require("fs");

fs.stat("arquivo.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return ;
    }

    console.log(`É um arquivo? ${stats.isFile()}`);
    console.log(`É um diretório? ${stats.isDirectory()}`);
    console.log(`Foi clicado? ${stats.isSymbolicLink()}`);
    console.log(`Quando foi criado ${stats.ctime} `);
    console.log(`Tamanho do aquivo ${stats.size}`);
})