const express = require("express");
const router = express.Router();
const Pergunta = require('../database/Pergunta');
const Resposta = require('../database/Resposta');
const { where } = require("sequelize");

router.get("/", function(req, res){
    Pergunta.findAll({raw: true}).then(perguntas =>{
        return res.json({ perguntas })
    })  
});

router.get('/home', function(req, res){
    res.render('perguntar')
});

router.get('/perguntar', function(req, res){
    //SELECT  * FROM pergunta
    Pergunta.findAll({raw: true, order:[
        ['id','DESC'] // ASC = Crescente || DESC = decrescente
    ]}).then(perguntas =>{
        res.render('index',{
            perguntas: perguntas
        });
    });
    
});

router.post('/salvarpergunta',(req, res) => {
    const { titulo, descricao } = req.body;
    
    Pergunta.create({ titulo, descricao }).then(()=>  {
        res.redirect('/');
    });
})

router.get('/perguntar/:id', (req, res) =>{
    var id = req.params.id;

    Pergunta.findOne({
        where:{id:id}
    }).then(perguntar => {
        if(perguntar != undefined){

            Resposta.findAll({
                where: {perguntaId: perguntar.id},
                order: [['id','DESC']]
            }).then(respostas => {
                res.render('pergunta',{
                    perguntar: perguntar,
                    respostas: respostas
                });
            });
        }else{
            res.redirect("/perguntar")
        }
    });
});

router.post('/responder', (req, res)=> {
    const { corpo, pergunta } = req.body; 

   Resposta.create({
    corpo: corpo,
    perguntaId: pergunta
   }).then(()=>  {
    res.redirect('/perguntar/' + pergunta);
   });
});

module.exports = router;