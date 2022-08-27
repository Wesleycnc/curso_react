import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState('Matheus')
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {/* Condicional simples para verificar se x é verdadeiro com &&(and) para verificar se x é falso basta colocar ! para inverter a condicional */}
            {x && <p>Se x for true, sim!</p>}

            {!x && <p>Agora x é falso</p>}


            <h1>If ternário</h1>
            {/* Condicional mais complexa como mostra no exemplo de baixo, se o nome for igual a João ele vai exibir a div com o paragráfo com 'O nome é joão' se não for ele vai retornar uma div com um parágrafo 'Nome não encontrado'  */}
            {name === 'João' ? (
                <div>
                    <p>O nome é joão</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
            {/* Aqui usamos o metodo de mudar o valor que foi dado na origem. Criando uma arrow function com setName */}
            <button onClick={() => setName('João')}>Clique Aqui</button>
        </div>
    )
}

export default ConditionalRender