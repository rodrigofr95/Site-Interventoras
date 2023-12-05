const db = require("./db");
const express = require("express");
const app = express();
const MySQL = require("mysql");

function conectarMysql() {
    const db = db.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'interventoras'
    }).promise()
    .then(() => console.log("Conectou ao MySQL!"))
    .catch(err => {
        console.error("Erro ao conectar ao MySQL:", err);
        throw err; // Rethrow the error to propagate it to the calling code
    });

    app.get('/', (req, res) => {
        db.query( "INSERT INTO cadastrodeusuario (Email, Senha) VALUES('rodrigofranca42@gmail.com', '12345')"
        );
    });

db.authenticat().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

    return con;
}

module.exports = { conectarMysql };
