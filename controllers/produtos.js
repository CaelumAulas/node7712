

const listagemProdutos = (request, response, next) => {   
    request.livrosDAO.lista(
        livros => response.format({
            html: () => response.render('produtos/lista', {
                msgErro: "",
                livros
            })
            ,json: () => response.send(livros)
        })
        
        

        ,next
    )
}

function cadastroProdutos(request, response, next){
    const livro = request.body
    request.livrosDAO.cadastra(
        livro
        ,() => response.redirect("/produtos")
        ,next
    )
}

function form(req, res){
    res.render('produtos/form', {
        validationErrors: []
    })
}

module.exports = {
    listagem: listagemProdutos
    //,criaBody
    ,cadastro: cadastroProdutos
    ,form
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