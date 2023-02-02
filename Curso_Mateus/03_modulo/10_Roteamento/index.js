const fs = require("fs");
const http = require("http");
const url = require("url")
const porta = 3000;
//→ O acesso é feito por localhost:3000/index.html

const server =  http.createServer((req,res)=>{ 
    const q = require("url").parse(req.url,true);
    const fileName = q.pathname.substring(1); //ele vai pegar do segundo caractere para frente
    if(fileName.includes('html')){
        if(fs.existsSync(fileName)){
            fs.readFile(fileName,(error,data)=>{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data);
                return res.end();
            })
        }else{
            //404
            fs.readFile("notFound.html",(erro,data)=>{
                res.writeHead(404,{"Content-Type":"text/html"});
                res.write(data);
                return res.end();
            })
        }
    }
}).listen(porta,()=>{
    console.log(`Servidor rodando em: http://localhost:${porta}`);
})