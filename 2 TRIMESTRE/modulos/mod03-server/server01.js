const http = require('node:http')
const porta = 8002

const server = http.createServer((req, res) => {
    const novaUrl = new URL(req.url, `http://${req.headers.host}`) //http://localhost
    const caminhoUrl = novaUrl.pathname
    if (caminhoUrl === '/') {
        // o que vem da url?
        res.statusCode = '201'
        res.setHeader('content-type', 'text/html charset=utf-8')
        res.end('<h3>Soled by ShiiyaRL</h3')
    } else {
        res.statusCode = '401'
        res.setHeader('content-type', 'text/html charset=utf-8')
        res.end('<h3>You got Soled by ShiiyaRL</h3')
    }

})

server.listen(porta, () => {
    console.log(`servidor rodando na porta
      http://local""host:${porta}`)
})