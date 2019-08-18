const Funcionario = require('../controller/funcionario');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', Funcionario.getCriar);
router.post('/', Funcionario.postCriar);

router.get('/logar', Funcionario.getLogar);
router.post('/logar', Funcionario.postLogar);

router.get('/deslogar', Funcionario.getDeslogar);
router.get('/todos', auth.autorizar, Funcionario.buscarTodos);

module.exports = router;
