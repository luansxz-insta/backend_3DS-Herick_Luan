const fs = require('fs')

// console.log(fs)

// const arquivo = fs.readFileSync('./README.md', 'utf-8')
// "/workspaces/backend_3DS-Herick_Luan/2 TRIMESTRE/modulos/mod03-FS/README.md
// 2 TRIMESTRE/modulos/mod03-FS/README.md
const arquivFinal = fs.readFileSync(__dirname +"README.md", 'utf-8')
console.log(arquivFinal)