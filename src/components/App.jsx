import { Routes, Route, Link } from "react-router-dom"
import { Home } from '../pages/Home'
import { Movies } from '../pages/Movies'
import { MovieDetails } from './MovieDetails'
import { Cast } from './Cast'
import { Reviews } from './Reviews'
// import { NotFound } from './NotFound'
import {Layout} from './Layout'



export const App = () => {
  return (
    <div>
      <nav>
        <Link to="home">Home</Link>
        <Link to="/movies">Movies</Link>
        {/* <Link to="*">NotFound</Link> */}
      </nav>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="movies/:movieId/cast" element={<Cast />} />
                <Route path="movies/:movieId/reviews" element={<Reviews />} />
                {/* <Route path="*" element={<NotFound />} /> */}
          </Route> 
          
        </Route>
          
           
            
      </Routes>
    </div>
  );
};


/*'/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
'/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
'/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
/movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
/movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.*/