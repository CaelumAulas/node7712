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

// const queryString = require('query-string')

// function criaBody(request, response, next){
//     let stringBody = ""

//     request.on('data', tecoDoLivro => {
//         stringBody += tecoDoLivro
//     })

//     request.on('end', () => {
//         request.body = queryString.parse(stringBody)
//         console.log("Cria BODY", request.body)
//         next()
//     })
// }

function cadastroProdutos(request, response){
    console.log("Chegou no cadastro")

    const livro = request.body

    const conexao = Conexao()
    const livrosDAO = new LivrosDAO(conexao)
    livrosDAO.cadastra(
        livro,
        () => response.redirect("/produtos"),
        erro => response.render('erros/500', {erro})
    )
}

function form(req, res){
    res.render('produtos/form', {
        validationErrors: []
    })
}

module.exports = {
    listagem: listagemProdutos,
    // criaBody,
    cadastro: cadastroProdutos,
    form
}