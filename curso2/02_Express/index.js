const express = require("express");

const app = express();

app.listen(4000,(erro)=>{
        if(erro){
            console.log(erro)
        }else{
            console.log("Servidor iniciado! rodando na porta 4000")
        }
});
