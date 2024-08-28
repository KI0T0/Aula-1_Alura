//const caminhoArquivo = require('./arquivos/texto-web.txt');
//const caminhoArquivo = process.argv;
//const link = caminhoArquivo[2];
//console.log(link);


const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

fs.readFile(link, 'utf-8', (erro, texto) => {
    if(erro) throw erro;
    console.log(texto);
})