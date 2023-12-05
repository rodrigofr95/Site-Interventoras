const db = require('./db');


async function fazerLogin(login, senha) {
    try {
        console.log('login');
        const consulta = 'SELECT * FROM cadastrodeusuario u WHERE u.Email = ?';
        
        const con = db.conectarMysql();
        const resultado = await con.query(consulta, [login]);
        con.destroy();

        const usuario = resultado[0][0];

        if (usuario && await bcrypt.compare(senha, usuario.Senha)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = { fazerLogin };
