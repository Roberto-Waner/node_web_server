// const express = require('express')
import express from 'express'
// const path = require('path')
import path from 'path'

export const startServer = (options) => {
    const { port, public_path = 'public'} = options
    
    const app = express()

    //para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)) //contenido estatico puesto en disposición

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log(`Encuchado en le puerto ${port}`)
    })
}

// module.exports = {
//     startServer
// }