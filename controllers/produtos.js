// função construtora
const  LivrosDAO = require('../db/LivrosDAO3')
const Conexao = require('../db/Conexao')

const listagemProdutos = (request, response) => {   
    const conexao = Conexao()
    const livrosDAO = new LivrosDAO(conexao)

    livrosDAO.lista(
        livros => response.render('produtos/lista', {
            msgErro: "",
            livros
        }),
        erro => response.render('erros/500', {erro})
    ) 
    
    conexao.end()
}

function cadastroProdutos(request, response){
    response.send("Cadastrou de mentira")
    // livrosDAO.cadastra(livro, function(){
    //     response.render('deu bom')
    // })
}

function form(req, res){
    res.render('produtos/form', {
        validationErrors: []
    })
}

module.exports = {
    listagem: listagemProdutos, 
    cadastro: cadastroProdutos,
    form
}