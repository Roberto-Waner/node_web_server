//Funcion agnostica que recibe un objeto y retorna un string
//Agnóstica porque no tiene nombre
/*
( async () => {
    main();
})
    */

//(() => {})() -- funcion Agnóstica autoejecutable

const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async () => {
    main()
})()