//const mongoose = require('mongoose');
import { Mongoose, connect } from "mongoose";



export const dbConnection = async() => {
    const port:any = process.env.MONGODB_CNN || '';
    const useNewUrlParser: boolean = true;
    const useUnifiedTopology: boolean = true;


    try {

        await connect(port);
    
        console.log('Base de datos online');

    } catch (error) {
        console.log("--error-->", error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}

