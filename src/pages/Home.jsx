import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { MoviesList } from '../components/MoviesList'
import { Outlet} from "react-router-dom"
// import {fetchTrendingMovies} from "../components/api"


export const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=44ea7036c70ee26ccb53a0fb67f71638`)
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