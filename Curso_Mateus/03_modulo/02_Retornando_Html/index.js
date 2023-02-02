const http = require("http");
const porta = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("<h1>Enviando html</h1>");
    
}).listen(porta,()=>{
    console.log(`Server rodando na porta: http://localhost:${porta}`);
});