const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        // Configuración
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Escuchando servidor en http://localhost:' + this.port);
        });
    }
}

module.exports = Server;