const fs = require("fs");

console.log("Início");
//sync sincono
fs.writeFileSync("arquivo.txt","oi");

console.log("Fim")