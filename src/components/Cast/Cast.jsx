import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { fetchCredits } from '../api'
import { ImImage } from "react-icons/im";
import {CastContainer, List, Item} from "./Cast.styled"
 

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
    }, [movieId])

    

    return (
        <CastContainer>
            <List>
                {
                    cast.map(({id, profile_path, name, character}) =>
                        <Item key={id}>
                            {profile_path ? (
                                <img src={`https://image.tmdb.org/t/p/w92/${profile_path}`} alt={name} />
                            ) : (
                                <ImImage size={130} fill={'grey'} /> 
                            )}
                            <p>{name}</p>
                            <p>Character: {character}</p>
                    
                </Item>)
                }
            </List>
    </CastContainer>)
}

