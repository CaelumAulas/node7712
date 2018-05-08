// função construtora
const  LivrosDAO = require('../db/LivrosDAO3')
const Conexao = require('../db/Conexao')

const listagemProdutos = (request, response) => {   
    const conexao = Conexao()
    const livrosDAO = new LivrosDAO(conexao)

    console.log("X fora do DAO", livrosDAO.X)

    LivrosDAO.prototype = {}

    livrosDAO.lista(
        livros => response.render('produtos/lista', {
            msgErro: "",
            livros
        }),
        erro => response.render('erros/500', {erro})
    ) 
    
    conexao.end()
}

const deletaProduto = (request, response) => {
        const livrosDAO = LivrosDAO()
        const idProduto = 2
        livrosDAO.busca(idProduto, produto => {
            livrosDAO.deletaProduto(produto)
        })
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