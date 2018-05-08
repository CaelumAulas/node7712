module.exports = function(callback){
    // em algum momento do tempo
    setTimeout(function(){
        callback(null, [
            {
                titulo: 'Android',
                descricao: 'livro de android',
                preco: 500
            }
        ])
    }, 1000)
}