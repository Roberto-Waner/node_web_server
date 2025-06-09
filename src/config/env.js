//require('dotenv').config(); // para cargar las variables de entorno desde el archivo .env
import env from 'dotenv'
//debe de instalar env-var para validar las variables de entorno con (npm install env-var)
//const { get } = require('env-var');
import envvar from 'env-var'

env.config()

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString(),
}

// module.exports = {
//     envs
// }