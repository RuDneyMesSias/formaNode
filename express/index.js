const express = require("express"); // Importando o express
const app = express();              // Iniciando o express

//Rota
app.get("/",function(req, res){
    res.send("<h1>Bem vindo ao meu servidor</h1>")
});

app.get("/blog",function(req, res){
    res.send("Bem vindo ao meu blog")
});

app.get("/canal/youtube",function(req, res){
    res.send("<h1>Bem vindo ao meu canal!</h1>")
});

//Rota com Parâmetro Obrigatório
app.get("/paramentro/obrigatorio/:nome/:empresa",function(req, res){
    //REQ => dados enviados pelo usuário
    //RES => resposta que vai ser enviada para o usuário
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send(" <h1> oi! " + nome + " do " + empresa + " </h1> ")
});

//Rota com Parâmetro não Obrigatório
app.get("/parametro/:artigo?",function(req, res){
    res.send("<h1>Bem vindo ao meu canal!</h1>")
});

app.get("/blogs/:artigo?",function(req, res){
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2> Artigo: " + artigo + " </h2>")
    }else{
        res.send("<h3>Bem vindo ao meu blog!!!</h3>")
    }
})

//Query params
app.get("/params/youtube", function(req, res){
    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    }else{
        res.send("Nenhum canal fornecido!")
    }
        
})

//Conexão do Servidor
app.listen(4000, function(error){
    if(error){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})