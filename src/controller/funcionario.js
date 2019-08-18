const Funcionario = require('../resources/funcionario');
const cript = require('bcrypt');
const auth = require('../middleware/auth');
const storage = require('localtoken');

exports.getLogar = async (req, res, next) => {
    try {
        return res.send('Estou na página LOGIN');
    } catch (err) {
        next(err);
    }
}

exports.postLogar = async (req, res, next) => {
    try {
        const resultado = await Funcionario.validarEntrada(req.body);
        if(!resultado) {
            return res.send('Usuário não encontrado!');
        }

        if(!await cript.compare(req.body.senha, resultado.senha)) {
            return res.send('Senha não combina.');
        }

        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('login', token);
        console.log('Logado com sucesso.');
        return res.redirect('/');
    } catch (err) {
        next(err);
    }
}

exports.getDeslogar = async (req, res, next) => {
    try {
        await storage.removeLocal('login');
        return res.json(
            {
                Success: 'Funcionario deslogado com sucesso.'
            }
        )
    } catch (err) {
        next(err);
    }
}

exports.getCriar = async (req, res, next) => {
    try {
        return res.send('Página - Funcionario');
    } catch (err) {
        next(err);
    }
}

exports.postCriar = async (req, res, next) => {
    try {
        let resultado = await Funcionario.validarRegistro(req.body);
        if(!resultado) {
            let funcionario = await Funcionario.criar(req.body);
            return res.json(funcionario);
        } else {
            return res.json({
                error: 'Funcionário já existe!'
            })
        }
    } catch (err) {
        next(err);   
    }
}

exports.buscarTodos = async (req, res, next) => {
    try {
        const todos = await Funcionario.buscarTodos();
        return res.json(todos);
    } catch (err) {
        next(err);
    }
}


