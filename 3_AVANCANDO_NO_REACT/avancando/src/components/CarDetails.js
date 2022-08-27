// props destructuring ele permite que você quando for chamar a variavel não precise colocar o props. no metodo destructuring podemos colocar nos parenteses os ({}) objetos que foram criados no componente pai. E podemos atribuir vários valores no componente pai des de que quando for chamado os nomes dos valores sejam iguais.

// Podemos reaproveitar o componente mudando só os valores.

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é novo</p>}

        {!newCar && <p>Este carro é usado!</p>}
    </div>
  )
}

export default CarDetails