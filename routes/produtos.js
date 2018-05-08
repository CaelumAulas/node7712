const ProdutosController = require('../controllers/produtos')

function cadastraRotas(servidor){
    // funcoes de callback
    // funcoes handlers / tratadoras

    servidor
        .get("/produtos", ProdutosController.listagem)
        .get("/produtos/form", ProdutosController.form)
        .post("/produtos", ProdutosController.cadastro)
}

module.exports = cadastraRotas