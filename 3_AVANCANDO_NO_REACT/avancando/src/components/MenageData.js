/* useState é um dos hooks mais utilizados, e é utilizado para gerenciar o estado de algum dado */

import {useState} from 'react'

const MenageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(15);
    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variável</button>
            </div>
            <div>
                <p>Valor:{number}</p>
                <button onClick={() => setNumber (25)}>Mudar state</button>
            </div>
        </div>
    )
}

export default MenageData