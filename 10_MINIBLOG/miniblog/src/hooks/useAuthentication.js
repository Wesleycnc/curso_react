import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // cancelar as ações futuras dos componentes
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()


    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }


    // criar usário 
    const createUser = async (data) => {
        // Checar se está cancelado
        checkIfIsCancelled()

        // Se não tiver, usar o loading como true
        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })


            setLoading(false)

            return user

        } catch (error) {

            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage

            if (error.message.includes('Password')) {
                systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres.'
            } else if (error.message.includes('email-already')) {
                systemErrorMessage = 'E-mail já cadastrado.'
            } else {
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
            }
            
            setLoading(false)
            setError(systemErrorMessage)
        }


    }

    // Sair do sistema
    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    // entrar no sistema
    const login = async(data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            let systemErrorMessage

            if (error.message.includes('user-not-found')){
                systemErrorMessage = 'Usuário não encontrado.'


            } else if(error.message.includes('wrong-password')) {
                systemErrorMessage = 'senha incorreta.'
            } else {
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
            }

            setError(systemErrorMessage)
            setLoading(false)
            
        }

    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}