//Ler argumentos, exemplo node index.js nome=rudge, ele vai registrar o nome = rudge na impressão, além do caminho

console.log(process.argv);
const args = process.argv.slice(2);
console.log(args);

//pega posição zero do array ["nome=rudge"]
//quebra em um array de dois elementos, removendo o =
//e devolve para a variável o elemento na posição 1 do array
//Execução node index.js nome=rudge idade=27
const nome = args[0].split("=")[1];
const idade = args[1].split("=")[1];
console.log(nome);
console.log(idade);

console.log(`${nome}:${idade}`);