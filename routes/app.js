const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const homeRouter = require('./routes/home');



const app = express();
const port = 3000;

// Configurando o middleware para analisar os corpos das solicitações como JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/home', homeRouter);

// Configura o motor de visualização EJS
app.set('view engine', 'ejs');

// Define o diretório de visualizações
app.set('views', path.join(__dirname, 'views'));

// Rota para a página home (GET)
app.get('/home', (req, res) => {
    // Recupere os parâmetros de consulta, se necessário
    const { email, senha, lembrarme } = req.query;
    res.render('home', {});
});
// Inclua a rota para a página home
const homeRouter = require('./home'); // Substitua pelo caminho real do seu arquivo
app.use('/', homeRouter);


// Rota para processar o formulário de login (POST)
app.post('/login', (req, res, next) => {
    // Lógica de processamento do formulário de login, se necessário

    // Redireciona para a página home após o processamento do formulário
    res.redirect('home');
});

// Conectar ao banco de dados
require('./db');

// Rota para a página de cadastro
app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});

// Rota POST para processar o formulário de cadastro
app.post('/cadastro', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const lembrarme = req.body.lembrarme;

    // Lógica para lidar com os dados do formulário, por exemplo, inserir no banco de dados

    res.send('Cadastro recebido com sucesso!');
});

// ...
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(`Rota não encontrada: ${req.originalUrl}`);
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    console.error(err.stack); // Log detalhes do erro
    res.status(500).send('Algo deu errado!');
});

// ...

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});
