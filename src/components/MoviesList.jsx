import {Link, useLocation} from "react-router-dom"

export function MoviesList({ moviesList }) {
    const location = useLocation()
    return (
        <ul>
            {
                moviesList.map(({id, title, name, poster_path}) =>
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{from: location}}>
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