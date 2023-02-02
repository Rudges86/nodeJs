const fs = require("fs");
const http =  require("http");
const porta = 3000;

const server = http.createServer((req,res)=>{

    const urlInfo = require("url").parse(req.url,true); //importe da url, e lendo a url
    const nome = urlInfo.query.nome; //lendo o parâmetro

    if(!nome){
        fs.readFile("index.html",(error,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"}) //renderizando o html já criado
            res.write(data);
            return res.end();
        })
    }else{
        fs.writeFile("arquivo.txt",nome, function (err,data){ //criando e escrevendo no arquivo.txt
            //Detalhe, toda vez ele irá substituir o arquivo e escrever por cima.
            //Detalhe ele não aceita arrow function, tem que passar o nome function mesmo
            res.writeHead(302,{
                Location:"/" //devolvendo para a mesma página
            })

            return res.end();
        })
    }

}).listen(porta,()=>{
    console.log(`Servidor rodando em: http://localhost:${porta}`);
})

