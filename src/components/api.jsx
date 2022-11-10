import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3/"
const API_KEY = '44ea7036c70ee26ccb53a0fb67f71638';

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/all/day?api_key=44ea7036c70ee26ccb53a0fb67f71638`)
    return response.data
}


export const fetchSearchMovie = async (query) => {
  const response = await axios.get(`search/keyword?api_key=${API_KEY}&query=${query}`)
  return response.data
}

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`)
  return response.data
}

/*
https://api.themoviedb.org/3/search/keyword?api_key=44ea7036c70ee26ccb53a0fb67f71638&query=batman&page=1*/

/*https://api.themoviedb.org/3/movie/114463?api_key=44ea7036c70ee26ccb53a0fb67f71638&language=en-US*/

/*https://api.themoviedb.org/3/movie/550/reviews?api_key=44ea7036c70ee26ccb53a0fb67f71638&language=en-US&page=1*/
/*
https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=44ea7036c70ee26ccb53a0fb67f71638&language=en-US*/

/*export const fetchBreeds = async () => {
  const response = await axios.get('/breeds');
  return response.data;
};

export const fetchDogByBreed = async (breedId) => {
  const response = await axios.get('/images/search', {
    params: { breed_id: breedId },
  });
  return response.data[0];
};*/