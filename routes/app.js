const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const homeRouter = require('./routes/home');


const app = express();
const port = 3000;

// Configuring middleware to parse request bodies as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/home', homeRouter);

// Configuring the EJS view engine
app.set('view engine', 'ejs');

// Setting the views directory
app.set('views', path.join(__dirname, 'views'));

// Route for the home page (GET)
app.get('/home', (req, res) => {
    // Retrieve query parameters if necessary
    const { Email, Senha, lembrarme } = req.query;
    res.render('home', {});
});

// Include the route for the home page
app.use('/', homeRouter);

// Route to process the login form (POST)
app.post('/sign-in', (req, res, next) => {
    const { Email, Senha } = req.body;

    // Check the credentials (for demonstration purposes)
    if (Email === 'user@example.com' && Senha === 'password') {
        // Authentication successful, redirect to the home page
        res.redirect('/home');
    } else {
        // Authentication failed, redirect to login page or show an error
        res.redirect('/home'); // Adjust this accordingly
    }
});
app.post('./db', (req, res) => {
    // Lógica para lidar com a solicitação POST para /db
  });
  
// Connect to the database
require('./db');

// Route for the registration page
app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});

// Route POST to process the registration form
app.post('/cadastro', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const lembrarme = req.body.lembrarme;

    // Logic to handle form data, e.g., insert into the database

    res.send('Cadastro recebido com sucesso!');
});

// Handling 404 errors
app.use(function(req, res, next) {
    console.log(`Rota não encontrada: ${req.originalUrl}`);
    next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
    console.error(err.stack); // Log error details
    res.status(500).send('Algo deu errado!');
});

// Starting the server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});
