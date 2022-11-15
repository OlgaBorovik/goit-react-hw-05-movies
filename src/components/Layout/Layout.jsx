import { Outlet} from "react-router-dom"
import { Header, Link} from './Layout.styled'

export const Layout = () => {
    return (
        <Header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                {/* <Link to="*">NotFound</Link> */}
            </nav>   
         <Outlet />   
        </Header>
        
    )
}


