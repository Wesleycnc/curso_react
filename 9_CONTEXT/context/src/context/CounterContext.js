// 1 - criar context
import {createContext, useState} from 'react'

export const CounterContext = createContext()

// 2 - criar provider 
export const CounterContextProvider = ({children}) => {

    // criando o contexto que será usados nos componentes
    const [counter, setCounter] = useState(5)

    // 
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
        {children}
        </CounterContext.Provider>
    )
}