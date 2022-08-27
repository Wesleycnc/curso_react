// Previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado, podemos tranformar o valor antigo em um novo, é muito utilizado para modificar listas.

import { useState } from "react"

const ListRender = () => {
    // Dado tipo de lista passado no useState
    const [list] = useState(['Matheus', 'Wesley', 'Pedro']);

    const [users, setUsers] = useState([
        {id: 1, name: 'wesley', age: 19},
        {id: 2, name: 'Pedro', age: 29},
        {id: 3, name: 'João', age: 30},
    ])

    const deleteRandom = () => {
        // Pegar o id aleatório
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar usuário</button>
    </div>
  )
}

export default ListRender