const express = require('express')
// hoisting
const servidor = express()

servidor.set('view engine', 'ejs')

//Middlewares (use), tratadores para qualquer rota
servidor.use(express.static('./public'))

// os dois executam e só manipulam de acordo com o Content-Type do request
servidor.use(express.urlencoded())
servidor.use(express.json())

require('./routes/produtos')(servidor)
require('./routes/home')(servidor)

servidor.use((req, res) => 
    res.render('erros/500', {erro: "404 Not Found"}
))

module.exports = servidor