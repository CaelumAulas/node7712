console.log('Esse código executa uma vez só pro sistema inteiro')

module.exports = class LivrosDAO {
    constructor(conexao){
        this.conexao = conexao
        this._X = 'oi'
    }

    lista(callbackSucesso, callbackDeuRuim){
        console.log("X dentro do DAO", this._X)
        
        this.conexao.query(
            'SELECT * FROM livros',
            (erro, listaDoBanco) => erro 
                ? callbackDeuRuim(erro) 
                :callbackSucesso(listaDoBanco)
        )
    }

    cadastra(){
        this.conexao
    }
}

