import './App.css';

import { useState, useEffect } from 'react';

// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])

  //4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url)


  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - resgatando dados
  /*  useEffect(() => {
     async function fetchData() {
       const res = await fetch(url)
 
       const data = await res.json()
 
       setProducts(data)
     }
 
     fetchData()
   }, []); */

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }
    // Requisição 
    /*     const res = await fetch(url, {
          // Aqui definimos como vai ser a requisição
          method: "POST",
          // Transmitir na requisição qual tipo de dado estamos manipulando no caso é o json
          headers: {
            'Content-Type': 'application/json'
          },
          // precisamos que o corpo da requisição vá como json 
          body: JSON.stringify(products),
        });
    
        // 3 - carregamento dinâmico
        // Transformar res em um objeto javascript
        const addedProduct = await res.json()
    
        setProducts((prevProducts) => [...prevProducts, addedProduct]) */

    // 5 - refatorando post
    httpConfig(product, "POST")

    // Limpar os inputs após o envio
    setName('')
    setPrice('')

  }

  // 8 - deafio 6 
  const handleRemove = (id) => {
    httpConfig(id, 'DELETE')
  }


  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)}>Remover</button>
          </li>
        
        ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - state de loading no post */}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
