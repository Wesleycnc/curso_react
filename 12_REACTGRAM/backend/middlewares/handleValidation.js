const {validationResult} = require("express-validator")

const validate = (req, res, next) => {

    // criamos uma variável para indentificar os erros da req 
    const errors = validationResult(req)

    //Verifica se tem algum erro se não tiver ele deve prosseguir
    if(errors.isEmpty()) {
        return next()
    }

    // se tiver algum erro eles serão armazenados nessa variável extractedErrors 
    const extractedErrors = []

    errors.array().map((err) => extractedErrors.push(err.msg))

    //Aqui retornamos um erro 422 
    return res.status(422).json({
        errors: extractedErrors
    })
}

module.exports = validate