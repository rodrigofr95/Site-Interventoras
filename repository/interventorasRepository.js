const db = require('./db');

async function criarcadastro(Nome, Email, Senha) {
    let con;
    try {
        con = await db.conectarMysql();
        let sql = 'INSERT INTO pmc.cadastrodeusuario (Nome, Email, Senha) VALUES (?, ?, ?)';
        await con.execute(sql, [Nome, Email, Senha]);
        console.log("inseriu");
        return true;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        if (con) con.destroy();
    }
}

async function updateinter(id, Nome, Email, Senha) {
    let con;
    try {
        con = await db.conectarMysql();
        let sql = 'UPDATE pmc.cadastrodeusuario SET nome=?, email=?, senha=? WHERE id=?';
        await con.execute(sql, [Nome, Email, Senha, id]);
        console.log("atualizou");
        return true;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        if (con) con.destroy();
    }
}

async function consultarLab() {
    let con;
    try {
        con = await db.conectarMysql();
        const consulta = 'SELECT * FROM cadastrodeusuario';
        const resultado = await con.query(consulta);
        const listaLabs = resultado[0];
        console.log(listaLabs);
        return listaLabs;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        if (con) con.destroy();
    }
}

async function getLab(id) {
    let con;
    try {
        con = await db.conectarMysql();
        const consulta = 'SELECT * FROM cadastrodeusuario WHERE id = ?';
        const resultado = await con.query(consulta, [id]);
        const lab = resultado[0][0];
        console.log(lab);
        return lab;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        if (con) con.destroy();
    }
}

async function apagarLab(id) {
    let con;
    try {
        con = await db.conectarMysql();
        const consulta = 'DELETE FROM cadastrodeusuario WHERE id = ?';
        await con.execute(consulta, [id]);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        if (con) con.destroy();
    }
}

module.exports = { criarcadastro, consultarLab, apagarLab, getLab, updateinter };
