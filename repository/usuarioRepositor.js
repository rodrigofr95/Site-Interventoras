const db = require('./db');

async function fazerLogin(login, senha){

    try {
            console.log('login');
            let consulta = `select * from cadastrodeusuario u where u.Email = '${login}' and u.Senha = '${senha}'`
        
            const con = db.conectarMysql();
            let resultado = await con.query( consulta );

            let usuario = resultado[0][0]
            console.log( usuario )
            con.destroy();
        
            if(login == usuario.Email && senha == usuario.Senha){
                return true;
            }else{
                return false;
            }
    } catch (error) {
        console.log(error)
        return false;
    }
}

module.exports = { fazerLogin }