import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { fetchReviewsById} from '../components/api'




export const Reviews = () => {
const {movieId} = useParams()
    const [reviews, setReviews] = useState([])

useEffect(() => {
        
        const controller = new AbortController()
        async function fetchReviews() {
            try {
                const response = await fetchReviewsById(movieId, { signal: controller.signal, })
                console.log(response.results)
                setReviews([...response.results])
                console.log(reviews)
                
            }
            catch (error) {
                console.log(error.message)
            }
        }
        fetchReviews()
        return () => { controller.abort() }
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            
            <ul>
                {
                    reviews.map(({id, author, content}) =>
                        <li key={id}>
                            <p>Author: {author} </p>
                            <p>{ content}</p>
                        </li>)
                }
            </ul>
        </div>
    )
}

/*
 

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
}*/