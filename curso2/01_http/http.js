const http = require("http");
http.createServer(function (requisao,resposta){
    resposta.end("Bem vindo ao servidor");
}).listen(8181);
console.log("server rodando na 8181")