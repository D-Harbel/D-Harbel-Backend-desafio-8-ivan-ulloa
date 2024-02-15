class CustomError{
    static CustomError(title, mensaje, statusCode, codigoInterno, descripcion=""){
        let error=new Error(mensaje)
        error.title=title
        error.codigo=statusCode
        error.codigoInterno=codigoInterno
        error.descripcion=descripcion

        return error
        
    }
}
module.exports = CustomError;