const fs = require("fs");

const arquivoAntigo = "arquivo.txt" ;
const arquivoNovo = "novoArquivo.txt";

fs.rename(arquivoAntigo,arquivoNovo,function(error){
    if(error){
        console.log(error);
        return;
    }
    console.log(`O arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}`);
});