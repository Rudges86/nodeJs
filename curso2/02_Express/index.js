const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send('<h1>Recebido!!</h1>')
    
});

app.get("/blog",(req,res)=>{
    res.send("Bem-vindo ao meu blog!!")
});

app.get("/canal/youtube",(req,res)=>{
    res.send("<h1>Se inscreva no meu canal !!!</h1>")
});



app.listen(4000,(erro)=>{
        if(erro){
            console.log(erro)
        }else{
            console.log("Servidor iniciado! rodando na porta 4000")
        }
});
