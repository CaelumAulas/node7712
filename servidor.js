const express = require('express')
// hoisting
const servidor = express()

// callback pra qualquer rota
servidor.use(express.static('./public'))

module.exports = servidor