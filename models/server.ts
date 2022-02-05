import express, { Application } from 'express';
import cors from 'cors';

import { dbConnection } from '../database/config'; 


export default class Server {
    private app: Application;
    private port: string;
    private usuariosPath = {
        usuario: '/api/usuarios'
    }

    constructor() {
        this.app  = express(); 
        this.port = process.env.PORT || '8000';

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        //this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.usuariosPath.usuario, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}



module.exports = Server;
