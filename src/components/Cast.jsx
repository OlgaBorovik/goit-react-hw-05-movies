import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { fetchCredits} from '../components/api'
 

export const Cast = () => {

    const {movieId} = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        
        const controller = new AbortController()
        async function fetchCast() {
            try {
                const response = await fetchCredits(movieId, { signal: controller.signal, })
                console.log([...response.cast])
                setCast([...response.cast].slice(0, 10))
                
            }
            catch (error) {
                console.log(error.message)
            }
        }
        fetchCast()
        return () => { controller.abort() }
        // eslint-disable-next-line
    }, [])

    

    return (
        <div>
            <p>Cast</p>
            <ul>
                {
                    cast.map(({id, profile_path, name, character}) =>
                        <li key={id}>
                            <img src={`https://image.tmdb.org/t/p/w45/${profile_path}`} alt=""></img>
                            <p>{name}</p>
                            <p>Character: {character}</p>
                    
                </li>)
                }
            </ul>
    </div>)
}