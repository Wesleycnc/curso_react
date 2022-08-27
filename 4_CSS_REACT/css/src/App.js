
import {useState} from 'react'
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';



function App() {
  const n = 9
  const [name]=useState('Wesley')
  const redTitle = false
  return (
    <div className="App">


      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>Este paragrafo do app.js</p>
      {/* Inline CSS, sempre que for inserir css inline, abrir duas chaves para indentificar como objeto. e sempre que o nome tiver traço colocar junto com letra maiuscula */}
      <p style={{color: 'blue', padding: '25px', borderTop: '2px solid red'}}>
        Este elemento foi estilizado de forma inline 
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinamico</h2>

      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinamico</h2>

      <h2 style={name === 'Wesley' ? ({color: 'green', backgroundColor: '#000'}) : null}>Teste nome</h2>
      {/* Classe dinamica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>
      {/* CSS Modules */}
      <Title/>
    </div>
  );
}

export default App;
