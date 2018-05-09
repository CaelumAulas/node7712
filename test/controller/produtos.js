const supertest = require('supertest')
const servidor = require('../../servidor')
const request = supertest(servidor)

describe("Controller Produtos", function(){
    it("tem que listar produtos", function(done){
        request
            .get('/produtos')
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8", done)
    })

    it("rota que nao existe volta 404", function(done){
        request
            .get('/sadasdsads')
            .expect(404, done)
    })

    it("cadastro", function(done){
        request
            .post('/post')
            .send({
              titulo: "Android",
              descricao: "dasdas",
              preco: 50
            })
            .expect(200, done)
    })
})