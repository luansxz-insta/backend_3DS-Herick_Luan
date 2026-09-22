const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = process.env.PORT || 8001

const home = path.join(__dirname, 'index.html')
const estilo = path.join(__dirname, 'estilo.css')
const sobre = path.join(__dirname, 'sobre.html')
const weepets = path.join(__dirname, '../images/image.png')
const pagina404 = path.join(__dirname, '401.html')

const server = http.createServer((req, res) => {
  const novaUrl = new URL(req.url, `http://${req.headers.host}`)
  const caminhoUrl = novaUrl.pathname

  if (caminhoUrl === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(home, 'utf-8'))
  }

  if (caminhoUrl === '/estilo.css') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/css; charset=utf-8')
    return res.end(fs.readFileSync(estilo, 'utf-8'))
  }

  if (caminhoUrl === '/images/image.png') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    return res.end(fs.readFileSync(weepets))
  }

  if (caminhoUrl === '/sobre') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(sobre, 'utf-8'))
  }

  if (caminhoUrl === '/404') {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(pagina404, 'utf-8'))
  }

  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(fs.readFileSync(pagina404, 'utf-8'))
})

server.listen(porta, () => {
  console.log(`Wee Pets rodando em http://localhost:${porta}`)
})
