// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000       

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('HARRY OMAR RAMOS GUEVARA')
// })

// server.listen(port, hostname, () => {
//     console.log(`el servidor se esta ejecutando en http://${hostname}:${port}`)
    
// })

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("2 + 3 = " + (2+3))
})

app.listen(port, () => {
    console.log(`el servido esta escuchando en http://localhost:${port}`)  
})