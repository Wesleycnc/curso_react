import './App.css';
import CarDetails from './components/CarDetails';


function App() {
  const cars = [
    {id: 1, km: 17000, brand: 'FIAT', year: 2010 },
    {id: 2, km: 16000, brand: 'Chevrolet', year: 2015 },
    {id: 3, km: 0, brand: 'Ford', year: 2022 },
  ]
  return (
    <div className="App">
     <h1 className='title'>Exercicio de CSS</h1> 
      {cars.map((car) => (
        <CarDetails km={car.km} brand={car.brand} year={car.year} />
      ))}

   
    </div>
  );
}

export default App;
