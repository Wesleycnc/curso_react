import styles from './CarDetails.module.css'


const CarDetails = ({km, brand, year}) => {
  return ( 
    <div>
        <h1 className={styles.header_car}>Detalhes do Carro</h1>
        <ul>
            <li>Marca: {brand} Kilometro rodados: {km} Ano: {year}</li>
        </ul>
    </div>

  )
}

export default CarDetails