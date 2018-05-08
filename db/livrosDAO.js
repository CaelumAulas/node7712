const pool = require('../db/pool')

function lista(callbackSucesso, callbackDeuRuim){
    // em algum momento do tempo
    pool.query('SELECT * FROM Livros', function(erro, listaDoBanco){
        if(erro){
            callbackDeuRuim(erro)
        } else {
            callbackSucesso(listaDoBanco)
        }
    })
}

function cadastra(){

}

module.exports = {
    lista,
    cadastra
}