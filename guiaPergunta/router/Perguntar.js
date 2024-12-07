const express = require("express");
const router = express.Router();
const Pergunta = require('../database/Pergunta');

router.get("/", function(req, res){
    Pergunta.findAll({raw: true}).then(perguntas =>{
        return res.json({ perguntas })
    })  
});

router.get('/home', function(req, res){
    res.render('perguntar')
});

router.get('/pergunta', function(req, res){
    //SELECT  * FROM pergunta
    Pergunta.findAll({raw: true}).then(perguntas =>{
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


    /*
        try {
            const resultado = await db.sync();
            console.log(resultado);

            const resultadoCreate = await db.create({
                titulo: titulo,
                descricao: descricao
            })
            console.log(resultadoCreate);

        }catch(error) {
            console.log(error);
        }
    })
});

*/

module.exports = router;