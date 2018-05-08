console.log('Esse código executa uma vez só pro sistema inteiro')

// Eric Elliot

// estática
function lista(conexao, callbackSucesso, callbackDeuRuim){
    conexao.query(
        'SELECT * FROM livros',
        (erro, listaDoBanco) => erro 
            ? callbackDeuRuim(erro) 
            :callbackSucesso(listaDoBanco)
    )
}

// estática
function cadastra(conexao){
    conexao
}

// Classe no javascript é função construtora
function LivrosDAO(conexao){
    // private
    let X = "oi"

    // publico
    return {
        lista: (cbSucesso, cbErro) => lista(conexao,cbSucesso,cbErro),
        cadastra: () => cadastra(conexao)
    }
}

module.exports = LivrosDAO

