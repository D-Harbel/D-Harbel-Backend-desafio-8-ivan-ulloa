const os = require('os');

const errorArgumentos=({title, ...otros})=>{

    return `
Error en argumentos:
Argumentos obligatorios:
    - name: esperado tipo string, recibido ${title}   
Argumentos opcionales:
    - ${JSON.stringify(otros)}

Fecha: ${new Date().toUTCString()}
`
}

module.exports = { errorArgumentos };