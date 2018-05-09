console.log('Esse código executa uma vez só pro sistema inteiro')

module.exports = class LivrosDAO {
    constructor(conexao){
        this.conexao = conexao
    }

    lista(callbackSucesso, callbackDeuRuim){
        this.conexao.query(
            'SELECT * FROM livros',
            (erro, listaDoBanco) => erro 
                ? callbackDeuRuim(erro) 
                :callbackSucesso(listaDoBanco)
        )
    }

    cadastra(livro){
        // return Bluebird.promisfy(conexao.query)('query', livro)
        return new Promise((resolve, reject) => {
            this.conexao.query(
                'INSERT INTO livros SET ?',
                livro, 
                (erro) => erro ? reject(erro) : resolve()
            )
        })
    }
}

