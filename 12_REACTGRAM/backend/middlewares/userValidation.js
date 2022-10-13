// Entregara tudo que vem no corpo da requisição
const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        // verifica se o dado passado é uma string se não for retornamos uma mensagem
        body("name")
            .isString()
            .withMessage("O nome é obrigatório!")
            .isLength({ min: 3 })
            .withMessage("O nome precisa ter no minimo 3 caracteres."),

        body("email")
            .isString()
            .withMessage("O e-mail é obrigatório")
            .isEmail()
            .withMessage("Insira um e-mail válido"), 
 
        body("password")
            .isString()
            .withMessage("A senha é obrigatório")
            .isLength({ min: 5 })
            .withMessage("A senha precisa ter no minimo 5 caracteres"), 

        body("confirmpassword")
            .isString()
            .withMessage("A confirmação de senha é obrigatório")
            .custom((value, { req }) => {
                if(value != req.body.password) {
                    throw new Error("As senhas não são iguais")
                }
                return true

            }) 
 
    ]
}

const loginValidation = () => {
    return [
        body("email")
        .isString()
        .withMessage("O e-mail é obrigatório")
        .isEmail()
        .withMessage("Insira um email válido."),
        body("password")
        .isString() 
        .withMessage("A senha é obrigatória")
    ]
}
const userUpdateValidation = () => {

    return [
        body("name")
        .optional()
        .isLength({min:3})
        .withMessage("O nome precisa de pelo menos 3 caracteres."),
        body("password")
        .optional()
        .isLength({min:5})
        .withMessage("A senha precisa ter no minimo 5 caracteres"),
    ]
}

module.exports = { userCreateValidation, loginValidation, userUpdateValidation }