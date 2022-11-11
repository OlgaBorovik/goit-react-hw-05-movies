import { useEffect, useState } from "react"
import { fetchSearchMovie } from "../components/api"
import Searchbar from "../components/SearchBar"
import { Link, Outlet } from "react-router-dom"

export const Movies = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const handleFormSubmit = query => {
    setMovies([])
    setQuery(query)
    }
    
    useEffect(() => {
        if (query === '') {
            return
        }
        const controller = new AbortController()
        async function searchMovie() {
            try {
                const response = await fetchSearchMovie((query),{signal: controller.signal,})
                setMovies([...response.results])
            }
            catch (error) {
                console.log(error.message)
            }
        }
        searchMovie()
        return () => { controller.abort() }
    }, [query])

    return (
        <div>
        <Searchbar onSubmit={handleFormSubmit} />
        <ul>
            {
                movies.map(({id, title, name}) =>
                    <li key={id}>
                        <Link to={`${id}`}>
                            {title}
                            {name}
                        </Link>
                    </li>
                )
            }
            </ul >
            <Outlet/>
        </div>
    )
}
