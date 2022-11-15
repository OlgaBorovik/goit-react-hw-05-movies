import { Link, useLocation } from "react-router-dom"

export const MovieCard = ({ movie }) => {
    const location = useLocation()
    const { title, name, poster_path, overview, vote_average, tagline, genres=[] } = movie
    const userScore = Math.round(vote_average * 10)

    return(
        <div>
            <h1>{title} {name}</h1>
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={tagline} />
            <p>User score: {userScore} %</p>
            <h2>Overview</h2>
            <p>{overview}</p>

            <h2>Genres</h2>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
            <p>Additional information</p>
            <Link to={`cast`} state={location.state}>Cast</Link>
            <Link to={`reviews`} state={location.state}>Reviews</Link>
        </div>
    )
}