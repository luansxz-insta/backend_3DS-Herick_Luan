
import express from 'express'
import path from 'path' // resolver conflitos de pasta
const PORT = process.env.PORT || 3000
const app = express()
const baseDir = import.meta.dirname
//Middleware (guardião)
app.use('/publico', express.static(path.join(baseDir, 'src', 'publico')))

app.get('/', (req, res) => { // callback ou retorno
 res.sendFile('src/paginas/padariaInicial.html', {root: baseDir})
})

app.get('/produtos', (req, res) => {
 res.sendFile('src/paginas/padariaprodutos.html', {root: baseDir})
})

app.get('/sobre-nos', (req, res) => {
 res.sendFile('src/paginas/sobrenos.html', {root: baseDir})
})

app.get('/contato', (req, res) => {
 res.sendFile('src/paginas/contato.html', {root: baseDir})
})

app.listen(PORT, () => { console.log('Servidor Ok na Porta  '+PORT)})