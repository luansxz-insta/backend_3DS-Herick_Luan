const { error } = require('node:console')
const fs = require('node:fs')
const path = require('node:path')
const frasePreferida = `Gosto de música e violão!\n`
const log =  `Atenção, você está offLine...`

try {
    const arquivo = path.resolve(__dirname, 'frase.md')
    fs.writeFileSync(arquivo, frasePreferida, 'utf-8')

    // Reescreve totalmente o conteúdo
    fs.writeFileSync(arquivo, log, 'utf-8')
} catch (error) {
    console.log(error.message)
}
