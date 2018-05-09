const ProdutosController = require('../controllers/produtos')

const  LivrosDAO = require('../db/LivrosDAO3')
const Conexao = require('../db/Conexao')

function cadastraRotas(servidor){
    // funcoes de callback
    // funcoes handlers / tratadoras

    servidor
        .use((request, response, next) => {
            request.conexao = Conexao()
            request.livrosDAO = new LivrosDAO(request.conexao)
            next()
        })
        .get("/produtos", ProdutosController.listagem)
        .get("/produtos/form", ProdutosController.form)
        .post("/produtos", ProdutosController.cadastro)
        .post("/promocoes", (request, response) => {
            servidor.get('coiso').emit('novaPromocao', request.body)
            response.redirect("/produtos")
        })
        .use((request, resp, next) => {
            request.conexao.end()
            next()
        })
}

module.exports = cadastraRotas