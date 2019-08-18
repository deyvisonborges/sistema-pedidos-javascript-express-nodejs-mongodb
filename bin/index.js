// chamando modulos
const express = require('express');
const bp = require('body-parser');


// criando aplicacao
const app = express();


// configurando o parser
app.use(bp.json({limit: '10mb'}));
app.use(bp.urlencoded({extendend: false}));


// configurando o frontend
app.set('view engine', 'ejs');
app.set('views', 'views');


// definindo arquivos estaticos
app.use(express.static('public'));

const cliente_route = require('../src/routes/cliente');
const funcionario_route = require('../src/routes/funcionario');

app.use('/cliente', cliente_route);
app.use('/funcionario', funcionario_route);

// chamando rotas  default
app.use('/', (req, res) => {
    return res.send('Bem vind@!!!');
});


// exportando aplicacao
module.exports = app;