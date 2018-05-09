const express = require('express')
// hoisting
const servidor = express()

servidor.set('view engine', 'ejs')

//Middlewares (use), tratadores para qualquer rota
servidor.use(express.static('./public'))

servidor.use(express.urlencoded())
servidor.use(express.json())

const expressValidator = require('express-validator')
servidor.use(expressValidator())

require('./routes/produtos')(servidor)
require('./routes/home')(servidor)

servidor.use((req, res, next) => {
    console.log("o que está acontecendo")
    res.render('erros/500', {erro: "404 Not Found"})
})

servidor.use((erro, req, res, next) => {
    console.error("Deu ruim\n", erro)
    next(erro)
})

servidor.use((erro, req, res, next) => {
    res.format({
        html: () => res.render('erros/500', {erro})
        ,json: () => res.send(erro)
        ,default: () => {
            res.send("Formato não suportado")
        }
    })

})

module.exports = servidor