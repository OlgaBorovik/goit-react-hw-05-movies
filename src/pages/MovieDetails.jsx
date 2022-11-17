import { useEffect } from "react"
import { useState } from "react"
import { Outlet, useParams, useLocation } from "react-router-dom"
import { fetchMovieById } from "../components/api"
import { MovieCard } from '../components/MovieCard/MovieCard'
import { Link, Notification } from "../components/MovieCard/MovieCard.styled"

const MovieDetails = () => {
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
            {error && <Notification>Sorry, the page not found</Notification>}
            {!error && movie && <MovieCard movie={movie} />}
            <Outlet />
            </div>
    )
}

export default MovieDetails
