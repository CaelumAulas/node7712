console.log('Esse código executa uma vez só pro sistema inteiro')

function LivrosDAO(conexao){
    this._X = "oi"
    this.conexao = conexao
}

// método estático todo mundo consegue alterar
LivrosDAO.prototype.lista = function(callbackSucesso, callbackDeuRuim){
    console.log("X dentro do DAO", this._X)
    
    this.conexao.query(
        'SELECT * FROM livros',
        (erro, listaDoBanco) => erro 
            ? callbackDeuRuim(erro) 
            :callbackSucesso(listaDoBanco)
    )
}

LivrosDAO.prototype.cadastra = function cadastra(){
    this.conexao
}

module.exports = LivrosDAO

