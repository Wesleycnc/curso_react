import  Fragment  from './components/Fragment';
import './App.css';
import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import MenageData from './components/MenageData';
import ShowUserName from './components/ShowUserName';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
   const cars = [
    /* Lista de Objetos */
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0},
    {id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 31000},
    {id: 3, brand: 'Fiat', color: 'Vermelho', newCar: false, km: 10000}
   ]
   const users = [
    {id: 1, name: 'Wesley', age: 17, profession: 'Progrmador', driver:false },
    {id: 2, name: 'Cleitin', age: 30, profession: 'Borracheiro', driver:true },
    {id: 3, name: 'Pedrin', age: 40, profession: 'Motoboy', driver:true }
   ]


   function showMessage() {
      console.log("Evento do componente pai!");
   }

   const [message, setMessage] = useState('')

   const handleMessage = (msg) => {
    setMessage(msg)
   }



  return (

    <div className="App">

     

      <h1>Avançando no React</h1>
    {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <MenageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name='Wesley'/>
      {/* destructuring props */}
      <CarDetails brand='VM' km={100000} color='Azul' newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand='Ford' color='Vermelha' km={0} newCar={true}/>

      <CarDetails brand='Fiat' color='Branco' km={4500} newCar={false}/>
      {/* Loop em array de objetos, podemos passar os dados para uma variavel depois fazer um loop chamando a variavel e chamando o componente CarDetails. Chamando o CarDetails vai fazer com que toda a função que foram atribuidas nos outros metodos sejam aplicadas nesse */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      {/* Fragment, serve como elemento pai, não alterando a estrutura do HTML */}
      <Fragment/>
      {/* Children recurso utilizado para quando um componente precisa tem jsx dentro dele */}
      <Container myValue='testing'>
        <p>E este é o conteúdo</p>
      </Container>
      {/* Executar função, conseguimos passar funções do componente filho para o componente pai. por meio de uma prop passo a função e no componente pai recebo a função da prop e coloco onde eu quero q ela execute. */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Exercicio */}
     
      {users.map((user) => (
      <UserDetails key={user.id} name={user.name} age={user.age} profession={user.profession} 
      driver={user.driver}/>
      ))}
    
    </div>
  );
}

export default App;
