
import { Schema, model } from 'mongoose';

interface Usuario {
    nombre: string,
    correo: string,
    password: string,
    img: string,
    rol: string,
    estado: boolean,
    google: boolean,
}

export const UsuarioSchema = new Schema<Usuario>({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});



UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}

//module.exports = model( 'Usuario', UsuarioSchema );
// 3. Create a Model.
export const Usuario = model<Usuario>('Usuario', UsuarioSchema);
