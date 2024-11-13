const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Express usar o EJS como View engine
app.set('view engine', 'ejs');

//Definir arquivos estáticos
app.use(express.static('public'));

//BodyParser: decodificar para javaScript
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Rota View engine
app.get("/", function(req, res){
    res.render("index")
})

//[#1]Projeto pergunta e resposta 

app.get("/perguntar", function(req, res){
    res.render("perguntar")
})

// Rota do tipo post: Apenas recebe dados 
app.post("/salvarpergunta",function(req, res){
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    res.send(" Formulario recebido! " + titulo + " " + " descricao " + descricao)

})

//Rota View dentro de pasta
app.get("/ejs", function(req, res){
    res.render("public")
})

//Variáveis no HTML Dinâmico
app.get("/variavel",function(req, res){

    var nome = req.params.nome;
    var lang = req.params.lang;
    
    res.render("principal/variavel",{
        nome: "Rudney Messias",
        lang: "JavaScript",
        empresa: "CitoLab",
        inscritos: 8000,

    });

})

//Variáveis com parâmetros EJS

app.get("/parametro/:nome/:lang", function(req, res){

    var nome = req.params.nome;
    var lang = req.params.lang;

    res.render("principal/parametro",{
        nome: nome,
        lang: lang,
        empresa: "CitoLab",
        inscritos: 8000,
    });
})

//Estrutura Condicionais EJS
app.get("/condicional/:nome/:lang/", function(req, res){

    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    res.render("principal/condicional",{
        nome: nome,
        lang: lang,
        empresa: "CitoLab",
        inscritos: 8000,
        msg: exibirMsg
    });
})


//Estrutura de repetições EJS

app.get("/repeticao/", function(req, res){

    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos =[
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 15.80},
        {nome: "Pão", preco: 13.45},

    ]

    res.render("principal/repeticao",{
        nome: nome,
        lang: lang,
        empresa: "CitoLab",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
})




app.listen(3000, ()=> {
    console.log("app rodando!!")
});