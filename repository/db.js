
const db = require("mysql2");

function conectarMsSQL(){
    const connStr = "Server=localhost;Database=aster;User Id=sa;Password=;";
    const sql = require("mssql");

    const con = sql.connect(connStr)
        .then(conn => console.log("conectou!"))
        .catch(err => console.log("erro! " + err));

    return con;
}

function conectarMysql() {
    const con = db.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'interventoras'
    }).promise()
    .catch(err => {
        console.error("Error connecting to MySQL:", err);
        throw err; // Rethrow the error to propagate it to the calling code
    });
    return con;
}

module.exports = { conectarMysql };
