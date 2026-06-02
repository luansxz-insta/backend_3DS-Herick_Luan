// importar PATH e FS 
// Path possui (join para juntar caminhos e Resolve
// para deduzir subiretório e S.O.)
const fs = require('fs')
const path = require('path')

// salvar o Caminho em um variável
// const caminho = path.join(__dirname, 'README.md)//Markdown, text
const caminho = path.resolve(__dirname, 'README.md')// Abrir, ler, deletar, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')

console.log(arquivo)