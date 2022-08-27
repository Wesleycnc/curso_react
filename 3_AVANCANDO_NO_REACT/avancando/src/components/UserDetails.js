const UserDetails = ({name, age, profession, driver}) => {
  return (
    
    <div>
        <h1>Dados do usuário</h1>
        <ul>
            <li>O nome do cliente é {name} tem {age} anos e é {profession}</li>


        </ul>
        {driver && <p>Pode tirar carteira de motorista</p>}

        {!driver && <p>Não pode tirar carteira de motorista</p>}
    </div>
  )
}

export default UserDetails