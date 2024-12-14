const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/Perguntar");
const path = require("path");

// Express usar o EJS como View engine
app.set("views,", path.join(__dirname, "views"));
app.set('view engine', 'ejs')

//Definir arquivos estáticos
app.use(express.static('public'));

//BodyParser: decodificar para javaScript
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Criar as rotas
app.use(router);

app.listen(3000, ()=> {
    console.log("Sucesso: Servidor esta rodando!")
});

/*

Rota View engine

app.get("/", function(req, res){
    res.render("index")
})

________________Tipos de rotas EJS________________________________//
Rota View dentro de pasta

Variáveis no HTML Dinâmico

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

Variáveis com parâmetros EJS

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

Estrutura Condicionais EJS
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

Estrutura de repetições EJS

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
*/

