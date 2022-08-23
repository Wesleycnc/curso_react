// components
import FirstComponents from './components/FirstComponents'
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Chellenge from './components/Challenge';

//styles / css
import './App.css';





function App() {
  return (
    <div className="App">
        <h1>Fundamentos React</h1>
        <p>Meu texto</p>
        <FirstComponents />
        <TemplateExpressions />
        <MyComponent/>
        <Events/>
        <Chellenge/>
    </div>
  );
}

export default App;
