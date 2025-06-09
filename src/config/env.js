require('dotenv').config(); // para cargar las variables de entorno desde el archivo .env

//debe de instalar env-var para validar las variables de entorno con (npm install env-var)
const { get } = require('env-var');

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
}

module.exports = {
    envs
}