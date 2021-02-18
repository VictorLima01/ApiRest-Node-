/*
    Aplicação comum para com o express para chamar na portal http://localhost:3000/auth/registration
*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

/*
Para startar essa aplicação chama node node src/index.js no terminal do Node
*/

app.listen(3000);