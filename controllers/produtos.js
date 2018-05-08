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

const queryString = require('query-string')

function cadastroProdutos(request, response){
    let livroString = ""

    request.on('data', tecoDoLivro => {
        livroString += tecoDoLivro
        console.log("Teco: "+ livroString)
    })

    request.on('end', () => {
        const livro = queryString.parse(livroString)

        const conexao = Conexao()
        const livrosDAO = new LivrosDAO(conexao)
        livrosDAO.cadastra(
            livro,
            () => response.redirect("/produtos"),
            erro => response.render('erros/500', {erro})
        ) 
    }) 
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