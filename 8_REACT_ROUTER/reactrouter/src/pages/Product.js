import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // 4 - rota dinamica
    const {id} = useParams();

    const url = 'http://localhost:3000/products/' + id

    // 5 - carregamento dado individual 
    const {data: product, loading, error } = useFetch(url)
  return (
    <>
    <p>ID do produto: {id}</p>
    {error && <p>Ocorreu um erro....</p>}
    {loading && <p>Carregando...</p>}
    {product && (
        <div>
            <h1>{product.name}</h1>
            <h1>R${product.price}</h1>
            {/* 6 - nested routes */}
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
    )}
    </>
  )
}

export default Product