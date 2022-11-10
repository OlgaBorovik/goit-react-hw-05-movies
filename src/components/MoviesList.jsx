import {Link} from "react-router-dom"

export function MoviesList({ moviesList }) {
    return (
        <ul>
            {
                moviesList.map(({id, title, name, poster_path}) =>
                    <li key={id}>
                        <Link to={`/movies/${id}`}>
                            <img src={`https://image.tmdb.org/t/p/w45/${poster_path}`} alt=""></img>
                            {title}
                            {name}
                        </Link>
                    </li>
                )
            }
        </ul >
    )
}