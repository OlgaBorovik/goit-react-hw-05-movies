import { useEffect, useState } from "react"
import { fetchSearchMovie } from "../components/api"
import Searchbar from "../components/SearchBar/SearchBar"
import { Outlet, useSearchParams } from "react-router-dom"
import { MoviesList } from "../components/MovieList/MoviesList"
import { Container } from "../components/Container/Container"

export const Movies = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? ""
    
    console.log(query)
    
    const handleFormSubmit = query => {
        setMovies([])
        setSearchParams(query !== '' ? { query: query } : '')
    }
    
    useEffect(() => {
        if (query === '') {
            return
        } 
        
        const controller = new AbortController()
        
            async function searchMovie() {
            try {
                const response = await fetchSearchMovie((query), { signal: controller.signal, })
                if (response.data.results.length === 0) {
                    alert('Sorry, film not found. Please, try again')
                }
                setMovies([...response.data.results])
            }
            catch (error) {
                console.log(error.message)
            }
        }
        searchMovie()
        return () => { controller.abort() }
        }, [query])

    return (
        <Container>
            <Searchbar onSubmit={handleFormSubmit}  />
            {movies && <MoviesList moviesList={movies} /> }
            <Outlet/>
        </Container>
    )
}

