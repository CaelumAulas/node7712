const express = require('express')
// hoisting
const servidor = express()

servidor.set('view engine', 'ejs')

// callback pra qualquer rota
servidor.use(express.static('./public'))

module.exports = servidor