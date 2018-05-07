var http = require('http')

// funcoes de callback
var servidor = http.createServer(function(pedido, resposta){
    resposta.end("oi")
})

console.log("Rodou o servidor")

servidor.listen(3000)