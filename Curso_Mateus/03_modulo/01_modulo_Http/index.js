const http = require("http");

const porta = 3000;

const server = http.createServer((req,res)=>{
    res.write("Olá HTTP");
    res.end();
})

server.listen(porta,()=>{
    console.log(`Servidor iniciado na porta: http://localhost:${porta}`)
})


