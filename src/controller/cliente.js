const Cliente = require('../resources/cliente');

exports.getCriar = async (req, res, next) => {
    try {
        return res.send('Oi, aqui renderizo um form de cadastro de cliente');
    } catch (err) {
        next(err);
    }
}

exports.postCriar = async (req, res, next) => {
    try {
        let resultado = await Cliente.validarRegistro(req.body);
        if(!resultado) { // se não encontrar cliente...
            const cliente = await Cliente.criar(req.body);
            return res.json(cliente);
        } else {
            return res.json(
                {
                    error: 'Cliente já foi registrado!'
                }
            );
        }
    } catch (err) {
        next(err);   
    }
}

exports.buscarTodos = async (req, res, next) => {
    try {
        const todos = await Cliente.buscarTodos();
        return res.json(todos);
    } catch (err) {
        next(err);
    }
}


