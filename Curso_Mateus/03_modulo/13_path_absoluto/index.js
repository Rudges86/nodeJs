const path = require("path");

//path absoluto
console.log(path.resolve("text.txt"))

//formando o path
const midFolder = "relatorios"
const fileName = "rudge.txt"

const finalPath = path.join("/","arquivos",midFolder,fileName)
console.log(finalPath)