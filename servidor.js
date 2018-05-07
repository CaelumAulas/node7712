const express = require('express')
// hoisting
const servidor = express()

// funcoes de callback
servidor.get("/", function(request, response){
    response.send("<h1>Casa do Codigo gfeliz</h1>")
})

console.log("Rodou o servidor")

servidor.listen(3000)