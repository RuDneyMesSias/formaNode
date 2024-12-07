const Sequelize = require('sequelize');

const connection = new Sequelize('guiapergunta', 'root', '8687260',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

//DataBase
connection.authenticate()
    .then(() => {
        console.log("Sucesso: Conexão com o mySQL!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

    
module.exports = connection;