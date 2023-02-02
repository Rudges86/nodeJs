const fs = require("fs");

const arquivoAntigo = "arquivo.txt" ;
const arquivoNovo = "novoArquivo.txt";

fs.rename("arquivo.txt","novoArquivo.txt",function(error){
    if(error){
        console.log(error);
        return;
    }
    console.log(`O arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}`);
});