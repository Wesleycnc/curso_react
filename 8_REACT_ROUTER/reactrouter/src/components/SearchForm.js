import {useNavigate} from 'react-router-dom'

import {useState} from 'react'

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmite = (e) => {
        // para não recarregar a pagina quando o usuario clicar no botão
        e.preventDefault()

        navigate('/search?q=' + query)

    }
  return (
    <form onSubmit={handleSubmite}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm