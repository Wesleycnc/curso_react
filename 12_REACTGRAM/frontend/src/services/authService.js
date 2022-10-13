import { api, requestConfig } from "../utils/config"

// Registrar usuário, receber dados do usuário
const register = async (data) => {
    // Criar a configuração de requisição 
    const config = requestConfig("POST", data)

    //Aqui faremos um trycatch para ver se deu algum erro na requição
    try {

        const res = await fetch(api + "/users/register", config).then((res) => res.json()).catch((err) => err)


        // Se recerbemos um usuário salvaremos ele no localStorage
        if (res) {
            localStorage.setItem("user", JSON.stringify(res))
        }
        return res
    } catch (error) {
        console.log(error);
    }
}

// Sair
const logout = () => {
    localStorage.removeItem("user")
}

// Login
const login = async (data) => {

    const config = requestConfig("POST", data)

    try {
        const res = await fetch(api + "/users/login", config)
            .then((res) => res.json())
            .catch((err) => err)

        if (res) {
            localStorage.setItem("user", JSON.stringify(res))
        }

        return res;
    } catch (error) {
        console.log(error);
    }

}

const authService = {
    register,
    logout,
    login
}

export default authService
