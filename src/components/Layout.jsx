import { Outlet, Link } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                {/* <Link to="*">NotFound</Link> */}
            </nav>   
         <Outlet />   
        </div>
        
    )
}


