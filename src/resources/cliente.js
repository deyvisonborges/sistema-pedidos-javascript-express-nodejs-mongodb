require('../models/cliente');

const mongoose = require('mongoose');
const modelo = mongoose.model('clientes');

class Cliente {
    static async criar(dados) {
        return await new modelo(dados).save();
    }

    static async buscarTodos() {
        return await modelo.find();
    }

    static async buscarPorID(id) {
        return await modelo.findOne({_id: id});
    } 

    static async atualizar(id, dados) {
        return await modelo.findOneAndUpdateid(id, {$set: dados});
    }

    static async deletar(id) {
        return await modelo.findOneAndRemove(id);
    }

    static async validarRegistro(dados) {
        let { email } = dados;
        let cliente = await modelo.findOne({ email });
        return cliente;
    }
}

module.exports = Cliente;