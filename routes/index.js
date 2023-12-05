var express = require('express');
const { fazerLogin } = require('../repository/usuarioRepositor');
var router = express.Router();
const inRepository = require('../repository/interventorasRepository')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-in', { });
});



router.post('/createCad', function(req, res, next) {
  let { nome, email, senha } = req.body;

  if (inRepository.criarCad(nome, email, senha)) {
    res.render('interventorasPage', { msg: true });
  } else {
    res.render('interventorasPage', { msg: false });
  }
});

router.get('/viewLab', async function(req, res, next) {
  let { id } = req.query;
  const lab = await inRepository.getLab(id);
  console.log(lab);
  res.render('laboratoriosDetail', { laboratorio: lab });
});

router.get('/updateLab', async function(req, res, next) {
  let { id } = req.query;
  const lab = await inRepository.getLab(id);
  console.log(lab);
  res.render('laboratoriosUpdate', { laboratorio: lab });
});

router.post('/updateLab', async function(req, res, next) {
  let { id, nome, email, senha } = req.body;
  await inRepository.updateLab(id, nome, email, senha);
  let listaLabs = await inRepository.consultarLab();
  res.render('laboratoriosList', { laboratorios: listaLabs });
});

router.post('/autenticar', async function(req, res, next) {
  let { login, senha } = req.body;

  console.log(req.body);

  if (await fazerLogin(login, senha)) {
    res.redirect('/home');
  } else {
    res.render('sign-in', { erroLogin: true });
  }
});

router.get('/home', async function(req, res, next) {
  res.render('home', {});
});

router.post('/home', async function(req, res, next) {
  let { Nome, Email, Senha } = req.body;
  const repository = require('../repository/interventorasRepository');
  const success = await repository.criarcadastro(Nome, Email, Senha);
  res.render('home', {});
});

router.get("/cadastro", function(req, res, next) {
  res.render("cadastro",  { });
});

module.exports = router;
