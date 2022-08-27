// props é um valor atribuido direto no componente 'Pai'. Para ser renderizado basta colocar props como objeto na função depois em {} colocar props junto com o valor que foi atribuido no componente
const ShowUserName = (props) => {
  return (
    <div>
        <h2>O nome do usuario: {props.name}</h2>
    </div>
  )
}

export default ShowUserName