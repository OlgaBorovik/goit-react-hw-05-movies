import { useEffect } from "react"
import { useState } from "react"
import { MoviesList } from '../components/MoviesList'
import { Outlet } from "react-router-dom"
import {fetchTrendingMovies} from "../components/api"


export const Home = () => {
    const [movies, setMovies] = useState([])
    

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetchTrendingMovies()
                console.log(response.data.results)
                setMovies([...response.data.results])
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchMovies()
        
    },[])
    
       
    return (
        <div>
        <h1>Trending today</h1>
            <MoviesList moviesList={movies} />
            <Outlet/>
        </div>
    )
}