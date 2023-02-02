const fs = require("fs");
const http = require("http");

const porta = 3000;
const server = http.createServer((req,res)=>{
    //Lê o arquivo html
    fs.readFile("mensagem.html",(error,data)=>{
        //Substitui o res.statusCode e o res.setHeader       
        res.writeHead(200,{"Content-Type": "text/html"});
        //Vai escrever o que está no arquivo ai
        res.write(data);
        return res.end();
        
    });

}).listen(porta,()=>{
    console.log(`Servidor rodando na porta: http://localhost:${porta}`);
})


