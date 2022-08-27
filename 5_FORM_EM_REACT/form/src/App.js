import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
        <h2>Forms</h2>
        <MyForm user={{name: 'josias', email:'josias@gmail.com', bio: 'Eu sou programador', role: 'editor'}}/>
    </div>
  );
}

export default App;
