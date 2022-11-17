import { useEffect } from "react"
import { useState } from "react"
import { MoviesList } from '../components/MovieList/MoviesList'
import { Outlet } from "react-router-dom"
import { fetchTrendingMovies } from "../components/api"
import { Container } from "../components/Container/Container"
import{ Title} from "../components/MovieList/MovieList.styled"


const Home = () => {
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
        <Container>
        <Title>Trending today</Title>
            <MoviesList moviesList={movies} />
            <Outlet/>
        </Container>
    )
}

export default Home