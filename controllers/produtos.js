const pool = require('../db/pool')

function listagemProdutos(request, response){
        
    pool.query("SELECT * FROM livros", function(erro, listaDoBanco){
        if(erro){
            console.error("Deu ruim")
        } else {
            console.log("Terminou a query")
            response.render('produtos/lista.ejs', {
                msgErro: "",
                livros: listaDoBanco
            }) 
        }
    })        
}

function cadastroProdutos(request, response){
    console.log("Cadastro")    
}

module.exports = {
    listagem: listagemProdutos, 
    cadastro: cadastroProdutos
}