const User = require("../models/User")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

const authGuard = async (req, res, next) => {
    // Aqui pegamos o authorization da requisição
    const authHeader = req.headers["authorization"]
    // Aqui verificamos se o authHeader existe, e em seguida passamos o split para separarmos a parte não precisamos do token que é o "beader".
    const token = authHeader && authHeader.split(" ")[1]

    // Checar se o cabeçario tem o token 
    if(!token) return res.status(401).json({errors: ["Acesso negado!"]})
    // Checar se o token é valido
    try {
        // Criamos uma variável que verifica se o token é igual a do jwtsecret
        const verified = jwt.verify(token, jwtSecret)
        // Aqui pegamos o usuário que vem da requisição menos a senha que não é necessário
        req.user = await User.findById(verified.id).select("-password")

        next()
        
    } catch (erros) {
        res.status(401).json({errors: ["token inválido"]})
    }

}

module.exports = authGuard