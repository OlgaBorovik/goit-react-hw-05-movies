import { useEffect } from "react"
import { useState } from "react"
import { Outlet, useParams, useLocation } from "react-router-dom"
import { fetchMovieById } from "../components/api"
import { MovieCard } from '../components/MovieCard/MovieCard'
import { Link } from "../components/MovieCard/MovieCard.styled"

export const MovieDetails = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})  
    const [error, serError] = useState(null)
    const location = useLocation()


    useEffect(() => {
        
        const controller = new AbortController()
        async function fetchMovieDetails() {
            try {
                const response = await fetchMovieById(movieId, { signal: controller.signal, })
                console.log(response)
                setMovie(response)
                
            }
            catch (error) {
                console.log(error.message)
                serError(error)
            }
        }
        fetchMovieDetails()
        return () => { controller.abort() }
        
    }, [movieId])
    
    
    
    const backLinkHref = location.state?.from ?? '/'
    return (
        <div>
            <Link to={backLinkHref}>Go back</Link>
            {error && <div>Sorry, page not found</div>}
            {!error && movie && <MovieCard movie={movie} />}
            <Outlet />
            </div>
    )
}


