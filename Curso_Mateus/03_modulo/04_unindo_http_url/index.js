const http = require("http");

const porta = 3000;
const server = http.createServer((req,res)=>{
    //url
    const urlInfo = require("url").parse(req.url,true);
    const name = urlInfo.query.name; //pega o parâmetro da url com name

    //caminho normal do servidor
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");

    if(!name){ //Inícia vazio ai ele já constrói o formulário, pelo o seu método ser get e o submite,
               //ele passa o name do input na url;
         res.end(
        "<h1>Preencha o seu nome:</h1> <form method='GET'><input type:'text' name='name'/><input type='submit' value='Enviar'/></form>");
    }else{
        //quando o parâmetro é preenchido ele retorna essa lógica, ficando a url desta forma:
        //localhost:3000/?name=
        res.end(`<h1>Seja bem-vindo ${name} !!</h1>`)
    }

}).listen(porta,()=>{
    console.log(`Servidor rodando na porta: http://localhost:${porta}`)
})


