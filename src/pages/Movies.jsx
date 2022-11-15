import { useEffect, useState } from "react"
import { fetchSearchMovie } from "../components/api"
import Searchbar from "../components/SearchBar"
import { Outlet, useSearchParams } from "react-router-dom"
import {MoviesList} from "../components/MoviesList"

export const Movies = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query') 
    console.log(searchParams)
    console.log(searchQuery)
    
    const handleFormSubmit = query => {
        setMovies([])
        setQuery(searchQuery)
        setSearchParams(query !== '' ? { query: query } : {})
        console.log(query)
        //value !== '' ? { filter: value } : {}
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
    
        
        }
        
        , [query])

    return (
        <div>
        <Searchbar onSubmit={handleFormSubmit}  />
        <MoviesList moviesList={movies} />
            <Outlet/>
        </div>
    )
}

