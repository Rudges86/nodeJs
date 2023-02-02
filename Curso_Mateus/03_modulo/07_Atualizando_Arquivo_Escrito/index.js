const fs = require("fs");
const http = require("http");

const porta = 3000;
const server =  http.createServer((req,res)=>{
    const urlInfo = require("url").parse(req.url,true);
    const nome = urlInfo.query.nome;
    if(!nome){
        fs.readFile("index.html",(error,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            return res.end();
        })
    }else{

        //A mudança para atualizar basta substituir o writeFle por appendFile e criar uma const
        //E susbstituir o nome, pela const criada.
        //fs.writeFile('arquivo.txt',nome,function(erro,data){
        const nameNewLine = nome + ",\r\n";
        
        fs.appendFile('arquivo.txt',nameNewLine,function(erro,data){
                res.writeHead(302,{
                    Location:"/"
                })
                return res.end();
        })
    }
}).listen(porta,()=>{
    console.log(`Servidor rodando em: http://localhost:${porta}`);
})