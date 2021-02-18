const express =  require('express');
/*
    Uso o express, e chamo o arquivo contendo meus campos que serão cadastrados do usuário
*/
const User = require('../models/User');

const router = express.Router();
/*
    Crio a requisição POST que retorna o body que for cadastrado do meu user

    testei no insomnia:

    {
	"name": "teste2",
	"email": "teste2.lima.araujo@gmail.com",
	"password": "123456"
    }

    Para criar o usuário usei esse padrão
*/
router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
    }catch (err){
        return res.status(400).send({error: 'registration failed'});
    }
});

module.exports = app => app.use('/auth', router);