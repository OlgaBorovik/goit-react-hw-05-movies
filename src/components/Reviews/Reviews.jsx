import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { fetchReviewsById } from '../api'
import { NoReviews } from './Reviews.styled'





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
                
            }
            catch (error) {
                console.log(error.message)
            }
        }
        fetchReviews()
        return () => { controller.abort() }
        
    }, [movieId])


    return (
        <div>
            {
                reviews.length === 0 ? <NoReviews>No reviews</NoReviews> :
            
            <ul>
                {
                    reviews.map(({id, author, content}) =>
                        <li key={id}>
                            <h3>Author: {author} </h3>
                            <p>{content}</p>
                        </li>)
                }
            </ul>
            }
        </div>
    )
}

