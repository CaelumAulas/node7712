const express = require('express')
// hoisting
const servidorExpress = express()

const http = require('http')
const socketio = require('socket.io')

const servidor = http.Server(servidorExpress)

const socket = socketio(servidor)

socket.on('connection', socketIndividual => {
    socketIndividual.emit("novaPromocao", {
        titulo: "Casa do Codigo"
        ,msg: "Bem vindo"
    })
})

servidorExpress.set('coiso', socket)

servidorExpress.set('view engine', 'ejs')

//Middlewares (use), tratadores para qualquer rota
servidorExpress.use(express.static('./public'))

servidorExpress.use(express.urlencoded())
servidorExpress.use(express.json())

const expressValidator = require('express-validator')
servidorExpress.use(expressValidator())

require('./routes/produtos')(servidorExpress)
require('./routes/home')(servidorExpress)

servidorExpress.use((req, res, next) => {
    console.log("o que está acontecendo")
    res.status(404).render('erros/500', {erro: "404 Not Found"})
})

servidorExpress.use((erro, req, res, next) => {
    console.error("Deu ruim\n", erro)
    next(erro)
})

servidorExpress.use((erro, req, res, next) => {
    res.format({
        html: () => res.render('erros/500', {erro})
        ,json: () => res.send(erro)
        ,default: () => {
            res.send("Formato não suportado")
        }
    })

})

module.exports = servidor