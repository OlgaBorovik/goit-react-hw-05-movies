import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { fetchCredits } from '../components/api'
import { ImImage } from "react-icons/im";
 

export const Cast = () => {

    const {movieId} = useParams()
    const [cast, setCast] = useState([])
// const location = useLocation()



    useEffect(() => {
        
        const controller = new AbortController()
        async function fetchCast() {
            try {
                const response = await fetchCredits(movieId, { signal: controller.signal, })
                console.log([...response.cast])
                setCast([...response.cast])
                
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
            <ul>
                {
                    cast.map(({id, profile_path, name, character}) =>
                        <li key={id}>
                            <img src={profile_path === null
                                ? <ImImage size={50} />
                                : `https://image.tmdb.org/t/p/w45/${profile_path}`} alt={name}></img>
                            <p>{name}</p>
                            <p>Character: {character}</p>
                    
                </li>)
                }
            </ul>
    </div>)
}

