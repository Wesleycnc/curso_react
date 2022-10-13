// O useEffect é usado para controlar quantas vezes algo acontece 



import { useEffect, useState } from "react"

export const HookUseEffect = () => {
    // 1 - useEffect, sem dependencia
    useEffect(() => {
        console.log("estou sendo executado");
    })

    const [number, setNumber] = useState(1)

    const changeSomenthing = () => {
        setNumber(number + 1)
    }

    // 2 - array de deps. vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez");
    }, [])

    // 3 - item no array de dps
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber > 0) {
            console.log("Sou executado apenas quando o anotherNumber muda!");
        }
    }, [anotherNumber])

    // 4 - cleanup do useEffect
    useEffect(() => {

/*         const timer = setTimeout(() => {
            console.log("Hello world");

            setAnotherNumber(anotherNumber + 1)
        }, 2000)
        return () => clearTimeout(timer)  */
    }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomenthing}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
        <hr />
    </div>
  )
}
