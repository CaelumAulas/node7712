// Data Access Object
const livrosDAO = require('../db/livrosDAO')

function listagemProdutos(request, response){   
    livrosDAO.lista(
        function sucesso(livros){
            console.log("Terminou a query")
            response.render('produtos/lista', {
                msgErro: "",
                livros: livros
            })
        },
        function erro(erro){
            console.error("Deu ruim\n", erro)
            response.render('erros/500', {erro})
        }
    )        
}

function cadastroProdutos(request, response){
    livrosDAO.cadastra(livro, function(){
        response.render('deu bom')
    })
}

module.exports = {
    listagem: listagemProdutos, 
    cadastro: cadastroProdutos
}