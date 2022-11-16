import { Link, useLocation } from "react-router-dom"
import { List, Item, Image, Text } from "./MovieList.styled"
import {Container} from "../Container/Container"

export function MoviesList({ moviesList }) {
    const location = useLocation()
    return (
        <Container>
        <List>
            {
                moviesList.map(({id, title, name, poster_path}) =>
                    <Item key={id}>
                        <Link to={`/movies/${id}`} state={{from: location}}>
                            <Image src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt=""></Image>
                            <Text>{title} {name}</Text>
                            
                            
                        </Link>
                    </Item>
                )
            }
        </List >  
        </Container>
        
    )
}