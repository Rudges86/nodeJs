const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Recebido!!</h1>')

});

app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog!!")
});

app.get("/canal/youtube", (req, res) => {
    res.send("<h1>Se inscreva no meu canal !!!</h1>")
});

app.get("/parm/:nome", (req, res) => {
    let nome = req.params.nome;
    res.send(`<h1>Oi! ${nome} </h1>`)
})

app.get("/parm/:nome/:empresa", (req, res) => {
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send(`<h1>Oi! ${nome} da empresa: ${empresa} </h1>`)
})

app.get("/bloc/:fulano?",(req,res)=>{
    let teste = res.params.fulano;
    if(teste){
        res.send(`Opcional ${req.params.fulano}`)
    }else{
        res.send("Faltou o parâmetro")
    }
})


app.listen(4000, (erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("Servidor iniciado! rodando na porta 4000")
    }
});
