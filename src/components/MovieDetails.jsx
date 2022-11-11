import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import {fetchMovieById} from "../components/api"

export const MovieDetails = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})    

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
            }
        }
        fetchMovieDetails()
        return () => { controller.abort() }
        
    }, [movieId])
    
    const { title, name, poster_path, overview, vote_average, tagline } = movie
    // console.log(genres.map(genre => genre.name).join(', '))
    // const genresList = genres.map(genre => genre.name).join(', ')
    const userScore = Math.round(vote_average * 10)
    
    return (
        
        <div>
            <h1>{title} {name}</h1>
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={tagline} />
            <p>User score: {userScore} %</p>
            <h2>Overview</h2>
            <p>{overview}</p>

            <h2>Genres</h2>
            {/* <p>{genres.map(genre => genre.name).join(', ')}</p> */}
        </div>
    )
}


