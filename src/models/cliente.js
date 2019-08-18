const smc = require('simple-mongoose-creator');
smc.smc('clientes', {
    nome: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        trim: true
    },
    telefone: {
        type: String,
        required: true
    }
});
module.exports = smc;
