class CustomError {
    constructor(nombre, mensaje, statusCode, codigoInterno, descripcion = "") {
        this.name = nombre;
        this.message = mensaje;
        this.codigo = statusCode;
        this.codigoInterno = codigoInterno;
        this.descripcion = descripcion;
    }
}

module.exports = { CustomError };