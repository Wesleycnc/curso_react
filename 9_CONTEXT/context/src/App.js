import { BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/Home'
import Products from './pages/Products'
import Home from './pages/Home'


import Navbar from './components/Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      {/* 2 - links com react router */}
      <Navbar/>
      {/* 9 - search */}
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
