const db = require('./db');


async function criarcadastro(nome, email, senha) {
    let con;
    try {
        con = await db.conectarMysql();
        const sql = 'INSERT INTO pmc.cadastrodeusuario (Nome, Email, Senha) VALUES (?, ?, ?)';
        await con.execute(sql, [nome, email, senha]);
        console.log("Inseriu");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        if (con) con.destroy();
    }
}

async function updateinter(id, nome, email, senha) {
    let con;
    try {
        con = await db.conectarMysql();
        const sql = 'UPDATE pmc.cadastrodeusuario SET Nome=?, Email=?, Senha=? WHERE id=?';
        await con.execute(sql, [nome, email, senha, id]);
        console.log("Atualizou");
        return true;
    } catch (error) {
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
        return false;
    } finally {
        if (con) con.destroy();
    }
}

module.exports = { criarcadastro, consultarLab, apagarLab, getLab, updateinter };
