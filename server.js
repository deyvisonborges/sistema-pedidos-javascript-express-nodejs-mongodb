const app = require('./bin/index');
const keys = require('./bin/keys');
const connection = require('./src/middleware/connection');

app.listen(keys.server.port, (err) => {
    connection.connect();
    if(err) {
        console.log('==> [-] Falha na aplicação');
    } else {
        console.log('==> [+] Aplicação funcionando.');
    }
});