const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pedido = new schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'clientes',
        required: true
    },
    funcionario: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'clientes',
        required: true
    },
    pizza: {
        type: String,
        required: true,
        trim: true
    },
    bebida: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('pedidos', pedido);