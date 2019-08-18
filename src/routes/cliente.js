const Cliente = require('../controller/cliente');
const express = require('express');
const router = express.Router();

router.get('/', Cliente.getCriar);
router.get('/todos', Cliente.buscarTodos);

router.post('/',Cliente.postCriar);

module.exports = router;