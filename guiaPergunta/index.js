const express = require("express");
const app = express();

// Express usar o EJS como View engine
app.set('view engine', 'ejs');

//Definir arquivos estáticos
app.use(express.static('public'));

//Rota View engine
app.get("/", function(req, res){
    res.render("index")
})

//Rota View dentro de pasta
app.get("/home", function(req, res){
    res.render("principal/perfil")
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