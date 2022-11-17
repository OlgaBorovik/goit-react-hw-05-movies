import { Outlet} from "react-router-dom"
import { Header, Link } from './Layout.styled'
import {Container} from '../Container/Container'
import { Suspense } from "react"

export const Layout = () => {
    return (
        <Container>
            <Header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                {/* <Link to="*">NotFound</Link> */}
            </nav>   
            </Header>    
            <Suspense fallback={null}>
                <Outlet /> 
        </Suspense>
           
        </Container>
        
        
        
    )
}


