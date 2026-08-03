const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8002

const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')

const server = http.createServer((req, res) => {
    const novaUrl = new URL(req.url, `http://${req.headers.host}`) //http://localhost
    const caminhoUrl = novaUrl.pathname
    if (caminhoUrl === '/') {
        // o que vem da url?
        res.statusCode = '201'
        res.setHeader('content-type', 'text/html charset=utf-8')
        return res.end(fs.readFileSync(home, 'utf-8')) // chamar o HTML
      }   
          if (caminhoUrl === '/sobre') {
        // o que vem da url?
        res.statusCode = '201'
        res.setHeader('content-type', 'text/html charset=utf-8')
        res.end(fs.readFileSync(sobre, 'utf-8'))
          }
    else {
        res.statusCode = '401'
        res.setHeader('content-type', 'text/html charset=utf-8')
        res.end('<h3>401 não autorizado</h3>')
    }

})

server.listen(porta, () => {
    console.log(`servidor rodando na porta
      http://local""host:${porta}`)
})