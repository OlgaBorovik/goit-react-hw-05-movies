// import { Container } from "components/Container/Container"
import { useLocation } from "react-router-dom"
import {Title, MovieCardContainer, Card, Image, Link} from './MovieCard.styled'

export const MovieCard = ({ movie }) => {
    const location = useLocation()
    const { title, name, poster_path, overview, vote_average, tagline, genres=[] } = movie
    const userScore = Math.round(vote_average * 10)

    return(
        <MovieCardContainer>
            <Title>{title} {name}</Title>
            <Card>
                <Image src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={tagline} />
                <div>
                    <p>User score: {userScore} %</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <p>{genres.map(genre => genre.name).join(', ')}</p>
                </div>
                
            </Card>
            

            
            <h2>Additional information</h2>
            <Link to={`cast`} state={location.state}>Cast</Link>
            <Link to={`reviews`} state={location.state}>Reviews</Link>
        </MovieCardContainer>
    )
}