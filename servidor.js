const express = require('express')
// hoisting
const servidor = express()

// callback pra qualquer rota
servidor.use(express.static('./public'))

// funcoes de callback
servidor.get("/produtos", function(request, response){
    response.render('produtos/lista.ejs', {
        msgErro: "",
        livros: [
            {
                titulo: "Android",
                preco: 50,
                descricao: "Livro de android"
            }
        ]
    }) 
})

console.log("Rodou o servidor")

servidor.listen(3000)